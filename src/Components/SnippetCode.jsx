import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../MyContext";
import SampleCode from "./SampleCode.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";



const SnippetCode = () => {
  const textareaRef = useRef(null);
  const { state } = useContext(MyContext);
  const fontSize = `${state.fontSize}px`;

  const titleRef = useRef(null);

  const [code, setCode] = useState("");

  useEffect(() => {
    const randomSnippet =
      SampleCode[Math.floor(Math.random() * SampleCode.length)];
    setCode(randomSnippet);
  }, []);

  const handleChange = (e) => setCode(e.target.value);

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

  const fontFamilyMap = {
    "font-Exo": "'Exo', sans-serif",
    "font-libre": "'Libre Baskerville', serif",
    "font-quicksand": "'Quicksand', sans-serif",
    "font-dancing": "'Dancing Script', cursive",
    "font-sharetech": "'Share Tech', sans-serif",
    "font-montserrat": "'Montserrat', sans-serif",
    "font-gravitas": "'Gravitas One', serif",
    "font-robot": "'Roboto Condensed', sans-serif",
    "font-instrument": "'Instrument Serif', serif",
    "font-playwrite": "'Playwrite DE SAS', sans-serif",
    "font-bebas": "'Bebas Neue', sans-serif",
    "font-licorice": "'Licorice', cursive",
    "font-playwrite_us": "'Playwrite US Modern', sans-serif",
    "font-smooch": "'Smooch Sans', sans-serif",
    "font-ole": "'Ole', cursive",
    "font-space": "'Space Grotesk', sans-serif",
    "font-pacifico": "'Pacifico', cursive",
  };

  const fontFamily = fontFamilyMap[state.font] || "'Fira Code', monospace";

  const transparentTheme = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: "transparent",
      fontFamily,
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: "transparent",
      fontFamily,
    },
  };

  return (
    <div className="flex justify-center relative">
      <div
        className={`max-sm:min-w-[16rem] min-w-[30rem] lg:min-w-[35rem] mx-auto border-2 rounded-xl shadow-2xl ${
          state.mode === "dark"
            ? "bg-[#000000b3] border-[#4b556366]"
            : "bg-white/30 border-[#ffffff22]"
        } ${state.font}`}
        style={{ fontFamily }}
      >
        {/* Header */}
        <header className="grid grid-cols-6 gap-3 items-center px-4 py-4">
          <div className="flex gap-1.5">
            <div className="rounded-full h-2 w-2 shadow bg-[#ef4444]" />
            <div className="rounded-full h-2 w-2 shadow bg-[#eab308]" />
            <div className="rounded-full h-2 w-2 shadow bg-[#22c55e]" />
          </div>

          <div className="col-span-4 flex justify-center">

          <div
            ref={titleRef}
            contentEditable
            suppressContentEditableWarning
            spellCheck={false}
            className={`bg-transparent text-center text-sm font-medium focus:outline-none 
              ${
                state.mode === "dark"
                  ? "text-white placeholder-white/60"
                  : "text-black/70 placeholder-black/50"
              }`}
            style={{
              lineHeight: "1.25rem",
              padding: "2px 0",
              minHeight: "1.25rem",
            }}
            onFocus={(e) => {
              const range = document.createRange();
              range.selectNodeContents(e.target);
              const sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
            }}
          >
            Untitled
          </div>
          
          </div>
        </header>

        {/* 🧠 Code container */}
        <div
          style={{ fontSize, fontFamily }}
          className="relative pb-4 min-h-[100px] overflow-auto rounded-b-xl"
        >
          {/* Syntax Highlighted Layer */}
          <SyntaxHighlighter
            language={state.language.toLowerCase()}
            style={transparentTheme}
            customStyle={{
              position: "absolute",
              top: 0,
              left: 0,
              margin: 0,
              padding: "1rem",
              lineHeight: "1.5rem",
              pointerEvents: "none",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              width: "100%",
              height: "100%",
              borderRadius: "0 0 0.75rem 0.75rem",
              fontFamily,
              fontSize,
              userSelect: "none",
              backgroundColor: "transparent",
            }}
            showLineNumbers={false}
          >
            {code || " "}
          </SyntaxHighlighter>

          {/* Editable Transparent Textarea */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={handleChange}
            spellCheck={false}
            className="relative bg-transparent resize-none outline-none w-full h-full text-transparent caret-white"
            style={{
              fontSize,
              fontFamily,
              lineHeight: "1.5rem",
              padding: "1rem",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              borderRadius: "0 0 0.75rem 0.75rem",
            }}
            rows={10}
          />
        </div>
      </div>
    </div>
  );
};

export default SnippetCode;
