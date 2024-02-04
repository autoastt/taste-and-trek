import { useState, useEffect } from "react"
import Form from "./Form"
import data from "../assets/data"
import { Card } from "@material-tailwind/react"
import Instruction from "./Instruction"

const Body = () => {
  const [input, setInput] = useState(data)
  const [output, setOutput] = useState({})
  return ( 
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-8 px-4">
      <div className="grid lg:grid-row-3 gap-2">
        <Card>
          <Instruction/>
        </Card>
        <div className="lg:hidden"><Form input={input} setInput={setInput} output={output} setOutput={setOutput}/></div>
        <Card>
          <p>Image</p>
       
        </Card>
        <Card>
          <p>Text</p>
         
        </Card>
      </div>
      <div className="hidden lg:block"><Form input={input} setInput={setInput} output={output} setOutput={setOutput}/></div>
    </div>
  )
  
}
export default Body