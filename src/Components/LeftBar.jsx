import styles from "./LeftBar.module.css"
import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import stockData from './StockDataDemoJJ.json';

export const LeftBar = ({onChartDataChange,onStockChange,setActiveComponent}) => {
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
    const chartData = formatData(selectedStock);

    const handleStockChange = (stock) => {
        setSelectedStock(stock);
        const updatedChartData = formatData(stock); // Update chartData on stock change
        onChartDataChange(updatedChartData); // Call the prop function with updated data
        onStockChange(stock);
        setActiveComponent('Stocks');
      };

    return (
        <div>
            <div className={styles.Bar}>
                NIFTY 50 18181.75 -104.75 (-0.57%)
                SENSEX 61560.64 -371.83 (-0.60%)
            </div>
            <div>
                <div>
                    {stockOptions.map(stock => (
                        <button
                            key={stock}
                            onClick={() => handleStockChange(stock)}
                            style={{
                                margin: '5px',
                                padding: '10px',
                                backgroundColor: selectedStock === stock ? 'green' : 'gray',
                                color: 'white',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                            }}
                        >
                            {stock}
                        </button>
                    ))}
                </div>




            </div>

        </div>
    )
}