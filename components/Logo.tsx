import React, { CSSProperties } from "react";
import Image from "next/image";


//note that key is special, it does not need to be included in child input types
//@parAm and @parEm are slightly different
type IconProps = {
    readonly str: string;
    readonly idx?: number;
    readonly className?: string;
}
/**
 * @remarks
 * string => <Image /> based on built-in mapping, can be used alone or as component.
 * 
 * @parem str - the input string
 * @parem idx - the optional key (when used in mass mapping)
 * @parem className - style the <span> wrapper of logo, useful for CSS frameworks such as Boostrap and Tailwind
 * 
 * @returns the image corresponding to the input string
 */
const Logo = ({str, idx, className}: IconProps) => {
    //     "TypeScript": <img className="skill_logo" src={"logos/Typescript_logo.svg"} alt="TypeScript"/>,
    //     "Django": <img className="skill_logo" style={{"width": "100px"}} src={"logos/Django_logo.svg"} alt="Django"/>,

    //     "GraphQL": <img className="skill_logo" src={"logos/GraphQL_logo.svg"} alt="GraphQL"/>,
    //     "Graphene-django":<img className="skill_logo" src={"logos/Graphene-django_logo.svg"} alt="Graphene-django"/>,
    //     "Apollo":<img className="skill_logo" src={"logos/Apollo_logo.svg"} alt="Apollo"/>,

    //     "Apache": <img className="skill_logo" src={"logos/Apache_logo.png"} alt="Apache"/>,

    //     "PostgreSQL": <img className="skill_logo" src={"logos/PostgreSQL_logo.svg"} alt="PostgreSQL"/>
    // }
    const standardProps: {width: string, height: string} = {width: "50", height: "50"};
    const map = new Map<string, JSX.Element>([
        ["C", <Image src={"/logos/C_logo.svg"} alt="C" {...standardProps} />],
        ["C++", <Image src={"/logos/C++_logo.svg"} alt="C++" {...standardProps} />],
        ["Java", <Image src={"/logos/Java_logo.svg"} alt="Java" {...standardProps} />],
        ["Javascript", <Image src={"/logos/Javascript_logo.svg"} alt="Javascript" {...standardProps} />],
        ["Python", <Image src={"/logos/Python_logo.svg"} alt="Python" {...standardProps} />],
        ["Typescript", <Image src={"/logos/Typescript_logo.svg"} alt="Typescript" {...standardProps} />],

        ["HTML", <Image src={"/logos/HTML_logo.svg"} alt="HTML" {...standardProps} />],
        ["CSS", <Image src={"/logos/CSS_logo.svg"} alt="CSS" {...standardProps} />],
        ["React", <Image src={"/logos/React_logo.svg"} alt="React" {...standardProps} />],
        ["Sass", <Image src={"/logos/Sass_logo.svg"} alt="Sass" {...standardProps} />],
        ["Django", <Image src={"/logos/Django_logo.svg"} alt="Django" width="95" height="33" />],
        ["Nextjs", <Image src={"/logos/Nextjs_logo.svg"} alt="Nextjs" {...standardProps} />],
        ["Tailwind", <Image src={"/logos/Tailwind_logo.svg"} alt="Tailwind" {...standardProps} />],

        ["Gimp", <Image src={"/logos/Gimp_logo.svg"} alt="Gimp" {...standardProps} />],
        ["Inkscape", <Image src={"/logos/Inkscape_logo.svg"} alt="Inkscape" {...standardProps} />],


    ]);

    let logo: JSX.Element | undefined = map.get(str);
    if (logo == undefined){
        throw TypeError(`image does not exist for string: ${str}`);
    }
    let result: JSX.Element = logo as JSX.Element

    return (
        <>
            {React.cloneElement(logo, {key: idx, className: className})}
        </>
    );
}

type StringToLogosProps = {
    stringArray: string[];
    className?: string;
}

const StringToLogos = ({stringArray, className}: StringToLogosProps) => {
    return (
        <>
            {stringArray.map((str: string, idx: number) => (
                <span className={className} key={idx}>
                    <Logo str={str} key={idx} idx={idx}/>
                </span>
            ))}
        </>
    );
}

export { Logo };
export { StringToLogos };