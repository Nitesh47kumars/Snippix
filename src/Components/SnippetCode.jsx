import React, { useRef, useEffect, useState } from "react";

const SnippetCode = ({ width = 600 }) => {
  const textareaRef = useRef(null);
  const [code, setCode] = useState("Hello, world");

  // Auto-grow textarea height
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset
      textarea.style.height = `${textarea.scrollHeight}px`; // grow
    }
  };

  // Run on initial render
  useEffect(() => {
    autoResize();
  }, []);

  const handleChange = (e) => {
    setCode(e.target.value);
    autoResize();
  };

  return (
    <div
      className="p-5 flex justify-center items-center"
      style={{ width: `${width}px` }}
    >
      <div className="w-full border-2 rounded-xl shadow-2xl bg-black/70 backdrop-blur-2xl border-gray-600/40">
        {/* Header */}
        <header className="grid grid-cols-6 gap-3 items-center px-4 py-3">
          {/* Traffic light buttons */}
          <div className="flex gap-1.5">
            <div className="rounded-full h-2 w-2 bg-red-500" />
            <div className="rounded-full h-2 w-2 bg-yellow-500" />
            <div className="rounded-full h-2 w-2 bg-green-500" />
          </div>

          {/* Title input */}
          <div className="col-span-4 flex justify-center">
            <input
              type="text"
              spellCheck={false}
              className="bg-transparent text-center text-gray-400 text-sm font-medium focus:outline-none"
              placeholder="Untitled"
            />
          </div>
        </header>

        {/* Auto-growing textarea */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleChange}
          className="resize-none outline-none px-4 pb-4 w-full text-sm bg-transparent text-white"
          rows={1} // minimal height
        />
      </div>
    </div>
  );
};

export default SnippetCode;
