import { useState } from "react";


const Layout = ({children}: any): JSX.Element => {
    const [inDarkMode, setDarkMode] = useState<boolean>(false);
    return (
        <>
            <div>
                header bar
            </div>
            <button onClick={(): void => setDarkMode(!inDarkMode)}>toggle dark mode</button>
            <div>
                {children}
            </div>
            <div>
                footer bar
            </div>
        </>
    );
}

export default Layout;