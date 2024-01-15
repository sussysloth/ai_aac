import { OpenAI } from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

function buildPrompt(prompt) {
  return prompt.split('\n').map((message) => ({
    role: 'user',
    content: "Turn the following words into a short sentence without inventing anything new: " + message,
  }));
}

export async function POST(req) {
  
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: buildPrompt(prompt),
    max_tokens: 20,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}