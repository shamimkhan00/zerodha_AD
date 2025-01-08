import styles from './Topbar.module.css';
import { CiBellOn } from "react-icons/ci";

export const Topbar = () => {
    return (
        <>
            <div className={styles.mainBar}>
                <img src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="Zerodha Kite Logo"
                    className={styles.Toplogo} />
                <div className={styles.buttonbar}> 
                    <button>Dashboard</button>
                    <button>Orders</button>
                    <button>Holdings</button>
                    <button>Positions</button>
                    <button>Bids</button>
                    <button>Funds</button>
                    <CiBellOn className={styles.notificationIcon}></CiBellOn>
                    <div className={styles.account}>
                        Account
                    </div>
                </div>


            </div>
        </>
    );
};