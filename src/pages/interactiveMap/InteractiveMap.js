import React from 'react'
import "./InteractiveMap.css"
import GoogleMapComponent from './components/GoogleMapComponent'


const InteractiveMap = () => {
    const textLanguage = "EN";//TODO// to change the language of the whole page just change this field to EN for english
    return (
        <div className='selectBlockField'>
            <GoogleMapComponent textLanguage={textLanguage} />
        </div>
    )
}

export default InteractiveMap;
