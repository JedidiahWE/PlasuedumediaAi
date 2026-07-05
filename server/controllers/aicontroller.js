import { generateImage } from "../Services/imageService.js";
import { Client } from "magic-hour";
import {
  generateLectureNotes,
  generateQuiz,
  generatePowerPoint,
  generateResearch,
} from "../Services/geminiService.js";

import {
  generateVideo,
  checkVideoStatus,
} from "../Services/geminiService.js";

import {
  saveHistory,
  getHistory,
  deleteHistory,
} from "../Services/historyService.js";



// ===========================
// LECTURE NOTES
// ===========================

export const generateNotes = async (req, res) => {
  try {

    const {
      topic,
      subject,
      level,
      length,
      instructions,
    } = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        message: "Topic is required.",
      });
    }

    const notes = await generateLectureNotes(
      topic,
      subject,
      level,
      length,
      instructions
    );

    await saveHistory(
      req.user.id,
      "Lecture Notes",
      topic,
      notes
    );

    return res.status(200).json({
      success: true,
      notes,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===========================
// QUIZ GENERATOR
// ===========================

export const generateQuizController = async (req, res) => {

  try {

    const {
      topic,
      difficulty,
      numberOfQuestions,
      type,
    } = req.body;

    if (!topic) {

      return res.status(400).json({
        success: false,
        message: "Topic is required.",
      });

    }

    const quiz = await generateQuiz(
      topic,
      difficulty,
      numberOfQuestions,
      type
    );

    await saveHistory(
      req.user.id,
      "Quiz",
      topic,
      quiz
    );

    return res.status(200).json({
      success: true,
      quiz,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

//powerpoint generator
export const generatePowerPointController = async (req, res) => {

  try {

    const {
      topic,
      slides,
      style,
    } = req.body;

    if (!topic) {

      return res.status(400).json({
        success: false,
        message: "Topic is required.",
      });

    }

    const presentation = await generatePowerPoint(
      topic,
      slides,
      style
    );

    await saveHistory(
      req.user.id,
      "PowerPoint",
      topic,
      presentation
    );

    return res.status(200).json({
      success: true,
      presentation,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===========================
// RESEARCH ASSISTANT
// ===========================

export const generateResearchController = async (req, res) => {

  try {

    const {
      topic,
      field,
      level,
      type,
      instructions,
    } = req.body;

    if (!topic) {

      return res.status(400).json({
        success: false,
        message: "Research topic is required.",
      });

    }

    const research = await generateResearch(
      topic,
      field,
      level,
      type,
      instructions
    );

    await saveHistory(
      req.user.id,
      "Research",
      topic,
      research
    );

    return res.status(200).json({
      success: true,
      research,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// ===========================
// IMAGE GENERATOR
// ===========================

export const generateImageController = async (req, res) => {

  try {

    const {
      topic,
      imageType,
      style,
      ratio,
      instructions,
    } = req.body;

    if (!topic) {

      return res.status(400).json({
        success: false,
        message: "Image topic is required.",
      });

    }

    const image = await generateImage(
      topic,
      imageType,
      style,
      ratio,
      instructions
    );

    await saveHistory(
      req.user.id,
      "Image",
      topic,
      image
    );

    return res.status(200).json({
      success: true,
      image,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// ===========================
// VIDEO GENERATOR
// ===========================

export const generateVideoController = async (req, res) => {

  try {

    const {
      topic,
      audience,
      duration,
      style,
      instructions,
    } = req.body;

    if (!topic) {

      return res.status(400).json({
        success: false,
        message: "Topic is required.",
      });

    }

    const job = await generateVideo(
  topic,
  audience,
  duration,
  style,
  instructions
);

return res.json({
  success: true,
  jobId: job.id || job.project_id,
});


  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export const getVideoStatus = async (req, res) => {

  try {

    const { id } = req.params;

    const result = await checkVideoStatus(id);

    return res.status(200).json(result);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===========================
// HISTORY
// ===========================

export const getHistoryController = async (req, res) => {

  try {

    const history = await getHistory(req.user.id);

    return res.status(200).json({
      success: true,
      history,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export const deleteHistoryController = async (req, res) => {

  try {

    await deleteHistory(req.params.id);

    return res.status(200).json({
      success: true,
      message: "History deleted successfully.",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};