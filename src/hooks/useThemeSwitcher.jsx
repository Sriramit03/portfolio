import { useEffect, useState } from "react";

const useThemeSwitcher = () =>
{
    const [theme,setTheme] = useState(localStorage.theme);
    const activeTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove(activeTheme);
        root.classList.add(theme);
        localStorage.setItem('theme',theme);
    },[activeTheme,theme]);

    return [theme,setTheme];
};

export default useThemeSwitcher;