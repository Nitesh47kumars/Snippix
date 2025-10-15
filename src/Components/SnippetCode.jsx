import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../MyContext";
import SampleCode from "./SampleCode.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // theme example

const SnippetCode = () => {
  const textareaRef = useRef(null);
  const { state } = useContext(MyContext);
  const fontSize = `${state.fontSize}px`;

  const [code, setCode] = useState("");

  useEffect(() => {
    const randomSnippet = SampleCode[Math.floor(Math.random() * SampleCode.length)];
    setCode(randomSnippet);
  }, []);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  // Auto resize textarea height
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

  const transparentTheme = {
    'code[class*="language-"]': {
      color: 'inherit',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      textAlign: 'left',
      whiteSpace: 'pre-wrap',
      wordSpacing: 'normal',
      wordBreak: 'break-word',
      wordWrap: 'break-word',
      lineHeight: '1.5',
      tabSize: '2',
      hyphens: 'none',
    },
    'pre[class*="language-"]': {
      color: 'inherit',
      background: 'transparent',
      margin: 0,
      padding: 0,
      overflow: 'visible',
    },
    // Add styles for tokens you want colored (keywords, strings, etc)
    'token.comment': { color: '#6a9955' },
    'token.keyword': { color: '#569cd6' },
    'token.selector': { color: '#d7ba7d' },
    'token.function': { color: '#dcdcaa' },
    'token.variable': { color: '#9cdcfe' },
    'token.string': { color: '#ce9178' },
    'token.operator': { color: '#d4d4d4' },
  };

  
  return (
    <div className="flex justify-center relative">
      <div
        className={`max-sm:min-w-[16rem] min-w-[30rem] lg:min-w-[35rem] mx-auto border-2 rounded-xl shadow-2xl ${state.font} ${
          state.mode === "dark" ? "bg-[#000000b3]" : "bg-white/50"
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
                ${state.mode === "dark" ? "text-white placeholder-white/60" : "text-black/70 placeholder-black/50"}`}
              placeholder="Untitled"
            />
          </div>
        </header>

        {/* Code container */}
        <div
          style={{ fontSize: fontSize }}
          className="relative px-4 pb-4 min-h-[100px] overflow-auto rounded-b-xl"
        >
          {/* Syntax highlighted code */}
          <SyntaxHighlighter
            language={state.language.toLowerCase()}
            style={oneDark}
            customStyle={{
              position: "absolute",
              top: "0",
              left: "0",
              margin: 0,
              padding: "1rem",
              pointerEvents: "none",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              width: "100%",
              height: "100%",
              borderRadius: "0 0 0.75rem 0.75rem",
              fontFamily: "inherit",
              fontSize: fontSize,
              userSelect: "none",
            }}
            showLineNumbers={false}
          >
            {code || " "}
          </SyntaxHighlighter>

          {/* Textarea for editing */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={handleChange}
            spellCheck={false}
            className="relative bg-transparent resize-none outline-none w-full h-full text-transparent caret-white"
            style={{
              fontSize: fontSize,
              fontFamily: "inherit",
              lineHeight: "1.5rem",
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
