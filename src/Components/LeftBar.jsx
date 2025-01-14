import styles from "./LeftBar.module.css";
import React, { useState } from 'react';
import stockData from './StockDataDemoJJ.json';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export const LeftBar = ({ onChartDataChange, onStockChange, setActiveComponent }) => {
    const [selectedStock, setSelectedStock] = useState();
    const [searchTerm, setSearchTerm] = useState('');

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
            .filter(item => item.open && item.high && item.low && item.close)
            .reverse();
    };

    const stockOptions = [...new Set(stockData.map(item => item.Ticker))];
    const chartData = formatData(selectedStock);

    const handleStockChange = (stock) => {
        setSelectedStock(stock);
        const updatedChartData = formatData(stock);
        onChartDataChange(updatedChartData);
        onStockChange(stock);
        setActiveComponent('Stocks');
    };

    const filteredStockOptions = stockOptions.filter(stock =>
        stock.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStockTrendIcon = (stock) => {
        const stockDataForStock = stockData.filter(item => item.Ticker === stock);
        const latestClose = stockDataForStock[0]?.Close;
        const previousClose = stockDataForStock[1]?.Close;

        if (latestClose && previousClose) {
            if (latestClose > previousClose) {
                return <FaArrowUp className={styles.upArrow} />;
            } else if (latestClose < previousClose) {
                return <FaArrowDown className={styles.downArrow} />;
            }
        }

        return null;
    };

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

    return (
        <div className={styles.leftBar}>
            <input
                type="text"
                placeholder="Search stocks..."
                className={styles.searchBar}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className={styles.stockList}>
                {filteredStockOptions.map(stock => {
                    const { value, color } = getStockValueAndColor(stock);
                    const percentageChange = getPercentageChange(stock);
                    return (
                        <button
                            key={stock}
                            onClick={() => handleStockChange(stock)}
                            className={`${styles.stockButton} ${selectedStock === stock ? styles.selected : ''}`}
                        >
                            <span className={styles.stockText}>
                                {stock}
                            </span>
                            <span
                                className={styles.stockValue}
                                style={{ color }}
                            >
                                {value}
                            </span>
                            <span
                                className={styles.stockPercentage}
                                style={{ color: color }}
                            >
                                ({percentageChange}%)
                            </span>
                            {getStockTrendIcon(stock)}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
