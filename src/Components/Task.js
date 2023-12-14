import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styles from './Task.module.css'; // Import CSS module
import CopyToClipboard from 'react-copy-to-clipboard';

const Task = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {message : transcript}
        fetch('http://192.168.1.7:5000/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
            .then((response) => {
                if (response.ok) {
                // Handle success, maybe show a success message
                console.log('Data submitted successfully');
                } else {
                // Handle error, maybe show an error message
                console.error('Failed to submit data');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        
    }
    // };

    const [isCopied, setisCopied] = useState(false)
    const toggleisCopied = () => {
        setisCopied(true)

        setTimeout(() => {
            setisCopied(false)
        }, 2000)
    }

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
                <p>ME:</p>
                <h6>{transcript}</h6>
                <div className={styles.btnStyle}>
                <form onSubmit={handleSubmit}>
                    <button disabled={isListening}>
                        Save
                    </button>
                </form>
                    <CopyToClipboard text={transcript} onCopy={() => { toggleisCopied() }}>
                        <button>
                            {isCopied ? 'Copied!' : 'Copy to clipboard'}
                        </button>
                    </CopyToClipboard>
                    <button onClick={toggleListening}>
                        {isListening ? 'Stop' : 'Start'} Listening
                    </button>
                    
                </div>
            </div>
        </>
    );
};

export default Task;