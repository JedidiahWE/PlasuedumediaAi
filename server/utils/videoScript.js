import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateVideoScript = async (
  topic,
  audience,
  duration,
  style,
  instructions
) => {

  const prompt = `
Generate an educational video script.

Return ONLY valid JSON.

{
  "title":"",
  "scenes":[
    {
      "title":"",
      "imagePrompt":"",
      "narration":""
    }
  ]
}

Topic:
${topic}

Audience:
${audience}

Duration:
${duration}

Style:
${style}

Instructions:
${instructions || "None"}

Rules:

- Create between 5 and 8 scenes.
- Each narration should be 25-45 words.
- Each imagePrompt should describe an educational illustration.
- Return JSON only.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let text = response.text.trim();

  text = text.replace(/```json/g, "").replace(/```/g, "").trim();

  return JSON.parse(text);

};