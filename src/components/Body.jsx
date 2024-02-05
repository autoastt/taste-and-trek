import { useState, useEffect } from "react"
import Form from "./Form"
import Map from "./Map"
import data from "../assets/data"
import { Card, Spinner, Typography } from "@material-tailwind/react"
import Instruction from "./Instruction"
import outputData from "../assets/outputData"
const Body = () => {
  const [input, setInput] = useState(data)
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState(outputData)
  const [mapId, setMapId] = useState({
    0: "ChIJQfAL2JYZ2jER9v06BxkNw1k",
    2: "ChIJt7a1YKgZ2jER1U6XOjXyMCA",
    3: "ChIJQ6MVplUZ2jERn1LmNH0DlDA",
    4: "ChIJIwphYaYP2jERR0tVy0RM624",
    1: "ChIJr9wqENkT2jERkRs7pMj6FLQ"
  })
  return ( 
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-8 px-4 lg:ml-12 lg:my-12">
      <div className="lg:grid lg:grid-row-3 lg:gap-2">
        <Card className="pb-8 mb-4 dark:bg-darky1">
          <Instruction/>
        </Card>
        <div className="mb-4 lg:hidden"><Form input={input} setInput={setInput} output={output} setOutput={setOutput} loading={loading} setLoading = {setLoading} mapId={mapId} setMapId={setMapId}/></div>
        <Card className="items-center pb-8 px-4 mb-4 dark:bg-darky1">
          <Typography variant="h2" color="black" className="py-4 dark:text-white">Your Poster</Typography>
          {loading ? <Spinner className="size-12"/> : <img src={output['url']} className="h-auto w-4/5 md:max-w-lg object-cover overflow-hidden rounded-[2rem]"/>}
        </Card>
        <Card className="pb-8 px-6 dark:bg-darky1">
          <Typography variant="h2" color="black" className="text-center py-4 dark:text-white">Your Plan</Typography>
          {loading ? <Spinner className="self-center size-12"/>: (output.text).map(out => 
              (out == "Submit your information to generate your plan!" ? 
              (<Typography variant="h5" className="dark:text-darky3 text-center"> {out} </Typography>)
              :
              (<div key={out} className="pb-3">
                <Typography variant="h5" className="dark:text-darky3"> {out.split(';')[0]} </Typography>
                <Typography variant="h6" className="dark:text-darky4"> {out.split(';')[1]} </Typography>
                <Typography className="dark:text-blue-gray-200"> {out.split(';')[2]} </Typography></div>
              ))
            
          )}
        </Card>
        <Map mapId = {mapId} />
      </div>
      <div className="hidden lg:block"><Form input={input} setInput={setInput} output={output} setOutput={setOutput} loading={loading} setLoading = {setLoading} mapId={mapId} setMapId={setMapId}/></div>
    </div>
  )
  
}
export default Body