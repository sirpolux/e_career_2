import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home'
import Dashboard from './components/Admin/Dashboard'
import TestPage from './components/Admin/TestPage'
import Sample from './components/Home/Sample'
import { Questionaire } from './components/question/Questionaire'
import { QuestionnaireIntro } from './components/question/QuestionnaireIntro'
import SubmissionResponse from './components/question/SubmissionResponse'
import Menu from './components/Home/Menu'
import SendMessage from './components/Message/SendMessage'
import CounselorResponses from './components/Message/CounselorResponses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <BrowserRouter>
       <Menu/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/student/counselor-response' element={<CounselorResponses/>} > </Route>
            <Route path='/dashboard/counsellor' element={<Dashboard/>} > </Route>
            <Route path='/counsellor/message' element={<SendMessage/>} > </Route>
            <Route path='/client/test'element={<TestPage/>} ></Route>
            <Route path='/student/questionnaire'element={<Questionaire/>} ></Route>
            <Route path ="/student/questionnaire-index" element={<QuestionnaireIntro/>} ></Route>
            <Route path='/questionniare/submit/response' element={<SubmissionResponse/>}> </Route>
            <Route path='/dashboard/student' element={<Dashboard/>}> </Route>
            

            <Route path='/samp' element={<Sample/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
