import React, { useState, useEffect } from 'react';
import './ActivityDetail.css';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { activities } from '../activities/Activities';
>>>>>>> 92a63ce (UI for a specific activity page)
=======
>>>>>>> 8115a1e (Getting the list of activities from the API.)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock, faBuilding } from '@fortawesome/free-regular-svg-icons';

library.add(faUser, faClock, faBuilding, faUsers);

const ActivityDetail = () => {
  const { id } = useParams();

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8115a1e (Getting the list of activities from the API.)
  const [activity, setActivity] = useState({
    id: '',
    title: '',
    room: '',
    time: '',
    lector: '',
    max_capacity: '',
    used_capacity: '',
    description: '',
  });
<<<<<<< HEAD

  // useEffect(() => {
  //   const findActivityById = activities.find((item) => item.id === id);
  //   setActivity(findActivityById);
  // }, [id]);
=======
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const findActivityById = activities.find((item) => item.id === id);
    setActivity(findActivityById);
  }, [id]);
>>>>>>> 92a63ce (UI for a specific activity page)
=======

  // useEffect(() => {
  //   const findActivityById = activities.find((item) => item.id === id);
  //   setActivity(findActivityById);
  // }, [id]);
>>>>>>> 8115a1e (Getting the list of activities from the API.)

  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleSubscribeButton = () => {
    setIsSubscribed(!isSubscribed);
  }
  const buttonText = isSubscribed ? 'Unsubscribe' : 'Subscribe';

  console.log(id);

  return (
    <div>
      {activity ? (
        <div className="main-container">
          <p className="title-text">{activity.title}:</p>
          <div className="top-container">
            <div className="time-and-room-container">
              <div className="time-container">
                <FontAwesomeIcon className="icon" icon={faClock} />
                <p>{activity.time}</p>
              </div>
              <div className="room-container">
                <FontAwesomeIcon className="icon" icon={faBuilding} />
                <p>{activity.room}</p>
              </div>
            </div>
            <div className="lector-container">
              <FontAwesomeIcon className="icon" icon={faUser} />
              <p>{activity.lector}</p>
            </div>
            <button
              className={`subscribeButton ${isSubscribed ? 'unsubscribe' : 'subscribe'}`}
              onClick={toggleSubscribeButton}
            >
              {buttonText}
            </button>
            <div className="capacity-container">
              <FontAwesomeIcon className="icon" icon={faUsers} />
              <p>{activity.used_capacity}/{activity.max_capacity}</p>
            </div>
            {/* Display detailed activity information here */}
          </div>
          <div className="bottom-container">
            <p className="description-title">Description:</p> 
            <p className="description-text">{activity.description}</p>
          </div>
        </div>
      ) : (
        <p>Activity not found</p>
      )}
    </div>
  );
};

export default ActivityDetail