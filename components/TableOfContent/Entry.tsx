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
        const commonProps = {size: size, className: "flex-grow-0 flex-shrink-0"};

        switch (status){
            case "in design": return <PaintBrush {...commonProps} />
            case "on hiatus": return <Pause {...commonProps} />
            case "in progress": return <Play {...commonProps} />
            case "completed": return <Check {...commonProps} />
        }
    }

    return (
        <li
            onMouseOver={ () => scrollToById(HTML_id)}
            onClick={ () => scrollToById(HTML_id)}
            className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 flex justify-between"
        >
            <span className="truncate">{heading}</span>
            {getIcon(project.status)}
        </li>
    );
};

export default Entry;