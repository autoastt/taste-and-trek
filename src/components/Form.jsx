import { useEffect, useState } from "react"
import {
Card,
Button,
Typography} from "@material-tailwind/react"
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import generation from "../gpt/generation"
import search from "../map/search"
const Form = (props) => {
    const {input, setInput, output, setOutput, loading, setLoading, mapId, setMapId, setMapurl} = props
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(input);
      setLoading(true);
    
      try {
        const result = await generation(input);
    
        setOutput(result);
    
        // Use Promise.all to handle multiple asynchronous calls concurrently
        const searchPromises = result.text.map(async (out, i) => {
          const searchId = await search(out.split(';')[1]);
          console.log(i);
    
          // Update mapId using the current state
          const newMap = mapId
          console.log("searchId",searchId)
          newMap[i] = searchId
          setMapId(newMap);
        });
    
        // Wait for all search promises to resolve
        await Promise.all(searchPromises);
    
        // Generate mapurl using the updated mapId
        const generatedMapurl = `https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLEMAP_API_KEY}&origin=place_id:${mapId[0]}&destination=place_id:${mapId[4]}&waypoints=place_id:${mapId[1]}|place_id:${mapId[2]}|place_id:${mapId[3]}`;
        if (mapId && mapId.some(m => m === undefined)) {
          console.log("There is an undefined element in mapId");
          setMapurl("");
        } else {
          console.log("No undefined elements in mapId");
          setMapurl(generatedMapurl);
        }
        
    
        setLoading(false);
        console.log(mapId);
      } catch (error) {
        // Handle errors here
        console.error("Error:", error);
        setLoading(false);
      }
    };
    

    // useEffect(() => {
    //   if(output.text != "Submit your information to generate your plan!"){
        
    //   }
    // }, [output])

    return (
    <Card color="transparent" shadow={false} className="items-center justify-center pb-8">
      
      <Typography variant="h4" color="blue-gray" className="mt-11 dark:text-white"> 
        Taste and Trek
      </Typography>
      <Typography color="gray" className="mt-1 font-normal dark:text-blue-gray-200">
        Fill in your information 
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <SelectInput options={["Male","Female","Other genders"]} name="Gender" input={input} setInput={setInput} index="gender" loading={loading}/>
          <TextInput name="Age" holder="Your age" input={input} setInput={setInput} index="age" loading={loading}/>
          <TextInput name="Destination" holder="Where do you want to go?" input={input} setInput={setInput} index="location" loading={loading}/>
          <SelectInput options={["Resident","Tourist"]} name="Status" input={input} setInput={setInput} index="status" loading={loading} />
          <SelectInput options={["Only myself","Partner","Friends","Lovers","Family"]} name="Travel with" input={input} setInput={setInput} index="relationship" loading={loading}/>
          <TextInput name="Purpose" holder="Your purpose" input={input} setInput={setInput} index="purpose" loading={loading} />
          <SelectInput options={["High","Medium","Low"]} name="Budget" input={input} setInput={setInput} index="budget" loading={loading}/>
          <TextInput name="Preference" holder="Your preference" input={input} setInput={setInput} index="preference" loading={loading}/>
          <TextInput name="Recent Travel" holder="Your recent travel" input={input} setInput={setInput} index="recent_travel" loading={loading}/>
        </div>
        <Button type="submit" loading={loading} className="mt-12 dark:bg-darky1" fullWidth >
          {loading ? "loading" : "submit" }
        </Button>
      </form>
    </Card>
    )
}
export default Form