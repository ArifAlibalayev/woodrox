import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProjectDetails from './pages/PorjectDetails'
import Projects from './pages/Projects'
import MainLayout from './layout/MainLayout'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
        <Route element={<MainLayout/>} >

        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/ProjectDetails" element={<ProjectDetails />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact></Contact>} />

        </Route>
      </Routes>
  )
}

export default App