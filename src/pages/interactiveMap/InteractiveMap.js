import React from 'react'
import SelectBlockButton from './components/SelectBlockButton'
import "./InteractiveMap.css"
import { GoogleMap } from '@react-google-maps/api'
import GoogleMapComponent from './components/GoogleMapComponent'

const InteractiveMap = () => {
    return (
        <div className='selectBlockField'>
            <SelectBlockButton />
            <GoogleMapComponent/>
        </div>
       
    )
}

export default InteractiveMap
