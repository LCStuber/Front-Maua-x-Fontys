import React from 'react';
import './ActivityDetail.css';
import { useParams } from 'react-router-dom';

const ActivityDetail = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div>
      <h2>Activity Detail</h2>
      <button className="subscribeButton">Subscribe</button>
      {/* Display detailed activity information here */}
    </div>
  );
};

export default ActivityDetail