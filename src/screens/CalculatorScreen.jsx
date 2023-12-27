import React from 'react'
import Calculator from '../components/Calculator'

const CalculatorScreen = () => {
  return (
    <div style={{
        display:'grid',
        gridTemplateColumns:'1.5fr 1fr',
    }}>
        <h3>Lets do some Math</h3>
        <div >
        <Calculator/>
        </div>
    </div>
  )
}

export default CalculatorScreen