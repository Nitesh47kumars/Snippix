import { useState, useRef, useEffect, useContext } from "react";
import {motion} from 'framer-motion';
import { MyContext } from "../../MyContext";

export default function SnippetLanguage({ label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const languages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Go",
    "Rust",
    "C++",
    "Java",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "C",
    "C#",
    "Scala",
    "Perl",
    "Dart",
    "Elixir",
    "Haskell",
    "Objective-C",
    "Shell",
    "Lua",
    "MATLAB",
    "R",
    "Groovy",
    "Visual Basic",
    "Assembly",
    "COBOL",
    "F#",
    "Erlang",
    "Julia",
    "SQL",
    "HTML",
    "CSS",
    "PowerShell",
    "Ada",
    "Fortran",
    "Prolog"
  ];
  

  const {state,dispatch} = useContext(MyContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-40 max-xl:w-full">
      <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>

      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="border-input text-muted-foreground flex items-center justify-between gap-2 rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 w-full"
      >
        <span className="capitalize">{state.language}</span>
        <ChevronDownIcon />
      </button>

      {open && (
        <motion.ul
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute bottom-full mb-1 w-full z-10 rounded-md bg-neutral-800 border border-neutral-700 shadow-lg text-sm text-white overflow-y-auto max-h-100 custom-scrollbar"
      >      
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => {
                setOpen(false);
                dispatch({type:"SET_LANGUAGE",payload: lang})
              }}
              className="cursor-pointer px-3 py-2 hover:bg-neutral-700 capitalize"
            >
              {lang}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      className="size-4 opacity-50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
