export default function FontSize({ label, value }) {
    return (
      <div>
        <label className="block mb-2 text-xs font-medium text-neutral-400">{label}</label>
        <input
          type="number"
          className="bg-transparent border-input h-9 w-16 rounded-md border px-3 py-1 text-base shadow-xs outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50"
          min="6"
          defaultValue={value}
        />
      </div>
    );
  }
  