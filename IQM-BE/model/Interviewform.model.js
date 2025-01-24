const mongoose = require("mongoose");

const InterviewDataSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  techStack: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    min: 0,
    max: 20,
  },
  interviewDate: {
    type: Date,
    required: true,
  },
  interviewLevel: {
    type: String,
    enum: ["l1", "l2", "l3", "l4", "l5"],
    required: true,
  },
  questions: {
    type: [String], // Array of strings
    required: true,
  },
  machineCodingProblem: {
    type: String,
    required: false,
  },
  codingProblem: {
    type: String,
    required: false,
  },
  jobDescription: {
    type: String,
    required: false,
  },
});

const InterviewData = mongoose.model("InterviewData", InterviewDataSchema);

module.exports = InterviewData;
