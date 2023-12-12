import React from 'react'
import "./InteractiveMap.css"
import GoogleMapComponent from './components/GoogleMapComponent'


const InteractiveMap = () => {
    const textLanguage = "EN";// to change the name just change this field
    return (
        <div className='selectBlockField'>
            <GoogleMapComponent textLanguage={textLanguage} />
        </div>
    )
}

export default InteractiveMap;
