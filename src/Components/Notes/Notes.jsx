import React from 'react';
import EditorComponent from '../Editor/EditorComponent';

const Notes = () => {
  // Sample data (replace with your own data)
  const editorData = {
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Hello, this is Editor.js!',
        },
      },
      {
        type: 'paragraph',
        data: {
          text: 'Hello, this is Editor.js!',
        },
      },
    ],
  };

  return (
    <div className="container"><EditorComponent data={editorData} /></div>

  );
};

export default Notes;
