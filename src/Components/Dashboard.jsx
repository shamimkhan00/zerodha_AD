import styles from './Dashboard.module.css'
import { FiDroplet } from "react-icons/fi";
import { Equity } from './Equity';
import { useState } from 'react';
import { MarginBoard } from './MarginBoard';

export const Dashboard = () => {
    return (
        <div className={styles.mainBody}>
            <div className={styles.user}>Hi, Shamim</div>
            <MarginBoard></MarginBoard>
            

        </div>

    )
}