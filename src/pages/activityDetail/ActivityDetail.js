import React from 'react';
import './ActivityDetail.css';

const ActivityDetail = ({ match }) => {
  const { id } = match.params;

  // Fetch detailed activity information based on the ID (you'll need to implement this)
  // const detailedActivity = fetchDetailedActivity(id);

  return (
    <div>
      <h2>Activity Detail</h2>
      {/* Display detailed activity information here */}
    </div>
  );
};

export default ActivityDetail;