import { createContext } from 'react';

// Create a context for theme with default values
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => { },
}); 