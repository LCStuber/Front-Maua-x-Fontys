import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore from "swiper";
import {Navigation} from "swiper/modules";
import {library} from "@fortawesome/fontawesome-svg-core";
import api from "../../../api/axiosConfig";
import "./ActivitiesMonitor.css"
import AllActivitiesButton from "./AllActivitiesButton";

const ActivitiesMonitor = ({textLanguage, selectedLetter}) =>{
//textLanguage logic VVV
    SwiperCore.use([Navigation])
    library.add(faUsers);

    const [activities, setActivities] = useState([]);
    // const [selectedActivities, setSelectedActivities] = useState([]);
    const [activitiesByDay, setActivitiesByDay] = useState([]);

    const [showAllActivities, setShowAllActivities] = useState(false);
    const toggleActivitiesVisibility = () => {
        setShowAllActivities(!showAllActivities);
    };
    function dayOfWeekAsString(dayIndex) {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex] || '';
    }
    const getActivities = async () => {
        try {
            console.log("SelectedLetter: " + selectedLetter)
            const response = await api.get(`/api/v1/activities`);
            let responseActivities = response.data;
            let matchActivities = [];
            console.log(responseActivities)
            if (responseActivities.length !== 0)
            {
                responseActivities.forEach((activity) =>{
                    let i =0;
                    console.log((i+1) + activity.building.toString() + "   " + selectedLetter.toString())
                    if (activity.building.toString() === selectedLetter.toString()){
                        matchActivities.push(activity);
                    }
                });
                setActivities(matchActivities);
                console.log(activities)
            }

        } catch (error)
        {
            console.log(error);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                console.log("SelectedLetter: " + selectedLetter);
                const response = await api.get(`/api/v1/activities`);
                const responseActivities = response.data;

                let matchActivities = [];
                console.log(responseActivities);

                if (responseActivities.length !== 0) {
                    responseActivities.forEach((activity) => {
                        if (activity.building.toString() === selectedLetter.toString()) {
                            matchActivities.push(activity);
                        }
                    });
                    setActivities(matchActivities);

                    // Logic to set activitiesByDay based on activities
                    const activitiesByDayTemp = {};
                    matchActivities.forEach((activity) => {
                        const dayOfWeek = new Date(activity.startDate);
                        const dayKey = dayOfWeek.toDateString();

                        if (!activitiesByDayTemp[dayKey]) {
                            activitiesByDayTemp[dayKey] = [];
                        }
                        activitiesByDayTemp[dayKey].push(activity);
                    });
                    setActivitiesByDay(activitiesByDayTemp);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [selectedLetter]);

    function getFormattedTime(date) {
        const dateObject = new Date(date);

        const hours = dateObject.getUTCHours();
        const minutes = dateObject.getUTCMinutes();

        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }
    return (
        <>
            <AllActivitiesButton textLanguage={textLanguage} showActivities={toggleActivitiesVisibility}></AllActivitiesButton>
            <div className="activities-container">
                <div className={`activity-lists-container-desktop ${showAllActivities ? 'show' : ''}`}>
                    {Object.keys(activitiesByDay).length === 0 ? (
                        <p> No Activities</p>
                    ) : (
                        Object.keys(activitiesByDay).map((day) => {
                            const dayDate = new Date(day)
                            const dayName = dayOfWeekAsString(dayDate.getDay());
                            return (
                                <div className="day-activities" key={day}>
                                    <div className="week-title-container">
                                        {dayName} - {dayDate.getDate()}/{dayDate.getMonth() + 1}/{dayDate.getFullYear()}
                                    </div>
                                    <div className="activity-list-map-desktop">
                                        {activitiesByDay[day].map((activity) => (
                                            <Link className='activity' to={`/activity/${activity.id}`} key={activity.id}>
                                                <div className="activity-title">{activity.title}a</div>
                                                <div className="activity-capacity">
                                                    {activity.capacity === null ? (
                                                        activity.subscribed != null ? (
                                                            <p>{activity.subscribed.length}</p>
                                                        ) : (
                                                            <p>0</p>
                                                        )
                                                    ) : (
                                                        activity.subscribed === null ? (
                                                            <p>0/{activity.capacity}</p>
                                                        ) : (
                                                            <p>{activity.subscribed.length}/{activity.capacity}</p>
                                                        )
                                                    )}
                                                    <FontAwesomeIcon className="icon" icon={faUsers} />
                                                </div>
                                                <div className="activity-details">
                                                    <div className="activity-room"><span className='activity-room-title'>Room: </span>{activity.room}</div>
                                                    <div className="activity-time"><span className='activity-room-time'>Time: </span>{getFormattedTime(activity.startDate)}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })
                    )}

                </div>
                <div className={`activity-lists-container-mobile ${showAllActivities ? 'show' : ''}`}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{ clickable: true }}
                    >
                        {Object.keys(activitiesByDay).length === 0 ? (
                            <p> No Activities</p>
                        ) : (
                            Object.keys(activitiesByDay).map((day) => {
                                const dayDate = new Date(day);
                                const dayName = dayOfWeekAsString(dayDate.getDay());

                                return (
                                    <SwiperSlide key={day} className='day-activities-container'>
                                        <div className="day-activities">
                                            <div className="week-title-container">
                                                {dayName} - {dayDate.getDate()}/{dayDate.getMonth() + 1}/{dayDate.getFullYear()}
                                            </div>
                                            <div className="activity-list-map-mobile">
                                                {activitiesByDay[day].map((activity) => (
                                                    <Link className="activity" to={`/activity/${activity.id}`} key={activity.id}>
                                                        <div className="activity-title">{activity.title}</div>
                                                        <div className="activity-capacity">
                                                            {activity.capacity === null ? (
                                                                activity.subscribed != null ? (
                                                                    <p>{activity.subscribed.length}</p>
                                                                ) : (
                                                                    <p>0</p>
                                                                )
                                                            ) : (
                                                                activity.subscribed === null ? (
                                                                    <p>0/{activity.capacity}</p>
                                                                ) : (
                                                                    <p>{activity.subscribed.length}/{activity.capacity}</p>
                                                                )
                                                            )}
                                                            <FontAwesomeIcon className="icon" icon={faUsers} />
                                                        </div>
                                                        <div className="activity-details">
                                                            <div className="activity-room">
                                                                <span className="activity-room-title">Room: </span>
                                                                {activity.room}
                                                            </div>
                                                            <div className="activity-time">
                                                                <span className="activity-room-time">Time: </span>
                                                                {activity.time}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        )}

                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ActivitiesMonitor;