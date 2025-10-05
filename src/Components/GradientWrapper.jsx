import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

const GradientWrapper = ({ children }) => {
  const { state } = useContext(MyContext);
  const padding = `${state.value}px`;

  const backgroundClass = state.background
    ? `bg-gradient-to-br ${state.theme}`
    : "bg-transparent";

  return (
    <div
      className={`max-w-[50rem] shadow-lg ${backgroundClass}`}
      style={{ padding }}
    >
      {children}
    </div>
  );
};


export default GradientWrapper;
