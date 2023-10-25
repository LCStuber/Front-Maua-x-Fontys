import React from 'react'
import './Activities.css'
import { Link } from 'react-router-dom';

const Activities = () => {
  const activities = [
    {
      id: '1',
      title: 'Activity 1',
      room: 'W102',
      time: '10:00 AM',
    },
    {
      id: '2',
      title: 'Activity 2',
      room: 'H204',
      time: '2:30 PM',
    },
    {
      id: '3',
      title: 'Activity 3',
      room: 'D01',
      time: '4:30 PM',
    },
    // Add more activity objects as needed
  ];

  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <Link className='activity' to={`/activity/${activity.id}` } key={activity.id}>
            <div className="activity-title">{activity.title}</div>
            <div className="activity-details">
              <div className="activity-room"><span className='activity-room-title'>Room: </span>{activity.room}</div>
              <div className="activity-time"><span className='activity-room-time'>Time: </span>{activity.time}</div>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default Activities