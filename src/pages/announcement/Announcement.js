import React from 'react';
import "./Announcement.css";


const Announcement = () => {
    return (
        <div className="container">
            <form action="post" id="form">
                <div className="field">
                    <label >Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject"/>
                </div>
                <div className="field">
                
                    <label >Message</label>
                    <textarea type="text" placeholder="Your message..."/>
                </div>
                <input id="submitbutton"  type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Announcement