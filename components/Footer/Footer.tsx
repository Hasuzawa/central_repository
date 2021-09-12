import { useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { ArrowUDownLeft, Info, ListBullets, X } from "phosphor-react";
import TableOfContent from "~/components/TableOfContent/TableOfContent";
import Introduction from "~/components/Introduction/Introduction";
import CenterOverlay from "~/components/portals/CenterOverlay";


type overlayContent = "table" | "about";


interface FooterProps{
    readonly displayReturn?: boolean;
    readonly displayTableOfContent?: boolean;
    readonly displayAbout?: boolean;
}
//we don't need to pass dark mode status in component, the page in HTML tree has already passed that information
const Footer = ({displayReturn = true, displayTableOfContent = true, displayAbout = true}: FooterProps): JSX.Element => {
    const [showOverlay, setShowOverlay] = useState<boolean>(displayTableOfContent);
    const [contentType, setContentType] = useState<overlayContent>("table");

    function displayTableOfContentButton(): JSX.Element | undefined {
        if (displayTableOfContent){
            return <ListBullets
                size="48"
                onClick={() => {
                    if (contentType === "table"){setShowOverlay(!showOverlay)}
                    else if (showOverlay === true){setContentType("table")}
                    else {setContentType("table"); setShowOverlay(true)}
                }}
                className="cursor-pointer"
            />;
        } else {
            return;
        }
    }

    function displayAboutButton(): JSX.Element | undefined {
        if (displayAbout){
            return <Info
                size="48"
                onClick={() => {
                    if (contentType === "about"){setShowOverlay(!showOverlay)}
                    else if (showOverlay === true){setContentType("about")}
                    else {setContentType("about"); setShowOverlay(true)}
                }}
                className="cursor-pointer"
            />;
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
            shadow_around z-50 dark:bg-black dark:text-white dark:border-white flex flex-row justify-around items-center`}>
            <div className="md:hidden">
                {displayTableOfContentButton()}
            </div>
            <div className="lg:hidden">
                {displayAboutButton()}
            </div>
            <div>
                {displayReturnButton()}
            </div>
            {showOverlay ? <Overlay
                contentType={contentType}
                showOverlay={showOverlay}
                setShowOverlay={setShowOverlay}
            /> : null}
        </div>
    );
}


interface OverlayProps{
    contentType: overlayContent;
    showOverlay: boolean;
    setShowOverlay: Dispatch<SetStateAction<boolean>>;
}

const Overlay = ({contentType, showOverlay, setShowOverlay}: OverlayProps) => {
        return (
            <CenterOverlay selector="#main-middle">
                <div className="absolute top-1/2 left-0 bg-white w-full h-1/2 overflow-y-auto border-2 border-black dark:border-white dark:bg-black">
                    <X
                        size="32"
                        className="absolute top-0 right-0 cursor-pointer"
                        onClick={() => setShowOverlay(!showOverlay)}
                    />
                    {contentType === "table" ? <TableOfContent /> : <Introduction />}
                </div>
            </CenterOverlay>
        );
}

export default Footer;