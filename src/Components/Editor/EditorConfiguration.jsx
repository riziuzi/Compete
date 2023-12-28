import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import Checklist from '@editorjs/checklist'
import List from "@editorjs/list";
import LinkTool from '@editorjs/link';
// import SimpleImage from "@editorjs/simple-image";

export const templateData = {
  "time": 1609717494155,
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "Write you heading here...",
        "level": 1
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "Write you text here...",
        "level": 2
      }
    },
  ],
  "version": "2.22.0"
};

export const EditorConfig = {
  holder: 'editorjs',
  tools: {
    header: Header,
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        }
      }
    },
    // image: SimpleImage,
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    list: {
      class: List,
      inlineToolbar: true,
      config: {
        defaultStyle: 'unordered'
      }
    },
    linkTool: {
      class: LinkTool,
      config: {
        endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
      }
    }
  },
  data : templateData
};
