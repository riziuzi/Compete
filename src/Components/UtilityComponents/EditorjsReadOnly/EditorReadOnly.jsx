import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EditorConfig } from '../../Editor/EditorConfiguration';

const EditorComponent = ({ index, data }) => {
    const editorRef = useRef();

    const initEditor = () => {
        const editor = new EditorJS({
            ...EditorConfig,
            holder: `editorjs-${index}`,
            data: data || {},
            readOnly: true,
            onReady: () => {
                editorRef.current = editor;
            },
        });
    }

    useEffect(() => {
        if (editorRef.current === null) {
            initEditor();
        }

        return () => {
            editorRef?.current?.destroy();
            editorRef.current = null;
        };
    }, [data]);

    return <div id={`editorjs-${index}`}></div>;
};

export default EditorComponent;
