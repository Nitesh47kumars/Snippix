import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../MyContext";
import SampleCode from "./SampleCode.json";

const SnippetCode = () => {
  const textareaRef = useRef(null);
  const { state } = useContext(MyContext);
  const fontSize = `${state.fontSize}px`;

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
  }, [code, state.fontSize]);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <div
        className={`max-sm:min-w-[16rem] min-w-[30rem] lg:min-w-[35rem] mx-auto border-2 rounded-xl shadow-2xl ${state.font} ${
          state.mode === "dark" ? "bg-[#000000b3] text-white" : "bg-white/50 text-black"
        } border-[#4b556366]`}
      >
        {/* Header */}
        <header className="grid grid-cols-6 gap-3 items-center px-4 py-4">
          <div className="flex gap-1.5">
            <div className="rounded-full h-2 w-2 shadow bg-[#ef4444]" />
            <div className="rounded-full h-2 w-2 shadow bg-[#eab308]" />
            <div className="rounded-full h-2 w-2 shadow bg-[#22c55e]" />
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
          style={{ fontSize: fontSize }}
          className={`resize-none outline-none px-4 pb-4 w-full bg-transparent`}
          rows={1}
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default SnippetCode;
