module.exports = (language, code) => `
You are a senior software engineer.

Optimize the following ${language} code.

Code:
${code}

Provide:

1. Issues in the current code.
2. Optimized version.
3. Time complexity.
4. Space complexity.
5. Best practices.
`;