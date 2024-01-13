import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEffect, useState } from "react";
import { redTheme } from "./GarageBlockNote";

export default function Garage() {
    const [blocks, setBlocks] = useState(null);
    
    const editor = useBlockNote({
        editable: true,
        initialContent: [],
        onEditorReady: (editor) => console.log('Editor is ready!', editor),
        onEditorContentChange: (editor) =>
            setBlocks(editor.topLevelBlocks),
        domAttributes: {
            editor: {
                class: "min-h-[calc(100vh-152px)] w-full"
            },
            blockGroup: {
                class: "mx-16 my-16"
            },
            blockContainer: {
                class: "",
            },
        },
    });
    return (
        <>
            <div className="mainContainer bg-skin-bg100 flex flex-col items-center justify-center">
                <input className="header rounded-lg shadow-2xl shadow-blue-900 text-center text-skin-text100 text-6xl w-5/6 font-bold h-32 py-5 my-3 focus:border-transparent bg-skin-bg200 mx-auto " placeholder="Main heading ..."></input>
                <div className="dummy2 flex justify-center borde w-full ">
                    <div className="dummy w-full flex items-center justify-center  ">
                        <BlockNoteView editor={editor} theme={redTheme} className="flex justify-center w-[95%]" />
                    </div>
                </div>
            </div>
        </>
    )
}