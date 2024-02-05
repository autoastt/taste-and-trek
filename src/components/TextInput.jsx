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
            className="!border-t-blue-gray-200 hover:border-indigo-400 hover:!border-t-indigo-400 focus:border-indigo-400 focus:!border-t-indigo-400 dark:hover:border-darky3 dark:hover:!border-t-darky3 dark:focus:border-darky3 dark:focus:!border-t-darky3 dark:text-gray-200 dark:disabled:bg-darky1"
            disabled = {loading}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
    )
}
export default TextInput