import React from 'react';
import SnippetCode from './SnippetCode';
import GradientWrapper from './GradientWrapper';

const SnippetPreview = () => {
  return (
    <div className="max-sm:h-[60vh] h-[75vh] m-4 sm:mb-6">
      <div className="border border-neutral-800 rounded-2xl h-full w-full flex items-center justify-center overflow-hidden">
        <GradientWrapper>
            <SnippetCode />
        </GradientWrapper>
      </div>
    </div>
  );
};

export default SnippetPreview;
