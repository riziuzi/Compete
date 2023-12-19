import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EditorConfig, templateData } from './EditorConfiguration';

export default function Editor() {
  const ejInstance = useRef();
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  const initEditor = () => {
    // Fetch initial data from the server

    fetchDataFromServer()
      .then((fetchedData) => {
        // If data is different from the initial data, set the initial data and create an EditorJS instance
        if (Object.keys(fetchedData).length === 0) {
          fetchedData = templateData
        }

        const editor = new EditorJS({
          ...EditorConfig,
          data: fetchedData,
          onReady: () => {
            ejInstance.current = editor;                // ???????????????????????
          },
          onChange: () => {
            // Save the editor content whenever it changes
            editor.saver.save().then((content) => {
              console.log(content);

              // Save changes to the server, but skip saving the initial data
              if (initialDataLoaded) {
                sendToServer(content);
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

  const fetchDataFromServer = () => {
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
      saveChangesToServer();
    }
  };

  const saveChangesPeriodically = () => {
    if (ejInstance.current) {
      ejInstance.current.saver.save().then((content) => {
        console.log('Periodic save:', content);
        sendToServer(content);
      });
    }
  };

  const saveChangesToServer = () => {
    if (ejInstance.current) {
      ejInstance.current.saver.save().then((content) => {
        console.log('Manual save:', content);
        sendToServer(content);
      });
    }
  };

  const sendToServer = (data) => {
    // Make an HTTP request to your server
    fetch('https://compete-server.onrender.com/api/save_notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log('Server response:', responseData);
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
    <div id='editorjs'>
    </div>
  );
}
