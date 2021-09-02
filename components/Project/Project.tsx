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
        <div className="flex-none w-9/10 h-3/10 border-2 border-black rounded-2xl grid grid-cols-6 grid-rows-6 place-items-center">
            <h1 className="col-start-1 col-span-4">{header}</h1>
            <Status str={status} className="col-start-5 col-span-2"/>
            <p className="col-start-1 col-span-6 row-start-2 row-span-4 place-self-start p-2">{short_description}</p>
            <StringToTags stringArray={stringArray} containerClassName="col-start-1 col-span-6 row-start-6" />
        </div>
    );
}

export default Project;