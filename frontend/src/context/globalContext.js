import React from "react";

const GloalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}