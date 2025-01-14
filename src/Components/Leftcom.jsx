import axios from "axios"
import { useEffect, useState } from "react"
import { StockList } from "./StockList"
export const Leftcom = () => {
    // const API = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=7YDX1UHT6CGMFSPI"

    // const [data, setData] = useState([]);



    // const getData = async () => {
    //     try {
    //         const res = await axios.get(API)
    //         console.log(res.data);
    //         // console.log(res.data["Monthly Time Series"]);
    //         // setData(res.MonthlyTimeSeries);
    //     } catch {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getData();
    // }, [])

    return (
        <div>
            {/* {data.map((cur, index) => (
                <StockList key={index} Data={cur} />
            ))} */}
        </div>
    )
}