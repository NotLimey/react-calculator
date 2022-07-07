import { useState } from 'react'
import CalculatorBtn from './components/CalculatorBtn'


function App() {

  return (
    <div className="bg-indigo-500 from-indigo-600 bg-gradient-to-br w-full h-screen flex justify-center items-center">
      <div className='backdrop-blur-xl bg-white/50 rounded-md shadow-xl grid grid-cols-4 calculator text-2xl font-mono font-extralight'>
        <div className='col-span-4 calculator-line-h border-b border-b-indigo-900 w-full h-full flex justify-end items-center px-4 py-2'>
          9910
        </div>
        <CalculatorBtn text='AC' />
        <CalculatorBtn text='+/-' />
        <CalculatorBtn text='%' />
        <CalculatorBtn text='÷' />
        <CalculatorBtn text='7' />
        <CalculatorBtn text='8' />
        <CalculatorBtn text='9' />
        <CalculatorBtn text='X' />
        <CalculatorBtn text='4' />
        <CalculatorBtn text='5' />
        <CalculatorBtn text='6' />
        <CalculatorBtn text='-' />
        <CalculatorBtn text='1' />
        <CalculatorBtn text='2' />
        <CalculatorBtn text='3' />
        <CalculatorBtn text='+' />
        <CalculatorBtn className='col-span-2' text='0' />
        <CalculatorBtn text=',' />
        <CalculatorBtn text='=' />
      </div>
    </div>
  )
}

export default App
