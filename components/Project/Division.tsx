import Dashline from "~/components/Dashline";

interface DivisionProps{
    str: string;
}

const Division = ({str}: DivisionProps) => {
    return (
        <div className="w-9/10 h-auto first:mt-4 last:mb-4">
            <Dashline>
                <span>{str}</span>
            </Dashline>
        </div>

    );
}

export default Division;