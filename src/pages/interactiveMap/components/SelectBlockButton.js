import React, { useEffect, useState } from "react";
import "./SelectBlockButton.css";
import PolyconIcon from '../imgs/polygon.svg';

const optionsEN = ["Select block",
"Block A",
"Block B", 
"Block C", 
"Block D", 
"Block E", 
"Block F", 
"Block G", 
"Block H", 
"Block I", 
"Block J", 
// "Block K",
"Block L", 
"Block M", 
"Block N",
// "Block O",
"Block P", 
"Block Q", 
"Block R", 
"Block S", 
// "Block T",
"Block U", 
"Block V", 
// "Block W",
// "Block ",
"CEAF: Center for Sports and Physical Activities",
"CA Kiosk - between blocks F and K",
"Gym Snack Bar",
"H Cafe - Next to the Library"
];
const optionsPT =["Selecionar bloco",
  "Bloco A",
  "Bloco B",
  "Bloco C",
  "Bloco D",
  "Bloco E",
  "Bloco F",
  "Bloco G",
  "Bloco H",
  "Bloco I",
  "Bloco J",
// "Bloco K",
  "Bloco L",
  "Bloco M",
  "Bloco N",
// "Bloco O",
  "Bloco P",
  "Bloco Q",
  "Bloco R",
  "Bloco S",
// "Bloco T",
  "Bloco U",
  "Bloco V",
// "Bloco W",
// "Bloco ",
  "CEAF: Centro de Esportes e Atividades Físicas",
  "Cabine CA - entre os blocos F e K",
  "Lanchonete da Academia",
  "Café H - Ao lado da biblioteca"
];

const SelectBlockButton = ({emulateClick, textLanguage, receiveSelectedLetter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);

  useEffect(() => {
    // setIsOpen(false);
    if(textLanguage === "EN"){
        setSelectedOption(optionsEN[0]);
      }
      else{
        setSelectedOption(optionsPT[0])
      }
  }, []); // add textlanguage
  function handleOptionClick(option){
    setSelectedOption(option);
    setIsOpen(false);
    emulateClick(option.substring(option.length - 1));
    receiveSelectedLetter(option.substring(option.length - 1));
  }

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption} 
        <img className="polygonIcon" src={PolyconIcon} alt="polygon_icon" />
        {/* <span className={`arrow ${isOpen ? "up" : "down"}`} /> */}
      </button>
      {isOpen && (
        <div className="options">
          {
            textLanguage === "EN" ?
              optionsEN.map((option, index) => (
                <div
                    key={index}
                    className="option"
                    onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              )) :
              optionsPT.map((option, index) => (
                <div
                    key={index}
                    className="option"
                    onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))
          }
        </div>
      )}
    </div>
  );
};

export default SelectBlockButton;