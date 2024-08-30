"use client";

import Head from "next/head";
import Header from '../components/Header';

const posts = [
    {
      id: 1,
      image: '../images/image5.png',
      title: 'Weather App',
      href: '#',
      description:
        'Create an app that fetches and displays weather information based on the user\'s location. And a whole bunch of other stuff too.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-16',
      category: { title: 'Beginner/Group', href: '#' }
    },
    {
        id: 2,
        image: '../images/seal.png',
        title: 'Animal Database',
        href: '#',
        description:
            'An beginner SQL database of all types of animals. Allowing you to search and define animals based on your criteria. Furthermore, using HTML to supply a frontend.',
        date: 'Mar 8, 2020',
        datetime: '2020-03-16',
        category: { title: 'Beginner', href: '#' }
    },
    {
        id: 1,
        image: '../images/jiji.png',
        title: 'To-Do List Application',
        href: '#',
        description:
          'Build a basic to-do list app where users can add, remove, and mark tasks as complete.',
        date: 'Mar 7, 2020',
        datetime: '2020-03-16',
        category: { title: 'Beginner', href: '#' }
      },
      {
        id: 1,
        image: '../images/image8.png',
        title: 'Pattern making app',
        href: '#',
        description:
          'Build art creator that uses symmetrical outlines to produce customn made art and crafts.',
        date: 'Mar 7, 2020',
        datetime: '2020-03-16',
        category: { title: 'Beginner', href: '#' }
      }
    // More posts...
  ];

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
                <div className="mb-2 justify-center flex flex-col items-center">
                    <h1 className="text-center text-2xl font-bold">Pocket Professor</h1>
                    <h3 className="text-center"> Your own completed projects! </h3>
                    <img src="../images/fireEmoji.png" width="20%" height="20%" className="mt-14"/>

                </div>
                <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-center justify-between">
                    <img src={post.image} width="75%" height="75%" alt="my image" className="max-w-sm max-h-96 rounded-ss-3xl bg-gray-50"/>

                    <div className="mt-5 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                    </time>
                    
                    <a
                        href={post.category.href}
                        className="relative rounded-full bg-gray-50 px-0 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                    </a>
                    </div>
                    <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                        <span className="absolute inset-0 text-xl" />
                        </a>
                    </h3>
                    <p className="text-center align-p-5 font-bold mt-1 line-clamp-3 text-lg leading-6 text-gray-900">{post.description}</p>
                    </div>
                    <div className="relative mt-2 flex items-center gap-x-4">
                    </div>
                </article>
                ))}
            </div>
            </div>
        </>
    );
}
