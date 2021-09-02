
//we don't need to pass dark mode status in component, the HTML tree has already passed that information
const Footer = (): JSX.Element => {

    return (
        <div id="footer" className={"flex-none h-1/10 w-screen"}>
            <span>this is footer</span>
        </div>
    );
}


export default Footer;