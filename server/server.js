import dotenv from "dotenv";

// Load environment variables FIRST
dotenv.config();


import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./Routes/authRoutes.js";
import aiRoutes from "./Routes/aiRoutes.js";
import dashboardRoutes from "./Routes/dashboardRoutes.js";

console.log("Gemini Key Loaded:", process.env.GEMINI_API_KEY ? "YES" : "NO");
console.log("Magic Hour Key:", process.env.MAGIC_HOUR_API_KEY);

if (process.env.GEMINI_API_KEY) {
  console.log(
    "Gemini Key:",
    process.env.GEMINI_API_KEY.substring(0, 10) + "..."
  );
}

connectDB();

const cors = require('cors');

app.use(cors({
  origin: ['https://your-netlify-app-name.netlify.app', 'http://localhost:5173'], 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.get("/", (req, res) => {
  res.json({
    message: "EduMedia AI Backend Running Successfully 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

