import OpenAI from "openai";
import chatgpt from "./chatgpt.js";
import dalle from "./dalle.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function generation(data) {

  const text = await chatgpt(data);
  data.plan = [2, 6].map((x) => text.split("\n")[x].split(";")[0].split(".")[1]).join(",");
  const img_url = await dalle(data);

  return {
    text: [0, 2, 4, 6, 8].map((x) => text.split("\n")[x]), 
    url: img_url,
  }
}

var data = {
  gender: "male",
  age: "20",
  status: "resident",
  relationship: "family",
  purpose: "family trip",
  budget: "high",
  preference: "local Singaporean food and indoor",
  recent_travel: "Garden by the Bay",
};

generation(data)
  .then((result) => console.log(result))
  .catch((error) => console.error("Test Error:", error));  
  
export default generation;