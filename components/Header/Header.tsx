import { useContext } from "react";
import DarkModeContext from "../contexts/DarkModeContext";

import styles from "~/styles/moduleCSS/button.module.css";

const Header = (): JSX.Element => {
    const darkModeContext = useContext(DarkModeContext);
    const inDarkMode = darkModeContext.inDarkMode;
    const setDarkMode = darkModeContext.setDarkMode;

    const btnClassName: string = inDarkMode ? styles.moonBtn : styles.sunBtn;
    //(inDarkMode ? styles.moon-btn : "sun-btn")

    return (
        <div id="header" className="h-16 w-screen flex-none sticky top-0 flex flex-row border-b-2 border-black shadow_around z-50 dark:bg-black dark:text-white dark:border-white">
            <span>logo</span>
            <span>day/night button</span>
            <button
                onClick={ () => setDarkMode(!inDarkMode)}
                className={[styles.darkModeBtn, btnClassName].join(" ")}
            >
                this is day night button
            </button>
            <p className="dark:text-green-500">current dark mode value is {inDarkMode.toString()}</p>
        </div>
    );
}


export default Header;