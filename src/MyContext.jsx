import { createContext, useReducer, useRef } from "react";

const MyContext = createContext();

const initialState = {
  value: 45,
  fontSize: 16,
  font: "fira",
  theme: "linear-gradient(to bottom right, #fb923c, #ec4899, #ef4444)",
  mode: "dark",
  background: true,
  language: "javascript",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, value: action.payload };
    case "SET_FONTSIZE":
      return { ...state, fontSize: action.payload };
    case "SET_FONT":
      return { ...state, font: action.payload };      
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_MODE":
      return { ...state, mode: action.payload };
    case "SET_BACKGROUND":
      return { ...state, background: !state.background };
    case "SET_LANGUAGE":
      return {...state, language: action.payload};
    default:
      return state;
  }
}

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const exportRef = useRef(null);

  return (
    <MyContext.Provider value={{ state, dispatch, exportRef}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
