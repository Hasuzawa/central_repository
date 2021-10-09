import type { NextPage } from 'next'

import Head from 'next/head';

//import "~/styles/globals.css";  "don't import global css in individual pages"

import Header from "~/components/Header/Header";
import TableOfContent from '~/components/TableOfContent/TableOfContent';
import Projects from '~/components/Project/Projects';
import Introduction from '~/components/Introduction/Introduction';
import Footer from "~/components/Footer/Footer";

import getDarkModeClassName from "darkModeCSS/darkModeClassNames";


const Home: NextPage = () => {

  return (
    <div className={"h-screen w-screen flex flex-col relative" + getDarkModeClassName("page")}>
      <Head>
        <title>Projects by Hasuzawa</title>
        <meta name="keywords"           content="personal projects, central repository, overview of projects" />
        <meta name="description"        content="This is the central repository of Hasuzawa Yuichi. Here
            you can find all projects with their description, status, techs used and link." />
        <meta name="author"             content="Hasuzawa Yuichi" />

        {/*  Open Graph meta  */}
        
        <meta property="og:locale"      content="en_US" />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://central-repository.vercel.app/" />
        <meta property="og:title"       content="Repository with Hasuzawa's Projects" />
        <meta property="og:description" content="The website is a repository containing all projects by Hasuzawa Yuichi." />
        {/* <meta property="og:image"       content={ogImage.src} /> */}

        <meta property="og:site_name"   content="Hasuzawa's repositories" />

        {/*  Twitter meta  */}

        <meta property="twitter:card"       content="summary" />
        <meta property="twitter:title"      content="Repository with Hasuzawa's Projects"  />
        <meta property="twitter:description"content="The website with all projects by Hasuzawa Yichi."  />
        <meta property="twitter:url"        content="https://central-repository.vercel.app/"  />
        {/* <meta property="twitter:image"      content={twitterImage.src} /> */}
        <meta property="twitter:image:alt"  content="the logo and table of content of the website"  />
        {/* <meta property="twitter:site"       content=""  /> only needed if you want to mention an account on twitter */}


        <link rel="icon" href="/favicon.ico" />

        {/*  theme color  */}

        <meta name="theme-color" media="(prefers-color-scheme: dark" content="black" />
        <meta name="theme-color" media="(prefers-color-scheme: light" content="white" />
      </Head>
      <Header />
      <main id="main" className="center flex flex-row dark:bg-black dark:text-white">

      {/* <main id="main" className="flex-1 min-h-0 flex flex-row content-height dark:bg-black dark:text-white overflow-y-hidden"> */}
        <div id="main-left" className="hidden md:block flex-1 height-full border-r-2 border-black dark:border-white min-w-0 min-h-0">
          <TableOfContent />
        </div>
        <div id="main-middle" className="flex-none min-h-0 w-screen relative md:w-3/5 lg:w-2/5 overflow-y-hidden main-container">
          <Projects />
        </div>
        <div id="main-right" className="hidden lg:block flex-1 border-l-2 border-black dark:border-white min-w-0 min-h-0">
          <Introduction />
        </div>
      </main>
      <Footer displayReturn={false}/>
    </div>
  )
}


export default Home
