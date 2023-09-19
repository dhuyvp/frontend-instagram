import React from 'react'
import './HomePage.css'
import Timeline from './timeline/Timeline'
import Sidenav from './navigation/Sidenav'

function HomePage() {
  return (
    <div className='homepage'>
        <div className='homepage__nav'>
            <Sidenav/>
        </div>
        <div className='homepage__timeline'>
            <Timeline/>
        </div>

    </div>
  )
}

export default HomePage
