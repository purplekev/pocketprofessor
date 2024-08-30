import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="-mt-2 fixed top-0 p-1 w-full h-[68px] bg-white-800 text-black dark:bg-gray-800 dark:text-white z-1000">
            <div className="container flex justify-between items-center h-full mx-auto z-1000 bg-white">
                <div className="flex justify-center items-center h-full">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-600">
                            {/* SVG Paths */}
                        </svg>
                    </a>
                    <ul className="flex justify-center items-center space-x-3 h-full">
                    <span className="font-bold mr-12">
                        <Link href="/">PocketProfessor</Link>
                    </span>
                        <li className="flex">
                            <Link href="/myprofile" className="flex items-center px-4 -mb-1 border-b-2 border-transparent dark:border-transparent">
                                My Profile
                            </Link>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/projects" className="flex items-center px-4 -mb-1 border-b-2 border-transparent dark:border-transparent">Projects</a>
                        </li>
                    </ul>
                </div>
                
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <div className="border-2 border-black rounded-full">

                    </div>
                </div>

                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;
