import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  generateNotes,
  generateQuizController,
  generatePowerPointController,
  generateResearchController,
  generateImageController,
  generateVideoController,
  getVideoStatus,
  getHistoryController,
  deleteHistoryController,
} from "../controllers/aicontroller.js";

const router = express.Router();

router.post("/lecture-notes", protect, generateNotes);
router.post("/quiz", protect, generateQuizController);
router.post("/powerpoint", protect, generatePowerPointController);
router.post("/research", protect, generateResearchController);
router.post("/image", protect, generateImageController);
router.post("/video", protect, generateVideoController);

router.get("/video/:id", protect, getVideoStatus);

router.get("/history", protect, getHistoryController);
router.delete("/history/:id", protect, deleteHistoryController);

export default router;