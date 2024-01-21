import React, {useState, useEffect} from 'react'
import "../StuAnnouncement.css";

function AnnouncementMessage({notificationId}) {
    const[notification, setNotification] = useState(null)

    useEffect(() => {
        fetchNotification();
    }, []);

    const fetchNotification = async () => {
        try {
          const response = await fetch(process.env.REACT_APP_BACK_END_URL+`/api/v1/notifications/${notificationId}`); 
          const data = await response.json();
    
          setNotification(data);
        } catch (error) {
          console.error('Error fetching user playlists:', error);
        }
    };

    return (
        <div>
            {notification && (
                <div className="notification-details">{notification.message}</div>
            )}
        </div>
    )
}

export default AnnouncementMessage