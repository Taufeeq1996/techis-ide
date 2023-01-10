import React from 'react'
import bulb from "../Styles/bulb.png"
import '../Styles/App.css'

function Img() {
  return (
      <div>
          <img src={bulb} alt="" style={{ width: '100vw',height:'100vh'}} id="tech-img"/>
    </div>
  )
}

export default Img
