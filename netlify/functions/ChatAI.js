const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY 
});

export const handler = async (req, res) => {
  const body = req.body
  const request = JSON.parse(req.body)
  const messages = request.messages
  

const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    prompt: [messages],
});






  return {
    statusCode: 200,
    body: JSON.stringify({
      Chat: response,
    }),
  }
}