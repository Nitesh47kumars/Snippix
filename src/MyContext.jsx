import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState(64);
  const [font,setFont] = useState(16);
  const [theme,setTheme] = useState("from-purple-600 via-pink-500 to-red-500");

  return (
    <MyContext.Provider value={{ value, setValue,theme,setTheme,font,setFont}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
