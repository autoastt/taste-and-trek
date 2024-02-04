import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function chatgpt(data) {
  
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Please recommmend a plan on food and travel for the entire day given the following information.

        The person is a ${data.status} who is travelling with ${data.relationship} on a ${data.purpose} with a ${data.budget} budget.
        Preferences: ${data.preference == "" ? "None" : data.preference}
        Avoid: ${data.recent_travel == "" ? "None" : data.recent_travel}.

        List down two activities and three meals (b/l/d) from morning to evening, considering the travel time between meals and activities to be not too long,
        with the following information, all separated by semicolon on the same line
          (1) name
          (2) specific location (postal address) + shopping mall / attraction name if any 
          (3) short attractive description of each place
        List all the activities and meals without bold texts and label from 1 to 5 without any headings`,
      },
    ],
    model: "gpt-4-0125-preview",
  });

  return completion["choices"][0]["message"]["content"];
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

// chatgpt(data)
//   .then((result) => console.log(result))
//   .catch((error) => console.error("Test Error:", error));

export default chatgpt;
