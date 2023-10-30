import React, { useState } from 'react';
import './ActivityDetail.css';
import { useParams } from 'react-router-dom';

const ActivityDetail = () => {
  const { id } = useParams();

  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleSubscribeButton = () => {
    setIsSubscribed(!isSubscribed);
  }
  const buttonText = isSubscribed ? 'Unsubscribe' : 'Subscribe';

  console.log(id);

  return (
    <div>
      <h2>Activity Detail</h2>
      <button
        className={`subscribeButton ${isSubscribed ? 'unsubscribe' : 'subscribe'}`}
        onClick={toggleSubscribeButton}
      >
        {buttonText}
      </button>
      {/* Display detailed activity information here */}
    </div>
  );
};

export default ActivityDetail