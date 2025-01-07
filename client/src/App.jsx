import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-100 to-violet-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buy" element={<BuyCredit/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
      <Footer/>
    </div>

  )
}