import React, { useState, useEffect } from 'react';
import './AddActivity.css';
import 'react-datepicker/dist/react-datepicker.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddActivity = () => {

    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="page-container">
            <div className="add-activity-page-title">
                Add activity
            </div>
            <div className="main-container">
                <div className="add-activity-name">
                    <input name="name" type="text" placeholder="Name" required/>
                </div>

                <div className="add-activity-description">
                    <textarea name="description" type="text" placeholder="Description" rows="4" required/>
                </div>

                <div className="add-activity-start-date">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            className="datepicker"
                            label="Start date"
                        />
                    </LocalizationProvider>
                </div>

                <div className="add-activity-end-date">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            className="datepicker"
                            label="End date"
                        />
                    </LocalizationProvider>
                </div>

                <div className="add-activity-lector">
                    <input name="lector" type="text" placeholder="Lector" required/>
                </div>

                <div className="add-activity-building">
                </div>

                <div className="add-activity-room">
                    <input name="room" type="text" placeholder="Room" required/>
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