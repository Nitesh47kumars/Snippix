import React from 'react';
import SnippetCode from './SnippetCode';
import GradientWrapper from './GradientWrapper';

const SnippetPreview = () => {
  return (
    <div className="h-[78vh] m-4">
      <div className="border border-neutral-800 rounded-2xl h-full w-full flex items-center justify-center overflow-hidden">
        <GradientWrapper>
            <SnippetCode />
        </GradientWrapper>
      </div>
    </div>
  );
};

export default SnippetPreview;
