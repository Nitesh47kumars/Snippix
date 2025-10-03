import { createContext, useReducer } from "react";

const MyContext = createContext();

const initialState = {
  value: 64,
  font: 16,
  theme: "from-purple-600 via-pink-500 to-red-500",
  mode: "dark"
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, value: action.payload };
    case "SET_FONT":
      return { ...state, font: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
