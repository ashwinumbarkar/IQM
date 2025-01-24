import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Navbar from './Components/Navbar'
import AddQuestions from './Components/AddQuestions'
import Home from './Components/Home'
import ExploreQuestions from './Components/ExploreQuestions'
import QuestionDetails from './Components/QuestionDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/AddQuestions' element={<AddQuestions/>}/>
  <Route path='/ViewQuestionList' element={<ExploreQuestions/>}/>
  <Route path='/questionsDetails' element={<QuestionDetails/>}/>
  <Route path='/about' element={"About"}/>
  <Route path='/*' element={"404 page Not Found"}/>
</Routes>
    </>
  )
}

export default App
