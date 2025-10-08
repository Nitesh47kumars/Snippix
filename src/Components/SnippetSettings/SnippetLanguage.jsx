import { useState, useRef, useEffect } from "react";
import {motion} from 'framer-motion';

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
  ];

  const [value, setValue] = useState(languages[0]);

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
    <div ref={ref} className="relative w-40">
      <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>

      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="border-input text-muted-foreground flex items-center justify-between gap-2 rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 w-full"
      >
        <span className="capitalize">{value}</span>
        <ChevronDownIcon />
      </button>

      {open && (
        <motion.ul
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.2,ease:'easeInOut'}}
        className="absolute bottom-full mb-1 w-full z-10 rounded-md bg-neutral-800 border border-neutral-700 shadow-lg text-sm text-white overflow-y-auto max-h-100">
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => {
                setOpen(false);
                setValue(lang);
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
