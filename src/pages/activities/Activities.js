import React, { useState, useEffect } from 'react'
import api from '../../api/axiosConfig';
import './Activities.css'
import { Link } from 'react-router-dom';


const Activities = () => {
  const [activities, setActivities] = useState([]);

  const getActivities = async () => {
    try {
      const response = await api.get('/api/v1/activities');
      console.log(response.data);
      setActivities(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getActivities();
  }, [])

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }

  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <Link className='activity' to={`/activity/${activity.id}`} key={activity.id}>
          <div className="activity-title">{activity.title}</div>
          <div className="activity-details">
            <div className="activity-room"><span className='activity-room-title'>Room: </span>{activity.room}</div>
            <div className="activity-time"><span className='activity-room-time'>Time: </span>{formatDate(activity.startDate)}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Activities