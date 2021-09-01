type TagProps = {
    readonly str: string;
    readonly idx?: number;
    readonly className?: string;
}

const Tag = ({str, idx, className}: TagProps): JSX.Element => {
    return (
        <span className="text-white bg-blue-500 rounded-full px-1.5 cursor-default" id={idx?.toString()}>{str}</span>
    );
}

type StringToTagsProps = {
    stringArray: string[];
    className?: string;
}

const StringToTags = ({stringArray}: StringToTagsProps): JSX.Element => {
    return (
        <>
            {stringArray.map((str: string, idx: number) => <Tag str={str} key={idx} idx={idx}/>)}
        </>
    );
}

export { Tag };
export { StringToTags };