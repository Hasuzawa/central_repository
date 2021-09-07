import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Header = (): JSX.Element => {
    const darkModeContext = useContext(DarkModeContext);
    const inDarkMode = darkModeContext.inDarkMode;
    const setDarkMode = darkModeContext.setDarkMode;

    return (
        <div id="header" className="h-16 w-screen flex-none sticky top-0 flex flex-row border-b-2 border-black shadow_around z-50 dark:bg-black dark:text-white">
            <span>logo</span>
            <span>day/night button</span>
            <button
                onClick={ () => setDarkMode(!inDarkMode)}
                className={"darkMode-btn " + (inDarkMode ? "moon-btn" : "sun-btn")}
            >
                this is day night button
            </button>
            <p className="dark:text-green-500">current dark mode value is {inDarkMode.toString()}</p>
        </div>
    );
}


export default Header;