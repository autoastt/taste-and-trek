import { useState } from "react";
import { Select,Option,Typography} from "@material-tailwind/react";
const SelectInput = (props) => {
  const {options, name, input, setInput, index, loading} = props;
  const [selectedItem, setSelectedItem] = useState("Counter")
  const handleChange = e => {
    setSelectedItem(e)
    const newInput = input 
    newInput[index] = selectedItem
    setInput(newInput)
    // console.log(input)
  }
    return (
    <div className="flex flex-col gap-6">
      <Typography variant="h6" color="blue-gray" className="-mb-3">
         {name}
      </Typography>
      <Select 
        value={selectedItem} 
        onChange={handleChange} 
        label="Select"
        disabled = {loading}
      >
        {options.map(option => <Option key={option} value={option}>{option}</Option>)}
      </Select>
    </div>
    )
}
export default SelectInput