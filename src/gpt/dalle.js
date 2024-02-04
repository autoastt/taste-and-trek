import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function dalle(data) {
  
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Realistic-style travel poster without any text using the following plan: ${data.plan}.
    Include one ${data.age}-year-old ${data.description} ${data.gender} travellor${data.relationship == "single" ? "": " with his/hers" + data.relationship}.`,
  });

  return image.data[0].url;
}

// var data = {
//   gender: "male",
//   age: "20",
//   status: "resident",
//   relationship: "family",
//   purpose: "family trip",
//   budget: "high",
//   preference: "local Singaporean food and indoor",
//   recent_travel: "Garden by the Bay",
// };

// dalle(data)
//   .then((result) => console.log(result))
//   .catch((error) => console.error("Test Error:", error));

export default dalle
