import React from 'react'
import HomePic from '/c1.jpg'
import HomePic2 from '/bck.jpg'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const states=[
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Federal Capital Territory"
  ];
  const nav = useNavigate();
  
  const handleStudentHome=()=>{
    nav("/dashboard/counsellor");
  }
  return (
    <div className='dashboard' >
       <div className='dashboard-sub'>
         {/* Section one */}
        <div className='w-full flex flex-col lg:flex-row  justify-between lg:px-6 lg:items-center  bg-gray-100 bg-blend-normal py-4'>
          <div className='bg-gray-200'>
            <h2 className='p-3 rounded'>e-Career Counselor</h2>
          </div>
          <div className='flex flex-col md:flex-row gap-1 p-2 border rounded-md  items-center'>
            <div className='flex gap-1 justify-start items-center'>
              {/* <span>e-mail</span> */}
              <input type="text" placeholder='email' className='border shadow rounded p-1 text-gray-500'  />
            </div>
            <div className='flex gap-1 items-center '>
              {/* <span>Password</span> */}
              <input type="password" placeholder='Password' className=' border shadow rounded p-1 text-gray-500' />
            </div>
            <div>
              <button className='p-4 py-2 text-sm rounded text-white font-semibold bg-sky-400' onClick={()=>handleStudentHome()}>Login</button>
            </div>
          </div>
        </div>
        {/* section two */}
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            <img src={HomePic} alt=""  className='cover' />
          </div>
          <div className='flex-1 p-6 flex items-center text-xl text-center'>
              <p>
                According to forbes statitics 81% of workers said that they are  NOT "satisfied" with their jobs. Take our free career quiz today and find the career that best suits you
              </p>
          </div>
        </div>
          {/* section three */}
          <div className='bg-gray-800 p-8 py-5 text-gray-300'>
            <span>Embarking on a career journey is like setting sail on an ocean of opportunities, each wave holding the promise of discovery and growth. At the heart of career counseling lies the compass that guides you through these waters, helping you navigate towards your true north - a fulfilling and rewarding career path</span>
          </div>
          {/* section four */}
          <div className='flex md:p-4 pl-0 flex-col md:flex-row justify-center items-center  md:justify-start mb-4'>
            <div className='flex-1 p-4'>
              <p className='p-2 text-[1rem]'>Welcome To Our free Online career guidance and councelling website</p>
              <div className='border-gray-200 border-8 rounded-md'>
                <img src={HomePic2} alt="" />
              </div>
            
              {/* <div className='border-gray-200 border-2 p-4 mt-4 rounded'>
                  In the realm of career counseling, we believe in the power of self-discovery, where every individual possesses a unique constellation of talents, passions, and aspirations waiting to be unveiled. Through personalized guidance and insightful exploration, we strive to illuminate this path, empowering you to chart a course that aligns with your authentic self.
                
               Our approach is rooted in empathy and understanding, recognizing that the journey towards career fulfillment is as much about introspection as it is about exploration. We're here to listen, to support, and to co-create a roadmap that honors your ambitions and values.

              Together, we'll embark on a voyage of discovery, uncovering hidden talents, exploring new horizons, and overcoming challenges along the way. Whether you're a recent graduate embarking on your maiden voyage or a seasoned professional seeking new shores, our doors are open to guide you towards a destination where passion meets purpose.
              </div> */}
            </div>
            <div className='flex-1 shadow-sm w-full p-4 rounded-lg overflow-auto md:max-h-[500px] py-5 bg-white'>
                <div>
                  <h2 className='mb-4 font-bold text-xl'>SIGN UP</h2>
                </div>
                <hr/>
                <div className=''>
                  <div className='mb-3'>
                    <span className='text-sm text-gray-600'>First Name:</span>
                    <input type="text" className=' border shadow rounded p-1 px-3 text-gray-500 w-full' />
                  </div>
                  <div className='mb-3'>
                    <span className='text-sm text-gray-600'>Last Name:</span>
                    <input type="text" className=' border shadow rounded p-1 px-3 text-gray-500 w-full' />
                  </div>
                  <div className='mb-3'>
                    <span className='text-sm text-gray-600'>Email</span>
                    <input type="text" className=' border shadow rounded p-1 px-3 text-gray-500 w-full' />
                  </div>
                  <div className='mb-3'>
                    <span className='text-sm text-gray-600'>Phone Number</span>
                    <input type="text" className=' border shadow rounded p-1 px-3 text-gray-500 w-full' />
                  </div>
                  <div className='mb-3'>
                    <span className='text-sm text-gray-600'>Date of Birth</span>
                    <input type="date" className=' border shadow rounded p-1 px-3 text-gray-500 w-full' />
                  </div>
                  <div className='mb-3 text-[0.9rem] border p-2 rounded  text-gray-600'>
                    <span className='text-sm font-semibold'>Gender</span>
                    <div className='flex flex-row gap-6 mt-2'>
                      <div>
                        <span>Male</span> <input type="radio" className=' border shadow rounded p-1 px-3 text-gray-500 ' />
                      </div>
                      <div>
                        <span>Female</span> <input type="radio" className=' border shadow rounded p-1 px-3 text-gray-500 ' />
                      </div>
                    </div>
                  </div>

                  <div className='mb-3 text-[0.9rem] border p-2 rounded  text-gray-600'>
                    <span className='text-sm font-semibold'>Role</span>
                    <div className='flex flex-row gap-6 mt-2'>
                      <div>
                        <span>Counsellor</span> <input type="radio" className=' border shadow rounded p-1 px-3 text-gray-500 ' />
                      </div>
                      <div>
                        <span>Client</span> <input type="radio" className=' border shadow rounded p-1 px-3 text-gray-500 ' />
                      </div>
                    </div>
                  </div>

                  <div className='mb-3'>
                    <span className='text-sm text-gray-600'>State</span>
                    <select name="" id="" className='w-full text-sm text-gray-600 border py-2 px-3'>
                        {states.map((item, index)=><option value={item} key={index}>{item}</option>)}
                    </select>
                  </div>

                  <div className='mb-3'>
                    <span className='text-sm text-gray-600'>Password</span>
                    <input type="text" className=' border shadow rounded p-1 px-3 text-gray-500 w-full' />
                  </div>
                  <div>
                    <button className='w-full  text-white font-semibold bg-sky-400 text-sm p-3 rounded-lg pointer' onClick={()=>handleStudentHome()}>Let's Get Started</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
