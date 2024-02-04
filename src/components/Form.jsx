import { useState } from "react"
import {
Card,
Button,
Typography} from "@material-tailwind/react"
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import generation from "../gpt/generation"

const Form = (props) => {
    const {input, setInput, output, setOutput} = props
    const handleSubmit = e => {
        e.preventDefault() 
        console.log(input)
        generation(input)
        .then((result) => {
          // console.log("result", result)
          setOutput(result)
          console.log("out", output)
        })
    }
    return (
    <Card color="transparent" shadow={false} className="items-center justify-center pb-8">
      <Typography variant="h4" color="blue-gray" className="mt-11"> 
        Taste and Trek
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Fill your information 
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <SelectInput options={["Male","Female","Other gender"]} name="Gender" input={input} setInput={setInput} index="gender"/>
          <TextInput name="Age" holder="Your age" input={input} setInput={setInput} index="age" />
          <SelectInput options={["Resident","Tourist"]} name="Status" input={input} setInput={setInput} index="status"/>
          <SelectInput options={["Only Myself","Partner","Friends","Lovers","Family"]} name="Relationship" input={input} setInput={setInput} index="relationship"/>
          <TextInput name="Purpose" holder="Your purpose" input={input} setInput={setInput} index="purpose"/>
          <SelectInput options={["High","Medium","Low"]} name="Budget" input={input} setInput={setInput} index="budget"/>
          <TextInput name="Preference" holder="Your preference" input={input} setInput={setInput} index="preference"/>
          <TextInput name="Recent Travel" holder="Your recent travel" input={input} setInput={setInput} index="recent_travel" />
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          submit
        </Button>
      </form>
    </Card>
    )
}
export default Form