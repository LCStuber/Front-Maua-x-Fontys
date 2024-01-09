import React, { useState } from 'react';
import "./Announcement.css";
// import { messaging } from '../../firebase-messaging-sw';
import api from '../../api/axiosConfig';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const Announcement = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        // event.preventDefault()
        // try {
        //   let currentToken;
        //   console.log("Requesting User Permission...");
        //   Notification.requestPermission().then(permission => {
        //     if (permission === "granted"){
        //       console.log("Notification permission granted")
        //         getToken(messaging, {
        //           vapidKey: 'BIKz1Pb_kgZfj_aPgd9hTcp_wiWW_pGdvUeGTAlGVSbqsW4awyq4MiqVHqUlIUrcXA0coxKouZBqvpyvalDZcBQ'
        //         })
        //           .then(currentToken => {
        //             if(currentToken){
        //               console.log("Client Token: ", currentToken);
        //             } else {
        //               console.log("Failed to generate registration token");
        //             }
        //           })
        //           .catch(error => {
        //             console.log("An error occurrred when requesting for token", error);
        //           });
        //         const registrationToken = currentToken; 
        //         const currentDate = new Date().toISOString().split('T')[0]; 
        //         const senderName = 'Rodrigo Bossini';
            
        //         const response = api.post('/api/v1/notifications/send-notification', {
        //           subject: subject,
        //           message: message,
        //           sender: senderName,
        //           dateCreated: currentDate,
        //           deviceToken: registrationToken
        //         });
            
        //         if (response.ok) {
        //           console.log('Push notification sent successfully');
        //           setSubject('');
        //           setMessage('');
        //         } else {
        //           console.error('Failed to send push notification');
        //           }
        //       } else {
        //         console.log("User Permission denied");
        //       }
        //     });
        // } catch (error) {
        //   console.error('Error sending push notification:', error);
        // }
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