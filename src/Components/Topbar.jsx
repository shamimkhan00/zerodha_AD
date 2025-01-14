import styles from './Topbar.module.css';
import { CiBellOn } from "react-icons/ci";
import { useState } from 'react';

export const Topbar = ({ setActiveComponent }) => {
    const [activeButton, setActiveButton] = useState('Dashboard');
    const [marketData, setMarketData] = useState({
        nifty: { value: 18181.75, change: -104.75 },
        sensex: { value: 61560.64, change: -371.83 },
    });

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        setActiveComponent(buttonName);
    };

    const formatMarketValue = (value) => {
        return value < 0 ? `${value}` : `+${value}`;
    };

    return (
        <div className={styles.mainBar}>
            <div className={styles.marketInfo}>
                <span>
                    NIFTY 50{' '}
                    <span
                        className={
                            marketData.nifty.change < 0
                                ? styles.negativeValue
                                : styles.positiveValue
                        }
                    >
                        {marketData.nifty.value} {formatMarketValue(marketData.nifty.change)}
                    </span>
                </span>
                <span className={styles.spacer}>|</span> {/* Spacer between NIFTY and SENSEX */}
                <span>
                    SENSEX{' '}
                    <span
                        className={
                            marketData.sensex.change < 0
                                ? styles.negativeValue
                                : styles.positiveValue
                        }
                    >
                        {marketData.sensex.value} {formatMarketValue(marketData.sensex.change)}
                    </span>
                </span>
            </div>
            <img
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
                alt="Zerodha Kite Logo"
                className={styles.Toplogo}
            />
            <div className={styles.buttonbar}>
                <button
                    className={activeButton === 'Dashboard' ? styles.activeButton : ''}
                    onClick={() => handleButtonClick('Dashboard')}
                >
                    Dashboard
                </button>
                <button
                    className={activeButton === 'Orders' ? styles.activeButton : ''}
                    onClick={() => handleButtonClick('Orders')}
                >
                    Orders
                </button>
                <button
                    className={activeButton === 'Holdings' ? styles.activeButton : ''}
                    onClick={() => handleButtonClick('Holdings')}
                >
                    Holdings
                </button>
                <button
                    className={activeButton === 'Positions' ? styles.activeButton : ''}
                    onClick={() => handleButtonClick('Positions')}
                >
                    Positions
                </button>
                <button
                    className={activeButton === 'Bid' ? styles.activeButton : ''}
                    onClick={() => handleButtonClick('Bid')}
                >
                    Bid
                </button>
                <button
                    className={activeButton === 'Funds' ? styles.activeButton : ''}
                    onClick={() => handleButtonClick('Funds')}
                >
                    Funds
                </button>
                <CiBellOn className={styles.notificationIcon} />
                <div className={styles.account}>
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
        </div>
    );
};
