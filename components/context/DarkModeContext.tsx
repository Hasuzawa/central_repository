import React from "react";

const DarkModeContext = React.createContext<{inDarkMode: boolean, setDarkMode: any}>({inDarkMode: false, setDarkMode: null});
export default DarkModeContext;