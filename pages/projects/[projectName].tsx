import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";



import DarkModeContext from '~/components/context/DarkModeContext';




const ProjectPage: NextPage = (props: any) => {
    console.log("props", props)
    //console.log("<props>", props.test_variable);
    return (
        <div>
            <span>this is the project page</span>
            <Link href="/"><a>go back to front page</a></Link>
            <span>This is external data: {}</span>
        </div>
    );
}

export default ProjectPage;


export const getStaticPaths: GetStaticPaths = async () => {
    

    return {
        paths: [
            {params: {projectName: "Website", test_data: "this is test value"}},
            {params: {projectName: "E-commerce"}},
        ],
        fallback: false
    };
}

//export async function getStaticProps(context: any){
export const getStaticProps: GetStaticProps = async (context) => {
    //console.log("<context>", context);
    const { params } = context;
    //console.log("context.params", params);

    return {
        props: {
            data: {
                field1: "test value",
                experiment: "070"
            }
        }
    }
}
