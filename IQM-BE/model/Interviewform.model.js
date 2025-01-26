const mongoose = require("mongoose");

const interviewQSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true, // Accept any string value for the client name
      trim: true,
    },
    position: { type: String, required: true },
    techStack: { 
      type: [String], 
      required: true 
    }, // Array of selected technologies
    experience: { 
      type: Number, 
      required: true, 
      min: 0, 
      max: 20 
    },
    interviewDate: { 
      type: Date, 
      required: true 
    },
    interviewLevel: {
      type: String,
      required: true,
      enum: [
        "hrScreening",
        "technical1",
        "technical2",
        "technical3",
        "technical4",
        "technical5",
        "finalHR",
      ], // Allow only specific levels
    },
    questions: {
      type: [String],
      required: true,
      validate: [
        (val) => val.length > 0,
        "At least one question is required.",
      ],
    },
    machineCodingProblem: { type: String },
    codingProblem: { type: String },
    jobDescription: { type: String },
  },
  { timestamps: true }
);

const InterviewQ = mongoose.model("InterviewQ", interviewQSchema);

module.exports = InterviewQ;
