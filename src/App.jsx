import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    <div className="min-h-[81.75vh]  bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

    <Manager/>
    </div>
    <div className="fixed bottom-0 w-full ">

     <Footer/>
    </div>
    </>
  )
}

export default App
