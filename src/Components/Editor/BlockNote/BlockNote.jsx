import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEffect, useState, useRef } from "react";
import { redTheme } from "./GarageBlockNote";
import useAuthentication from '../../Hook/useAuthenticate';
import { useNavigate } from 'react-router-dom';
import {twop0, onep0} from '../../../apiConfig'

const data1 = []

export default function BlockNote() {
    const navigate = useNavigate()
    const [heading, setHeading] = useState("")
    const [blocks, setBlocks] = useState([]);
    const ejInstance = useRef();
    const [postId, setPostId] = useState(null)
    const { authenticated, loading, userObj } = useAuthentication()

    const editor = useBlockNote({
        editable: true,
        initialContent: data1,
        onEditorReady: (editor) => {
            console.log('Editor is ready!', editor)
        },
        onEditorContentChange: (editor) => {
            setBlocks(editor.topLevelBlocks)                                                            // Why Blocks not getting updated? But if used editor.topLevelBlocks directly everything works fine
        },
        domAttributes: {
            editor: {
                class: "min-h-[calc(100vh-152px)] w-full"
            },
            blockGroup: {
                class: "lg:mx-16 mx-1 my-16"
            },
            blockContainer: {
                class: "",
            },
        },
    });
    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            saveChangesToServer(editor.topLevelBlocks,heading);
        }
    };
    const saveChangesToServer = async (content, heading) => {
        if (authenticated !== true) {
            console.log(authenticated);
            return navigate("/signin");
        }
    
        try {
            console.log(heading);
            const data = {heading: heading, content:content}
            const postEndpoint = postId === null ? 'create-post' : `update-post`;
            const postBody = postId === null ? { data: data, userId: userObj.userId } : { postId: postId, data: data, userId: userObj.userId };
    
            const response = await fetch(`${twop0}/${postEndpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postBody),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.json();
    
            if (postId === null) {
                setPostId(responseData.postId);
    
                const updateResponse = await fetch(`${onep0}/update-user`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId: userObj.userId, private_post_id: responseData.postId }),
                });
    
                const updateData = await updateResponse.json();
                console.log('User update response:', updateData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    useEffect(() => {                           // This balloon is the event listener, so it should update its variables whenever Auth is checked, postId ????? Why after updating with something new, and not refreshing the page, the ctrl+s does not work until we refresh? Is it becasue useEffects gets deleted?
        if (ejInstance.current !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [authenticated, postId,heading,editor.topLevelBlocks,heading]);          // this is the most important step, specially in eventListeners

    return (
        <>
            <div className="mainContainer bg-skin-bg100 flex flex-col items-center justify-center">
                <input
                    className="header rounded-lg shadow-2xl shadow-blue-900 text-center text-skin-text100 text-6xl w-5/6 font-bold h-32 py-5 my-3 bg-skin-bg200 mx-auto"
                    placeholder="Main heading ..."
                    value={heading}
                    onChange={e => setHeading(e.target.value)}
                />
                <div className="dummy2 flex justify-center w-full ">
                    <div className="dummy w-full flex items-center justify-center  ">
                        <BlockNoteView editor={editor} theme={redTheme} className="flex justify-center w-[99%]" />
                    </div>
                </div>
            </div>
        </>
    )
}