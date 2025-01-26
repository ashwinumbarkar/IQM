import React, { useState } from "react";
import './AddQuestions.css'
const AddQuestions = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    position: "",
    techStack: "",
    experience: 0,
    interviewDate: "",
    interviewLevel: "l1",
    questions: [""], // Initialize with one question
    machineCodingProblem: "",
    codingProblem:"",
    jobDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index] = value;

    setFormData((prevState) => ({
      ...prevState,
      questions: updatedQuestions,
    }));
  };

  const addQuestion = () => {
    setFormData((prevState) => ({
      ...prevState,
      questions: [...prevState.questions, ""], // Add a new empty question
    }));
  };

  const handleSubmit = async (e) => {
  
    e.preventDefault();
    //http://65.2.38.28:5000/api/getInterviewQs
    try {
      const response = await fetch("http://65.2.38.28:5000/api/InterviewQs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Form Data Submitted: ", result);
        alert("Form submitted successfully!");
        // Reset the form after successful submission
        setFormData({
          clientName: "",
          position: "",
          techStack: "",
          experience: 0,
          interviewDate: "",
          interviewLevel: "l1",
          questions: [""],
          machineCodingProblem: "",
          codingProblem: "",
          jobDescription: "",
        });
      } else {
        console.error("Error submitting form:", response.statusText);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }

  
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Interview Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Client Name:
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Tech Stack:
          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Years of Experience (0-20):
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            min="0"
            max="20"
            required
          />
        </label>
        <br />

        <label>
          Interview Date:
          <input
            type="date"
            name="interviewDate"
            value={formData.interviewDate}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Interview Level:
          <select
            name="interviewLevel"
            value={formData.interviewLevel}
            onChange={handleChange}
            required
          >
            <option value="l1">L1</option>
            <option value="l2">L2</option>
            <option value="l3">L3</option>
            <option value="l4">L4</option>
            <option value="l5">L5</option>
          </select>
        </label>
        <br />

        <h3>Questions:</h3>
        {formData.questions.map((question, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder={`Question ${index + 1}`}
              value={question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addQuestion}>
          Add Question +
        </button>
        <br />
        <label>
          Coding Problem Statement:
          <textarea
            type="text"
            name="codingProblem"
            rows="4"
            cols="50"
            value={formData.codingProblem}
            onChange={handleChange}
            
          />
        </label>
        <label>
          Machine Coding Problem Statement:
          <textarea
            type="text"
            name="machineCodingProblem"
            rows="4"
            cols="50"
            value={formData.machineCodingProblem}
            onChange={handleChange}
            
          />
        </label>
        <br />

        <label>
          Job Description:
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows="4"
            cols="50"
            
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestions;
