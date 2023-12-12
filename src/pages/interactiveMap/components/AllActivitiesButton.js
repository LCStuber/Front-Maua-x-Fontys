import React from "react";
import './AllActivitiesButton.css'
import { useNavigate } from 'react-router-dom';
import PolyconIcon from "../imgs/polygon.svg";

const AllActivitiesButton = ({textLanguage, showActivities}) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        // Redirect to a specific route/path
        navigate('/activities'); // Replace '/new-route' with your desired path
    };

    return (

        <button className="allActivitiesButton" onClick={showActivities}>
            {textLanguage === "EN" ? (
                <p id="allActivitiesTxt">All Activities</p>
            ) : (
                <p id="otherActivitiesTxt">Todas as Atividades</p>
            )}
            <img className="polygonIcon" src={PolyconIcon} alt="polygon_icon" />
        </button>
    )
};
export default AllActivitiesButton;