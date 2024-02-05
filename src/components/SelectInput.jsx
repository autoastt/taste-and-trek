import { useState } from "react";
import { Select,Option,Typography} from "@material-tailwind/react";
const SelectInput = (props) => {
  const {options, name, input, setInput, index, loading} = props;
  const handleChange = e => {
    const newInput = input 
    newInput[index] = e
    setInput(newInput)
    // console.log(input)
  }
    return (
    <div className="flex flex-col gap-6">
      <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-white">
         {name}
      </Typography>
      <Select 
        onChange={handleChange} 
        label="Select"
        disabled = {loading}
        className="border-blue-gray-200 hover:border-indigo-400 dark:text-gray-200 dark:hover:border-darky3 focus:border-darky3 dark:disabled:bg-darky1"
        labelProps={{
          // see also global css -> .secondary-select
          className: "after:border-none before:border-none text-transparent",
        }}
      >
        {options.map(option => <Option key={option} value={option}>{option}</Option>)}
      </Select>
    </div>
    )
}
export default SelectInput