import Link from 'next/link';
import React from 'react';

const ArticleCards: React.FC = () => {
    return (
        <div className="container mx-auto bg-gray-100 p-4">
            {/* Adjust the grid to have 2 columns on medium screens and above */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Card 1 */}
                                <div className="bg-white p-4 rounded-md shadow-md relative">
                    {/* "Read Article" Link */}
                    {/* Title and Content */}
                    <h3 className="text-lg font-bold mb-1 text-black-900">Calculating the grades average math score</h3>
                    <p className="text-xs text-gray-500 mb-2">By Mr Bob | August 30, 2024</p>

                    {/* Tags */}
                    <div className="flex space-x-1 mb-2 text-center pl-16">
                        <span className="bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-0.5 rounded-full">Array</span>
                        <span className="bg-green-100 text-green-500 text-xs font-semibold px-2 py-0.5 rounded-full">Math</span>
                    </div>

                    <p className="text-gray-600 text-sm">
                       Given an array of math scores on the year 8 math exam, write a piece of code that calculates the average math score.
                    </p>
                </div>

                {/* Text Section */}
                <div className="bg-gray-100 p-4 text-left">
                    <h2 className="text-black-700 text-2xl font-bold mb-4 text-left">Notes</h2>
                    <ul className="list-disc text-gray-800 text-sm mb-4 pl-5 text-left">
                        <li>Variables are used to store data. For example, int variables store integers such as 1, 2, 3.</li>
                        <br></br>
                        <li>Strings can be used to store words, e.g., "hello world!"</li>
                    </ul>
                </div>


                {/* Additional cards can be added here following the same structure */}
            </div>
        </div>
    );
}

export default ArticleCards;
