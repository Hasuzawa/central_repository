interface DashlineProps{
    children?: React.ReactNode;
}

/**
 * @remark
 * This component is intended to take a span child, then add two pair of lines around it.
 * 
 * @param
 * wrap between a <span> for best effect
 * 
 */
const Dashline = ({children}: DashlineProps) => {
    
    if (!children){
        return (
            <div className="border-t border-black dark:border-white" />
        );
    } else {
        return (
            <div className="flex flex-row">
                <span className={"flex-1 border-t border-black dark:border-white self-center mr-3"}></span>
                <div>{children}</div>
                <span className={"flex-1 border-t border-black dark:border-white self-center ml-3"}></span>
            </div>
        );
    }
}


export default Dashline;