import React, { useContext } from 'react'
import ToggleSwitch from './ToggleSwitch'
import { MyContext } from '../../MyContext';

const ToggleSwitchs = () => {
  const {state,dispatch} = useContext(MyContext);

  const handleToggleMode = () =>{
    dispatch(
      {
        type: "SET_MODE",
        payload: state.mode=== "dark" ? "light" : "dark",
      }
    )
  }
  return (
    <div className='max-sm:w-full flex justify-around sm:gap-7'>
        <ToggleSwitch
            label="Background" 
            checked={state.background} 
            onChange={() => dispatch({ type: "SET_BACKGROUND" })}
        />
        <ToggleSwitch 
            label="DarkMode"
            checked={state.mode==="dark"}
            onChange={handleToggleMode}
        />
    </div>
  )
}

export default ToggleSwitchs
