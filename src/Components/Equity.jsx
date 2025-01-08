import styles from './Equity.module.css'
import { RiPieChartLine } from "react-icons/ri";
import { FiDroplet } from "react-icons/fi";
import { useState } from 'react';

export const Equity = ({title,logo,margin,marginUsed,opBal}) => {

    const getLogo = () => {
        if(logo == "RiPieChartLine"){
            return <RiPieChartLine />
        }
        else{
            return <FiDroplet />
        }
    }

    return (
        <div className={styles.Equity}>
            <div className={styles.header}>
                {getLogo()}
                <span>{title}</span>
            </div>

            <div className={styles.EquityValue}>
                <div className={styles.margin}>
                    <p>{margin}</p>
                    <p>Margin available</p>
                </div>
                <div className={styles.MarUseBal}>
                    <div className={styles.used}>
                        <p>Margins used</p><p>{marginUsed}</p>
                    </div>
                    <div className={styles.bal}>
                        <p>Opening balance</p><p>{opBal}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
//hello