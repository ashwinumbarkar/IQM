const InterviewQ = require("../model/Interviewform.model");

// Add Interview Data
const addInterviewData = async (req, res) => {
  try {
    const {
      clientName,
      position,
      techStack,
      experience,
      interviewDate,
      interviewLevel,
      questions,
      machineCodingProblem,
      codingProblem,
      jobDescription,
    } = req.body;

    // Create new InterviewQ document
    const newInterviewQ = new InterviewQ({
      clientName,
      position,
      techStack,
      experience,
      interviewDate,
      interviewLevel,
      questions,
      machineCodingProblem,
      codingProblem,
      jobDescription,
    });

    const savedInterviewQ = await newInterviewQ.save();

    res.status(201).json({
      success: true,
      message: "Interview Question added successfully",
      data: savedInterviewQ,
    });
  } catch (error) {
    console.error("Error adding interview question:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add interview question",
      error: error.message,
    });
  }
};

// Get All Interview Data
const getAllInterviewData = async (req, res) => {
  try {
    const interviewQs = await InterviewQ.find();
    res.status(200).json({
      success: true,
      data: interviewQs,
    });
  } catch (error) {
    console.error("Error fetching interview questions:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch interview questions",
      error: error.message,
    });
  }
};

module.exports = {
  addInterviewData,
  getAllInterviewData,
};
