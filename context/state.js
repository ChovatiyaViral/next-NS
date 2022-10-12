import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function ThemeProvider({ children }) {
    const [isBallotOpen, setIsBallotOpen] = useState(false);
    return (
        <Context.Provider value={[isBallotOpen, setIsBallotOpen]}>{children}</Context.Provider>
    );
}

export function useThemeContext() {
    return useContext(Context);
}
