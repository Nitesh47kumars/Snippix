import React from 'react';

const GradientWrapper = ({ children }) => {
  return (
    <div className="max-w-[40rem] w-full px-6 py-8 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 shadow-lg">
      {children}
    </div>
  );
};

export default GradientWrapper;
