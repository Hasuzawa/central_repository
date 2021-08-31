import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";



const Project0 = () => {
    return(
        <div>
            <span>this is project 0 page</span>
            <Link href={"/"}><a>back to home</a></Link>
        </div>
    );
}

export default Project0;