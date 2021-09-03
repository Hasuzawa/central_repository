
//we don't need to pass dark mode status in component, the HTML tree has already passed that information
const Footer = (): JSX.Element => {

    return (
        <div id="footer" className={"flex-none h-16 w-screen border-t-2 border-black shadow_around z-50"}>
            <span>this is footer</span>
        </div>
    );
}


export default Footer;