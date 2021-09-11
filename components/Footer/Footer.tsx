import Link from "next/link";
import { ArrowUDownLeft, Info, ListBullets, X } from "phosphor-react";
import TableOfContent from "components/TableOfContent/TableOfContent";
import CenterOverlay from "~/components/portals/CenterOverlay";

interface FooterProps{
    readonly displayReturn?: boolean;
    readonly displayTableOfContent?: boolean;
    readonly displayAbout?: boolean;
}
//we don't need to pass dark mode status in component, the page in HTML tree has already passed that information
const Footer = ({displayReturn = true, displayTableOfContent = true, displayAbout = true}: FooterProps): JSX.Element => {

    function displayTableOfContentButton(): JSX.Element | undefined {
        if (displayTableOfContent){
            return <ListBullets size="48"/>;
        } else {
            return;
        }
    }

    function displayAboutButton(): JSX.Element | undefined {
        if (displayAbout){
            return <Info size="48" onClick={() => console.log("open about")}/>;
        } else {
            return;
        }
    }

    function displayReturnButton(): JSX.Element | undefined {
        if (displayReturn){
            return <Link href="/"><a><ArrowUDownLeft size="48" /></a></Link>;
        } else {
            return;
        }
    }

    return (
        <div id="footer" className={`h-16 w-screen flex-none sticky bottom-0 border-t-2 border-black
            shadow_around z-50 dark:bg-black dark:text-white dark:border-white flex flex-row justify-around`}>
            <div className="md:hidden">
                {displayTableOfContentButton()}
            </div>
            <div className="lg:hidden">
                {displayAboutButton()}
            </div>
            <div>
                {displayReturnButton()}

                <CenterOverlay selector="#portal-root">
                    <div className="bg-white w-full h-full overflow-y-auto">
                        <X size="32" className="absolute top-0 right-0" />
                        <TableOfContent />
                    </div>
                </CenterOverlay>
            </div>
        </div>
    );
}


export default Footer;