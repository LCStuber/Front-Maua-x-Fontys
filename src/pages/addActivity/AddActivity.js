import React, { useState, useEffect } from 'react';
import './AddActivity.css';

const AddActivity = () => {


    return (
        <div className="page-container">
            <div className="add-activity-page-title">
                Add activity
            </div>
            <div className="main-container">
                <div className="add-activity-name">
                </div>

                <div className="add-activity-description">
                </div>

                <div className="add-activity-start-date">
                </div>

                <div className="add-activity-end-date">
                </div>

                <div className="add-activity-lector">
                </div>

                <div className="add-activity-building">
                </div>

                <div className="add-activity-room">
                </div>

                <div className="add-activity-capacity">
                </div>

                <div className="add-activity-is-mandatory">
                </div>

                <button className="add-activity-submit-button">
                    Create activity
                </button>
            </div>
        </div>
    )
}

export default AddActivity;