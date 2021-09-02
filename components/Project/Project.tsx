import Status from "~/components/Project/Status";

type ProjectProps = {
    readonly header: string;
    readonly status: "completed" | "in progress" | "in design";
    readonly short_description: string;
    readonly stringArray: string[];
}

const Project = ({header, status, short_description, stringArray}: ProjectProps): JSX.Element => {
    return (
        <div>
            <h1>{header}</h1>
            <Status str={status}/>


        </div>
    );
}

export default Project;