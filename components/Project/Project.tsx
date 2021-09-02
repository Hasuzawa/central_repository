import Status from "~/components/Project/Status";
import { StringToTags } from "~/components/Tag";

type ProjectProps = {
    readonly header: string;
    readonly status: "completed" | "in progress" | "in design";
    readonly short_description: string;
    readonly stringArray: string[];
}

const Project = ({header, status, short_description, stringArray}: ProjectProps): JSX.Element => {
    return (
        <div className="flex-none w-9/10 h-3/10 border-2 border-black">
            <h1>{header}</h1>
            <Status str={status}/>
            <p className="">{short_description}</p>
            <StringToTags stringArray={stringArray} />
        </div>
    );
}

export default Project;