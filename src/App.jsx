import { Topbar } from './Components/Topbar'
import { Dashboard } from './Components/Dashboard'
import { StockDash } from './Components/StocksDash'
import { LeftBar } from './Components/LeftBar'
import { Leftcom } from './Components/Leftcom'
import './App.css'
import { useState } from 'react'

function App() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent){
      case 'Dashboard':
        return <Dashboard></Dashboard>;
      case 'Stocks':
        return <StockDash></StockDash>;
      default:
        return <Dashboard></Dashboard>;
    }
  };
  return (
    <>
      <div className='mainBody'>
        <div className='left'>
          <LeftBar></LeftBar>
          {/* <Leftcom></Leftcom> */}
        </div>
        <div className='right'>
          <Topbar setActiveComponent={setActiveComponent}></Topbar>
          {renderComponent()}
          {/* <Dashboard></Dashboard> */}

          
        </div>
      </div>



    </>
  )
}

export default App
