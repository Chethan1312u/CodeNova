const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log("API Key Loaded:", !!process.env.GEMINI_API_KEY);

const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 CodeNova AI Backend is Running",
  });
});

// Test route
app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Test route works!",
  });
});

// API routes
app.use("/api", aiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});