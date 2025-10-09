import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../MyContext";

export default function FontSize({ label }) {
  const { state, dispatch } = useContext(MyContext);
  const [tempValue, setTempValue] = useState(state.fontSize.toString());

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (inputValue === "") {
      setTempValue("");
      return;
    }

    if (inputValue.length > 2) return;

    let value = parseInt(inputValue, 10);

    if (isNaN(value)) return;

    if (value > 40) value = 40;
    if (value < 0) value = 0;

    setTempValue(value.toString());
    dispatch({ type: "SET_FONTSIZE", payload: value });
  };

 useEffect(() => {
    setTempValue(state.fontSize.toString());
  }, [state.fontSize]);

  const handleBlur = () => {
    if (tempValue === "") {
      setTempValue("0");
      dispatch({ type: "SET_FONTSIZE", payload: 0 });
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-neutral-400">{label}</label>
      <input
        type="number"
        max="40"
        value={tempValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className="max-sm:w-full w-20 h-10 rounded-lg border border-neutral-700 px-3 py-2 text-sm font-medium text-gray-300 shadow-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
      />
    </div>
  );
}
