import History from "../models/History.js";

export const getDashboard = async (req, res) => {

  try {

    const history = await History.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    const stats = {
      lecture:
        history.filter(x => x.type === "Lecture Notes").length,

      quiz:
        history.filter(x => x.type === "Quiz").length,

      research:
        history.filter(x => x.type === "Research").length,

      powerpoint:
        history.filter(x => x.type === "PowerPoint").length,

      image:
        history.filter(x => x.type === "Image").length,

      video:
        history.filter(x => x.type === "Video").length,
    };

    res.json({
      success: true,
      stats,
      recent: history.slice(0,5),
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }

};