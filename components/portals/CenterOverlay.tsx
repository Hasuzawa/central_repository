import { useState, useEffect, useRef } from "react";
import React from "react";
import ReactDOM from "react-dom";

interface CenterOverlayProps{
    children: React.ReactNode;
    selector: string;
}

const CenterOverlay = ({ children, selector}: CenterOverlayProps): React.ReactPortal | null => {
    const [ isMounted, setIsMounted ] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);   //will be run before unmouting
    }, [selector]);

    let root: Element | null = null;
    try {
        root = document.querySelector(selector);
        if (root === null){
            throw new Error(`there is no element matched for querySelector "${selector}", element will never be mounted.`);
        }
        root = root as Element;
        } catch (Error){
    }
    console.log(root);

    return isMounted && root ? ReactDOM.createPortal(children, root) : null;
}

export default CenterOverlay;