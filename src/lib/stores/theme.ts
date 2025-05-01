import { writable } from "svelte/store";
import { browser } from "$app/environment";

let storedTheme = browser ? localStorage.theme : 'dark-mode';

const theme = writable<Theme>(storedTheme as Theme);


export const setAppTheme = (theme: Theme) => {
    document.body.classList.remove('dark-mode', 'light-mode')
    document.body.classList.add(theme)
}

if(storedTheme && browser) {
    setAppTheme(storedTheme)
}

const storeTheme = (theme: Theme) => {
    localStorage.setItem('theme', theme)
}

const toggleTheme = () => {
    theme.update(currentTheme => {
        const theme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'
        storeTheme(theme)
        setAppTheme(theme)
        return theme
    })
}

export { 
    theme,
    toggleTheme 
}