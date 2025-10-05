import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "../../MyContext";

export default function SnippetFont({ label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const { state, dispatch } = useContext(MyContext);

  const fonts = [
    { name: "Fira Code", class: 'fira' },
    { name: "JetBrains Mono", class: 'jetbrains' },
    { name: "Source Code Pro", class: 'source' },
    { name: "Cascadia Code", class: 'cascadia' },
    { name: "Monaco", class: 'monaco' },
    { name: "Courier New", class: 'courier' },
    {name: "Gravitas-One", class: 'gravitas'}
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
    <div ref={ref} className="relative w-40">
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
        <ul className="absolute bottom-full mb-1 w-full z-10 rounded-md bg-neutral-800 border border-neutral-700 shadow-lg text-sm text-white overflow-y-auto max-h-60">
          {fonts.map((font) => (
            <li
              key={font.name}
              onClick={() => {
                dispatch({ type: "SET_FONT", payload: font.class });
                setOpen(false);
              }}
              className={`cursor-pointer px-3 py-2 hover:bg-neutral-700 ${font.class}`}
            >
              {font.name}
            </li>
          ))}
        </ul>
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
