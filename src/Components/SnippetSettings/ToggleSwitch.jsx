export default function ToggleSwitch({ label, checked }) {
    return (
      <div>
        <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          className={`inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all ${
            checked ? 'bg-primary' : 'bg-input dark:bg-input/80'
          }`}
        >
          <span
            className={`block size-4 rounded-full transition-transform ${
              checked ? 'translate-x-[calc(100%-2px)] bg-primary-foreground' : 'translate-x-0 bg-foreground'
            }`}
          />
        </button>
      </div>
    );
  }
  