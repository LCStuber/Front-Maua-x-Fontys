import React from 'react'
import SelectBlockButton from './components/SelectBlockButton'
import "./InteractiveMap.css"
import { GoogleMap } from '@react-google-maps/api'
import GoogleMapComponent from './components/GoogleMapComponent'
import SeeMoreButton from './components/SeeMoreButton'
import AllActivitiesButton from './components/AllActivitiesButton'

const InteractiveMap = () => {
    return (
        <div className='selectBlockField'>
            <SelectBlockButton />
            <GoogleMapComponent/>
            <SeeMoreButton/>
            <AllActivitiesButton/>
        </div>
       
    )
}

export default InteractiveMap
