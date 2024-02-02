import React from 'react'
import './App.css'

function Buttons(props) {
  return (
    <div className='buttons-container'>
      {(props.status === 0)?
      <button className='button' onClick={props.start}>Start</button>:""
      }
      {(props.status === 1)? 
      <div>
      <button className='button' onClick={props.stop}>Stop</button>
      <button className='button' onClick={props.reset}>Reset</button>
      </div>:""
      }

      {(props.status === 2)? 
        <div>
        <button className='button' onClick={props.resume}>Resume</button>
        <button className='button' onClick={props.reset}>Reset</button>
        </div> : ""
      }
    </div>
  )
}

export default Buttons
