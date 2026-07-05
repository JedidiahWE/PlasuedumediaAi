export const generateImage = async (
  topic,
  imageType,
  style,
  ratio,
  instructions
) => {

  const prompt = `
${topic},
${imageType},
${style},
${instructions || ""},
high quality,
educational,
detailed,
professional,
clean background
`;

  const encodedPrompt = encodeURIComponent(prompt);

  // Random seed prevents cached images
  const seed = Date.now();

  const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&seed=${seed}`;

  return imageUrl;

};

