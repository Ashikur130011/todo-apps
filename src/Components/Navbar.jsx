import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-cyan-500'>
            <div className="font-bold mx-8 text-xl ">
                <span>i-Task</span>
            </div>
            <ul className="flex gap-8 mx-9">
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
            </ul>
        </nav>
    );
};

export default Navbar;