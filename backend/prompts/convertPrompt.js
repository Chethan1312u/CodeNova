module.exports = (language, code) => `
You are an expert programmer.

Convert the following ${language} code into another programming language.

Code:
${code}

Explain the converted code as well.
`;