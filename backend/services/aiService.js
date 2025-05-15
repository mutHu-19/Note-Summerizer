require('dotenv').config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function summarizeText(text) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Summarize the following text:\n\n${text}` }
      ],
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error in summarizeText:", error.message);
    
    // Use mock data during development
    if (process.env.NODE_ENV === "development") {
      return "This is a mock summary.";
    }

    throw new Error("OpenAI quota exceeded or unavailable.");
  }
}

async function generateQuiz(text) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Generate a list of quiz questions from the text." },
        { role: "user", content: `Create 5 quiz questions based on this:\n\n${text}` }
      ],
    });
    return response.choices[0].message.content.split("\n").filter(q => q.trim() !== "");
  } catch (error) {
    console.error("OpenAI API Error in generateQuiz:", error.message);

    if (process.env.NODE_ENV === "development") {
      return [
        "What is the main idea of the text?",
        "List two important facts mentioned.",
        "What conclusion can be drawn?",
        "What is the significance of the topic?",
        "Summarize the key point in your own words."
      ];
    }

    throw new Error("OpenAI quota exceeded or unavailable.");
  }
}


module.exports = {
  summarizeText,
   generateQuiz,
};
