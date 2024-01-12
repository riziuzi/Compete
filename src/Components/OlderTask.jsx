// OlderTask.js
import React from 'react';
import './OlderTask.css'; // Update the path based on your file structure

export default function OlderTask({ index, date, message, task }) {
  return (
    <div className="container bg-skin-bg200 p-4 rounded-lg shadow-md w-1/2">
      <div className="flex flex-col space-y-2">
        <div className="text-lg text-skin-text200 font-bold">Date: {date}</div>
        <div className="text-lg  text-skin-text200  font-bold">Sr No: {index}</div>
        <div className="text-lg  text-skin-text200 font-bold">Task: {task}</div>
        <div className="text-lg  text-skin-text200 font-bold">Message: {message}</div>
      </div>
    </div>

  );
}
