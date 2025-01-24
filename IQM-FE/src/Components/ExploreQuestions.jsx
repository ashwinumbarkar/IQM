import React,{useEffect,useState} from 'react'
import './ExploreQuestions.css'
import {  useNavigate } from 'react-router';
export default function ExploreQuestions() {
    const [interviewData, setInterviewData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filter, setFilter] = useState({
      clientName: "",
      interviewLevel: "",
    });
  const navigate=useNavigate()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/getInterviewQs");
          const result = await response.json();
          if (response.ok) {
            setInterviewData(result.data);
            setFilteredData(result.data);
          } else {
            console.error("Error fetching interview data:", result.message);
          }
        } catch (error) {
          console.error("Error fetching interview data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilter((prevFilter) => ({
        ...prevFilter,
        [name]: value,
      }));
  
      const filtered = interviewData.filter(
        (item) =>
          (value === "" || item[name] === value) &&
          (name === "clientName"
            ? filter.interviewLevel === "" || item.interviewLevel === filter.interviewLevel
            : true) &&
          (name === "interviewLevel"
            ? filter.clientName === "" || item.clientName === filter.clientName
            : true)
      );
  
      setFilteredData(filtered);
    };
  
    const openQuestionsTab = (data) => {
    navigate("/questionsDetails", { state: { data: data } });
      
    };
  
    return (
      <div id="interview-cards-container">
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
              {[...new Set(interviewData.map((item) => item.clientName))].map(
                (company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                )
              )}
            </select>
          </label>
          <br />
          <label className="filter-label">
            Interview Level:
            <select
              name="interviewLevel"
              value={filter.interviewLevel}
              onChange={handleFilterChange}
              className="filter-dropdown"
            >
              <option value="">All</option>
              <option value="l1">L1</option>
              <option value="l2">L2</option>
              <option value="l3">L3</option>
              <option value="l4">L4</option>
              <option value="l5">L5</option>
            </select>
          </label>
        </div>
  
        {/* Cards Section */}
        <div id="cards-section">
          {filteredData.map((item) => (
            <div key={item._id} className="interview-card">
              <h4 className="card-client-name">{item.clientName}</h4>
              <p className="card-position"><strong>Position:</strong> {item.position}</p>
              <p className="card-tech-stack"><strong>Tech Stack:</strong> {item.techStack}</p>
              <p className="card-level"><strong>Level:</strong> {item.interviewLevel}</p>
              <button
                className="explore-button"
                onClick={() => openQuestionsTab(item)}
              >
                Explore Questions
              </button>
            </div>
          ))}
        </div>
        
      </div>
    );
}
