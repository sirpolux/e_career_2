import React from 'react'
import Menu from '../Home/Menu'
import Question from './Question'
import { useNavigate } from 'react-router-dom'

export const Questionaire = () => {
    const nav=useNavigate()
    const handleFormSubmit=()=>{
        nav("/questionniare/submit/response")
    }
   const careerQuestions= [
    {
        "question": "Maintain, install, or repair computers.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "IT support"
    },
    {
        "question": "Try new recipes.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Chef"
    },
    {
        "question": "Help a business or client to meet financial goals.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Financial advising"
    },
    {
        "question": "Teach people new skills.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Education"
    },
    {
        "question": "Take care of people, even strangers.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Nursing"
    },
    {
        "question": "Write books, articles, essays, and plays.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Writer"
    },
    {
        "question": "Design and build structures or buildings.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Architecture"
    },
    {
        "question": "Conduct scientific research.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Researcher"
    },
    {
        "question": "Plan and organize events.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Event planning"
    },
    {
        "question": "Provide legal advice and services.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Lawyer"
    },
    {
        "question": "Manage a team or business.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Management"
    },
    {
        "question": "Work with animals.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Veterinarian"
    },
    {
        "question": "Create and perform music.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Musician"
    },
    {
        "question": "Develop software or applications.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Software development"
    },
    {
        "question": "Advise people on health and wellness.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Health coach"
    },
    {
        "question": "Investigate and solve crimes.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Detective"
    },
    {
        "question": "Work in a laboratory setting.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Lab technician"
    },
    {
        "question": "Design and create visual art.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Artist"
    },
    {
        "question": "Operate heavy machinery.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Machine operator"
    },
    {
        "question": "Analyze data and statistics.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Data analyst"
    },
    {
        "question": "Perform on stage or in film.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Actor"
    },
    {
        "question": "Teach children or adolescents.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Teacher"
    },
    {
        "question": "Design and develop new products.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Product development"
    },
    {
        "question": "Work in emergency medical services.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Paramedic"
    },
    {
        "question": "Engage in political or social activism.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Activist"
    },
    {
        "question": "Work in hospitality and tourism.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Hospitality"
    },
    {
        "question": "Conduct psychological counseling.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Psychologist"
    },
    {
        "question": "Design and develop games.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Game development"
    },
    {
        "question": "Work in agriculture or farming.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Farmer"
    },
    {
        "question": "Manage financial investments.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Financial manager"
    },
    {
        "question": "Work in environmental conservation.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Conservationist"
    },
    {
        "question": "Provide customer service.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Customer service"
    },
    {
        "question": "Create and edit videos.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Video editor"
    },
    {
        "question": "Work as a personal trainer or coach.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Personal trainer"
    },
    {
        "question": "Conduct market research.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Market researcher"
    },
    {
        "question": "Work as a translator or interpreter.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Translator"
    },
    {
        "question": "Develop marketing strategies.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Marketing"
    },
    {
        "question": "Engage in charity or non-profit work.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Non-profit"
    },
    {
        "question": "Repair and maintain vehicles.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Mechanic"
    },
    {
        "question": "Conduct financial audits.",
        "options": ["Very Interested", "Interested", "Slightly Interested", "Not Interested"],
        "desc": "Auditor"
    }
]

    
  return (
    <div className='pb-12'>
        <Menu/>
        <div className='flex w-full justify-center'>
            <div className='w-full max-w-4xl mx-auto mt-10 p-6 border rounded-lg shadow-md py-8'>
                 <p className='text-lg font-bold text-gray-800'>The student free career test. Takes about 10 minutes</p>
                 <hr className='mt-4'/>
                {careerQuestions.map((item,index)=><Question key={item.desc} questionItem={item} index={index}/>)}
                <hr className='mt-6'/>
                <button className='mt-6 p-2 px-4 rounded  text-white bg-green-800' onClick={()=>handleFormSubmit()}>Submit Response</button>
            </div>
           
        </div>
    </div>
  )
}
