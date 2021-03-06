import React from "react";

type projectStatus = "scheduled" | "in design" | "on hiatus" | "in progress" | "completed";

type statusProps = {
    readonly status: projectStatus;
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
        case "scheduled": bgColor = "bg-pink-400"; break;
    }

    return (
        <span className={"text-white rounded-full px-2 " + `${bgColor} ${commonProps}`}>{status}</span>
    );
}

export type { projectStatus };
export default Status