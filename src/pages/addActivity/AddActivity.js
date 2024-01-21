import React, { useState } from 'react';
import './AddActivity.css';
import 'react-datepicker/dist/react-datepicker.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import api from '../../api/axiosConfig';

const AddActivity = () => {

    const [formData, setFormData] = useState({
        isMandatory: false,
        startDate: new Date(),
        endDate: new Date(),
        name: '',
        description: '',
        room: '',
        building: 'A',
        capacity: null,
        lector: ''
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    const handleDateChange = (date, field) => {
        if (date && date.toDate instanceof Function) {
            const jsDate = date.toDate();
            setFormData((prevData) => ({
                ...prevData,
                [field]: jsDate,
            }));
        } else {
            console.error("Invalid date object");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (formData.startDate instanceof Date && formData.endDate instanceof Date) {
            const formattedData = {
                ...formData,
                startDate: formData.startDate.toISOString(),
                endDate: formData.endDate.toISOString(),
            };
    
            try{
                const response = await api.post(`http://localhost:3001/api/v1/activities`, formattedData);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.error("Invalid startDate or endDate");
        }
    }

    const handleBuildingChange = (event) => {
        const { value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            building: value,
        }));
    }

    return (
        <div className="page-container">
            <div className="add-activity-page-title">
                Add activity
            </div>
            <div className="main-container">
                <div className="add-activity-name">
                    <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required/>
                </div>

                <div className="add-activity-description">
                    <textarea name="description" type="text" placeholder="Description" rows="4" value={formData.description} onChange={handleChange} required/>
                </div>

                <div className="add-activity-start-date">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            selected={formData.startDate}
                            onChange={(date) => handleDateChange(date, 'startDate')}
                            className="datepicker"
                            label="Start date"
                        />
                    </LocalizationProvider>
                </div>

                <div className="add-activity-end-date">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            selected={formData.endDate}
                            onChange={(date) => handleDateChange(date, 'endDate')}
                            className="datepicker"
                            label="End date"
                        />
                    </LocalizationProvider>
                </div>

                <div className="add-activity-lector">
                    <input name="lector" type="text" placeholder="Lector" valye={formData.lector} onChange={handleChange} required/>
                </div>

                <div className="add-activity-building">
                    <select className="building-dropdown" value={formData.building} onChange={handleBuildingChange}>
                        <option value="A">Block A</option>
                        <option value="B">Block B</option>
                        <option value="C">Block C</option>
                        <option value="D">Block D</option>
                        <option value="E">Block E</option>
                        <option value="F">Block F</option>
                        <option value="G">Block G</option>
                        <option value="H">Block H</option>
                        <option value="I">Block I</option>
                        <option value="J">Block J</option>
                        <option value="L">Block L</option>
                        <option value="M">Block M</option>
                        <option value="N">Block N</option>
                        <option value="P">Block P</option>
                        <option value="Q">Block Q</option>
                        <option value="R">Block R</option>
                        <option value="S">Block S</option>
                        <option value="U">Block U</option>
                        <option value="V">Block V</option>
                        <option>CEAF</option>
                        <option>CA Kiosk</option>
                        <option>Gym Snack Bar</option>
                        <option>H cafe</option>
                    </select>
                </div>

                <div className="add-activity-room">
                    <input name="room" type="text" placeholder="Room" value={formData.room} onChange={handleChange} required/>
                </div>

                <div className="add-activity-capacity">
                    <input name="capacity" type="number" placeholder="Capacity (not required)" value={formData.capacity} onChange={handleChange}></input>
                </div>

                <div className="add-activity-is-mandatory">
                    <p>Is the activity mandatory?</p>
                    <input name="isMandatory" type="checkbox" value={formData.isMandatory} onChange={handleChange} />
                </div>

                <button className="add-activity-submit-button" onClick={handleSubmit}>
                    Create activity
                </button>
            </div>
        </div>
    )
}

export default AddActivity;