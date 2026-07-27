import api from "./api";

// Health Check
export const healthCheck = async () => {
  const response = await api.get("/health");
  return response.data;
};

// Generic AI Request
export const aiRequest = async (action, language, code) => {
  const response = await api.post("/ai", {
    action,
    language,
    code,
  });

  return response.data;
};