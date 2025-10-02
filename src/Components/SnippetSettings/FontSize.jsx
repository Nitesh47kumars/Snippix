import { useContext } from "react";
import { MyContext } from "../../MyContext";

export default function FontSize({ label }) {
  const {state,dispatch} = useContext(MyContext);

  const handleChange = (e) => {
    let value = parseInt(e.target.value, 10);

    if (isNaN(value)) return;

    if (value > 40) value = 40;
    if (value < 0) value = 0;

    dispatch({type:"SET_FONT",payload:value});
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-neutral-400">{label}</label>
      <input
        type="number"
        max="40"
        value={state.font}
        onChange={handleChange}
        className={`w-20 h-10 ${state.font} rounded-lg border border-neutral-700 px-3 py-2 text-sm font-medium text-gray-300 shadow-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300`}
      />
    </div>
  );
}
