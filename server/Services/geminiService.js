import { GoogleGenAI } from "@google/genai";
import axios from "axios";


// ===============================
// LECTURE NOTES
// ===============================

export const generateLectureNotes = async (
  topic,
  subject,
  level,
  length,
  instructions
) => {

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const prompt = `
You are an expert university lecturer.

Generate detailed lecture notes.

Topic:
${topic}

Subject:
${subject}

Academic Level:
${level}

Length:
${length}

Additional Instructions:
${instructions || "None"}

Requirements:
- Use headings.
- Explain concepts thoroughly.
- Include examples.
- Use professional academic language.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};

// ===============================
// QUIZ GENERATOR
// ===============================

export const generateQuiz = async (
  topic,
  difficulty,
  numberOfQuestions,
  type
) => {

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const prompt = `
You are an expert university lecturer.

Generate a ${difficulty} quiz.

Topic:
${topic}

Number of Questions:
${numberOfQuestions}

Question Type:
${type}

Rules:

- If Multiple Choice:
  - Generate exactly ${numberOfQuestions} questions.
  - Each question must have options A, B, C and D.
  - State the correct answer.

- If Theory:
  - Generate only theory questions.

- If Mixed:
  - Mix objective and theory questions.

Format everything neatly.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};


// ===============================
// POWERPOINT GENERATOR
// ===============================

export const generatePowerPoint = async (
  topic,
  slides,
  style
) => {

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const prompt = `
You are a professional university lecturer.

Create a PowerPoint presentation.

Topic:
${topic}

Number of Slides:
${slides}

Presentation Style:
${style}

Requirements:

- Create a presentation title.
- Generate exactly ${slides} slides.
- Each slide must have:
   • Slide Title
   • 4–6 bullet points
- Use concise presentation language.
- Make the slides suitable for classroom presentation.
- End with a Conclusion slide.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};


// ===============================
// RESEARCH ASSISTANT
// ===============================

export const generateResearch = async (
  topic,
  field,
  level,
  type,
  instructions
) => {

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const prompt = `
You are an experienced academic researcher and university professor.

Generate a professional ${type}.

Research Topic:
${topic}

Academic Field:
${field}

Academic Level:
${level}

Additional Instructions:
${instructions || "None"}

Requirements:

- Use formal academic language.
- Organize the content using headings.
- Explain each section thoroughly.
- Make the work suitable for university students.
- Ensure originality and clarity.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};

// ===============================
// IMAGE GENERATOR
// ===============================
export const generateImage = async (
  prompt,
  style,
  aspectRatio,
  instructions
) => {

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const finalPrompt = `
You are an expert educational illustrator.

Create a high-quality educational image.

Topic:
${prompt}

Style:
${style}

Aspect Ratio:
${aspectRatio}

Additional Instructions:
${instructions || "None"}

Requirements:
- Make it visually clear and educational.
- Suitable for academic use.
- Clean and professional design.
- No watermark.
`;

  const response = await ai.models.generateContent({
    model: "imagen-3.0-generate-002",
    contents: finalPrompt,
  });

  return response;
}



// ===========================
// VIDEO GENERATOR
// ===========================
export const generateVideo = async (
  topic,
  audience,
  duration,
  style,
  instructions
) => {

  console.log(
    "MAGIC_HOUR_API_KEY:",
    process.env.MAGIC_HOUR_API_KEY
  );

  const magicHour = new Client({
    apiKey: process.env.MAGIC_HOUR_API_KEY,
  });

  const prompt = `
Create an educational video.

Topic:
${topic}

Audience:
${audience}

Style:
${style}

Instructions:
${instructions || "None"}
`;

  const seconds = parseInt(duration) || 5;

  const result = await magicHour.v1.textToVideo.generate(
    {
      name: topic,
      endSeconds: seconds,
      orientation: "landscape",
      resolution: "720p",
      style: {
        prompt,
      },
    },
    {
      waitForCompletion: true,
      downloadOutputs: false,
    }
  );

  return result;

};

// Not needed when using generate()
// Included only so existing imports don't crash

export const checkVideoStatus = async () => {
  return null;
};
