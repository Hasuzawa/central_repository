import DarkModeContext from "~/components/context/DarkModeContext";
import { useContext } from "react";

/**
 * @remarks
 * call this function inside className to return " dark" when darkMode is on.
 * use this at the top of each page to propagate "dark" to every child elements.
 */
const darkModeClassName = (): string => {
    const darkModeContext = useContext(DarkModeContext);
    const inDarkMode = darkModeContext.inDarkMode;
    if (inDarkMode){return " dark"};
    return "";
}

export default darkModeClassName;