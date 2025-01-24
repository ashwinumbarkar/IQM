import React from 'react'
import { useLocation } from 'react-router';
import './QuestionDetails.css'
import { useNavigate } from 'react-router';
export default function QuestionDetails() {
    
    const location = useLocation();
    const data = location.state?.data;
  const navigate=useNavigate()
    if (!data) {
      return <div className="error-message">No question data available.</div>;
    }

  return (
    <div className="question-details-container">
    <h1 className="details-title">Questions for {data?.clientName}</h1>
    <p className="details-field"><strong>Position:</strong> {data?.position}</p>
    <p className="details-field"><strong>Tech Stack:</strong> {data?.techStack}</p>
    <p className="details-field"><strong>Experience:</strong> {data?.experience} years</p>
    <p className="details-field">
      <strong>Interview Date:</strong> {new Date(data?.interviewDate).toLocaleDateString()}
    </p>
    <h3 className="details-subheading">Questions:</h3>
    <ul className="questions-list">
      {data?.questions?.map((q, index) => (
        <li key={index} className="question-item">
          {index+1}{"."} {q}{" ?"}
        </li>
      ))}
    </ul>
    <h3 className="details-subheading">Machine Coding Problem:</h3>
    <p className="details-text">{data.machineCodingProblem}</p>
    <h3 className="details-subheading">Coding Problem:</h3>
    <p className="details-text">{data.codingProblem}</p>
    <h3 className="details-subheading">Job Description:</h3>
    <p className="details-text">{data.jobDescription}</p>
    <button onClick={()=>{navigate(-1)}}>Back</button>
  </div>
  
  )
}
