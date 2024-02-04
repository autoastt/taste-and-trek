import { useState, useEffect } from "react"
import NavbarSimple from "./components/NavbarSimple"
import Form from "./components/Form"
import Footer from "./components/Footer"
import data from "./assets/data"
import Body from "./components/Body"
const App = () => {
  const [input, setInput] = useState(data)
  const props = {input, setInput}
  return ( 
    <>
      <NavbarSimple/>
      {/* <Form props={props}/> */}
      <Body/>
      <Footer/>
    </>
  )
}
export default App