import React from 'react';
import SnippetCode from './SnippetCode';
import GradientWrappper from './GradientWrapper'
const SnippetPreview = () => {
  return (
    <div className="min-h-[75vh] my-5 mx-4 border border-white/30 rounded-2xl flex items-center justify-center">
      <div className="h-full w-full flex items-center justify-center">
        <GradientWrappper>
            <SnippetCode />
        </GradientWrappper>
      </div>
    </div>
  );
};

export default SnippetPreview;
