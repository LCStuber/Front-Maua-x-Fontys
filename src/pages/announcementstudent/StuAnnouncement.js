import React from 'react';
import './StuAnnouncement.css';


const StuAnnouncement = () => {
    return(
        <>
        <div className="containerStuAnnounce">
            <h1 id="announcementtitle"> Announcements:</h1>
            <div className="announcementWrapper">
                
                <div className="announcementContainer">
                    <div id="SubDatefield">
                    <h3> Teacher1 </h3>
                    <h3> DateTime</h3>
                    </div>
                    <h4> Subject </h4>
                    <p> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                <div className="announcementContainer">
                    <div id="SubDatefield">
                    <h3> Teacher1 </h3>
                    <h3> DateTime</h3>
                    </div>
                    <h4> Subject </h4>
                    <p> 
                        message will be here
                    </p>
                </div>
                <div className="announcementContainer">
                    <div id="SubDatefield">
                    <h3> Teacher1 </h3>
                    <h3> DateTime</h3>
                    </div>
                    <h4> Subject </h4>
                    <p> 
                        message will be here then lenght of the message doesn't matter
                    </p>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default StuAnnouncement;