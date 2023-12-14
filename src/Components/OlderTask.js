// OlderTask.js
import React from 'react';
import './OlderTask.css'; // Update the path based on your file structure

export default function OlderTask({ index, date, message }) {
  return (
    <div className="container">
      <div className="item">Date: {date}</div>
      <div className="item">Sr No: {index}</div>
      <div className="item">Message: {message}</div>
    </div>
  );
}