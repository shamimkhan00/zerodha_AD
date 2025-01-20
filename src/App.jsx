import { Topbar } from './Components/Topbar'
import { Dashboard } from './Components/Dashboard'
import { StockDash } from './Components/StocksDash'
import { LeftBar } from './Components/LeftBar'
import { Leftcom } from './Components/Leftcom'
import './App.css'
import { useState } from 'react'

function App() {

  const [parentChartData, setParentChartData] = useState([]); // State to store chart data in parent
  const [parentSelectedStock, setParentSelectedStock] = useState('AAPL');
  const handleChartDataChange = (updatedChartData) => {
    setParentChartData(updatedChartData); // Update parent state with new chart data
  };

  const handleSelectedStockChange = (selectedStock) => {
    setParentSelectedStock(selectedStock); // Update parent state with selectedStock
  };

  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent){
      case 'Dashboard':
        return <Dashboard></Dashboard>;
      case 'Stocks':
        return <StockDash chartData={parentChartData} selectedStock={parentSelectedStock}></StockDash>;
      default:
        return <Dashboard></Dashboard>;
    }
  };
  return (
    <>
      <div className='mainBody'>
        <div className='left'>
          <LeftBar onChartDataChange={handleChartDataChange} onStockChange={handleSelectedStockChange} setActiveComponent={setActiveComponent}></LeftBar>
          {/* <Leftcom></Leftcom> */}
        </div>

        <div className='right'>
          <Topbar setActiveComponent={setActiveComponent}></Topbar>
          
          {renderComponent()} 
          {/* MAIN RIGHT COMPONENT */}
          

          
        </div>
        
      </div>



    </>
  )
}

export default App
