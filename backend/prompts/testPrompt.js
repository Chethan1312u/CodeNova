module.exports = (language, code) => `
You are a software testing expert.

Generate comprehensive unit tests for this ${language} code.

Code:
${code}

Include:

1. Happy path tests.
2. Edge cases.
3. Invalid inputs.
4. Example test code.
`;