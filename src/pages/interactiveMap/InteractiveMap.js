import React, { useState, useEffect } from 'react'
import api from '../../api/axiosConfig';
import SelectBlockButton from './components/SelectBlockButton'
import "./InteractiveMap.css"
import 'swiper/css';
import "swiper/css/navigation"
import '../activities/Activities.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import { height } from '@mui/system';

SwiperCore.use([Navigation])
library.add(faUsers);

function dayOfWeekAsString(dayIndex) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex] || '';
}

const InteractiveMap = () => {

    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        try {
          const response = await api.get(`/api/v1/activities`);
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
        <div className='pageContainer'>
            <div className='selectBlockField'>
                <SelectBlockButton />
            </div>
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
                                <div className="activity-title">{activity.title}a</div>
                                <div className="activity-capacity">
                                    {activity.capacity === null ?(
                                        activity.subscribed != null ? (
                                            <p>{activity.subscribed.length}</p>
                                        ) : (
                                            <p>0</p>
                                        )
                                        ) : (
                                        activity.subscribed === null ? (
                                            <p>0/{activity.capacity}</p>
                                        ) : (
                                            <p>{activity.subscribed.length}/{activity.capacity}</p>
                                        )
                                    )}
                                    <FontAwesomeIcon className="icon" icon={faUsers} />
                                </div>
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
                                    <div className="activity-title">{activity.title}</div>
                                    <div className="activity-capacity">
                                        {activity.capacity === null ?(
                                            activity.subscribed != null ? (
                                                <p>{activity.subscribed.length}</p>
                                            ) : (
                                                <p>0</p>
                                            )
                                            ) : (
                                            activity.subscribed === null ? (
                                                <p>0/{activity.capacity}</p>
                                            ) : (
                                                <p>{activity.subscribed.length}/{activity.capacity}</p>
                                            )
                                        )}
                                        <FontAwesomeIcon className="icon" icon={faUsers} />
                                    </div>
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
        </div>
    )
}

export default InteractiveMap
