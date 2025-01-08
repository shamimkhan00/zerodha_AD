import styles from './Dashboard.module.css'
import { Equity } from './Equity';
import { useState } from 'react';

export const MarginBoard = () => {

    const [margin, setMargin] = useState(0);
    const [marginUsed, setMarginUsed] = useState(0);
    const [opBal, setOpBal] = useState(0);

    return (
        <div className={styles.EuiCom}>
            <Equity title={"Equity"} logo={"RiPieChartLine"} margin={margin} marginUsed={marginUsed} opBal={opBal}></Equity>
            <Equity title={"Commodity"} logo={"Fidroplet"} margin={margin} marginUsed={marginUsed} opBal={opBal}></Equity>


        </div>
    )
}