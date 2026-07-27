import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedTool, setSelectedTool] = useState("explain");
  const [language, setLanguage] = useState("JavaScript");
  const [model, setModel] = useState("Gemini 2.5 Flash");
  const [code, setCode] = useState(`function greet(name) {
  return "Hello " + name;
}

console.log(greet("CodeNova"));
`);
  const [response, setResponse] = useState(`# 👋 Welcome to CodeNova AI

I'm ready to help you.

## What I can do

- Explain code
- Debug code
- Optimize code
- Convert code
- Generate unit tests

### Example

\`\`\`javascript
function greet(name){
    return "Hello " + name;
}
\`\`\`

This function accepts a **name** and returns a greeting.
`);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        selectedTool,
        setSelectedTool,
        language,
        setLanguage,
        model,
        setModel,
        code,
        setCode,
        response,
        setResponse,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}