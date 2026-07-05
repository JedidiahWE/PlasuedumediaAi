import axios from "axios";

const BASE_URL = "https://api.magichour.ai/v1";

export const generateVideo = async (prompt) => {
  try {

    const response = await axios.post(
      `${BASE_URL}/video/text-to-video`,
      {
        prompt,
        duration: 10,
        aspect_ratio: "16:9",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MAGIC_HOUR_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;

  } catch (error) {

    console.log(error.response?.data || error.message);

    throw error;

  }
};

export const checkVideoStatus = async (jobId) => {

  const response = await axios.get(

    `${BASE_URL}/video/${jobId}`,

    {
      headers: {
        Authorization: `Bearer ${process.env.MAGIC_HOUR_API_KEY}`,
      },
    }

  );

  return response.data;

};