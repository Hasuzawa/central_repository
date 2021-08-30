const Tag = ({str, id}: {str: string, id?: number}): JSX.Element => {
    return (
        <span className="text-white bg-blue-500 rounded-full">{str}</span>
    );
}

export { Tag };

const StringToTags = ({stringArray}: {stringArray: string[]}): JSX.Element => {
    return (
        <>
            {stringArray.map((str: string, idx: number) => <Tag str={str} id={idx}/>)}
        </>
    );
}

export { StringToTags };