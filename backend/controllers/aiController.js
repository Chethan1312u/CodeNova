const { generateContent } = require("../services/geminiService");
const promptSelector = require("../utils/promptSelector");

// Health Check
const healthCheck = (req, res) => {
  res.json({
    success: true,
    message: "Backend connected successfully 🚀",
  });
};

// Generic AI Handler
const aiHandler = async (req, res) => {
  try {
    const { action, language, code } = req.body;
    console.log("Received request:", {
  action,
  language,
});

    if (!action || !language || !code) {
      return res.status(400).json({
        success: false,
        message: "action, language and code are required.",
      });
    }

    // Select the appropriate prompt
    const prompt = promptSelector(action, language, code);

    // Send prompt to Gemini
    const response = await generateContent(prompt);

    res.json({
      success: true,
      response,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  healthCheck,
  aiHandler,
};