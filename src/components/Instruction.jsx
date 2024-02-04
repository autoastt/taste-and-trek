import { Typography } from '@material-tailwind/react'

const Instruction = () => {
  return (
    <div>
      <Typography className = "text-indigo-500 text-5xl font-bold">
        Plan your day!
      </Typography>
      <Typography className = "text-lg" color = "black">
        Find <span className ="font-bold">Restaurant</span> or <span className ="font-bold">Place</span> to go with only 3 steps:
      </Typography>
      <Typography variant = "Lead" color = "black">
        1st - type what you want<br></br>
        2nd - <br></br>
        3rd - d
      </Typography>
    </div>
  )
}

export default Instruction
