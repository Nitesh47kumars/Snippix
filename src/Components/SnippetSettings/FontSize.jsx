export default function FontSize({ label, value }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-neutral-400">{label}</label>
      <input
        type="number"
        min="6"
        defaultValue={value}
        className="w-20 h-10 rounded-lg border border-neutral-700 px-3 py-2 text-sm font-medium text-gray-300 shadow-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
      />
    </div>
  );
}
