import { useContext, useRef } from "react";
import { MyContext } from "../../MyContext"; // Adjust path as needed

export default function Slider({ label, min = 0, max = 80 }) {
  const { state, dispatch } = useContext(MyContext);
  const trackRef = useRef(null);

  const updateValue = (clientX) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const newValue = Math.round(min + percent * (max - min));
    dispatch({ type: "SET_VALUE", payload: newValue });
  };

  const handlePointerDown = (clientX, moveEvent, upEvent) => {
    updateValue(clientX);
    const handleMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      updateValue(x);
    };
    const handleUp = () => {
      window.removeEventListener(moveEvent, handleMove);
      window.removeEventListener(upEvent, handleUp);
    };
    window.addEventListener(moveEvent, handleMove);
    window.addEventListener(upEvent, handleUp);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handlePointerDown(e.clientX, "mousemove", "mouseup");
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    handlePointerDown(e.touches[0].clientX, "touchmove", "touchend");
  };

  const percentFilled = ((state.value - min) / (max - min)) * 100;

  return (
    <div className="max-xl:w-full w-44">
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        {label}
      </label>

      <div
        className="relative w-full h-5 flex items-center select-none"
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="w-full h-1.5 bg-neutral-700 rounded-full relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"
            style={{ width: `${percentFilled}%` }}
          />
        </div>

        <div
          role="slider"
          tabIndex={0}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={state.value}
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `calc(${percentFilled}% - 6px)` }}
        >
          <div className="h-4 w-4 rounded-full bg-white border-2 border-purple-500 shadow-md hover:scale-110 focus-visible:ring-2 ring-purple-500 transition-transform duration-200" />
        </div>
      </div>
    </div>
  );
}
