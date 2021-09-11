import { PaintBrush, Play, Pause, Check } from "phosphor-react";

interface EntryProps{
    HTML_id: string;
    heading: string;
}

function scrollToById(id: string){
    document.getElementById(id)?.scrollIntoView();
}

const Entry = ({HTML_id, heading}: EntryProps) => {

    return (
        <li
            onMouseOver={ () => scrollToById(HTML_id)}
            onClick={ () => scrollToById(HTML_id)}
            className="cursor-pointer hover:bg-gray-300 truncate"
        >
            {heading}
        </li>
    );
};

export default Entry;