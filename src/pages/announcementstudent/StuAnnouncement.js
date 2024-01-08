import React, { useState, useEffect } from 'react';
import './StuAnnouncement.css';
import api from '../../api/axiosConfig';


const StuAnnouncement = () => {
    const [announcements, setAnnouncements] = useState([]);

    const getNotifications = async () => {
        try {
            const response = await api.get('/api/v1/notifications');
            console.log(response.data);
            setAnnouncements(response.data);
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        getNotifications();
    }, []);

    return(
        <>
        <div className="containerStuAnnounce">
            <h1 id="announcementtitle"> Announcements:</h1>
            <div className="announcementWrapper">
            {announcements.length === 0 ? (
                    <p className='no-announcements'>There are no announcements.</p>
                ) : (
                    announcements.map((announcement, index) => (
                        <div className="announcementContainer" key={index}>
                            <div id="SubDatefield">
                                <h3> {announcement.sender} </h3>
                                <h3> {announcement.datetime} </h3>
                            </div>
                            <h4> {announcement.subject} </h4>
                            <p> 
                                {announcement.message}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
        </>
    )
}

export default StuAnnouncement;