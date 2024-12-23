import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppService from './components/service';
import AppFaq from './components/faq'
import AppOrcamento from './components/orcamento'

function App() {
  
  return (
    <>
      <div className='App'>
          <header id='header' style={{backgroundColor: '#1a1a2e'}}>
            <AppHeader/>
          </header>
          <main className='background-image'>
            <AppHero/>  
            <AppService></AppService>
            <AppFaq/>
            <AppOrcamento></AppOrcamento>
          </main>
      </div>
    
    </>
  )
}

export default App
