type TagProps = {
    readonly str: string;
    readonly idx?: number;
    readonly className?: string;
}

const Tag = ({str, idx, className}: TagProps): JSX.Element => {
    let commonProps = className ? className : "";
    return (
        <span className={"text-white bg-blue-500 rounded-full px-1.5 cursor-default" + ` ${commonProps}`} id={idx?.toString()}>{str}</span>
    );
}

type StringToTagsProps = {
    stringArray: string[];
    containerClassName?: string;
    tagsClassName ?: string;
}

const StringToTags = ({stringArray, containerClassName, tagsClassName}: StringToTagsProps): JSX.Element => {
    return (
        <div className={"flex flex-row w-full justify-evenly items-center " + (containerClassName ? containerClassName : "")}>
            {stringArray.map((str: string, idx: number) => <Tag str={str} key={idx} idx={idx} className={tagsClassName}/>)}
        </div>
    );
}

export { Tag };
export { StringToTags };