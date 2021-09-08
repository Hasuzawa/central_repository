import DarkModeContext from "~/components/contexts/DarkModeContext";
import { useContext } from "react";


interface darkModeClassNames{
    page: string;
    header: string;
    main: string;
    footer: string;
}

/**
 * @remark
 * centralized object to change darkmode. Afterall, with Tailwind CSS and React,
 * dark mode can be reduced to string manipulation on class names.
 */
const darkModeClassNames: darkModeClassNames = {
    page: " dark",
    header: " dark:bg-black dark:text-white",
    main: " dark:bg-black dark:text-white",
    footer: " dark:bg-black dark:text-white",
}


type getDarkModeClassName = keyof darkModeClassNames; //i.e. element: "page" | "header" | "main" | ...

/**
 * 
 * @param element
 * the element calling for dark mode class name
 * @returns
 * the respective class name if dark mode is on, "" if off.
 */
function getDarkModeClassName(element: getDarkModeClassName): string{
    const darkModeContext = useContext(DarkModeContext);
    const inDarkMode = darkModeContext.inDarkMode;
    if (inDarkMode){
        return darkModeClassNames[element];
    }
    return "";
}

export { darkModeClassNames };
export default getDarkModeClassName;