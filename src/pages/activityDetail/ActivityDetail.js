import React, { useState } from 'react';
import './ActivityDetail.css';
import { useParams } from 'react-router-dom';

const ActivityDetail = () => {
  const { id } = useParams();

  const [isRed, setIsRed] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  }
  console.log(id);

  return (
    <div>
      <h2>Activity Detail</h2>
      <button
        className={`subscribeButton ${isRed ? 'red' : 'green'}`}
        onClick={toggleColor}
      >
        Subscribe
      </button>
      {/* Display detailed activity information here */}
    </div>
  );
};

export default ActivityDetail