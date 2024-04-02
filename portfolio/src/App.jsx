import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './styles/styles.css'
import Header from "./components/header"
import Footer from "./components/footer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <div className='heroImage'>
      <Header />
      <main className="mx-3" style={{marginTop: 40, marginBottom: 30}}>
        <Outlet/>
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App
