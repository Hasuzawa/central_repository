import React from "react";
type statusProps = {
    readonly status: "completed" | "in progress" | "on hiatus" | "in design";
    readonly className?: string;
}
const Status = ({status, className}: statusProps): JSX.Element => {

    let commonProps = className ? className : "";
    let color: string = "";
    switch (status){
        case "completed": color = "text-green-500"; break;
        case "in progress": color = "text-yellow-500"; break;
        case "on hiatus": color = "text-red-500"; break;
        case "in design": color = "text-blue-500"; break;
    }

    return (
        <span className={`${color} ${commonProps}`}>{status}</span>
    );
}

export default Status