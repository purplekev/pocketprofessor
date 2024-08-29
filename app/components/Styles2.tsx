import React from 'react';

const QuickstartSection2 = ({
    fromColor = 'from-sky-500',
    toColor = 'to-blue-300',
    text = 'Hands on learning.' // Add text prop with default value
}) => {
    return (
        <section>
            <div 
                style={{ width: '130px', height: '130px' }} 
                className="relative group overflow-hidden rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
            >
                {/* Apply scaling to this container to shrink content */}
                <div 
                    aria-hidden="true" 
                    className={`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b ${fromColor} ${toColor} dark:from-white dark:to-gray-500 blur-2xl opacity-50 dark:opacity-20 dark:group-hover:opacity-40`}
                    style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}
                ></div>
                <div className="relative" style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}>
                    <div className="mt-4 pb-4 rounded-b-[--card-border-radius]">
                        <p className="text-blue-600 dark:text-gray-300 text-center pl-6 font-semibold">{text}</p> {/* Use text prop here */}
                        {/* Center SVG horizontally */}
                        <div style={{ display: 'flex', justifyContent: 'center', paddingLeft: '20px', paddingTop: '20px' }}>
                        <svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"  style={{ width: '30px', height: '30px' }}>
                            <rect width="40px" height="40px" fill="white" fill-opacity="0.01"/>
                            <path d="M34.6077 8.60771C34.0126 8.01256 33.2626 7.70703 32.4867 7.70703C31.7107 7.70703 30.9607 8.01256 30.3656 8.60771L8.36564 30.6077L7 40.999L17.3923 39.6334L39.3923 17.6334C39.9874 17.0382 40.2929 16.2882 40.2929 15.5122C40.2929 14.7363 39.9874 13.9863 39.3923 13.3911L34.6077 8.60771Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 35L10 31" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 44H37C39 44 40 43 40 41V30L34 36H16L11 41C11 42 12 44 11 44Z" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickstartSection2;
