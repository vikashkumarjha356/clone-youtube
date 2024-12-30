import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if (!isMenuOpen) return null;

    return (
        <div className='p-5 shadow-lg w-72 h-auto'>
            {/* Navigation Links */}
            <ul className='space-y-4'>
                <li>
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                </li>
                <li className='hover:text-blue-400'>
                    Shorts
                </li>
                <li className='hover:text-blue-400'>
                    Videos
                </li>
                <li className='hover:text-blue-400'>
                    Live
                </li>
            </ul>

            {/* First Subscriptions Section */}
            <div className='mt-6'>
                <h1 className='font-bold text-lg'>Subscriptions</h1>
                <ul className='space-y-2 mt-3'>
                    <li className='hover:text-blue-400'>Music</li>
                    <li className='hover:text-blue-400'>Sports</li>
                    <li className='hover:text-blue-400'>Gaming</li>
                    <li className='hover:text-blue-400'>Movies</li>
                </ul>
            </div>

            {/* Second Subscriptions Section */}
            <div className='mt-6'>
                <h1 className='font-bold text-lg'>Subscriptions</h1>
                <ul className='space-y-2 mt-3'>
                    <li className='hover:text-blue-400'>Music</li>
                    <li className='hover:text-blue-400'>Sports</li>
                    <li className='hover:text-blue-400'>Gaming</li>
                    <li className='hover:text-blue-400'>Movies</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
