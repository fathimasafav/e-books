import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import SignUp from './components/SignUp'
import Home from "./pages/HomePage"
import Profile from "./components/ProfilePage"


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  )

}

export default App;


