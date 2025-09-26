import React from 'react';

const GradientWrapper = ({ children }) => {
  return (
    <div className="p-6 my-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 shadow-lg">
      {children}
    </div>
  );
};

export default GradientWrapper;
