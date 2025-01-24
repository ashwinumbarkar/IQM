const InterviewData = require("../model/Interviewform.model");

// Add Interview Data
const addInterviewData = async (req, res) => {
  try {
    const newInterviewData = new InterviewData(req.body);
    const savedData = await newInterviewData.save();
    res.status(201).json({
      message: "Interview data added successfully",
      data: savedData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add interview data",
      error: error.message,
    });
  }
};

// Get All Interview Data
const getAllInterviewData = async (req, res) => {
  try {
    const allData = await InterviewData.find();
    res.status(200).json({
      message: "Fetched all interview data successfully",
      data: allData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch interview data",
      error: error.message,
    });
  }
};

module.exports = {
  addInterviewData,
  getAllInterviewData,
};
