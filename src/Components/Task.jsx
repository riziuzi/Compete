import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styles from './Task.module.css'; // Import CSS module
import CopyToClipboard from 'react-copy-to-clipboard';

const Task = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { message: transcript }
        fetch('https://compete-server.onrender.com/api/submit', {
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

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
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
        console.log("NOT Supported bhaag ja!!!! Chrome use kr chrome")
    }

    return (
        <>
            <div className=" flex  flex-col p-6 rounded-lg shadow-md flex-1 justify-between items-center h-64">
                <h2 className="text-3xl text-skin-text200 font-bold mb-4">Speech to Text Converter</h2>
                <p className="mb-2 text-skin-text100 self-start">ME:</p>
                <h6 className="text-lg mb-4 text-skin-text100">{transcript}</h6>
                <div className="flex space-x-4">
                    <form onSubmit={handleSubmit}>
                        <button
                            disabled={isListening}
                            className="bg-blue-500 text-skin-text100 py-2 px-4 rounded"
                        >
                            Save
                        </button>
                    </form>
                    <CopyToClipboard text={transcript} onCopy={() => toggleisCopied()}>
                        <button className="bg-green-500 text-skin-text100 py-2 px-4 rounded">
                            {isCopied ? 'Copied!' : 'Copy to clipboard'}
                        </button>
                    </CopyToClipboard>
                    <button
                        onClick={toggleListening}
                        className={`${isListening ? 'bg-red-500' : 'bg-green-500'
                            } textext-skin-text100 py-2 px-4 rounded`}
                    >
                        {isListening ? 'Stop' : 'Start'} Listening
                    </button>
                </div>
            </div>
        </>

    );
};

export default Task;