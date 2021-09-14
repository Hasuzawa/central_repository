import { useContext, Dispatch, SetStateAction} from "react";
import DarkModeContext from "../contexts/DarkModeContext";
import { Sun, Moon } from "phosphor-react";
import Image from "next/image";


const Header = (): JSX.Element => {


    return (
        <div id="header" className={`h-16 w-screen flex-none flex flex-row justify-between items-center
            border-b-2 border-black shadow_around z-50 px-4 dark:bg-black dark:text-white dark:border-white`}>
            <Logo />
            <span>Hasuzawa&apos;s projects</span>
            <DayNightSwitch />
        </div>
    );
}

const Logo = (): JSX.Element => {
    const darkModeContext = useContext(DarkModeContext);
    const inDarkMode = darkModeContext.inDarkMode;
    const commonProps = {width: 48, height: 48, alt: "logo of the website", priority: true};

    return inDarkMode ? <Image src={"/icons/websiteLogo_dark.svg"} {...commonProps} />
                      : <Image src={"/icons/websiteLogo_light.svg"} {...commonProps} />;
}

const DayNightSwitch = (): JSX.Element => {
    const darkModeContext = useContext(DarkModeContext);
    const inDarkMode = darkModeContext.inDarkMode;
    const setDarkMode = darkModeContext.setDarkMode;
    if (setDarkMode === null){throw new Error();};

    return inDarkMode ? <Moon size={48} onClick={() => setDarkMode(!inDarkMode)} className="cursor-pointer"
        id="moon-btn" tabIndex={0} onKeyPress={(e) => {e.key === "Enter" ? setDarkMode(!inDarkMode) : null}} />
                      : <Sun size={48} onClick={() => setDarkMode(!inDarkMode)} className="cursor-pointer"
        id="sun-btn" tabIndex={0} onKeyPress={(e) => {e.key === "Enter" ? setDarkMode(!inDarkMode) : null}}/>
};


export { DayNightSwitch };
export default Header;