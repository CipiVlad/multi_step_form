import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import PersonalInfo from './pages/PersonalInfo'
import './components/SideBar.scss'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Finish from './pages/Finish'
import ThankYou from './pages/ThankYou'



let sum: any = []
export const StepContext = React.createContext(sum)

function App() {



  return (
    <StepContext.Provider value={sum}>
      <div className="App">
        <div className="frame_container">
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
    </StepContext.Provider>
  )
}

export default App
