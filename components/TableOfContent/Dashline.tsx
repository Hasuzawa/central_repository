interface DashlineProps{
    year: string;
}

const Dashline = ({year}: DashlineProps) => {
    return (
        <li className="dashline">{year}</li>
    );
}

export default Dashline;