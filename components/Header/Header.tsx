import { Dispatch, SetStateAction}from "react";
import useDarkMode from "~/components/hooks/useDarkMode";

type headerProps = {
    inDarkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const Header = ({inDarkMode, setDarkMode}: headerProps): JSX.Element => {

    return (
        <div id="header" className="flex-none h-1/10 w-screen flex flex-row">
            <span>logo</span>
            <span>day/night button</span>
            <button onClick={ () => setDarkMode(!inDarkMode)}>toggle dark mode</button>
            <p className="dark:text-green-500">current dark mode value is {inDarkMode.toString()}</p>
        </div>
    );
}

export default Header;