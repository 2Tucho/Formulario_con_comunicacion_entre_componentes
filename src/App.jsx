import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { FormContext } from './context/FormContext'

function App() {
  const [email, setEmail] = useState(null)

  return (
    <>
      <FormContext.Provider value={{ email, setEmail }}>
        <Header />
        <Main />
      </FormContext.Provider>
    </>
  )
}

export default App
