import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

import useDarkMode from "~/components/hooks/useDarkMode";


const Project0 = () => {
    const [inDarkMode, setDarkMode] = useDarkMode();


    return(
        <div className={(inDarkMode ? " dark" : "")} >
            <span>this is project 0 page</span>
            <Link href={"/"}><a>back to home</a></Link>
            <span className="dark:bg-red-500">dark mode on?</span>
        </div>
    );
}

export default Project0;