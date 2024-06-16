import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const SendMessage = () => {
    const [formData, setFormData] = useState({
        email: '',
        title: '',
        body: '',
        counselor: ''
    });

    const counselors = ['Counselor 1', 'Counselor 2', 'Counselor 3'];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send the data to an API endpoint
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-center text-blue-600">Counseling Services</h1>
                    <p className="text-center text-gray-700 mt-4">We are here to support your mental health and well-being. Reach out to our counselors for guidance, support, and resources.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Send a Message to a Counselor</h2>
                        <div className="bg-white p-8 rounded shadow-md">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="body" className="block text-gray-700 font-bold mb-2">Message</label>
                                    <textarea
                                        name="body"
                                        id="body"
                                        value={formData.body}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="counselor" className="block text-gray-700 font-bold mb-2">Select Counselor</label>
                                    <select
                                        name="counselor"
                                        id="counselor"
                                        value={formData.counselor}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    >
                                        <option value="" disabled>Select a counselor</option>
                                        {counselors.map((counselor, index) => (
                                            <option key={index} value={counselor}>{counselor}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Link to='/student/counselor-response'> 
                                    <a
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Send Message
                                    </a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">About Our Counseling Services</h2>
                        <p className="text-gray-700 mb-4">Our counseling services are designed to support you in various aspects of your life, including academic stress, personal issues, mental health, and career guidance. Our professional counselors are here to listen and provide you with the best possible advice and support.</p>
                        <h3 className="text-xl font-bold mb-2">Student Testimonials</h3>
                        <div className="bg-white p-4 rounded shadow-md mb-4">
                            <p className="text-gray-700">"The counseling services have been a lifesaver for me. The counselors are understanding and provide great advice." - Student A</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-md mb-4">
                            <p className="text-gray-700">"I was struggling with my studies and personal issues. The counselors helped me navigate through them." - Student B</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-md">
                            <p className="text-gray-700">"Having someone to talk to made a huge difference in my college experience. Highly recommend their services." - Student C</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-700">How do I schedule an appointment?</h3>
                        <p className="text-gray-700">You can schedule an appointment by sending a message through this form, or you can visit our office during working hours.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-700">Are the counseling services confidential?</h3>
                        <p className="text-gray-700">Yes, all counseling sessions are confidential. We respect your privacy and ensure that your information is kept secure.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-700">Is there a fee for counseling services?</h3>
                        <p className="text-gray-700">No, our counseling services are free for all enrolled students.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;
