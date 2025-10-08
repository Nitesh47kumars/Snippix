import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "../../MyContext";
import {motion} from 'framer-motion';

export default function SnippetFont({ label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const { state, dispatch } = useContext(MyContext);

  const fonts = [
    { name: "Exo", class: 'font-Exo' },
    { name: "Libre Baskerville", class: 'font-libre' },
    { name: "Quicksand", class: 'font-quicksand' },
    { name: "Dancing Script", class: 'font-dancing' },
    { name: "Share Tech", class: 'font-sharetech' },
    { name: "Montserrat", class: 'font-montserrat' },
    { name: "Gravitas-One", class: 'font-gravitas'},
    { name: "Roboto Condensed", class: 'font-robot'},
    { name: "Instrument Serif", class: 'font-instrument'},
    { name: "Playwrite DE SAS", class: 'font-playwrite'},
    { name: "Bebas Neue", class: 'font-bebas'},
    { name: "Licorice", class: 'font-licorice'},
    { name: "Playwrite US Modern", class: 'font-playwrite_us'},
    { name: "Smooch Sans", class: 'font-smooch'},
    { name: "Ole", class: 'font-ole'},
    { name: "Space Grotesk", class: 'font-space'},
    { name: "Pacifico", class: 'font-pacifico'},
  ];
  

  const selectedFont = fonts.find((f) => f.class === state.font) || fonts[0];

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
    <div ref={ref} className="relative min-w-40 max-xl:w-full">
      <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>

      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="border-input text-muted-foreground flex items-center justify-between gap-2 rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 w-full"
      >
        <span className={selectedFont.class}>{selectedFont.name}</span>
        <ChevronDownIcon />
      </button>

      {open && (
        <motion.ul
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.2,ease:'easeInOut'}}
        className="absolute bottom-full mb-1 w-full z-10 rounded-md bg-neutral-800 border border-neutral-700 shadow-lg text-sm text-white overflow-y-auto max-h-140">
          {fonts.map((font) => (
            <li
              key={font.name}
              onClick={() => {
                dispatch({ type: "SET_FONT", payload: font.class });
                setOpen(false);
              }}
              className={`cursor-pointer px-3 py-1 hover:bg-neutral-700 ${font.class}`}
            >
              {font.name}
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
