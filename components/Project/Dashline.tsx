import styles from "~/styles/moduleCSS/Dashline.module.css";

interface DashlineProps{
    str: string;
}

const Dashline = ({str}: DashlineProps) => {
    return (
        <div className="w-9/10 h-auto first:mt-4 last:mb-4">
            <span className={styles.dashline}>{str}</span>
        </div>
    );
};

export default Dashline;