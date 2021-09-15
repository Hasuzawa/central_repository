import { useState, useEffect, Dispatch, SetStateAction } from "react";

/**
 * @remarks
 * do not use this hook in component, use context instead. This is only meant for _app.tsx
 * 
 * @returns a tuple of dark mode state and its setter
 */

// const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
//     const [inDarkMode, setDarkMode] = useState<boolean>( (): boolean => {
//         let saved: string | null = "";
//         console.log("saved value is", saved);
//         try {
//           saved = localStorage.getItem("inDarkMode");
//           console.log("saved dark mode value is", saved);
//         } catch (ReferenceError){
//           console.log("local storage is not available, dark mode setting will not be saved");
//         }
//         return saved === "1" ? true : false; // "1" => true, "0" or null => false
//       });
    
//       useEffect( () => {
//         try {
//           localStorage.setItem("inDarkMode", inDarkMode ? "1" : "0");
//         } catch (ReferenceError){
//           ;
//         }
//       }, [inDarkMode]);

//       return [inDarkMode, setDarkMode];
// }

//the above approach would require TS to be run before the page is loaded. That is not straightforward in Next.js
//check this guide https://dev.to/sreetamdas/the-perfect-dark-mode-2d7g

const useDarkMode = (): readonly [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [inDarkMode, setDarkMode] = useState<boolean>(false);
  return [inDarkMode, setDarkMode] as const;
}

export default useDarkMode;