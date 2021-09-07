import TableOfContent from "~/components/TableOfContent/TableOfContent";
import { useState } from "react";

const TableOfContentButton = () => {
    const [ isOpen, setOpen ] = useState<boolean>(false);
    return (
        <>
        <button
            onClick={() => setOpen(!isOpen)}
        >
            open tableOfContent
        </button>
            <div className="absolute">

            </div>
        </>
    );
}

export default TableOfContentButton;