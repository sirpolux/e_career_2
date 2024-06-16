import React from 'react'
import {Link} from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full space-y-8">
          
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h1 className="text-3xl font-bold mb-2">Welcome to Your Career Counseling Dashboard!</h1>
                  <p className='text-xl font-bold text-green-900 mb-2'>Machong Paul</p>
                  <p className="text-lg mb-4">We are here to help you explore your career options and guide you towards a successful future.</p>
              </div>
            
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                      <h2 className="text-2xl font-semibold mb-4">Attempt Questions</h2>
                      <p className="mb-4">Answer questions to help us understand your career interests.</p>
                      <Link to='/student/questionnaire-index'>
                        <a  className=" cursor-pointer px-4 py-2 bg-blue-500 text-white font-semibold rounded">Start Now</a>
                        </Link>
                  </div>

                
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                      <h2 className="text-2xl font-semibold mb-4">See Counselor Response</h2>
                      <p className="mb-4">View the responses from your counselor for the questions you have answered.</p>
                      <a href="#counselor-response" className="cursor-pointer px-4 py-2 bg-green-500 text-white font-semibold rounded">View Responses</a>
                  </div>

                
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                      <h2 className="text-2xl font-semibold mb-4">Send Message to Counselor</h2>
                      <p className="mb-4">Have any questions? Send a message to your counselor for further guidance.</p>
                      <Link to='/counsellor/message'> <a href="#send-message" className="cursor-pointer px-4 py-2 bg-purple-500 text-white font-semibold rounded">Send Message</a></Link> 
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard