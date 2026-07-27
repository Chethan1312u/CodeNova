const debugPrompt = (language, code) => `
You are an expert ${language} developer.

Analyze the following code.

Tasks:
1. Find all bugs and logical errors.
2. Explain why each issue occurs.
3. Provide the corrected code.
4. Suggest best practices.

Code:

${code}
`;

module.exports = debugPrompt;