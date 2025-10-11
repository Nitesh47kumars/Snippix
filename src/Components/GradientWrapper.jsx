import React, { useContext, forwardRef } from 'react';
import { MyContext } from '../MyContext';

// ✅ forwardRef lets this component accept a ref from the parent
const GradientWrapper = forwardRef(({ children }, ref) => {
  const { state } = useContext(MyContext);
  const padding = `${state.value}px`;

  const backgroundClass = state.background
    ? `bg-gradient-to-br ${state.theme}`
    : "bg-transparent";

  return (
    <div
      ref={ref}  // ✅ Now this ref comes from parent (like SnippetPreview)
      className={`max-w-[50rem] shadow-lg ${backgroundClass}`}
      style={{ padding }}
    >
      {children}
    </div>
  );
});

export default GradientWrapper;
