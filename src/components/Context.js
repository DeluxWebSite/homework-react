import { createContext } from "react";

export const themes = {
    light: {
        backgroundColor: '#eee',
        color: '#000000'
    },
    dark: {
        backgroundColor: '#000000',
        color: '#eeeeee'
    }
}

export const ThemeContext = createContext(themes.light);