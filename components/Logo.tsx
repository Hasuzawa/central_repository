import Image from "next/image";
import React from "react";


type IconProps = {
    str: string;
    id: number;
}

const Icon = ({str, id}: IconProps) => {
    const table: {[key: string]: JSX.Element} = {
        "C": <Image className="skill_logo" src={"logos/C_logo.svg"} alt="C"/>,
        "C++": <img className="skill_logo" src={"logos/C++_logo.svg"} alt="C++"/>,
        "Java": <img className="skill_logo" src={"logos/Java_logo.svg"} alt="Java"/>,
        "JavaScript": <img className="skill_logo" src={"logos/Javascript_logo.svg"} alt="JavaScript"/>,
        "Python": <img className="skill_logo" src={"logos/Python_logo.svg"} alt="Python"/>,
        "TypeScript": <img className="skill_logo" src={"logos/Typescript_logo.svg"} alt="TypeScript"/>,


        "HTML": <img className="skill_logo" src={"logos/HTML5_logo.svg"} alt="HTML"/>,
        "CSS": <img className="skill_logo" src={"logos/CSS3_logo.svg"} alt="CSS"/>,
        "React": <img className="skill_logo" src={"logos/React_logo.svg"} alt="React"/>,
        "Sass": <img className="skill_logo" style={{"width": "80px"}} src={"logos/Sass_logo.svg"} alt="Sass"/>,
        "Django": <img className="skill_logo" style={{"width": "100px"}} src={"logos/Django_logo.svg"} alt="Django"/>,

        "Gimp": <img className="skill_logo" src={"logos/Gimp_logo.svg"} alt="Gimp" style={{objectFit: "contain"}}/>,
        "Inkscape": <img className="skill_logo" src={"logos/Inkscape_logo.svg"} alt="Inkscape"/>,

        "GraphQL": <img className="skill_logo" src={"logos/GraphQL_logo.svg"} alt="GraphQL"/>,
        "Graphene-django":<img className="skill_logo" src={"logos/Graphene-django_logo.svg"} alt="Graphene-django"/>,
        "Apollo":<img className="skill_logo" src={"logos/Apollo_logo.svg"} alt="Apollo"/>,

        "Apache": <img className="skill_logo" src={"logos/Apache_logo.png"} alt="Apache"/>,

        "PostgreSQL": <img className="skill_logo" src={"logos/PostgreSQL_logo.svg"} alt="PostgreSQL"/>
    }
    const map = new Map<string, JSX.Element>([
        ["C", <Image className="skill_logo" src={"logos/C_logo.svg"} alt="C" />],
        ["C++", <Image className="skill_logo" src={"logos/C++_logo.svg"} alt="C++" />],
    ]);

    let logo = map.get(str);

    return (
        <>
            {/* {table[str]}
            {map.get(str)} */}
            {React.cloneElement(logo, {key: index})}
        </>
    );
}

type StringToLogosProps = {
    stringArray: string[];
}

const StringToLogos = (stringArray: {stringArray: string[]}) => {
    //let abc = ["yolo", "testing"];
    //abc.map((str) => <span>str</span>);

    function toLogo(str: string, id: number){
        let icon = <Icon str={str} id={id} />
        return icon;
    }
    return (
        {stringArray.map((str: string, idx: number) => <Icon str={str} id={idx}/>)}
    );
}
