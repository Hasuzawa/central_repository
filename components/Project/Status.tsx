import React from "react";


type status = "completed" | "in progress" | "on hiatus" | "in design";
type statusProps = {
    readonly status: status;
    readonly className?: string;
}
const Status = ({status, className}: statusProps): JSX.Element => {

    let commonProps = className ? className : "";
    let bgColor: string = "";
    switch (status){
        case "completed": bgColor = "bg-green-500"; break;
        case "in progress": bgColor = "bg-yellow-500"; break;
        case "on hiatus": bgColor = "bg-red-500"; break;
        case "in design": bgColor = "bg-purple-500"; break;
    }

    return (
        <span className={"text-white rounded-full px-2 " + `${bgColor} ${commonProps}`}>{status}</span>
    );
}

export type { status };
export default Status