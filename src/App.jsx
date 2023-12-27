import React from 'react'
import Navigation from './components/navigation'
import Home from './screens/Home'
import CalculatorScreen from './screens/CalculatorScreen'
import Quote from './screens/Quote'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calculator" element={<CalculatorScreen/>}/>
        <Route path="/quote" element={<Quote/>}/>
      </Routes>
    </BrowserRouter>
  {/* <Quote/> */}
   </>
  )
}

export default App