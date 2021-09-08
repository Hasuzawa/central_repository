import Project from "~/components/Project/Project";
import Dashline from "~/components/Project/Dashline";

import projects from "~/public/staticData/projects";

const Projects = () => {
    return (
        //justify will cause scroll to become invalid, because it is as if all items are wrapped in a position: relative box. Overflow
        //won't trigger scrolls and overflowed content is not visible within parent.

        //content-height is calculated ad-hoc solution. I spent too much time on this, I should move on and design other parts first.
        <div id="projects" className="content-height mx-auto bg-yellow-200 flex flex-col items-center gap-y-4 overflow-x-hidden overflow-y-auto scroll-smooth">
            <Dashline str="2021" />
            {projects.map((project, idx) => (<Project
                key={idx}
                HTML_id={project.HTML_id}
                heading={project.heading}
                status={project.status}
                short_description={project.short_description}
                stringArray={project.stringArray}
            />))}
        </div>
    );
}


export default Projects;