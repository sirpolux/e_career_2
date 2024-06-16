import React from 'react'
import Menu from '../Home/Menu'
import { Link } from 'react-router-dom'

export const QuestionnaireIntro = () => {
  return (
    <div>
        <div class=" text-gray-800 mb-12">
            <div class="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h1 class="text-3xl font-bold mb-6 text-center">Welcome to the Career Counseling Questionnaire!</h1>
                <p class="mb-4">Dear Students,</p>
                <p class="mb-4">
                    We are excited to help you explore your career interests and guide you on the path to finding a fulfilling and successful career. This questionnaire is designed to help you identify areas that you are passionate about and to provide insight into potential career paths that align with your interests.
                </p>
                <h2 class="text-2xl font-semibold mb-4">Instructions:</h2>
                <ol class="list-decimal list-inside mb-4">
                    <li><span class="font-semibold">Read Each Question Carefully:</span> Each question will present an activity or task that you might enjoy doing.</li>
                    <li><span class="font-semibold">Select Your Level of Interest:</span> For each question, choose the option that best describes your interest level:
                        <ul class="list-disc list-inside ml-6">
                            <li><span class="font-semibold">Very Interested</span></li>
                            <li><span class="font-semibold">Interested</span></li>
                            <li><span class="font-semibold">Slightly Interested</span></li>
                            <li><span class="font-semibold">Not Interested</span></li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">Be Honest and Thoughtful:</span> Your honest responses will provide the most accurate reflection of your interests and help us give you the best possible guidance.</li>
                </ol>
                <h2 class="text-2xl font-semibold mb-4">Example Question:</h2>
                <p class="mb-4">
                    Maintain, install, or repair computers.
                    <ul class="list-disc list-inside ml-6">
                        <li>Very Interested</li>
                        <li>Interested</li>
                        <li>Slightly Interested</li>
                        <li>Not Interested</li>
                    </ul>
                </p>
                <p class="mb-4">
                    Based on your answers, we will provide you with suggestions and insights into career fields that may suit your interests. Remember, there are no right or wrong answers—just what truly reflects your preferences and passions.
                </p>
                <p class="mb-4">
                    We hope this questionnaire will be a valuable tool in your career exploration journey. Take your time, think carefully about each question, and most importantly, enjoy the process of discovering more about yourself and your future opportunities.
                </p>
                <p class="mb-4">Good luck, and let's get started! </p>
                <Link to="/student/questionnaire"><a className='bg-green-700 px-4 rounded text-white p-2 mb-12'>Open Questionnaire</a></Link>
                
                {/* <p class="mb-4">Sincerely,</p>
                <p class="font-semibold">[Your School/Organization's Name]</p>
                <p class="font-semibold">Career Counseling Team</p> */}
            </div>
        </div>
    </div>
  )
}
