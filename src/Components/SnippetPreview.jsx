import React from 'react';
import SnippetCode from './SnippetCode';
import GradientWrapper from './GradientWrapper';

const SnippetPreview = () => {
  return (
    <div className="min-h-[75vh] my-5 mx-2 sm:mx-4 border border-white/30 rounded-2xl flex items-center justify-center">
      <div className="w-full max-w-6xl flex items-center justify-center p-2 sm:p-4">
        <GradientWrapper>
          <SnippetCode />
        </GradientWrapper>
      </div>
    </div>
  );
};

export default SnippetPreview;
