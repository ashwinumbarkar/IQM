import React, { useEffect, useState } from "react";
import "./ExploreQuestions.css";
import { useNavigate } from "react-router";

const techStackOptions = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js",
  "MongoDB", "Python", "Java", "C#", "SQL", "TypeScript",
  "Docker", "Kubernetes", "AWS", "CICD", "Jenkins",
  "DevOps", "Java-8", "TDD", "Selenium", "Manual Testing", "Automation Test"
];

const companyOptions = [
  "Google", "Microsoft", "Amazon", "Facebook",
  "Netflix", "Tesla", "Apple"
];

export default function ExploreQuestions() {
  const [interviewData, setInterviewData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState({
    clientName: "",
    interviewLevel: "",
    techStack: [],
  });
  const navigate = useNavigate();

  // Fetch interview data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getInterviewQs");
        const result = await response.json();
        if (response.ok) {
          setInterviewData(result.data);
          setFilteredData(result.data); // Set initial filtered data
        } else {
          console.error("Error fetching interview data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching interview data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle filter changes for clientName and interviewLevel
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  // Handle Tech Stack multi-select
  const handleTechStackChange = (e) => {
    const { value } = e.target;
    setFilter((prevFilter) => {
      const techStack = prevFilter.techStack.includes(value)
        ? prevFilter.techStack.filter((stack) => stack !== value)
        : [...prevFilter.techStack, value];
      return { ...prevFilter, techStack };
    });
  };

  // Filter interview data based on selected filters
  useEffect(() => {
    const filtered = interviewData.filter((item) => {
      const matchesCompany = !filter.clientName || item.clientName === filter.clientName;
      const matchesLevel = !filter.interviewLevel || item.interviewLevel === filter.interviewLevel;
      const matchesTechStack =
        filter.techStack.length === 0 ||
        filter.techStack.every((stack) => item.techStack.includes(stack));
      return matchesCompany && matchesLevel && matchesTechStack;
    });
    setFilteredData(filtered);
  }, [filter, interviewData]);

  // Navigate to question details
  const openQuestionsTab = (data) => {
    navigate("/questionsDetails", { state: { data: data } });
  };

  return (
    <div id="explore-questions-container">
      {/* Filter Section */}
      <div id="filter-section">
        <h3 className="filter-heading">Filter</h3>

        <label className="filter-label">
          Company:
          <select
            name="clientName"
            value={filter.clientName}
            onChange={handleFilterChange}
            className="filter-dropdown"
          >
            <option value="">All</option>
            {companyOptions.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </label>

        <label className="filter-label">
          Interview Level:
          <select
            name="interviewLevel"
            value={filter.interviewLevel}
            onChange={handleFilterChange}
            className="filter-dropdown"
          >
            <option value="">All</option>
            <option value="hrScreening">HR Screening</option>
            <option value="technical1">Technical Level 1</option>
            <option value="technical2">Technical Level 2</option>
            <option value="technical3">Technical Level 3</option>
            <option value="technical4">Technical Level 4</option>
            <option value="technical5">Technical Level 5</option>
            <option value="finalHR">Final HR</option>
          </select>
        </label>

        <label className="filter-label">
          Tech Stack:
          <div className="multi-select">
            {techStackOptions.map((tech) => (
              <label key={tech}>
                <input
                  type="checkbox"
                  value={tech}
                  checked={filter.techStack.includes(tech)}
                  onChange={handleTechStackChange}
                />
                {tech}
              </label>
            ))}
          </div>
        </label>
      </div>

      {/* Cards Section */}
      <div id="cards-section">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item._id} className="interview-card">
              <p className="card-client-name">{item.clientName}</p>
              <p className="card-position">
                <strong>Position:</strong> {item.position}
              </p>
              <p className="card-tech-stack">
                <strong>Tech Stack:</strong> {item.techStack.join(", ")}
              </p>
              <p className="card-level">
                <strong>Level:</strong> {item.interviewLevel}
              </p>
              <button
                className="explore-button"
                onClick={() => openQuestionsTab(item)}
              >
                Explore Questions
              </button>
            </div>
          ))
        ) : (
          <p>No matching results found.</p>
        )}
      </div>
    </div>
  );
}
