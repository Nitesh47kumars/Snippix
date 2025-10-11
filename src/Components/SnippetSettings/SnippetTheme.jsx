"use client";
import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "../../MyContext";
import { motion } from "framer-motion";

export default function SnippetTheme({ label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [value, setValue] = useState("Sublime");
  const { state, dispatch } = useContext(MyContext);

  const gradientTheme = [
    {
      name: "Sublime",
      theme: "linear-gradient(to bottom right, #fb923c, #ec4899, #ef4444)",
    },
    {
      name: "Dracula",
      theme: "linear-gradient(to bottom right, #7e22ce, #6b21a8, #312e81)",
    },
    {
      name: "Monokai",
      theme: "linear-gradient(to bottom right, #facc15, #ec4899, #a855f7)",
    },
    {
      name: "GitHub Dark",
      theme: "linear-gradient(to bottom right, #374151, #1f2937, #111827)",
    },
    {
      name: "Night Owl",
      theme: "linear-gradient(to bottom right, #0ea5e9, #4f46e5, #1e3a8a)",
    },
    {
      name: "Nord",
      theme: "linear-gradient(to bottom right, #7dd3fc, #22d3ee, #34d399)",
    },
    {
      name: "One Dark",
      theme: "linear-gradient(to bottom right, #334155, #1e293b, #0f172a)",
    },
    {
      name: "Solarized Light",
      theme: "linear-gradient(to bottom right, #fde047, #fef08a, #d9f99d)",
    },
  ];

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
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        {label}
      </label>

      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="border-input text-muted-foreground flex items-center justify-between gap-2 rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 w-full"
      >
        <span className="flex gap-2 items-center">
          {/* ✅ Using inline gradient instead of Tailwind classes */}
          <div
            className="h-4 w-4 rounded-full"
            style={{ backgroundImage: state.theme }}
          />
          <span className="capitalize">{value}</span>
        </span>
        <ChevronDownIcon />
      </button>

      {open && (
        <motion.ul
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute bottom-full mb-1 w-full z-10 rounded-md bg-neutral-800 border border-neutral-700 shadow-lg text-sm text-white overflow-y-visible"
        >
          {gradientTheme.map((themes) => (
            <li
              key={themes.name}
              onClick={() => {
                setOpen(false);
                setValue(themes.name);
                dispatch({ type: "SET_THEME", payload: themes.theme });
              }}
              className="cursor-pointer px-3 py-2 hover:bg-neutral-700"
            >
              <span className="flex gap-2 items-center">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundImage: themes.theme }}
                />
                <span className="capitalize">{themes.name}</span>
              </span>
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
