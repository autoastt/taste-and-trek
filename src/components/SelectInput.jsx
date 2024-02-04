import { useState } from "react";
import { Select,Option } from "@material-tailwind/react";
const SelectInput = (props) => {
    const {options, label} = props
    
    return (
    <div className="w-82">
      <Select label = {label}>
         {options.map(option => <Option key={option} value={option}>{option}</Option>)}
      </Select>
    </div>
    )
}
export default SelectInput