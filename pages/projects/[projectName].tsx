import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";

import { StringToLogos } from "~/components/Logo";
import Status from '~/components/Project/Status';

import { Link as LinkIcon } from 'phosphor-react';

import projects, { Project } from "~/public/staticData/projects";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";

import getDarkModeClassName from "darkModeCSS/darkModeClassNames";

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

    const project = props.data.project;

    function getLink(link: undefined | string){
        if (link === undefined || link === ""){
            return null;
        } else {
            return <Link href={link}><a className="flex"><LinkIcon size={24} />redirect</a></Link>;
        }
    }

    return (
        <div className={"flex flex-col w-screen h-screen" + getDarkModeClassName("page")}>
            <Head>
                <title>{project.projectName}</title>
            </Head>
            <Header />
            <div className={`center w-screen flex justify-center` + getDarkModeClassName("main")} >
                <main className={`h-full max-w-screen-lg self-center flex flex-col gap-y-2 min-w-0 min-h-0
                    overflow-x-hidden overflow-y-scroll p-4`}>
                    <div className="flex justify-between">
                        <h1>{project.heading}</h1>
                        <Status status={project.status} />
                    </div>
                    {/* note that black logos will be invisible in dark mode */}
                    <div className="flex flex-row items-center gap-x-2 px-1 py-1 bg-white">
                        <StringToLogos stringArray={project.logoArray} className="flex items-center" />
                    </div>
                    <div className="flex justify-between">
                        <span>year: {project.year}</span>
                        {getLink(project.link)}
                    </div>
                    

                    {/* <span>year is {project.year}</span> */}
                    <p>
                        {project.long_description}
                    </p>

                </main>
            </div>
            <Footer displayTableOfContent={false} displayAbout={false} displayReturn={true}/>
        </div>
    );
}

export default ProjectPage;


export const getStaticPaths: GetStaticPaths = async () => {
    let pathArray = projects.map((project: Project) => {return {params: {projectName: project.projectName}}});

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
