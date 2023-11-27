import React, { useState, useEffect } from 'react'
import api from '../../api/axiosConfig';
import './Activities.css'
import { Link } from 'react-router-dom';

import SwiperCore from "swiper";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import "swiper/css/navigation"
SwiperCore.use([Navigation])

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

  const activitiesByDay = {};

  activities.forEach((activity) => {
    const dayOfWeek = new Date(activity.startDate);
    if (!activitiesByDay[dayOfWeek]) {
      activitiesByDay[dayOfWeek] = [];
    }
    activitiesByDay[dayOfWeek].push(activity);
  });

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

      <div className="activity-lists-container-mobile">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={{ clickable: true }}
      >
        {Object.keys(activitiesByDay).map((day) => {
          const dayDate = new Date(day);
          const dayName = dayOfWeekAsString(dayDate.getDay());

          return (
            <SwiperSlide key={day}>
              <div className="day-activities">
                <div className="week-title-container">
                  {dayName} - {dayDate.getDate()}/{dayDate.getMonth() + 1}/{dayDate.getFullYear()}
                </div>
                <div className="activity-list">
                  {activitiesByDay[day].map((activity) => (
                    <Link className="activity" to={`/activity/${activity.id}`} key={activity.id}>
                      <div className="activity-title">{activity.title}</div>
                      <div className="activity-details">
                        <div className="activity-room">
                          <span className="activity-room-title">Room: </span>
                          {activity.room}
                        </div>
                        <div className="activity-time">
                          <span className="activity-room-time">Time: </span>
                          {activity.time}
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