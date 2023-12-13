// Task.js
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import styles from './Task.module.css'; // Import CSS module

const Task = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 2000,
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-UK' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const [isListening, setisListening] = useState(false);
    const toggleListening = () => {
        if (isListening) {
            SpeechRecognition.stopListening();
        } else {
            startListening();
        }

        setisListening(!isListening);
    };

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    return (
        <>
            <div className={styles.container}>
                <h2>Speech to Text Converter</h2>
                <br />
                <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p>
                <div className={styles.mainContent} onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className={styles.btnStyle}>
                    <button onClick={setCopied} className={isCopied ? styles.copiedButton : ''}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={toggleListening} className={`${styles.listenButton} ${isListening ? styles.stopButton : ''}`}>
                        {isListening ? 'Stop' : 'Start'} Listening
                    </button>
                </div>
            </div>
        </>
    );
};

export default Task;
