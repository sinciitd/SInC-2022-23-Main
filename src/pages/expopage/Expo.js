import React from 'react'
import './expo.css'
import ExpoHero from './expoHero/ExpoHero'
import ExpoMain from './expoMain/ExpoMain'

function Expo() {
  return (
    <div className='expo'>
      <ExpoHero/>
      <ExpoMain/>
    </div>
  )
}

export default Expo