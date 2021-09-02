import type { NextPage } from 'next'
import { useState, useEffect } from "react";

import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

//import "~/styles/globals.css";  "don't import global css in individual pages"
import Layout from "~/components/Layout";
import { Tag, StringToTags } from "~/components/Tag";
import { Logo, StringToLogos} from "~/components/Logo";
import Status from "~/components/Project/Status";
import Project from "~/components/Project/Project";

import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";

import useDarkMode from "~/components/hooks/useDarkMode";

//in next js each page is separate, so I need to put global variables in localStorage to be accessible to every page
const Home: NextPage = () => {
  const [inDarkMode, setDarkMode] = useDarkMode();

  return (
    <div className={"h-screen w-screen flex flex-col bg-gray-500" + (inDarkMode ? " dark" : "")}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header inDarkMode={inDarkMode} setDarkMode={setDarkMode}/>
      <main id="main" className="flex-grow flex-row">
        {/* only appear at wide screen */}
        <div id="main-left" className="hidden lg:block flex-1"></div>

        <div id="projects" className="w-screen h-full lg:w-2/5 mx-auto bg-yellow-200 flex flex-col items-center gap-y-4">
          <div id="project0" className="flex-initial w-9/10 h-3/10 bg-red-500 first:mt-2 p-2">
            <h1>Project 0: Website with React</h1>
            <Status str="completed" />
            <p className="">my first homepage built with React, Sass and HTML.</p>
            <StringToTags stringArray={["React", "Sass", "HTML"]} />
          </div>
          <Project
            header="Project 0: Website with React"
            status="completed"
            short_description="my first homepage built with React, Sass and HTML."
            stringArray={["React", "Sass", "HTML"]}
          />
          <Link href="/projects/project0"><a><span>to next page</span></a></Link>
          <div className="flex-none  w-9/10 bg-red-500">
            <h2>Porject 1</h2>
          </div>
          <div className="flex-none  w-9/10 bg-red-500">
            <h2>Porject 2</h2>
          </div>

          {/* <h1 className="text-red-500">testing</h1>
          <div id="project0" className="bg-green-200">
            <h2>Project 0</h2>
            <Link href={"/projects/project0"}><a>to project 0</a></Link>
            <button>expand button</button>
            <p>(short description)</p>
            <Logo str="C++" />
            <Logo str="C" />
            <StringToLogos stringArray={["C", "C++", "Javascript", "Django"]} />
          </div> */}
        </div>

        {/* only appear at wide screen */}
        <div id="main-right" className="hiden lg:block flex-1 "></div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
