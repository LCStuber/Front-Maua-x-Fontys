import React, { useState, useEffect } from 'react'
import api from '../../api/axiosConfig';
import 'swiper/css';
import "swiper/css/navigation"
import './Activities.css'
import { Link } from 'react-router-dom';

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import { height } from '@mui/system';
import { useMsal } from '@azure/msal-react';

SwiperCore.use([Navigation])

function dayOfWeekAsString(dayIndex) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex] || '';
}

const Activities = () => {
  const [activities, setActivities] = useState([]);

  const { accounts } = useMsal();
  const currentEmail = accounts[0].username;

  const getActivities = async () => {
    try {
      const response = await api.get(`/api/v1/activities/email/${currentEmail}`);
      console.log(response.data);
      setActivities(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getActivities();
  }, [])

  const activitiesByDay = {};

  activities.forEach((activity) => {
    const dayOfWeek = new Date(activity.startDate);
    if (!activitiesByDay[dayOfWeek]) {
      activitiesByDay[dayOfWeek] = [];
    }
    activitiesByDay[dayOfWeek].push(activity);
  });
  
  function getFormattedTime(date) {
    const dateObject = new Date(date);
  
    const hours = dateObject.getUTCHours();
    const minutes = dateObject.getUTCMinutes();
  
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

  return (
    <div className="activities-container">
      <div className="activity-lists-container-desktop">
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
                    <div className="activity-title">{activity.name}</div>
                    <div className="activity-details">
                      <div className="activity-room"><span className='activity-room-title'>Room: </span>{activity.room}</div>
                      <div className="activity-time"><span className='activity-room-time'>Time: </span>{getFormattedTime(activity.startDate)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="activity-lists-container-mobile">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ clickable: true }}
        >
          {Object.keys(activitiesByDay).map((day) => {
            const dayDate = new Date(day);
            const dayName = dayOfWeekAsString(dayDate.getDay());

            return (
              <SwiperSlide key={day} className='day-activities-container'>
                <div className="day-activities">
                  <div className="week-title-container">
                    {dayName} - {dayDate.getDate()}/{dayDate.getMonth() + 1}/{dayDate.getFullYear()}
                  </div>
                  <div className="activity-list">
                    {activitiesByDay[day].map((activity) => (
                      <Link className="activity" to={`/activity/${activity.id}`} key={activity.id}>
                        <div className="activity-title">{activity.name}</div>
                        <div className="activity-details">
                          <div className="activity-room">
                            <span className="activity-room-title">Room: </span>
                            {activity.room}
                          </div>
                          <div className="activity-time">
                            <span className="activity-room-time">Time: </span>
                            {activity.startDate.substr(activity.startDate.length - 5)}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Activities