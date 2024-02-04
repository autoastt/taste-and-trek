import { useState, useEffect } from "react"
import Form from "./Form"
import data from "../assets/data"
import { Card, Typography } from "@material-tailwind/react"
import Instruction from "./Instruction"

const Body = () => {
  const [input, setInput] = useState(data)
  const [output, setOutput] = useState({text: [
    "1. Breakfast at Ya Kun Kaya Toast; 18 China St, 01 Far East Square, Singapore 049560; Start your day with traditional Singaporean breakfast at this iconic eatery known for its kaya toast, soft-boiled eggs, and aromatic coffee in a cozy, nostalgic setting.",
    "2. Visit National Gallery Singapore; 1 St Andrew’s Rd, Singapore 178957; Explore Southeast Asian art at this visual arts institution housed in two historic buildings. It's a great indoor activity that showcases a vast collection of Singaporean and Southeast Asian art.",
    "3. Lunch at Hawker Chan; 78 Smith St, Singapore 059872; Enjoy a quick, delicious meal at the world's first Michelin-starred hawker stall, famous for its succulent soya sauce chicken rice and noodles at affordable prices, located in the heart of Chinatown.",
    "4. Explore Sands SkyPark Observation Deck; Marina Bay Sands, 10 Bayfront Ave, Level 57, Singapore 018956; Experience breathtaking panoramic views of the city skyline from this stunning vantage point atop the iconic Marina Bay Sands hotel.",
    "5. Dinner at JUMBO Seafood; 20 Upper Circular Road, #B1-48 The Riverwalk, Singapore 058416; Conclude the day with a sumptuous seafood feast at one of Singapore's most famous restaurants, known for its award-winning Chili Crab and other exquisite seafood dishes, set in a comfortable, family-friendly atmosphere."
], url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-HTFPBqa5bI0tGKuoGPn4LSkp/user-wt0wysxo2zG0mwdSPxiEtjYw/img-s7h3Qbu9oEyKSV5MBQpiAA4F.png?st=2024-02-04T14%3A18%3A38Z&se=2024-02-04T16%3A18%3A38Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-02-04T05%3A39%3A33Z&ske=2024-02-05T05%3A39%3A33Z&sks=b&skv=2021-08-06&sig=tQWWY7ZakTDaL6xyeSE6n5DzoFdOUGTZZiTC4rmYAuU%3D"})
  
  return ( 
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-8 px-4">
      <div className="grid lg:grid-row-3 gap-2">
        <Card className="pb-8">
          <Instruction/>
        </Card>
        <div className="lg:hidden"><Form input={input} setInput={setInput} output={output} setOutput={setOutput}/></div>
        <Card className="items-center pb-8 px-4">
          <Typography variant="h2" color="black" className="py-4">Your Poster</Typography>
          <img src={output['url']} className="h-auto max-w-lg object-cover overflow-hidden rounded-[2rem]"/>
        </Card>
        <Card className="pb-8 px-6">
          <Typography variant="h2" color="black" className="text-center py-4">Your Plan</Typography>
          {(output.text).map(out => 
            <p key={out} className="pb-3">
              <Typography variant="h5"> {out.split(';')[0]} </Typography>
              <Typography variant="h6">Location: {out.split(';')[1]} </Typography>
              <Typography> {out.split(';')[2]} </Typography>
            </p>
          )}
        </Card>
      </div>
      <div className="hidden lg:block"><Form input={input} setInput={setInput} output={output} setOutput={setOutput}/></div>
    </div>
  )
  
}
export default Body