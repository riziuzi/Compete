// import React from 'react'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// export default function Task() {

//     const {
//         transcript,
//         listening,
//         resetTranscript,
//         browserSupportsSpeechRecognition
//     } = useSpeechRecognition();

//     if (!browserSupportsSpeechRecognition) {
//         return <span>Browser doesn't support speech recognition.</span>;
//     }

//     return (
//         <>
//             <div className="container">
//                 <h1>
//                     Transcripted part
//                 </h1>
//                 <p>
//                     Transcripted message to be rendered
//                 </p>

//                 <div className="btn-primary">
//                     <p>Microphone: {listening ? 'on' : 'off'}</p>
//                     <button onClick={SpeechRecognition.startListening}>Start</button>
//                     <button onClick={SpeechRecognition.stopListening}>Stop</button>
//                     <button onClick={resetTranscript}>Reset</button>
//                     <p>{transcript}</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// import React from 'react'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// export default function Task() {
//     const startListening = () => SpeechRecognition.startListening({ continuous: true ,language: 'en-IN'})
//     const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

//     if (!browserSupportsSpeechRecognition) {
//         return null
//     }
//     return (
//         <>
//             <div className="container">
//                 <h1>Transcript area</h1>
//                 <div className="main-content">{transcript}</div>
//                 <div className="btn-style">
//                     <button onClick={startListening}>Start Listening</button>
//                     <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
//                 </div>
//             </div>
//         </>
//     )
// }


import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>

                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">

                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default App;

