import React from 'react'
import './expo.css'
import ExpoHero from './expoHero/ExpoHero'
import ExpoMain from './expoMain/ExpoMain'
import Events from './events/Events'

function Expo() {
  return (
    <div className='expo'>
      <ExpoHero/>
     <Events/>      
      <ExpoMain/>
    </div>
  )
}

export default Expo