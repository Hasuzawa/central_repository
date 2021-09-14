import Status from "~/components/Project/Status";
import { StringToTags } from "~/components/Tag";
import { useRouter, NextRouter } from "next/router";

type ProjectProps = {
    readonly projectName: string;
    readonly heading: string;
    readonly status: "completed" | "in progress" | "on hiatus" | "in design";
    readonly short_description: string;
    readonly stringArray: string[];
    readonly HTML_id?: string;
}

const Project = ({projectName, heading, status, short_description, stringArray, HTML_id}: ProjectProps): JSX.Element => {
    const router: NextRouter = useRouter();
    const baseUrl = "/projects/";

    const redirect = () => router.push(baseUrl + projectName);

    return (
        <div
            onClick={redirect}
            title={baseUrl + projectName}
            className="flex-none w-9/10 h-44 border-2 border-black dark:border-white rounded-2xl
                overflow-x-hidden overflow-y-auto first:mt-4 last:mb-4 hover:ring-4 ring-blue-500 cursor-pointer"
            id={HTML_id?.toString()}
            tabIndex={0}
            onKeyPress={(e) => {e.key === "Enter" ? redirect() : null}}
        >
            <div className="grid grid-cols-6 grid-rows-6 place-items-center p-2 min-h-0 min-w-0 w-full h-full">

                <h1 className="row-start-1 row-span-2 col-start-1 col-span-4 text-center overflow-hidden overflow-ellipsis min-h-0 min-w-0 underline">{heading}</h1>
                <Status status={status} className="row-start-1 row-span-2 col-start-5 col-span-2 place-self-center"/>
                <p className="col-start-1 col-span-6 row-start-3 row-span-3 place-self-start overflow-hidden overflow-ellipsis">{short_description}</p>
                <StringToTags stringArray={stringArray} containerClassName="col-start-1 col-span-6 row-start-6" />

            </div>
        </div>
    );
}

export default Project;