const explainPrompt = require("../prompts/explainPrompt");
const debugPrompt = require("../prompts/debugPrompt");
const optimizePrompt = require("../prompts/optimizePrompt");
const convertPrompt = require("../prompts/convertPrompt");
const testPrompt = require("../prompts/testPrompt");

const promptSelector = (action, language, code) => {
  switch (action) {
    case "explain":
      return explainPrompt(language, code);

    case "debug":
      return debugPrompt(language, code);

    case "optimize":
      return optimizePrompt(language, code);

    case "convert":
      return convertPrompt(language, code);

    case "tests":
      return testPrompt(language, code);

    default:
      throw new Error("Invalid AI action");
  }
};

module.exports = promptSelector;