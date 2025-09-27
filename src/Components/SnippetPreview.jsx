import React from 'react';
import SnippetCode from './SnippetCode';
import GradientWrappper from './GradientWrapper'
const SnippetPreview = () => {
  return (
    <div className="h-[75vh] m-5">
      <div className="border border-white/30 rounded-2xl h-full w-full flex items-center justify-center">
        <GradientWrappper>
            <SnippetCode />
        </GradientWrappper>
      </div>
    </div>
  );
};

export default SnippetPreview;
