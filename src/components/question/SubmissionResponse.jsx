import React from 'react'
import { Link } from 'react-router-dom'

const SubmissionResponse = () => {
  return (
    <div>
        <div id="modal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 modal">
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 class="text-2xl font-bold mb-4">Thank You!</h2>
            <p class="mb-4">Your responses have been submitted successfully.</p>
            <Link to="/dashboard/counsellor"> 
              <a id="closeModal" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded">Close</a>
            </Link>
           
        </div>
    </div>
    </div>
  )
}

export default SubmissionResponse