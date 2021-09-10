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
                <meta name="keywords" content="personal projects, central repository, overview of projects" />
                <meta name="description" content="This is the central repository of Hasuzawa Yuichi. Here
                    you can find all projects with their description, status, techs used and link." />
                <meta name="author" content="Hasuzawa Yuichi" />
                {/* <link rel="icon" content=""/> */}
            </Head>
                <body>
                    <Main />
                    <div id="portal-root" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}


export default MyDocument;