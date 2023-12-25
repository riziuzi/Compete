import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EditorConfig, templateData } from './EditorConfiguration';
import useAuthentication from '../Hook/useAuthenticate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Editor() {
  const navigate = useNavigate();
  const ejInstance = useRef();
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const [isNewPost, setisNewPost] = useState(true);
  const [postId, setpostId] = useState(null);
  // const { authenticated, loading, userObj } = useAuthentication();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userObj, setuserObj] = useState(null);

  const checkAuthentication = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // If there's no token, the user is not authenticated
        setAuthenticated(false);
        setLoading(false);
        return;
      }

      const response = await axios.get('http://localhost:3001/protected', {
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      });

      // If the server responds with success, the user is authenticated
      setAuthenticated(true);
      // Also set the user ID
      setuserObj(response.data.user);
    } catch (error) {
      // If the server responds with an error, the user is not authenticated
      console.error('Authentication failed:', error.response.data.message);
    } finally {
      // Set loading to false when the authentication check is complete
      setLoading(false);
    }
  };

  useEffect(async () => {
    await checkAuthentication();
    console.log(authenticated)
  }, []);

  const initEditor = () => {
    // Fetch initial data from the server
    fetchDataFromServer()
      .then((fetchedData) => {
        // If data is different from the initial data, set the initial data and create an EditorJS instance
        if (Object.keys(fetchedData).length === 0) {
          fetchedData = templateData;
        }
        const editor = new EditorJS({
          ...EditorConfig,
          data: fetchedData,
          onReady: () => {
            ejInstance.current = editor;
          },
          onChange: () => {
            // Save the editor content whenever it changes
            editor.saver.save().then((content) => {
              console.log(content);

              // Save changes to the server, but skip saving the initial data
              if (initialDataLoaded) {
                SaveChangesToServer(content);
              }
            });
          },
        });
        // Set the flag indicating that the initial data has been loaded
        setInitialDataLoaded(true);
        // Periodically save changes every two minutes
        setInterval(() => {
          saveChangesPeriodically();
        }, 120000); // 2 minutes in milliseconds
        // Listen for Ctrl+S shortcut
        window.addEventListener('keydown', handleKeyDown);
      })
      .catch((error) => {
        console.error('Error initializing editor:', error);
      });
  };

  const fetchDataFromServer = async () => {
    // Make an HTTP request to fetch initial data from the server
    return fetch('https://compete-server.onrender.com/initial-data')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error fetching initial data from the server:', error);
        return {}; // Return an empty object or handle the error accordingly
      });
  };

  const handleKeyDown = (event) => {
    // Check if Ctrl and S keys are pressed simultaneously
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault(); // Prevent the browser's default save behavior
      SaveChangesToServer();
    }
  };

  const saveChangesPeriodically = () => {
    if (ejInstance.current) {
      ejInstance.current.saver.save().then((content) => {
        console.log('Periodic save:', content);
        SaveChangesToServer(content);
      });
    }
  };

  const SaveChangesToServer = (data) => {
    console.log(authenticated)
    if (authenticated !== true) {
      console.log(authenticated)
      return navigate("/userauth");
    }

    const postEndpoint = isNewPost ? 'create-post' : `update-post`;
    const postBody = isNewPost ? { data: data, author_id: userObj.id } : { postId: postId, data: data, author_id: userObj.id };

    // Make an HTTP request to your server
    fetch(`http://localhost:3002/${postEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log('Server response:', responseData);
        if (isNewPost) {
          fetch('http://localhost:3002/update-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: userObj.id,
              postId: responseData.postId,
            }),
          })
            .then((response) => response.json())
            .then((updateResponse) => {
              console.log('User update response:', updateResponse);
              setisNewPost(false);
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
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <>
      <div><div id='editorjs'></div></div>

      <div>{loading ? '...Loading' : `${userObj?.username} and ${authenticated}` || 'Not Found'}</div>
    </>
  );
}
