"use client";

import Head from "next/head";
import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <Head>
                <title>Your Nicer Title Here</title>
                <meta name="description" content="This is a description of your blank page." />
            </Head>
            
            {/* Include the Header */}
            <Header />
            
            {/* Centered Content */}
            <div className="flex justify-center items-center min-h-screen">
                <h1 className="text-4xl font-bold">Welcome to Your Blank Page</h1>
            </div>
        </>
    );
}
