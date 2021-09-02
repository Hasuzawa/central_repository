import { Dispatch, SetStateAction}from "react";
import useDarkMode from "~/components/hooks/useDarkMode";

//we don't need to pass dark mode status in component, the HTML tree has already passed that information
const Footer = (): JSX.Element => {
    const [inDarkMode , setDarkMode] = useDarkMode();

    return (
        <div id="footer" className={"flex-none h-1/10 w-screen" + (inDarkMode ? " dark" : "")}>
            <span>this is footer</span>
            <p className="dark:bg-red-500">sdfsdfsdfsdfsdfsdf</p>
        </div>
    );
}


export default Footer;