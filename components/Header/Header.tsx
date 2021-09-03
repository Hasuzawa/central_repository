import { useContext, Dispatch, SetStateAction} from "react";
import DarkModeContext from "../context/DarkModeContext";
import useDarkMode from "~/components/hooks/useDarkMode";

import Link from "next/link";

// type headerProps = {
//     inDarkMode: boolean;
//     setDarkMode: Dispatch<SetStateAction<boolean>>;
// };

const Header = (): JSX.Element => {
    const darkModeContext = useContext(DarkModeContext);
    const inDarkMode = darkModeContext.inDarkMode;
    const setDarkMode = darkModeContext.setDarkMode;

    return (
        <div id="header" className="h-16 w-screen flex-none sticky top-0 flex flex-row border-b-2 border-black shadow_around z-50">
            <span>logo</span>
            <span>day/night button</span>
            <button onClick={ () => setDarkMode(!inDarkMode)}>toggle dark mode</button>
            <p className="dark:text-green-500">current dark mode value is {inDarkMode.toString()}</p>
            <Link href="/projects/project0"><a><span>to next page</span></a></Link>
        </div>
    );
}


export default Header;