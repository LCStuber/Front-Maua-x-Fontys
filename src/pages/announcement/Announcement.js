import React, { useState } from 'react';
import "./Announcement.css";
import { messaging } from '../../firebaseConfig';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const Announcement = () => {
    const [subject, setSubject] = useState('');
    const [messge, setMessage] = useState('');
    
    const sendNotification = async (event) => {
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
                    const currentDate = new Date().toISOString();
                    const senderName = 'Rodrigo Bossini';

                    const apiUrl = process.env.REACT_APP_BACK_END_URL+'/api/v1/notifications/addNotification';
                    const sendUrl = process.env.REACT_APP_BACK_END_URL+`/api/v1/notifications/sendNotification?token=${currentToken}`;

                    const notification = {
                        sender: senderName,
                        subject: subject,
                        message: messge,
                        dateCreated: currentDate
                    };

                    console.log(notification)

                    const addNotificationResponse = await fetch(apiUrl, {
                        method: 'POST',
                        body: JSON.stringify(notification),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if (addNotificationResponse.ok) {
                        console.log('Notification added successfully');
    
                        const sendNotificationResponse = await fetch(sendUrl, {
                            method: 'POST',
                            body: JSON.stringify(notification),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
    
                        if (sendNotificationResponse.ok) {
                            console.log('Push notification sent successfully');
                            setSubject('');
                            setMessage('');
                        } else {
                            console.error('Failed to send push notification',);
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
            <form onSubmit={sendNotification} id="form">
                <div className="field">
                    <label >Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject"  value={subject} onChange={(e) => setSubject(e.target.value)}/>
                </div>
                <div className="field">
                    <label >Message</label>
                    <textarea type="text" value={messge} onChange={(e) => setMessage(e.target.value)} placeholder="Your message..."/>
                </div>
                <button type="submit" className="submitbutton">Submit</button>
            </form>
        </div>
    )
}

export default Announcement