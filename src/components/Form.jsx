import { useState } from "react"
import {
Card,
Input,
Button,
Typography} from "@material-tailwind/react"
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
const Form = () => {
    const handleSubmit = e => {
        e.preventDefault() 
    }
    const handleChange = e => {
        console.log(e.target.value)
    }
    return (
    <Card color="transparent" shadow={false} className="items-center justify-center">
      <Typography variant="h4" color="blue-gray" className="mt-11"> 
        Input
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <TextInput name="Preference" holder="Your preference" />
          <SelectInput />
        </div>
            
        <Button className="mt-6" fullWidth>
          submit
        </Button>
        
      </form>
    </Card>
    )
}
export default Form