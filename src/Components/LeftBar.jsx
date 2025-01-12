import styles from "./LeftBar.module.css"

export const LeftBar = () => {
    return (
        <div>
            <div className={styles.Bar}>
            NIFTY 50 18181.75 -104.75 (-0.57%)
            SENSEX 61560.64 -371.83 (-0.60%)
            </div>
        </div>
    )
}