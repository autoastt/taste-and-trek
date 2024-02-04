import { Typography } from '@material-tailwind/react'

const Instruction = () => {
  return (
    <div>
      <Typography className = "text-indigo-500 text-5xl font-bold text-center">
        Plan your day!
      </Typography>
      <Typography className = "text-xl text-center" color = "black">
        Find <span className = "font-bold">Restaurant</span> or <span className ="font-bold">Place</span> to go within 60 seconds
      </Typography>
      <Typography className = "text-center grid grid-cols-2" color = "black">
        <span className = "text-center text-base">Tell us what you're looking for</span> 
        <span className = "text-center text-base">Edit</span>
      </Typography>
    </div>
  )
}

export default Instruction
