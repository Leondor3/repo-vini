import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Hero } from './components/Hero'
import { Character } from './components/Character'
import Header from './components/Header'

function App() {

  return (
    <div className='flex flex-col text-gray-50 bg-[#212121]'>
      <Header />
      <Hero />
      <Character /> 
    </div>
  )
}

export default App
