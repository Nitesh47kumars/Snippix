export default function Slider({ label, value }) {
    return (
      <div>
        <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>
        <div className="relative flex items-center w-44 my-5">
          <div className="bg-muted relative grow overflow-hidden rounded-full h-1.5 w-full">
            <div className="bg-primary absolute h-full left-0 right-0" />
          </div>
          <div className="absolute left-[calc(100%-8px)]">
            <div
              role="slider"
              aria-valuemin="0"
              aria-valuemax="128"
              aria-valuenow={value}
              tabIndex={0}
              className="block size-4 rounded-full border border-primary bg-background hover:ring-4 focus-visible:ring-4 transition-transform"
            />
          </div>
        </div>
      </div>
    );
  }
  