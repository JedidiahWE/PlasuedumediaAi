import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL =
  "https://app-api.pixverse.ai/openapi/v2/video/text/generate";

export const submitVideoGeneration = async (
  topic,
  audience,
  duration,
  style,
  instructions
) => {

  const traceId = uuidv4();

  const prompt = `
Create an educational video.

Topic:
${topic}

Target Audience:
${audience}

Duration:
${duration}

Style:
${style}

Additional Instructions:
${instructions || "None"}

The video should be educational, visually engaging, accurate, and suitable for university learning.
`;

  try {

    const response = await axios.post(

      API_URL,

      {
        aspect_ratio: "16:9",
        duration: 5,
        model: "v6",
        prompt: prompt,
        quality: "720p",
        seed: 0
      },

      {
        headers: {
          "API-KEY": process.env.PIXVERSE_API_KEY,
          "Ai-trace-id": traceId,
          "Content-Type": "application/json",
        },
      }

    );

    console.log("========== PIXVERSE SUCCESS ==========");
    console.log(response.data);
    console.log("======================================");

    return response.data;

  } catch (error) {

    console.log("========== PIXVERSE ERROR ==========");

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    } else {
      console.log(error.message);
    }

    console.log("====================================");

    throw error;

  }

};