import { useState } from "react";
import { Input,Typography } from "@material-tailwind/react";
const TextInput = (props) => {
    const {name,holder,input,setInput,index, loading,} = props
    const handleChange = e => {
      const newInput = input 
      newInput[index] = e.target.value
      setInput(newInput)
      // console.log(input)
    }
    return (
        <div className="flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-white">
            {name}
          </Typography>
          <Input
            onChange={handleChange} 
            size="lg"
            placeholder={holder}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:border-darky3 dark:focus:!border-t-darky3"
            disabled = {loading}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
    )
}
export default TextInput