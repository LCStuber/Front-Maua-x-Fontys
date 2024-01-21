import React, { useState, useEffect } from 'react';
import './StuAnnouncement.css';
import api from '../../api/axiosConfig';
import NotificationMessage from "./components/AnnouncementMessage";


const StuAnnouncement = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    const getNotifications = async () => {
        try {
            const response = await api.get('/api/v1/notifications');
            console.log(response.data);
            setAnnouncements(response.data);
          } catch (error) {
            console.log(error);
          }
    }

    const toggleAnnouncement = (index) => {
        if (selectedAnnouncement === index) {
          setSelectedAnnouncement(null);
        } else {
          setSelectedAnnouncement(index);
        }
    };

    const formatDate = (datetime) => {
        const date = new Date(datetime);
        return date.toLocaleDateString();
    };

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
                        <div className={`announcementContainer ${selectedAnnouncement === index ? 'selected' : ''}`} key={index} onClick={() => toggleAnnouncement(index)}>
                            <div id="SubDatefield">
                                <h3> {announcement.sender} </h3>
                                <h3> {formatDate(announcement.dateCreated)}</h3>
                            </div>
                            <h4> {announcement.subject} </h4>
                            {selectedAnnouncement === index && (
                                <NotificationMessage notificationId={announcement.id} />
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
        </>
    )
}

export default StuAnnouncement;