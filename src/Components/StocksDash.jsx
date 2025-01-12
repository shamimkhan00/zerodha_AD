import styles from "./StocksDash.module.css";
import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import stockData from './StockDataDemoJJ.json';

export const StockDash = () => {
    const [selectedStock, setSelectedStock] = useState('AAPL');

    // Format data to match the JSON structure
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

    return (
        <div>
            <h2>Stock Candlestick Chart</h2>
            <div>
                {stockOptions.map(stock => (
                    <button
                        key={stock}
                        onClick={() => setSelectedStock(stock)}
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

            <Plot
                data={[{
                    x: chartData.map(item => item.date),
                    open: chartData.map(item => item.open),
                    high: chartData.map(item => item.high),
                    low: chartData.map(item => item.low),
                    close: chartData.map(item => item.close),
                    type: 'candlestick',
                    xaxis: 'x',
                    yaxis: 'y',
                    increasing: { line: { color: 'green' } },
                    decreasing: { line: { color: 'red' } },
                }]}
                layout={{
                    title: `${selectedStock} Candlestick Chart`,
                    xaxis: { title: 'Date' },
                    yaxis: { title: 'Price (USD)' },
                    dragmode: 'zoom',
                    margin: { t: 40, r: 20, l: 50, b: 40 },
                }}
            />
        </div>
    );
};
