import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

const GradientWrapper = ({ children }) => {
  const { state } = useContext(MyContext);
  const padding = `${state.value}px`;

  // ✅ use inline CSS gradient instead of Tailwind classes
  const backgroundStyle = state.background
    ? { backgroundImage: state.theme }
    : { background: "transparent" };

  return (
    <div
      className="max-w-[50rem] shadow-lg rounded-2xl overflow-hidden"
      style={{ padding, ...backgroundStyle, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      {children}
    </div>
  );
};

export default GradientWrapper;
