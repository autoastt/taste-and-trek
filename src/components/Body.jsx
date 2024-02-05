import { useState, useEffect } from "react"
import Form from "./Form"
import data from "../assets/data"
import { Card, Typography } from "@material-tailwind/react"
import Instruction from "./Instruction"
import outputData from "../assets/outputData"
const Body = () => {
  const [input, setInput] = useState(data)
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState(outputData)
  return ( 
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-8 px-4">
      <div className="lg:grid lg:grid-row-3 lg:gap-2">
        <Card className="pb-8 mb-4">
          <Instruction/>
        </Card>
        <div className="mb-4 lg:hidden"><Form input={input} setInput={setInput} output={output} setOutput={setOutput} loading={loading} setLoading = {setLoading}/></div>
        <Card className="items-center pb-8 px-4 mb-4">
          <Typography variant="h2" color="black" className="py-4">Your Poster</Typography>
          <img src={output['url']} className="h-auto w-4/5 md:max-w-lg object-cover overflow-hidden rounded-[2rem]"/>
        </Card>
        <Card className="pb-8 px-6">
          <Typography variant="h2" color="black" className="text-center py-4">Your Plan</Typography>
          {(output.text).map(out => 
            <div key={out} className="pb-3">
              <Typography variant="h5"> {out.split(';')[0]} </Typography>
              <Typography variant="h6">Location: {out.split(';')[1]} </Typography>
              <Typography> {out.split(';')[2]} </Typography>
            </div>
          )}
        </Card>
      </div>
      <div className="hidden lg:block"><Form input={input} setInput={setInput} output={output} setOutput={setOutput} loading={loading} setLoading = {setLoading}/></div>
    </div>
  )
  
}
export default Body