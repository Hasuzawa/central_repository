
const TableOfContent = () => {

    function scrollTo(id: string){
        document.getElementById(id)?.scrollIntoView();
    }

    return (
        <div className="flex flex-col p-4">
            <h1 className="self-center">Table of Content</h1>
            <ul>
                <li className="dashline">2021</li>
                <li onMouseEnter={ () => scrollTo("Project-3")} className="hover:bg-gray-200">Project 3</li>
                <li onMouseEnter={ () => scrollTo("Project-2")}>Project 2</li>
                <li onMouseEnter={ () => scrollTo("Project-1")}>Project 1</li>
                <li onMouseEnter={ () => scrollTo("Project-0")}>Project 0</li>
            </ul>
        </div>

    );
};

export default TableOfContent;