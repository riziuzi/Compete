import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import EditorJS from "@editorjs/editorjs";
import { EditorConfig } from './EditorConfiguration';
import useAuthentication from '../Hook/useAuthenticate';
import { useNavigate } from 'react-router-dom';

export default function Editor2() {
    const navigate = useNavigate()
    const ejInstance = useRef();
    const { authenticated, loading, userObj } = useAuthentication()
    const [postId, setPostId] = useState(null)
    const initEditor = () => {
        const editor = new EditorJS({
            ...EditorConfig,
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            onChange: async () => {
                let content = await editor.saver.save();
                console.log(content);
            }
        });
    };
    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            ejInstance.current.saver.save().then((content) => {
                saveChangesToServer(content);
            });
        }
    };
    const saveChangesToServer = (data) => {
        if (authenticated !== true) {
            console.log(authenticated)
            return navigate("/userauth");
        }
        const postEndpoint = postId === null ? 'create-post' : `update-post`;
        const postBody = postId === null ? { data: data, author_id: userObj.id } : { postId: postId, data: data, author_id: userObj.id };
        fetch(`http://localhost:3002/${postEndpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(postBody), })
            .then((response) => {
                if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`) }
                return response.json();
            })
            .then((responseData) => {
                setPostId((prev) => (responseData.postId))
                if (postId === null) {
                    fetch('http://localhost:3005/update-user', { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify({ auth_id: userObj.id, private_post_id: responseData.postId }) })         // 3001
                        .then((response) => response.json())
                        .then((updateResponse) => {
                            console.log('User update response:', updateResponse);
                        })
                        .catch((updateError) => {
                            console.error('Error updating user_collection:', updateError);
                        });
                }
            })
            .catch((error) => {
                console.error('Error sending data to the server:', error);
            });
    };

    useEffect(() => {
        if (ejInstance.current === null) {      // This balloon is the Editor initializer and it never sees any DOM updates from the main component, and only sends the data
            initEditor();
        }
        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);

    useEffect(() => {                           // This balloon is the event listener, so it should update its variables whenever Auth is checked, postId ????? Why after updating with something new, and not refreshing the page, the ctrl+s does not work until we refresh? Is it becasue useEffects gets deleted?
        if (ejInstance.current !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [authenticated, postId]);
    return (
        <div>
            <div id='editorjs'></div>
            <div>{loading ? `...Loading` : authenticated ? userObj.username : `Not Authenticated`}</div>
            <div>{postId === null ? `true` : `false`}</div>
        </div>
    )
}

