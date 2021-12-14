import React, { useState } from 'react';
import './body.css';
import IllustrationOfDevices from '../images/illustration-devices.svg';

export default function Body() {

  const [colorOfSquare, setColorOfSquare] = useState('hsl(207, 33%, 95%)')

  const getRandomColor = () => {
    fetch('https://x-colors.herokuapp.com/api/random?type=light')
    .then((res) => res.json())
    .then((result) => {
      setColorOfSquare(result.hsl);
    })
  }

  return (
    <div className='bodyContainer'>
      <div className='bodyTextDiv'>
        <div className='newDiv'>
          <span className='new'>NEW</span><p className='monographDashboardText'>MONOGRAPH DASHBOARD</p>
        </div>
        <h1 className='powerInsightsTitle'>POWER INSIGHTS</h1>
        <h1 className='intoYourTeamTitle'>INTO YOUR TEAM</h1>
        <p className='projectPlaningText'>Project planning and time tracking</p>
        <p className='forAgileText'>for agile teams</p>
        <div className='buttonDiv'>
          <button className='scheduleADemo' onClick={getRandomColor}>SCHEDULE A DEMO</button>
          <p className='toSeeAPreviewText'>TO SEE A PREVIEW</p>
        </div>
      </div>
      <img src ={IllustrationOfDevices} className='illustrationOfDevices' alt="" />
      <div className='backgroundSquare' style={{background: colorOfSquare}}></div>
    </div>
  )
}
