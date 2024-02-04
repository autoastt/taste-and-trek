import { useState, useEffect } from "react"
import Form from "./Form"
import data from "../assets/data"
import { Card } from "@material-tailwind/react"

const Body = () => {
  const [input, setInput] = useState(data)

  return ( 
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-8 px-4">
      <div className="grid md:grid-row-3 gap-2">
        <Card>
          <p>Instruction</p>
        </Card>
        <Card>
          <p>Image</p>
        </Card>
        <Card>
          <p>Text</p>
        </Card>
      </div>
      <Form input={input} setInput={setInput}/>
    </div>
  )
}
export default Body