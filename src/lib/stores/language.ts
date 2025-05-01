import { loadTranslations } from "$lib/locales/translations";
import { writable } from "svelte/store";

const language = writable<string>("en");

 const toggleLanguage = async (pathName: string) => {
    let lan = "en";
    language.update(currentLanguage => {
        lan = currentLanguage === "en" ? "es" : "en";
        return lan;
    });
    await loadTranslations(lan, pathName);
}


export {
    language,
    toggleLanguage,
}