import { useState } from 'react'
import './App.css'
import Buttons from './Components/Buttons'
import ConvertCase from './Components/ConvertCase';
import Navbar from './Navbar';

function App() {
  return (
    <>

     <Navbar/>
      <h1 className='text-3xl text-white font-semibold text-center m-[50px]'>Case Converter</h1>
     <ConvertCase/>


    </>
  )
}

export default App
