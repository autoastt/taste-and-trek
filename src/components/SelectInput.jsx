import { useState } from "react";
import { Select,Option } from "@material-tailwind/react";
const SelectInput = (props) => {
    const {options,label,handleChange} = props
    return (
    <div className="w-72">
      <Select label = {label} onChange={handleChange}>
         {options.map(option => <Option key={option} value={option}>{option}</Option>)}
      </Select>
    </div>
    )
}
export default SelectInput