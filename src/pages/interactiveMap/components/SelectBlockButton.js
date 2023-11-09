import React, { useState } from "react";
import "./SelectBlockButton.css";
import PolyconIcon from '../imgs/polygon.svg';

const options = ["Select block", "Block A", "Block B", "Block C", "Canteen"];

const SelectBlockButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption} 
        <img className="polygonIcon" src={PolyconIcon} alt="polygon_icon" />
        {/* <span className={`arrow ${isOpen ? "up" : "down"}`} /> */}
      </button>
      {isOpen && (
        <div className="options">
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBlockButton;