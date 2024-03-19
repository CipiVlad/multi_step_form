import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import PersonalInfo from './pages/PersonalInfo'
import SideBar from './components/SideBar'
import './components/SideBar.scss'

function App() {

  return (
    <div className="App">

      <div className="frame_container">
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
