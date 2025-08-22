import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import SignUp from './components/SignUp'
import Home from "./pages/HomePage"
import Profile from "./components/ProfilePage"
import Cart from "./pages/CartPage"


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />}/>

      </Routes>
    </Router>
  )

}

export default App;


