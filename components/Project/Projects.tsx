import Project from "~/components/Project/Project";


const Projects = () => {
    return (
        <div id="projects" className="w-screen h-full lg:w-2/5 mx-auto bg-yellow-200 flex flex-col-reverse items-center gap-y-4
            overflow-x-hidden overflow-y-scroll">
            <Project
                header="Project 0: Website with React"
                status="completed"
                short_description="my first homepage built with React, Sass and HTML."
                stringArray={["React", "Sass", "HTML"]}
            />
            <Project
                header="Project 1: Website with Django"
                status="in progress"
                short_description=""
                stringArray={["Django","",""]}
            />
            <Project
                header="Project 2: App with Next.js"
                status="in progress"
                short_description="a mobile-first app built with Next.js and Tailwind CSS."
                stringArray={["Nextjs","Tailwind",""]}
            />
            <Project
                header="Project 3: Placeholder"
                status="in progress"
                short_description=""
                stringArray={["Nextjs","Tailwind",""]}
            />
        </div>
    );
}




export default Projects;