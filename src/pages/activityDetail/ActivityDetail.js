import React, { useState, useEffect } from 'react';
import './ActivityDetail.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock, faBuilding } from '@fortawesome/free-regular-svg-icons';
import api from '../../api/axiosConfig';
import { act } from 'react-dom/test-utils';
import { useMsal } from '@azure/msal-react';

library.add(faUser, faClock, faBuilding, faUsers);

const ActivityDetail = () => {
  const { id } = useParams();

  const [activity, setActivity] = useState(null);

  const getActivityDetails = async () => {
    try {
      const response = await api.get(`/api/v1/activities/${id}`);
      console.log(response.data);
      setActivity(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getActivityDetails();
  }, [])

  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleSubscribeButton = () => {
    setIsSubscribed(!isSubscribed);
  }
  const buttonText = isSubscribed ? 'Unsubscribe' : 'Subscribe';

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }
  
  const { accounts } = useMsal();
  const currentEmail = accounts[0].username;

  const handleUnsubscribe = async () => {
    const endpoint = process.env.REACT_APP_BACK_END_URL+`/api/v1/activities/${activity.id}/removeSubscribed/${currentEmail}`;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
      });
  
      if (response.ok) {
        const updatedSubscribed = activity.subscribed.filter(
          (email) => email !== currentEmail
        );
    
        setActivity(prevActivity => ({
          ...prevActivity,
          subscribed: updatedSubscribed
        }));
        
      } else {
        // Handle errors
      }
    } catch (error) {
      // Handle fetch errors
    }
  };

  const handleSubscribe = async () => {
    const endpoint = process.env.REACT_APP_BACK_END_URL+`/api/v1/activities/${activity.id}/addSubscribed/${currentEmail}`;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
      });
  
      if (response.ok) {
        const updatedSubscribed = [...activity.subscribed, currentEmail];

        setActivity(prevActivity => ({
          ...prevActivity,
          subscribed: updatedSubscribed
        }));
        
      } else {
        // Handle errors
      }
    } catch (error) {
      // Handle fetch errors
    }
  };

  function getFormattedTime(date) {
    const dateObject = new Date(date);
  
    const hours = dateObject.getUTCHours();
    const minutes = dateObject.getUTCMinutes();
  
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }
  if (activity && activity.subscribed === null){
    activity.subscribed = [];
  }
  const isUserSubscribed = activity && activity.subscribed && activity.subscribed.includes(currentEmail);
  return (
    <div>
      {activity ? (
        <div className="main-container">
          <p className="title-text">{activity.name}:</p>
          <div className="top-container">
            <div className="time-and-room-container">
              <div className="time-container">
                <FontAwesomeIcon className="icon" icon={faClock} />
                <p>{getFormattedTime(activity.startDate)}</p>
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
            {activity && (
              <>
              {isUserSubscribed ? (
                <button className="unsubscribeButton" onClick={handleUnsubscribe}>
                  Unsubscribe
                </button>
              ) : (
                <button className="subscribeButton" onClick={handleSubscribe}>
                  Subscribe
                </button>
              )}
            </>
          )}
            
              <div className="capacity-container">
                <FontAwesomeIcon className="icon" icon={faUsers} />
                {activity.capacity == null ?(
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
              </div>
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