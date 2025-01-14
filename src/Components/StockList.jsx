import React from "react";

export const StockList = ({ Data }) => {
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>{Data.title}</h3>
            {Data.urlToImage && (
                <img src={Data.urlToImage} alt={Data.title} style={styles.image} />
            )}
            <p style={styles.description}>{Data.description}</p>
            <a href={Data.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Read More
            </a>
            <p style={styles.source}>Source: {Data.source.name}</p>
            <p style={styles.date}>Published At: {new Date(Data.publishedAt).toLocaleString()}</p>
        </div>
    );
};

const styles = {
    container: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        backgroundColor: "#f9f9f9"
    },
    title: {
        fontSize: "1.2em",
        fontWeight: "bold",
        marginBottom: "8px"
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "4px",
        marginBottom: "8px"
    },
    description: {
        fontSize: "1em",
        marginBottom: "8px"
    },
    link: {
        color: "#007BFF",
        textDecoration: "none",
        fontWeight: "bold"
    },
    source: {
        fontSize: "0.9em",
        color: "#555"
    },
    date: {
        fontSize: "0.8em",
        color: "#777"
    }
};

export default StockList;
