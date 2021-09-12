import projects from "~/public/staticData/projects";
import Dashline from "~/components/Dashline";
import Entry from "~/components/TableOfContent/Entry";

const TableOfContent = () => {

    let result: JSX.Element[] = [];
    let years: string[] = [];
    let idx: number = 0;
    for (let i = 0; i < projects.length; i++){
        let project = projects[i];
        let year = project.year;
        if (!years.includes(year)){
            years.push(year);
            result.push(<Dashline key={idx}><span>{year}</span></Dashline>);
            idx++;
        }
        result.push(<Entry key={idx} project={project}/>);
        idx++;
    }

    return (
        <div className="flex flex-col p-4 overflow-x-hidden overflow-y-auto">
            <h1 className="self-center">Table of Content</h1>
            <ul>
                {result}
            </ul>
        </div>
    );
};

export default TableOfContent;