"use client";

import Head from "next/head";
import Header from '../components/Header';


export default function Home() {
    return (
        <>
            <Head>
                <title>My Profile</title>
                <meta name="page of the profile" content="a page that presents the layout of the profile of a logged in member" />
            </Head>
            <Header />
            <div className="flex flex-col items-center min-h-screen">
                <div className="pt-10 mt-20 mb-7">
                    <div className="rounded-full border-black border-4 p-6">
                        <h1 className="text-2xl">PP</h1>
                    </div>
                </div>
                <div className="mb-2">
                    <h1 className="text-2xl font-bold">Pocket Professor</h1>
                </div>
            </div>
        </>
    );
}
