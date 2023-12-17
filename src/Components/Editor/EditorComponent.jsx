import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EditorConfig } from './EditorConfiguration';

const EditorComponent = ({ data }) => {
    const editorRef = useRef();

    const initEditor = () => {
        const editor = new EditorJS({
            ...EditorConfig,
            holder: 'editorjs',
            data: data || {},
            readOnly: true
        });

        editorRef.current = editor;

        return () => {
            // editorRef?.current?.destroy();
        };
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

    return <div id="editorjs"></div>;
};

export default EditorComponent;
