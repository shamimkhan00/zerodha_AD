import styles from "./LeftBar.module.css"
import React, { useState } from 'react';
import stockData from './StockDataDemoJJ.json';


export const LeftBar = ({ onChartDataChange, onStockChange, setActiveComponent }) => {
    const [selectedStock, setSelectedStock] = useState();

    const formatData = (ticker) => {
        return stockData
            .filter(item => item.Ticker === ticker)
            .map(item => ({
                date: item.Date,
                open: parseFloat(item.Open),
                high: parseFloat(item.High),
                low: parseFloat(item.Low),
                close: parseFloat(item.Close),
            }))
            .filter(item => item.open && item.high && item.low && item.close) // Ensure valid data
            .reverse();
    };

    const stockOptions = [...new Set(stockData.map(item => item.Ticker))]; // Get unique tickers dynamically


    const handleStockChange = (stock) => {
        setSelectedStock(stock);
        const updatedChartData = formatData(stock); // Update chartData on stock change
        onChartDataChange(updatedChartData); // Call the prop function with updated data
        onStockChange(stock);
        setActiveComponent('Stocks');
    };

    //Stock button change last value and percentage
    const getPercentageChange = (stock) => {
        const stockDataForStock = stockData.filter(item => item.Ticker === stock);
        const latestClose = stockDataForStock[0]?.Close;
        const previousClose = stockDataForStock[1]?.Close;

        if (latestClose && previousClose) {
            const change = ((latestClose - previousClose) / previousClose) * 100;
            return change.toFixed(2);
        }

        return 0;
    };

    const getStockValueAndColor = (stock) => {
        const stockDataForStock = stockData.filter(item => item.Ticker === stock);
        const latestClose = stockDataForStock[0]?.Close;
        const previousClose = stockDataForStock[1]?.Close;

        if (latestClose && previousClose) {
            const change = latestClose - previousClose;
            if (change > 0) {
                return { value: latestClose, color: 'green' };
            } else if (change < 0) {
                return { value: latestClose, color: 'red' };
            }
        }

        return { value: 0, color: 'gray' };  // Default value and color
    };
    //change

    return (
        <div>
            <div className={styles.Bar}>
                <div className={styles.topBarContain}>
                    <span>
                        NIFTY 50 <span style={{ color: "green" }}>18181.75</span>
                    </span>
                    <span>
                        SENSEX <span style={{ color: "green" }}>61560.64</span>
                    </span>
                </div>
            </div>
            <div className={styles.leftDownBox}>
                {stockOptions.map(stock => {
                    const { value, color } = getStockValueAndColor(stock);
                    const percentageChange = getPercentageChange(stock);
                    return (

                        <button
                            key={stock}
                            onClick={() => handleStockChange(stock)}
                            className={styles.leftDown}
                        >
                            {<span className={styles.stockText}>{stock}</span>}
                            <div className={styles.valueper}>
                                {<span style={{ color: color }}>{value}</span>}
                                {<span style={{ color: color }}>{percentageChange}%</span>}
                            </div>
                        </button>
                    )
                })}
            </div>

        </div>
    )
}