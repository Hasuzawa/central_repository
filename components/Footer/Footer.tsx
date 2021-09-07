import Link from "next/link";

interface FooterProps{
    readonly displayReturn?: boolean;
    readonly displayTableOfContent?: boolean;
    readonly displayAbout?: boolean;
}
//we don't need to pass dark mode status in component, the page in HTML tree has already passed that information
const Footer = ({displayReturn = false, displayTableOfContent = true, displayAbout = true}: FooterProps): JSX.Element => {

    function displayTableOfContentButton(): JSX.Element | undefined {
        if (displayTableOfContent){
            return <button>open tableOfContent</button>;
        } else {
            return;
        }
    }

    function displayAboutButton(): JSX.Element | undefined {
        if (displayAbout){
            return <button>open about</button>;
        } else {
            return;
        }
    }

    function displayReturnButton(): JSX.Element | undefined {
        if (displayReturn){
            return <Link href="/"><a>return to frontpage</a></Link>;
        } else {
            return;
        }
    }

    return (
        <div id="footer" className={`h-16 w-screen flex-none sticky bottom-0 border-t-2 border-black
            shadow_around z-50 dark:bg-black dark:text-white dark:border-white flex flex-row justify-around`}>
            <span>this is footer</span>
            {displayTableOfContentButton()}
            {displayAboutButton()}
            {displayReturnButton()}
        </div>
    );
}


export default Footer;