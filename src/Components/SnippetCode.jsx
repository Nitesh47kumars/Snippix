import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../MyContext";
import SampleCode from "./SampleCode.json";

const SnippetCode = () => {
  const textareaRef = useRef(null);
  const { state } = useContext(MyContext);
  const font = `${state.font}px`;

  const [code, setCode] = useState("");

  useEffect(() => {
    const randomSnippet = SampleCode[Math.floor(Math.random() * SampleCode.length)];
    setCode(randomSnippet);
  }, []);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResize();
  }, [code, state.font]);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <div
        className={`w-full sm:w-[36rem] mx-auto border-2 rounded-xl shadow-2xl ${
          state.mode === "dark" ? "bg-black/70 text-white" : "bg-white/50 text-black"
        } border-gray-600/40`}
      >
        {/* Header */}
        <header className="grid grid-cols-6 gap-3 items-center px-4 py-4">
          <div className="flex gap-1.5">
            <div className="rounded-full h-2 w-2 shadow bg-red-500" />
            <div className="rounded-full h-2 w-2 shadow bg-yellow-500" />
            <div className="rounded-full h-2 w-2 shadow bg-green-500" />
          </div>

          <div className="col-span-4 flex justify-center">
            <input
              type="text"
              spellCheck={false}
              className={`bg-transparent text-center text-sm font-medium focus:outline-none 
                ${state.mode === "dark" 
                  ? "text-white placeholder-white/60" 
                  : "text-black/70 placeholder-black/50"}`}
              placeholder="Untitled"
            />
          </div>
        </header>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleChange}
          style={{ fontSize: font }}
          className="resize-none outline-none px-4 pb-4 w-full bg-transparent"
          rows={1}
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default SnippetCode;
