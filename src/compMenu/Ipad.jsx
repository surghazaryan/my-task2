import React from 'react'
import air_script from "./imgcompMenu/air_script.png"
import ipad from "./imgcompMenu/ipad.jpg"

export default function Ipad() {
  return (
    <div className='Ipad'>
      <div className="parent-text-img">
        <div className='text-img'>
          <span>iPad</span>
          <img src={air_script} />
        </div>
        <img src={ipad} className='ipadimg' />
      </div>
    </div>
  )
}
