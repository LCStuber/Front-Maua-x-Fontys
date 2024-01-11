import React, { useState } from 'react';
import "./Announcement.css";
import { messaging } from '../../firebaseConfig';
import api from '../../api/axiosConfig';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const Announcement = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("Requesting User Permission...");
            const permission = await Notification.requestPermission();
    
            if (permission === "granted") {
                console.log("Notification permission granted");
                const currentToken = await getToken(messaging, {
                    vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY
                });
    
                if (currentToken) {
                    console.log("Client Token: ", currentToken);
                    const currentDate = new Date().toISOString().split('T')[0];
                    const senderName = 'Rodrigo Bossini';

                    const notification = {
                        subject: subject,
                        message: message,
                        sender: senderName,
                        dateCreated: currentDate,
                        deviceToken: currentToken
                    };

                    const addNotificationResponse = await api.post('/api/v1/notifications/addNotification', notification);

                    if (addNotificationResponse.ok) {
                        console.log('Notification added successfully');
    
                        const sendNotificationResponse = await api.post('/api/v1/notifications/sendNotification', notification);
    
                        if (sendNotificationResponse.ok) {
                            console.log('Push notification sent successfully');
                            setSubject('');
                            setMessage('');
                        } else {
                            console.error('Failed to send push notification');
                        }
                    } else {
                        console.error('Failed to add notification');
                    }
                } else {
                    console.log("Failed to generate registration token");
                }
            } else {
                console.log("User Permission denied");
            }
        } catch (error) {
            console.error('Error sending push notification:', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} id="form">
                <div className="field">
                    <label >Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject"  value={subject} onChange={(e) => setSubject(e.target.value)}/>
                </div>
                <div className="field">
                    <label >Message</label>
                    <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message..."/>
                </div>
                <button type="submit" className="submitbutton">Submit</button>
            </form>
        </div>
    )
}

export default Announcement