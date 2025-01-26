import React, { useState } from "react";
import Select from "react-select";
import "./AddQuestions.css";

const AddQuestions = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    position: "",
    techStack: [],
    experience: 0,
    interviewDate: "",
    interviewLevel: "hrScreening",
    questions: [""],
    machineCodingProblem: "",
    codingProblem: "",
    jobDescription: "",
  });

  const techStackOptions = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Express.js", label: "Express.js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C#", label: "C#" },
    { value: "SQL", label: "SQL" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Docker", label: "Docker" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "AWS", label: "AWS" },
    { value: "CICD", label: "CICD" },
    { value: "Jenkins", label: "Jenkins" },
    { value: "DevOps", label: "DevOps" },
    { value: "Java-8", label: "Java-8" },
    { value: "TDD", label: "TDD" },
    { value: "Selenium", label: "Selenium" },
    { value: "Manual Testing", label: "Manual Testing" },
    { value: "Automation Test", label: "Automation Test" },
  ];
  
  const companyOptions = [
    "Google",
    "Microsoft",
    "Amazon",
    "Facebook",
    "Netflix",
    "Tesla",
    "Apple",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTechStackChange = (selectedOptions) => {
    setFormData((prevState) => ({
      ...prevState,
      techStack: selectedOptions ? selectedOptions.map((option) => option.value) : [],
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
      questions: [...prevState.questions, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    try {
      const response = await fetch("http://localhost:5000/api/InterviewQs", {
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
        setFormData({
          clientName: "",
          position: "",
          techStack: [],
          experience: 0,
          interviewDate: "",
          interviewLevel: "hrScreening",
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
          <select
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            required
          >
            <option value="">Select Company</option>
            {companyOptions.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
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
          <Select
            isMulti
            options={techStackOptions}
            value={techStackOptions.filter((option) =>
              formData.techStack.includes(option.value)
            )}
            onChange={handleTechStackChange}
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
            <option value="hrScreening">HR Screening</option>
            <option value="technical1">Technical Level 1</option>
            <option value="technical2">Technical Level 2</option>
            <option value="technical3">Technical Level 3</option>
            <option value="technical4">Technical Level 4</option>
            <option value="technical5">Technical Level 5</option>
            <option value="finalHR">Final HR</option>
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
            name="codingProblem"
            rows="4"
            cols="50"
            value={formData.codingProblem}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Machine Coding Problem Statement:
          <textarea
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
            rows="4"
            cols="50"
            value={formData.jobDescription}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestions;
