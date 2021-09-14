import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";


class MyDocument extends Document{
    static async getInitialProps(ctx: DocumentContext){
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    //note information inside this <Head> will apply to every page
    render(){
        return (
            <Html lang="en">
            <Head>
                <meta name="keywords"           content="personal projects, central repository, overview of projects" />
                <meta name="description"        content="This is the central repository of Hasuzawa Yuichi. Here
                    you can find all projects with their description, status, techs used and link." />
                <meta name="author"             content="Hasuzawa Yuichi" />

                {/*  Open Graph meta  */}
                
                <meta property="og:locale"      content="en_US" />
                <meta property="og:type"        content="website" />
                <meta property="og:url"         content="" />
                <meta property="og:title"       content="Repository with Hasuzawa's Projects" />
                <meta property="og:description" content="The website is a repository containing all projects by Hasuzawa Yuichi." />
                <meta property="og:image"       content="" />

                <meta property="og:site_name"   content="Hasuzawa's repositories" />

                {/*  Twitter meta  */}

                <meta property="twitter:card"       content="summary" />
                <meta property="twitter:title"      content="Repository with Hasuzawa's Projects"  />
                <meta property="twitter:description"content="The website with all projects by Hasuzawa Yichi."  />
                <meta property="twitter:url"        content=""  />
                <meta property="twitter:image"      content=""  />
                <meta property="twitter:image:alt"  content=""  />
                {/* <meta property="twitter:site"       content=""  /> only needed if you want to mention an account on twitter */}

                {/*  theme color  */}

                <meta name="theme-color" media="(prefers-color-scheme: dark" content="black" />
                <meta name="theme-color" media="(prefers-color-scheme: light" content="white" />
            </Head>
                <body>
                    <Main />
                    {/* <div id="portal-root" className="absolute border-2 border-black
                        top-1/2 left-1/2 "/> */}
                    <NextScript />
                </body>
            </Html>
        );
    }
}


export default MyDocument;