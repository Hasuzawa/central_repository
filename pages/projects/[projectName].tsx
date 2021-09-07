import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";


import projects, { Project } from "~/public/staticData/projects";
import DarkModeContext from '~/components/context/DarkModeContext';

interface ProjectPageProps{
    props: {
        data: {
            project: Project
        }
    }
    data: {
        project: Project
    }
}



const ProjectPage: NextPage<ProjectPageProps> = (props: ProjectPageProps) => {
    console.log("props is this:", props)
    const project = props.data.project;

    return (
        <div>
            <span>this is the project page</span>
            <Link href="/"><a>go back to front page</a></Link>
            <span>This is external data: {}</span>
            <span>heading; {project.heading}</span>
            {/* <span>year is {project.year}</span> */}
        </div>
    );
}

export default ProjectPage;


export const getStaticPaths: GetStaticPaths = async () => {
    let pathArray = projects.map((project: Project) => {return {params: {projectName: project.projectName}}});

    // return {
    //     paths: [
    //         {params: {projectName: "Website"}},
    //         {params: {projectName: "E-commerce"}},
    //     ],
    //     fallback: false
    // };
    return {paths: pathArray, fallback: false};
}


export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    const projectName = params?.projectName;

    const project: Project | undefined = projects.find((project: Project) => project.projectName === projectName);

    return {
        props: {
            data: {
                project
            }
        }
    }
}
