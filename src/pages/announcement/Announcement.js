
import "./Announcement.css";
import api from '../../api/axiosConfig';
import React, { useState } from 'react';
import "./Announcement.css";


const Announcement = () => {
    const [sender, setSender] = useState("");
    // const [sender] = useState(user.name); // Use the logged-in user's name as the sender

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!sender.trim() || !subject.trim() || !message.trim()) {
            alert('All fields are required!');
            return;
        }

        try {
            const response = await api.post('/api/v1/notifications', {
                sender,
                subject,
                message
            });

            console.log(response.data); 
            setSender('');
            setSubject('');
            setMessage('');
            alert('The process was successful!');

        } catch (error) {
            console.error(error.message);
            if (error.response) {
                console.error(error.response.data);
                console.error(error.response.status);
                console.error(error.response.headers);
            } else if (error.request) {
                console.error(error.request);
            }
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} id="form">
                <input type="text" id="sender" name="sender" placeholder="Sender" value={sender} onChange={(e) => setSender(e.target.value)} />
                <div className="field">
                    <label>Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className="field">
                    <label>Message</label>
                    <textarea type="text" placeholder="Your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <input id="submitbutton" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Announcement