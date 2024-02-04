import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true });

async function chatgpt(data) {
  let query = "";
  for(let i = 0; i < data.length; i++) {
    if(data[i].pick == 'maybe') continue;
    query += data[i].name + ': ' + data[i].pick + '\n';
  }
  console.log('hi', data, query)
  const completion = await openai.chat.completions.create({
    messages: [
        {role: "system", content: "You will be provided with food characteristics in 'yes-no' form. \
        Your job is to provide a list of five food corresponding to the given characteristics. \
        If the characteristic is categorized as 'yes', your food must have that trait. \
        If the characteristic is categorized as 'no', your food must not have that trait. \
        Provide your answer in bullet point starting with '#'. \
        Do note that it is not necessary to include the given characteristics into your answer if you think it can be implied. \
        Your answer should not be too broad. \
        Do not include any further explanation for each food: only name of food is acceptable."},
        {role: "user", content: query}
    ],
    model: "gpt-3.5-turbo",
  });
  console.log("chat", completion.choices[0], completion['choices'][0]['message']['content']);
  return completion['choices'][0]['message']['content']
}

export default chatgpt