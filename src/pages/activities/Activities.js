import React, { useState, useEffect } from 'react'
import api from '../../api/axiosConfig';
import './Activities.css'
import { Link } from 'react-router-dom';

function dayOfWeekAsString(dayIndex) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex] || '';
}

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

  const mockActivities = [
    {
      id: '1',
      isMandatory: true,
      startDate: '2020-10-12',
      endDate: '2020-10-12',
      name: 'Activity 1',
      description: 'Activity 1 description',
      room: 'Room 1',
      capacity: 10,
      subscribed: [],
      attending: []
    },
    {
      id: '2',
      isMandatory: true,
      startDate: '2020-10-12',
      endDate: '2020-10-12',
      name: 'Activity 2',
      description: 'Activity 1 description',
      room: 'Room 1',
      capacity: 10,
      subscribed: [],
      attending: []
    },
    {
      id: '3',
      isMandatory: true,
      startDate: '2020-10-13',
      endDate: '2020-10-13',
      name: 'Activity 3',
      description: 'Activity 1 description',
      room: 'Room 1',
      capacity: 10,
      subscribed: [],
      attending: []
    },
    {
      id: '4',
      isMandatory: true,
      startDate: '2020-10-14',
      endDate: '2020-10-14',
      name: 'Activity 3',
      description: 'Activity 1 description',
      room: 'Room 1',
      capacity: 10,
      subscribed: [],
      attending: []
    },
    {
      id: '5',
      isMandatory: true,
      startDate: '2020-10-15',
      endDate: '2020-10-15',
      name: 'Activity 3',
      description: 'Activity 1 description',
      room: 'Room 1',
      capacity: 10,
      subscribed: [],
      attending: []
    },
    {
      id: '6',
      isMandatory: true,
      startDate: '2020-10-16',
      endDate: '2020-10-16',
      name: 'Activity 3',
      description: 'Activity 1 description',
      room: 'Room 1',
      capacity: 10,
      subscribed: [],
      attending: []
    }
  ]

  const activitiesByDay = {};

  mockActivities.forEach((activity) => {
    const dayOfWeek = new Date(activity.startDate);
    if (!activitiesByDay[dayOfWeek]) {
      activitiesByDay[dayOfWeek] = [];
    }
    activitiesByDay[dayOfWeek].push(activity);
  });

  return (
    <div className="activity-lists-container">
      {Object.keys(activitiesByDay).map((day) => {
        const dayDate = new Date(day)
        const dayName = dayOfWeekAsString(dayDate.getDay());
        
        return (
          <div className="day-activities" key={day}>
            <div className="week-title-container">
              {dayName} - {dayDate.getDate()}/{dayDate.getMonth() + 1}/{dayDate.getFullYear()}
            </div>
            <div className="activity-list">
              {activitiesByDay[day].map((activity) => (
                <Link className='activity' to={`/activity/${activity.id}`} key={activity.id}>
                  <div className="activity-title">{activity.title}</div>
                  <div className="activity-details">
                    <div className="activity-room"><span className='activity-room-title'>Room: </span>{activity.room}</div>
                    <div className="activity-time"><span className='activity-room-time'>Time: </span>{activity.time}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Activities