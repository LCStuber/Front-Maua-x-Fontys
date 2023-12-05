import React from "react";
import './AllActivitiesButton.css'
import { useNavigate } from 'react-router-dom';

const AllActivitiesButton = ({textLanguage}) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        // Redirect to a specific route/path
        navigate('/activities'); // Replace '/new-route' with your desired path
    };

    return (

        <button className="allActivitiesButton" onClick={handleRedirect}>
            {textLanguage === "EN" ? (
                <p id="allActivitiesTxt">All Activities</p>
            ) : (
                <p id="otherActivitiesTxt">Todas as Atividades</p>
            )}
        </button>
    )
};
export default AllActivitiesButton;