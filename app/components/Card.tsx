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
                    <h3 className="text-lg font-bold mb-1">Personal website</h3>
                    <p className="text-xs text-gray-500 mb-2">By Jane Doe | August 10, 2024</p>

                    {/* Tags */}
                    <div className="flex space-x-1 mb-2 text-center">
                        <span className="bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-0.5 rounded-full">Religion</span>
                        <span className="bg-green-100 text-green-500 text-xs font-semibold px-2 py-0.5 rounded-full">Debate</span>
                    </div>

                    <p className="text-gray-600 text-sm">
                        In this article, we will navigate these deep waters, exploring contrasting perspectives of Scripture, the views of religious denominations, and the arguments presented by experts in this still passionately debated field.
                    </p>
                </div>

                {/* Text Section */}
                <div className="bg-gray-100 p-4">
                    <h2 className="text-black-700 text-2xl font-bold mb-4">Notes</h2>
                    <ul className="list-disc text-gray-800 text-sm mb-4 pl-5">
                        <li>The first computer virus, called "Creeper," was created in the early 1970s as an experiment.</li>
                        <li>There are over 1.8 billion websites on the internet, but less than 200 million are active.</li>
                    </ul>

                </div>


                {/* Additional cards can be added here following the same structure */}
            </div>
        </div>
    );
}

export default ArticleCards;
