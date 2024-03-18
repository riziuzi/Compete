import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EditorConfig } from '../../Editor/EditorConfiguration';
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { redTheme } from '../../../GarageBlockNote';

const EditorComponent = ({ index, data }) => {
    console.log(data)
    const cleanData = transformData(data.content)
    const editor = useBlockNote({
        editable: false,
        initialContent: cleanData,
        onEditorReady: (editor) => {
            console.log('Editor is ready!', editor)
        },
        onEditorContentChange: (editor) => {
            console.log("Editr Chnaged?")                                              // Why Blocks not getting updated? But if used editor.topLevelBlocks directly everything works fine
        },
        domAttributes: {
            editor: {
                class: "min-h-[calc(100vh-152px)] w-full"
            },
            blockGroup: {
                class: "lg:mx-36 mx-1 my-16"
            },
            blockContainer: {
                class: "",
            },
        },
    });

    return (
        <div className="mainContainer bg-skin-bg100 flex flex-col items-center justify-center">
            <BlockNoteView editor={editor} theme={redTheme} className="flex justify-center lg:w-[95%] w-[99%]" />
        </div>
    )

};
function transformData(inputData) {
    const transformedData = inputData.map(item => {
        return {
            id: item.id || 'NoIdPresent',
            type: item.type || 'paragraph', // default is paragraph
            props: {
                textColor: item.props?.textColor || 'default',
                backgroundColor: item.props?.backgroundColor || 'default',
                textAlignment: item.props?.textAlignment || 'left',
            },
            content: item.content ? transformContent(item.content) : [],
            children: item.children ? transformData(item.children) : [],
        };
    });

    return transformedData;
}
function transformContent(content) {
    if (Array.isArray(content)) {
        return content.map(item => transformContent(item));
    } else if (content && content.type === 'tableContent') {
        return {
            type: 'tableContent',
            rows: content.rows.map(row => {
                return {
                    cells: row.cells.map(cell => transformContent(cell)),
                };
            }),
        };
    } else {
        return {
            type: content.type || 'Not supported or Empty Error!',
            text: content.text || '',
            styles: content.styles || {},
        };
    }
}
const sampleData2 = [
    {
        "id": "initialBlockId",
        "type": "image",
        "props": {
            "backgroundColor": "default",
            "textAlignment": "left",
            "url": "https://unsplash.com/photos/a-woman-working-on-a-laptop-6uAssP0vuPs",
            "caption": "",
            "width": 512
        },
        "children": []
    },
    {
        "id": "1b931231-0e0f-4413-90b7-6642c4561fa7",
        "type": "paragraph",
        "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
        },
        "content": [],
        "children": []
    }
]
const sampleData = [                                                                     // sample data, the only problem in fetching data is that stylesfield sometimes is not present in mongodb (because mongoose not able to send empty {} in styles somehow). So data pre processing needed.
    {
        id: 'initialsssBlockId',
        type: 'paragraph',
        props: {
            textColor: 'default',
            backgroundColor: 'default',
            textAlignment: 'left',
        },
        content: [
            {
                type: 'text',
                text: 'Hello000ssssss00000000000',
            },
        ],
        children: [],
    },
    {
        id: 'isnitialBlockId',
        type: 'paragraph',
        props: {
            textColor: 'default',
            backgroundColor: 'default',
            textAlignment: 'left',
        },
        content: [],
        children: [],
    },
];
export default EditorComponent;
