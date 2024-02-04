import { useState } from "react"
import {
Card,
Input,
Button,
Typography} from "@material-tailwind/react"
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
const Form = (props) => {
    const {input, setInput} = props
    const handleSubmit = e => {
        e.preventDefault() 
    }
    return (
    <Card color="transparent" shadow={false} className="items-center justify-center">
      <Typography variant="h4" color="blue-gray" className="mt-11"> 
        Taste and Trek
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Fill your information 
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <TextInput name="Preference" holder="Your preference" input={input} setInput={setInput} index="preference"/>
          <TextInput name="Recent Travel" holder="Your recent travel" input={input} setInput={setInput} index="recent_travel" />
          <SelectInput options={["male","female","other"]} label="select gender"/>
        </div>
        <Button  type="submit"  className="mt-6" fullWidth>
          submit
        </Button>
        
      </form>
    </Card>
    )
}
export default Form