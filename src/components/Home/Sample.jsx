import React, { useEffect } from 'react'

const Sample = () => {
    // Toggle mobile menu
    useEffect(()=>{
            document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
            var mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
    })
    },[])

        return (
            <div>
                <nav class="bg-gray-800">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div class="flex-shrink-0">
                                <a href="#" class="text-white text-lg font-semibold">Your Website</a>
                            </div>

                            {/* Menu  */}
                            <div class="hidden md:block">
                                <ul class="flex space-x-4">
                                    {/* <Menu */}
                                    <li>
                                        <a href="#" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <div class="md:hidden">
                                <button id="mobile-menu-toggle" class="text-white hover:text-gray-300 focus:outline-none">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu --> */}
                    <div id="mobile-menu" class="md:hidden hidden">
                        <ul class="bg-gray-700 py-2">
                            {/* <!-- Sub-menu Items --> */}
                            <li>
                                <a href="#" class="block text-white px-4 py-2">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block text-white px-4 py-2">About</a>
                            </li>
                            <li>
                                <a href="#" class="block text-white px-4 py-2">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block text-white px-4 py-2">Portfolio</a>
                            </li>
                            <li>
                                <a href="#" class="block text-white px-4 py-2">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

export default Sample