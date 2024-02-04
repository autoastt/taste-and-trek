import { useState, useEffect } from "react"
import NavbarSimple from "./components/NavbarSimple"
import Form from "./components/Form"
import Footer from "./components/Footer"

const App = () => {
  return ( 
    <>
      <NavbarSimple/>
      <Form/>
      <Footer/>
    </>
  )
}
export default App