import React, { createContext , useState } from "react";

const GlobalScope = createContext();

const GlobalScopeProvider = ({ children }) => {
    const [activeState  , setActiveState] = useState("Home");
  const value = {activeState , setActiveState};

  return (
    <GlobalScope.Provider value={value}>
      {children}
    </GlobalScope.Provider>
  );
};

export { GlobalScopeProvider, GlobalScope };
