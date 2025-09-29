import React from 'react'
import ToggleSwitch from './ToggleSwitch'

const Switchs = ({label}) => {
  return (
    <div className='flex'>
       <ToggleSwitch label="Background" checked />
       <ToggleSwitch label="DarkMode" checked />
    </div>
  )
}

export default Switchs
