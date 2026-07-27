const express = require("express");
const router = express.Router();

const {
  healthCheck,
  aiHandler,
} = require("../controllers/aiController");

router.get("/health", healthCheck);

// One AI endpoint for everything
router.post("/ai", aiHandler);

module.exports = router;