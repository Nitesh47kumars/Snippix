import React from 'react';
import SnippetCode from './SnippetCode';
import GradientWrappper from './GradientWrapper'
const SnippetPreview = () => {
  return (
    <div className="min-h-[80vh] w-full">
      <div className="border border-white rounded-2xl h-full w-full flex items-center justify-center">
        <GradientWrappper>
            <SnippetCode />
        </GradientWrappper>
      </div>
    </div>
  );
};

export default SnippetPreview;
