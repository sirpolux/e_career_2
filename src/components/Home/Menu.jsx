import React from 'react'
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
        <div className="h-16 flex items-center justify-between px-6 border-gray-400 border-b-2  bg-gray-100">
            <div>
                <span className='md:text-2xl font-bold'>e-Career Counselor</span>
            </div>
            <div className="flex gap-3 md:gap-16">
                <div>
                    <Link to="/" > <a href="">Home</a> </Link>
                </div>
                <div>
                    <Link to="/dashboard/counsellor" > <a href="">Dashboard</a> </Link>
                </div>
                <div>
                    <Link to="/" > <a href="">Logout</a> </Link>
                </div>
            </div>
        </div>
  )
}

export default Menu