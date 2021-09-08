import '~/styles/globals.css'
import "tailwindcss/tailwind.css"

import type { AppProps } from 'next/app'

import React from "react";
import useDarkMode from '~/components/hooks/useDarkMode';
import DarkModeContext from '~/components/contexts/DarkModeContext';


function MyApp({ Component, pageProps }: AppProps) {
  //this hook is site-wide.
  const [inDarkMode, setDarkMode] = useDarkMode();

  return (
    <DarkModeContext.Provider value={{inDarkMode, setDarkMode}} >
      <Component />
    </DarkModeContext.Provider>
  );
}


export default MyApp;