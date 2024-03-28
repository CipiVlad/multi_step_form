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



function App() {

  const style = {

    // Adding media query..
    '@media (maxWidth: 375px)': {
      height: '100vh',
    },
  };

  const { pathname } = useLocation()
  console.log(pathname);

  const [addProps, setAddProps] = useState(false)
  const [height, setHeight] = useState(style)

  //helper function

  useEffect(() => {
    if (pathname === "/thank-you") {
      setAddProps(true)
    } else {
      setAddProps(false)
    }
  }, [pathname])


  return (
    <StorageProvider>
      <div className="App">
        <div className="frame_container"
          //if thank you page is active then set height to 100vh but only for mobile
          style={pathname === "/thank-you" && window.innerWidth < 768 ? { height: '100vh' } : height}
        >
          <div className="main_container">
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/select-plan" element={<SelectPlan />} />
              <Route path="/add-ons" element={<AddOns />} />
              <Route path="/finish" element={<Finish />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
        </div>
      </div>
    </StorageProvider >
  )
}

export default App
