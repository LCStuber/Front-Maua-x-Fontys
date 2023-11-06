import React, { useState, useEffect } from 'react'
import api from '../../api/axiosConfig';
import './Activities.css'
import { Link } from 'react-router-dom';

// export const activities = [
//   {
//     id: '1',
//     title: 'Activity 1',
//     room: 'W102',
//     time: '10:00 AM',
//     lector: 'Andreia Machion',
//     max_capacity: '30',
//     used_capacity: '3',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
//   },
//   {
//     id: '2',
//     title: 'Activity 2',
//     room: 'H204',
//     time: '2:30 PM',
//     lector: 'Andreia Machion',
//     max_capacity: '20',
//     used_capacity: '5',
//     description: "desctiption of the activity",
//   },
//   {
//     id: '3',
//     title: 'Activity 3',
//     room: 'D01',
//     time: '4:30 PM',
//     lector: 'Andreia Machion',
//     max_capacity: '25',
//     used_capacity: '7',
//     description: "desctiption of the activity",
//   },
//   // Add more activity objects as needed
// ];

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

  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <Link className='activity' to={`/activity/${activity.id}`} key={activity.id}>
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