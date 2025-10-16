import React, { useContext } from 'react';
import SnippetCode from './SnippetCode';
import GradientWrapper from './GradientWrapper';
import { MyContext } from '../MyContext';


const SnippetPreview = () => {
  const {exportRef} = useContext(MyContext);
  
  return (
    <div className="max-sm:min-h-[60vh] min-h-[75vh] m-4 sm:mb-6 border border-neutral-800 rounded-2xl flex items-center justify-center overflow-hidden">
      <GradientWrapper ref={exportRef} >
          <SnippetCode />
      </GradientWrapper>
    </div>
  );
};

export default SnippetPreview;
