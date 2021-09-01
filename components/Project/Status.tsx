import React from "react";
type statusProps = {
    readonly str: "completed" | "in progress" | "in design";
    readonly className?: string;
}
const Status = ({str, className}: statusProps): JSX.Element => {

    let commonProps = className ? className : "";
    let color: string = "";
    switch (str){
        case "completed": color = "text-green-500"; break;
        case "in progress": color = "text-yellow-500"; break;
        case "in design": color = "text-blue-500"; break;
    }

    return (
        <span className={`${color} ${commonProps}`}>{str}</span>
    );
}

export default Status