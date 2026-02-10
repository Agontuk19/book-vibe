import React from 'react';

const Navbar = () => {
    const links = <>
        <button><a href='/'><li className='lg:m-2 hover:border-2 rounded-lg px-3 py-1.5 border-[#09637E]'>Home</li></a></button>
        <button><li className='lg:m-2 hover:border-2 rounded-lg px-3 py-1.5 border-[#09637E]'>Listed Books</li></button>
        <button><li className='lg:m-2 hover:border-2 rounded-lg px-3 py-1.5 border-[#09637E]'>Pages to Read</li></button>
    </>
    return (
        <div class="navbar shadow-sm px-3 md:px-10 lg:px-20 xl:px-30 bg-[#EFEEEA] text-base-content">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabindex="-1"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a class="text-3xl font-bold roboto">B<span className='text-[#e89e37]'>o</span><span className='text-[#2ab4c4]'>o</span>k Vibe</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div class="navbar-end lg:text-lg">
                <button className="bg bg-[#09637E] px-3 py-1.5 text-white rounded-md mr-3">Log In</button>
                <button className="bg bg-[#09637E] px-3 py-1.5 text-white rounded-md hidden md:flex">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;