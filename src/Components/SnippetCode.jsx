import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../MyContext";

const SnippetCode = () => {
  const textareaRef = useRef(null);
  const [code, setCode] = useState("Hello, world");
  
  const {font} = useContext(MyContext);
  
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResize();
  }, []);

  const handleChange = (e) => {
    setCode(e.target.value);
    autoResize();
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-[36rem] mx-auto border-2 rounded-xl shadow-2xl bg-black/70 border-gray-600/40">
        {/* Header */}
        <header className="grid grid-cols-6 gap-3 items-center px-4 py-4">
          <div className="flex gap-1.5">
            <div className="rounded-full h-2 w-2 bg-red-500" />
            <div className="rounded-full h-2 w-2 bg-yellow-500" />
            <div className="rounded-full h-2 w-2 bg-green-500" />
          </div>

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
          className={`resize-none outline-none px-4 pb-4 w-full ${text-[font]} bg-transparent text-white`}
          rows={1}
        />
      </div>
    </div>
  );
};

export default SnippetCode;
