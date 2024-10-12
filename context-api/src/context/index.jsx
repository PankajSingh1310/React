import { createContext, useState } from "react";

// create the context first
export const GlobalContext = createContext(null);


// create the global state that receive component as a children
function GloabalState({children}) {
    const [theme, setTheme] = useState("dark");

    return ( 
        <GlobalContext.Provider value={{theme, setTheme}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GloabalState;