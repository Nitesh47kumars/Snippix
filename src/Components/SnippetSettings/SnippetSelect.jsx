export default function SnippetSelect({ label, value, iconColor }) {
    return (
      <div>
        <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>
        <button
          type="button"
          role="combobox"
          aria-expanded="false"
          className="border-input text-muted-foreground flex items-center justify-between gap-2 rounded-md border border-neutral-700 bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 w-40"
        >
          <span className="flex gap-2 items-center">
            {iconColor && <div className={`h-4 w-4 rounded-full bg-gradient-to-br ${iconColor}`} />}
            <span className="capitalize">{value}</span>
          </span>
          <ChevronDownIcon />
        </button>
      </div>
    );
  }
  
  function ChevronDownIcon() {
    return (
      <svg className="size-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="m6 9 6 6 6-6" />
      </svg>
    );
  }
  