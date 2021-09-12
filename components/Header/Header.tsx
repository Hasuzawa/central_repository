import { useContext, Dispatch, SetStateAction} from "react";
import DarkModeContext from "../contexts/DarkModeContext";
import { Sun, Moon } from "phosphor-react";


const Header = (): JSX.Element => {
    const darkModeContext = useContext(DarkModeContext);
    const inDarkMode = darkModeContext.inDarkMode;
    const setDarkMode = darkModeContext.setDarkMode;
    if (setDarkMode === null){throw new Error();};

    return (
        <div id="header" className="h-16 w-screen flex-none sticky top-0 flex flex-row border-b-2 border-black shadow_around z-50 dark:bg-black dark:text-white dark:border-white">
            <span>logo</span>
            <DayNightSwitch inDarkMode={inDarkMode} setDarkMode={setDarkMode} />
            
            {/* <p className="dark:text-green-500">current dark mode value is {inDarkMode.toString()}</p> */}
        </div>
    );
}



interface DayNightSwitchProps{
    inDarkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const DayNightSwitch = ({inDarkMode, setDarkMode}: DayNightSwitchProps): JSX.Element => {

    return inDarkMode ? <Moon size={48} onClick={() => setDarkMode(!inDarkMode)} />
                      :< Sun size={48} onClick={() => setDarkMode(!inDarkMode)} />
};


export { DayNightSwitch };
export default Header;