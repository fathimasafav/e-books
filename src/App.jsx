import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import SignUp from './components/SignUp'
import Home from "./components/HomePage"


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
  )

}

export default App;


