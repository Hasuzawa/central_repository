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
    <div className={"h-screen w-screen flex flex-col" + getDarkModeClassName("page")}>
      <Head>
        <title>Hasuzawa&aspo;s projects</title>
      </Head>
      <Header />
      <main id="main" className="flex-1 min-h-0 flex flex-row dark:bg-black dark:text-white">

      {/* <main id="main" className="flex-1 min-h-0 flex flex-row content-height dark:bg-black dark:text-white overflow-y-hidden"> */}
        <div id="main-left" className="hidden md:block flex-1 height-full border-r-2 border-black dark:border-white min-w-0 min-h-0">
          <TableOfContent />
        </div>
        <div id="main-middle" className="flex-none w-screen relative md:w-3/5 lg:w-2/5 h-full overflow-hidden">
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
