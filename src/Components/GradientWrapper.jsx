import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

const GradientWrapper = ({ children }) => {
  const { value } = useContext(MyContext);

  const padding = `${value}px`;

  return (
    <div
      className="max-w-[50rem] bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 shadow-lg"
      style={{ padding }}
    >
      {children}
    </div>
  );
};

export default GradientWrapper;
