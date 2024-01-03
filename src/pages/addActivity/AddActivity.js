import React, { useState, useEffect } from 'react';
import './AddActivity.css';
import 'react-datepicker/dist/react-datepicker.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CheckBox } from '@mui/icons-material';

const AddActivity = () => {

    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [building, setBuilding] = useState(null);
    const [isMandatory, setIsMandatory] = useState(false);

    const handleIsMandatoryChange = () => {
        if (isMandatory){
            setIsMandatory(false);
        }
        else{
            setIsMandatory(true);
        }
    }

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
                    <select className="building-dropdown" value={building} onChange={e => setBuilding(e.target.value)}>
                        <option>Block A</option>
                        <option>Block B</option>
                        <option>Block C</option>
                        <option>Block D</option>
                        <option>Block E</option>
                        <option>Block F</option>
                        <option>Block G</option>
                        <option>Block H</option>
                        <option>Block I</option>
                        <option>Block J</option>
                        <option>Block L</option>
                        <option>Block M</option>
                        <option>Block N</option>
                        <option>Block P</option>
                        <option>Block Q</option>
                        <option>Block R</option>
                        <option>Block S</option>
                        <option>Block U</option>
                        <option>Block V</option>
                        <option>CEAF</option>
                        <option>CA Kiosk</option>
                        <option>Gym Snack Bar</option>
                        <option>H cafe</option>
                    </select>
                </div>

                <div className="add-activity-room">
                    <input name="room" type="text" placeholder="Room" required/>
                </div>

                <div className="add-activity-capacity">
                    <input name="capacity" type="number" placeholder="Capacity (not required)" required></input>
                </div>

                <div className="add-activity-is-mandatory">
                    <p>Is the activity mandatory?</p>
                    <input name="isMandatory" type="checkbox" value={isMandatory} onChange={() => handleIsMandatoryChange()} />
                </div>

                <button className="add-activity-submit-button">
                    Create activity
                </button>
            </div>
        </div>
    )
}

export default AddActivity;