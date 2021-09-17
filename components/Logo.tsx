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

    //     "Apache": <img className="skill_logo" src={"logos/Apache_logo.png"} alt="Apache"/>,
    //     "PostgreSQL": <img className="skill_logo" src={"logos/PostgreSQL_logo.svg"} alt="PostgreSQL"/>

    const standardProps: {width: string, height: string} = {width: "50", height: "50"};
    const map = new Map<string, JSX.Element>([
        ["C", <Image src={"/logos/C_logo.svg"} alt="C" {...standardProps} key={0}/>],
        ["C++", <Image src={"/logos/C++_logo.svg"} alt="C++" {...standardProps} key={1}/>],
        ["Java", <Image src={"/logos/Java_logo.svg"} alt="Java" {...standardProps} key={2}/>],
        ["Javascript", <Image src={"/logos/Javascript_logo.svg"} alt="Javascript" {...standardProps} key={3}/>],
        ["Python", <Image src={"/logos/Python_logo.svg"} alt="Python" {...standardProps} key={4}/>],
        ["Typescript", <Image src={"/logos/Typescript_logo.svg"} alt="Typescript" {...standardProps} key={5}/>],

        ["HTML", <Image src={"/logos/HTML_logo.svg"} alt="HTML" {...standardProps} key={6}/>],
        ["CSS", <Image src={"/logos/CSS_logo.svg"} alt="CSS" {...standardProps} key={7}/>],
        ["React", <Image src={"/logos/React_logo.svg"} alt="React" {...standardProps} key={8}/>],
        ["Sass", <Image src={"/logos/Sass_logo.svg"} alt="Sass" {...standardProps} key={9}/>],
        ["Django", <Image src={"/logos/Django_logo.svg"} alt="Django" width={85} height={30} key={10}/>],
        ["Nextjs", <Image src={"/logos/Nextjs_logo.svg"} alt="Nextjs" width={80} height={40} key={11}/>],

        ["Bootstrap", <Image src={"/logos/Bootstrap_logo.svg"} alt="Bootstrap" width={60} height={50} key={12}/>],
        ["Tailwind", <Image src={"/logos/Tailwind_logo.svg"} alt="Tailwind" {...standardProps} key={13}/>],

        ["Gimp", <Image src={"/logos/Gimp_logo.svg"} alt="Gimp" {...standardProps} key={14}/>],
        ["Inkscape", <Image src={"/logos/Inkscape_logo.svg"} alt="Inkscape" {...standardProps} key={15}/>],

        ["GraphQL", <Image src={"/logos/GraphQL_logo.svg"} alt="GraphQL" {...standardProps} key={16}/>],
        ["Graphene", <Image src={"/logos/Graphene-django_logo.svg"} alt="Graphene-django" {...standardProps} key={17}/>],
        ["Apollo", <Image src={"/logos/Apollo_logo.svg"} alt="Apollo" width={95} height={33} key={18}/>],
        
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
    stringArray?: string[];
    className?: string;
}

const StringToLogos = ({stringArray, className}: StringToLogosProps): JSX.Element | null => {
    return stringArray && stringArray.length > 0 ?
        <>
        {stringArray?.map((str: string, idx: number) => (
            <span className={className} key={idx}>
                <Logo str={str} key={idx} idx={idx}/>
            </span>
        ))}
    </> : null
}

export { Logo };
export { StringToLogos };