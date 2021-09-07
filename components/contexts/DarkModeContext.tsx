import React from "react";
/**
 * @remarks
 * use this context at the top of each page to access dark state and its setter
 */
const DarkModeContext = React.createContext<{inDarkMode: boolean, setDarkMode: any}>({inDarkMode: false, setDarkMode: null});
export default DarkModeContext;