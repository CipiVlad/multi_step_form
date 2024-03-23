import { Routes, Route } from 'react-router-dom'
import './index.scss'
import PersonalInfo from './pages/PersonalInfo'
import './components/SideBar.scss'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/AddOns'
import Finish from './pages/Finish'
import ThankYou from './pages/ThankYou'
import StorageProvider from './contexts/StorageProvider'

function App() {
  return (
    <StorageProvider>
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
    </StorageProvider>
  )
}

export default App
