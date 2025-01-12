import styles from './Topbar.module.css';
import { CiBellOn } from "react-icons/ci";

export const Topbar = ({setActiveComponent}) => {
    return (
        <>
            <div className={styles.mainBar}>
                <img src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="Zerodha Kite Logo"
                    className={styles.Toplogo} />
                <div className={styles.buttonbar}>
                    <button onClick={()=>setActiveComponent('Dashboard')}>Dashboard</button>
                    <button onClick={()=>setActiveComponent('Stocks')}>Stocks</button>
                    <CiBellOn className={styles.notificationIcon}></CiBellOn>
                    <div className={styles.account}>
                        Account
                    </div>
                </div>
            </div>
        </>
    );
};