
import Dashline from "~/components/Dashline";

const Introduction = () => {
    return (
        <div className="flex flex-col p-4 overflow-x-hidden overflow-y-auto">
            <h1 className="self-center">About</h1>
            <p>
                This is a central repository of my projects. I made this in order to, as React put it, maintain
                a singular source of truth. It is more maintainable this way. Here you can find all my personal
                projects.
            </p>
            <Dashline />
            <p>
                Some of the projects are not yet completed, or even suspended. The reason is simple, I foresee
                that the time I need to invest does not yield a commensurate progress in skill or knowledge.
                At this stage of my career I want to prioritise learning as much as possible in the shortest
                timeframe. It is unlikely that anything I complete now is relevant for more than 3 years.
                I ought to move forward first before designing my magnum opus.
            </p>
        </div>
    );
}

export default Introduction;