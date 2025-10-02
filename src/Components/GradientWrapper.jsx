import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

const GradientWrapper = ({ children }) => {
  const { state} = useContext(MyContext);

  const padding = `${state.value}px`;

  return (
    <div
      className={`max-w-[50rem] bg-gradient-to-br shadow-lg ${state.theme}`}
      style={{ padding }}
    >
      {children}
    </div>
  );
};

export default GradientWrapper;
