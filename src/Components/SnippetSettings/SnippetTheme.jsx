import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "../../MyContext";
import {motion} from 'framer-motion';

export default function SnippetSelect({ label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  
  const gradientTheme = [
    { name: "Sublime", theme: "from-orange-400 via-pink-500 to-red-500" },
    { name: "Dracula", theme: "from-purple-700 via-purple-800 to-indigo-900" },
    { name: "Monokai", theme: "from-yellow-400 via-pink-500 to-purple-500" },
    { name: "GitHub Dark", theme: "from-gray-700 via-gray-800 to-gray-900" },
    { name: "Night Owl", theme: "from-sky-500 via-indigo-600 to-blue-900" },
    { name: "Nord", theme: "from-sky-300 via-cyan-400 to-emerald-400" },
    { name: "One Dark", theme: "from-slate-700 via-slate-800 to-slate-900" },
    { name: "Solarized Light", theme: "from-yellow-300 via-amber-200 to-lime-200" },
  ];
  
  const [value,setValue] = useState("Sublime");
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
    <div ref={ref} className="relative w-40">
      <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>
      
      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="border-input text-muted-foreground flex items-center justify-between gap-2 rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 w-full"
      >
        <span className="flex gap-2 items-center">
          <div className={`h-4 w-4 rounded-full bg-gradient-to-br ${state.theme}`} />
          <span className="capitalize">{value}</span>
        </span>
        <ChevronDownIcon />
      </button>

      {open && (
        <motion.ul
          initial={{y:10,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.2,ease:'easeInOut'}}
          className="absolute bottom-full mb-1 w-full z-10 rounded-md bg-neutral-800 border border-neutral-700 shadow-lg text-sm text-white overflow-y-visible"
        >
          {gradientTheme.map((themes) => (
            <li
              key={themes.name}
              onClick={() => {
                setOpen(false);
                setValue(themes.name);
                dispatch({type:"SET_THEME",payload:themes.theme})
              }}
              className="cursor-pointer px-3 py-2 hover:bg-neutral-700"
            >
              <span className="flex gap-2 items-center">
                <div className={`h-4 w-4 rounded-full bg-gradient-to-br ${themes.theme}`} />
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
