import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../MyContext";

const SnippetCode = () => {
  const textareaRef = useRef(null);
  const { state } = useContext(MyContext);
  const font = `${state.font}px`;

  // ✅ Sample code snippets to choose from randomly
  const codeSnippets = [
    "console.log('Hello, world!');",
    "const sum = (a, b) => a + b;",
    "def greet(name):\n    return f\"Hello, {name}\"",
    "let count = 0;\ncount++;",
    "function sayHi() {\n  alert('Hi!');\n}",
    "if (user.isLoggedIn) {\n  showDashboard();\n}",
    "<div>Hello React</div>",
    "print('Python is fun')",
    "echo 'Hello from Bash!'",
    "SELECT * FROM users WHERE active = 1;"
  ];

  // ✅ Initialize with random code snippet
  const [code, setCode] = useState("");

  // ✅ Set random code snippet on initial render
  useEffect(() => {
    const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    setCode(randomSnippet);
  }, []);

  // ✅ Automatically resize textarea height to fit content
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // adjust to new content
    }
  };

  // ✅ Resize when code or font changes
  useEffect(() => {
    autoResize();
  }, [code, state.font]);

  // ✅ Handle user typing in the textarea
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
              className={`bg-transparent text-center text-sm font-medium focus:outline-none ${
                state.mode === "dark" ? "text-white" : "text-black/70"
              }`}
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
        />
      </div>
    </div>
  );
};

export default SnippetCode;
