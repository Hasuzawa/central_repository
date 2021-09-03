interface DashlineProps{
    str: string;
}

const Dashline = ({str}: DashlineProps) => {
    return (
        <div className="w-9/10 h-auto">
            <span className="dashline">{str}</span>
        </div>
    );
};

export default Dashline;