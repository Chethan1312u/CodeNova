const explainPrompt = (code, language) => `
You are an expert software engineer.

Explain the following ${language} code.

Respond using Markdown.

Include these sections:

# Purpose

# Line-by-line Explanation

# Time Complexity

# Space Complexity

# Best Practices

# Possible Improvements

Code:

${code}
`;

module.exports = explainPrompt;