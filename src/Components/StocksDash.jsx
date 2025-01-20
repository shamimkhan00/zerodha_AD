import styles from './StocksDash.module.css';
import React, { useState } from 'react';
import Plot from 'react-plotly.js';

export const StockDash = ({ chartData, selectedStock }) => {
    const displayedDates = chartData.filter((_, index) => index % Math.max(1, Math.floor(chartData.length / 6)) === 0);
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{selectedStock} Stock Candlestick Chart</h2>
            <div className={styles.chartContainer}>
                
                <Plot
                    data={[{
                        x: chartData.map(item => item.date).reverse(),
                        open: chartData.map(item => item.open).reverse(),
                        high: chartData.map(item => item.high).reverse(),
                        low: chartData.map(item => item.low).reverse(),
                        close: chartData.map(item => item.close).reverse(),
                        type: 'candlestick',
                        xaxis: 'x',
                        yaxis: 'y',
                        increasing: { line: { color: 'green' } },
                        decreasing: { line: { color: 'red' } },
                    }]}
                    layout={{
                        xaxis: { 
                            title: 'Date', 
                            gridcolor: '#eee', 
                            showgrid: true, 
                            tickvals: displayedDates.map(item => item.date),  // Only show selected dates
                            fixedrange: false 
                        },
                        yaxis: { 
                            title: 'Price (USD)', 
                            gridcolor: '#eee', 
                            showgrid: true, 
                            fixedrange: false 
                        },
                        dragmode: 'zoom',
                        paper_bgcolor: '#f9f9f9',
                        plot_bgcolor: '#ffffff',
                        margin: { t: 20, r: 20, l: 50, b: 40 },
                        font: { family: 'Arial, sans-serif', size: 12 },
                        
                    }}
                    config={{
                        responsive: true,
                        displayModeBar: true,
                    }}
                    useResizeHandler={true}
                    style={{ width: '90%', height: '90%' }}
                />
            </div>
        </div>
    );
};
