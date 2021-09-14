import Project from "~/components/Project/Project";
import Division from "~/components/Project/Division";

import projects from "~/public/staticData/projects";

const Projects = () => {

    let result: JSX.Element[] = [];
    let years: string[] = [];
    let idx: number = 0;

    for (let i = 0; i < projects.length; i++){
        let project = projects[i];
        let year = project.year;
        if (!years.includes(year)){
            years.push(year);
            result.push(<Division key={idx} str={year} />);
            idx++;
        }
        result.push(
            <Project
                key={idx}
                projectName={project.projectName}
                HTML_id={project.HTML_id}
                heading={project.heading}
                status={project.status}
                short_description={project.short_description}
                stringArray={project.stringArray}
            />);
        idx++;
    }


    return (
        //justify will cause scroll to become invalid, because it is as if all items are wrapped in a position: relative box. Overflow
        //won't trigger scrolls and overflowed content is not visible within parent.

        //content-height is calculated under the assumption of header and footer with fixed height. I spent too much time on this, I should move on and design other parts first.
        <div id="projects" className="content-height mx-auto bg-white dark:bg-black flex flex-col items-center gap-y-4 overflow-x-hidden overflow-y-auto scroll-smooth">
            {result}
        </div>
    );
}


export default Projects;