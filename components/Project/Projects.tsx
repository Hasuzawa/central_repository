import Project from "~/components/Project/Project";


const Projects = () => {
    return (
        //justify will cause scroll to become invalid, because it is as if all items are wrapped in a position: relative box. Overflow
        //won't trigger scrolls and overflowed content is not visible within parent.
        <div id="projects" className="w-screen h-96 lg:w-2/5 mx-auto bg-yellow-200 flex flex-col-reverse items-center gap-y-4 overflow-x-hidden overflow-y-auto scroll-smooth">
            
            <Project
                header="Project 0: Website with React"
                status="completed"
                short_description="my first homepage built with React, Sass and HTML."
                stringArray={["React", "Sass", "HTML"]}
                id={0}
            />
            <Project
                header="Project 1: Website with Django"
                status="in progress"
                short_description=""
                stringArray={["Django","",""]}
                id={1}
            />
            <Project
                header="Project 2: App with Next.js"
                status="in progress"
                short_description="a mobile-first app built with Next.js and Tailwind CSS."
                stringArray={["Nextjs","Tailwind",""]}
                id={2}
            />
            <Project
                header="Project 3: Placeholder"
                status="in progress"
                short_description=""
                stringArray={["Nextjs","Tailwind",""]}
                id={3}
            />
        </div>
    );
}




export default Projects;