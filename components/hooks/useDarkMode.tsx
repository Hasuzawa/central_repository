import { useState, useEffect, Dispatch, SetStateAction } from "react";

/**
 * 
 * @returns a tuple of dark mode state and its setter
 */
const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [inDarkMode, setDarkMode] = useState<boolean>( (): boolean => {
        let saved: string | null = "";
        try {
          let saved = localStorage.getItem("inDarkMode");
        } catch (ReferenceError){
          console.log("local storage is not available, dark mode setting will not be saved");
        }
        return saved === "1" ? true : false; // "1" => true, "0" or null => false
      });
    
      useEffect( () => {
        try {
          localStorage.setItem("inDarkMode", inDarkMode ? "1" : "0");
        } catch (ReferenceError){
          ;
        }
      }, [inDarkMode]);

      return [inDarkMode, setDarkMode];
}

export default useDarkMode;