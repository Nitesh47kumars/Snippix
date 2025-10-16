import React, { useContext } from 'react';
import SnippetCode from './SnippetCode';
import GradientWrapper from './GradientWrapper';
import { MyContext } from '../MyContext';

const SnippetPreview = () => {
  const { exportRef } = useContext(MyContext);

  return (
    <div className="m-4 sm:mb-6 max-sm:min-h-[60vh] min-h-[75vh]">
      <div className="border border-neutral-800 rounded-2xl py-17 max-sm:py-7 w-full h-full flex items-center justify-center overflow-hidden">
        <GradientWrapper ref={exportRef}>
          <SnippetCode />
        </GradientWrapper>
      </div>
    </div>
  );
};

export default SnippetPreview;
