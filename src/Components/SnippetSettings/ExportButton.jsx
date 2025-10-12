"use client";
import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";

export default function ExportButton({ targetRef }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleExport = async (format = "png", action = "download") => {
    try {
      const target = targetRef?.current;
      if (!target) {
        alert("No target found!");
        return;
      }
  
      // Clean unsupported color functions (your existing code)
      target.querySelectorAll('*').forEach(el => {
        const style = getComputedStyle(el);
        const props = ['color', 'background', 'backgroundColor', 'borderColor', 'boxShadow'];
        props.forEach(prop => {
          const val = style[prop];
          if (val && (val.includes('oklab') || val.includes('oklch'))) {
            if (prop === 'boxShadow') el.style.boxShadow = 'none';
            else el.style[prop] = '#000';
          }
        });
      });
  
      console.log("📸 Starting html2canvas...");
      const canvas = await html2canvas(target, {
        backgroundColor: null,
        useCORS: true,
        scale: 2,
      });
  
      if (action === "download") {
        const link = document.createElement("a");
        link.download = `export.${format}`;
        link.href = canvas.toDataURL(`image/${format}`);
        link.click();
      } else if (action === "copy") {
        if (format === "png") {
          canvas.toBlob(async (blob) => {
            try {
              await navigator.clipboard.write([
                new ClipboardItem({ [blob.type]: blob })
              ]);
              alert("Image copied to clipboard!");
            } catch {
              alert("Failed to copy image.");
            }
          });
        } else {
          alert("Copy format not supported");
        }
      } else if (action === "link") {
        // Placeholder, you can customize this to upload image and get URL
        const dataUrl = canvas.toDataURL(`image/${format}`);
        await navigator.clipboard.writeText(dataUrl);
        alert("Image data URL copied to clipboard!");
      }
  
    } catch (err) {
      console.error("🔥 Export failed:", err);
    }
  };
  
  

  return (
    <div ref={ref} className="max-sm:w-full relative inline-block">
      <button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        className="max-xl:w-full justify-center inline-flex items-center gap-2 rounded-md text-sm font-medium bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800 duration-200 h-9 px-4 py-2"
      >
        <ShareIcon />
        Export
        <ChevronDownIcon />
      </button>

      {open && (
        <motion.ul
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="max-sm:w-full absolute bottom-full mb-1 right-0 z-20 w-48 rounded-md bg-neutral-800 border border-neutral-700 shadow-lg text-sm text-white overflow-hidden"
        >
          <li
            onClick={() => handleExport("png", "copy")}
            className="cursor-pointer px-3 py-2 hover:bg-neutral-700 flex items-center gap-2"
          >
            📋 <span>Copy Image</span>
          </li>
          <li
            onClick={() => handleExport("png", "link")}
            className="cursor-pointer px-3 py-2 hover:bg-neutral-700 flex items-center gap-2"
          >
            🔗 <span>Copy Link</span>
          </li>

          <div className="max-xl:hidden h-px w-full bg-neutral-800" />

          <li
            onClick={() => handleExport("png", "download")}
            className="cursor-pointer px-3 py-2 hover:bg-neutral-700 flex items-center gap-2"
          >
            🖼️ <span>Download PNG</span>
          </li>
          <li
            onClick={() => handleExport("jpeg", "download")}
            className="cursor-pointer px-3 py-2 hover:bg-neutral-700 flex items-center gap-2"
          >
            🖼️ <span>Download JPG</span>
          </li>
        </motion.ul>
      )}
    </div>
  );
}

// --- Icons ---
function ShareIcon() {
  return (
    <svg
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      className="size-4 opacity-50 ml-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
