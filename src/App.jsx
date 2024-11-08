// import React from 'react'
// import Sidebar from './components/Sidebar'
// import Header from "./components/Header"
// import Content from './components/Content'

// const App = () => {
//   return (
//     <>
//       <div className='flex'>
//         <Sidebar />
//         <div className='flex-1'>
//           <Header/>
//           <Content/>
//          </div>
//       </div>
//     </>
//   )
// }

// export default App

import { Route, Routes } from 'react-router-dom';
import InventoryPage from './pages/InventoryPage';
import InventoryViewPage from './pages/InventoryViewPage';
import InventorySummaryPage from './pages/InventorySummaryPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header'

function App() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex-1'>
        <Header/>
      <Routes>
      <Route path="/" element={<InventorySummaryPage />} />
        <Route path="/inventory-view" element={<InventoryViewPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
      </div>
    </div>
     
   
  );
}

export default App;