import { PaintBrush, Play, Pause, Check } from "phosphor-react";
import { Project } from "~/public/staticData/projects";
import { status } from "~/components/Project/Status";

interface EntryProps{
    project: Project;
}

function scrollToById(id: string){
    document.getElementById(id)?.scrollIntoView();
}

const Entry = ({project}: EntryProps) => {
    const HTML_id = project.HTML_id;
    const heading = project.heading;

    
    function getIcon(status: status){
        const size = 24;

        switch (status){
            case "in design": return <PaintBrush size={size} />
            case "on hiatus": return <Pause size={size} />
            case "in progress": return <Play size={size} />
            case "completed": return <Check size={size} />
        }
    }

    return (
        <li
            onMouseOver={ () => scrollToById(HTML_id)}
            onClick={ () => scrollToById(HTML_id)}
            className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 truncate flex justify-between"
        >
            {heading}
            {getIcon(project.status)}
        </li>
    );
};

export default Entry;