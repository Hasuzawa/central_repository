//I cannot find a way to directy import (import "styles/...";) and still work
import styles from "~/styles/moduleCSS/Dashline.module.css";

interface DashlineProps{
    year: string;
}

const Dashline = ({year}: DashlineProps) => {
    return (
        <li className={styles.dashline}>{year}</li>
    );
}

export default Dashline;