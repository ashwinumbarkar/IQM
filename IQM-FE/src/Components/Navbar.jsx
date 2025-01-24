import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
export default function Navbar() {
  return (
    
<navbar>
    <p>HumanCloud</p>
<ul><li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/AddQuestions">Add Questions</NavLink></li>
<li><NavLink to="/ViewQuestionList">Explore Questions</NavLink></li>
<li><NavLink to="/about">About</NavLink></li></ul>

</navbar>
  )
}
