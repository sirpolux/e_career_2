import React, { useState } from 'react';

// Mock data for demonstration
const responseData = [
  {
    id: 1,
    title: 'Regarding your recent query',
    counselor: 'Counselor 1',
    dateSent: '2024-06-10',
    dateResponded: '2024-06-12',
    responseBody: 'Thank you for reaching out. Here is the detailed response to your query...'
  },
  {
    id: 2,
    title: 'Follow-up on your last session',
    counselor: 'Counselor 2',
    dateSent: '2024-06-08',
    dateResponded: '2024-06-09',
    responseBody: 'Following up on our last session, I have some additional suggestions...'
  },
  // Add more responses as needed
];

const CounselorResponses = () => {
  const [responses] = useState(responseData);
  const [selectedResponse, setSelectedResponse] = useState(null);

  const openModal = (response) => {
    setSelectedResponse(response);
  };

  const closeModal = () => {
    setSelectedResponse(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center text-blue-600">Counselor Responses</h1>
          <p className="text-center text-gray-700 mt-4">Here you can find the responses from your counselors. Click on any response to view the full message.</p>
        </header>

        <div className="bg-white p-8 rounded shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Messages and Responses</h2>
          <ul>
            {responses.map(response => (
              <li key={response.id} className="mb-4 p-4 bg-gray-50 rounded shadow cursor-pointer hover:bg-gray-100" onClick={() => openModal(response)}>
                <h3 className="text-xl font-bold text-gray-700">{response.title}</h3>
                <p className="text-gray-600">Counselor: {response.counselor}</p>
                <p className="text-gray-600">Date Sent: {response.dateSent}</p>
                <p className="text-gray-600">Date Responded: {response.dateResponded}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Tips for Effective Communication</h2>
          <p className="text-gray-700 mb-4">Here are some tips to help you communicate more effectively with your counselor:</p>
          <ul className="list-disc pl-5">
            <li className="mb-2 text-gray-700">Be clear and concise in your messages.</li>
            <li className="mb-2 text-gray-700">Provide relevant background information.</li>
            <li className="mb-2 text-gray-700">Be honest and open about your feelings and concerns.</li>
            <li className="mb-2 text-gray-700">Ask questions if you need clarification.</li>
            <li className="mb-2 text-gray-700">Follow up if you don’t receive a response within a reasonable time.</li>
          </ul>
        </div>
      </div>

      {selectedResponse && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedResponse.title}</h2>
            <p className="text-gray-700 mb-4">{selectedResponse.responseBody}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CounselorResponses;
