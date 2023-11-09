import React from "react";
import PlusIcon from "../imgs/plus_icon.svg";
import './SeeMoreButton.css'


const SeeMoreButton = () => {
    return (

        <button className="seeMoreButton">
            <p id="seeMoreTxt"> See More </p>
            <img className="plusIcon" src={PlusIcon} alt="plus_icon" />
        </button>
    )
};
export default SeeMoreButton;