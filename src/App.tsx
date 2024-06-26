import { Routes, Route, useLocation } from 'react-router-dom'
import './index.scss'
import PersonalInfo from './pages/PersonalInfo'
import './components/SideBar.scss'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Finish from './pages/Finish'
import ThankYou from './pages/ThankYou'
import StorageProvider from './contexts/StorageProvider'
import { useEffect, useState } from 'react'
import PageNotFound from './components/page_cards/PageNotFound'

function App() {

  const mediaStyleFrameContainer: any = {

    // Adding media query..
    '@media (maxWidth: 375px)': {
      height: '100vh',
    },
  };
  const { pathname } = useLocation()
  const [height, setHeight] = useState(mediaStyleFrameContainer)

  return (
    <StorageProvider>
      <div className="App">
        <div className="frame_container" style={pathname === "/thank-you" && window.innerWidth < 768 ? { height: '100vh' } : height}>
          <div className="main_container">
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/select-plan" element={<SelectPlan />} />
              <Route path="/add-ons" element={<AddOns />} />
              <Route path="/finish" element={<Finish />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </StorageProvider >
  )
}

export default App
