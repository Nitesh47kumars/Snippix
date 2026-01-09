import React, { useContext, forwardRef } from 'react';
import { MyContext } from '../MyContext';

const GradientWrapper = forwardRef(({ children }, ref) => {
  const { state } = useContext(MyContext);
  const padding = `${state.value}px`;

  const backgroundStyle = state.background
    ? { backgroundImage: state.theme }
    : { background: "transparent" };

  return (
    <div
      ref={ref}
      data-export-root="true"
      className="min-w-[40rem] shadow-lg overflow-hidden my-5"
      style={{
        padding,
        ...backgroundStyle,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
});

export default GradientWrapper;
