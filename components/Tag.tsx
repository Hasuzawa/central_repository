type TagProps = {
    str: string;
    id?: number;
}

const Tag = ({str, id}: TagProps): JSX.Element => {
    return (
        <span className="text-white bg-blue-500 rounded-full px-1.5 cursor-default" id={id}>{str}</span>
    );
}

export { Tag };


type StringToTagsProps = {
    stringArray: string[];
}

const StringToTags = ({stringArray}: StringToTagsProps): JSX.Element => {
    return (
        <>
            {stringArray.map((str: string, idx: number) => <Tag str={str} id={idx}/>)}
        </>
    );
}

export { StringToTags };