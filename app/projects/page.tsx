/* eslint-disable @next/next/no-img-element */
"use client";

import Head from "next/head";
import Header from '../components/Header';

const posts = [
    {
      id: 1,
      image: '../images/image6.jpg',
      title: 'Weather App',
      href: '#',
      description:
        'Create an app that fetches and displays weather information based on the user\'s location.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-16',
      category: { title: 'Beginner/Group', href: '#' },
      author: {
        name: 'Gengis Jhan',
        role: 'Student',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        image: '../images/image11.png',
        title: 'Calculator App',
        href: '#',
        description:
            'Implement a simple calculator with basic arithmetic operations.',
        date: 'Mar 8, 2020',
        datetime: '2020-03-16',
        category: { title: 'Beginner', href: '#' },
        author: {
            name: 'Platty Irus',
            role: 'Parent',
            href: '#',
            imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
  
      {
        id: 1,
        image: '../images/image9.png',
        title: 'AI-Powered Chatbot',
        href: '#',
        description:
          'Develop a basic blog where users can read posts.',
        date: 'Mar 6, 2020',
        datetime: '2020-03-16',
        category: { title: 'Intermediate', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
          id: 2,
          image: '../images/image10.png',
          title: 'Cookie Clicker App',
          href: '#',
          description:
              'Game app of infinite cookie clicking with in game ads.',
          date: 'Mar 5, 2020',
          datetime: '2020-03-16',
          category: { title: 'Intermediate', href: '#' },
          author: {
              name: 'Michael Jordan',
              role: 'Gardener',
              href: '#',
              imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
      },
    // More posts...
  ];

export default function Home() {

    function getRandomInt(max: Number) {
        return Math.floor(Math.random() * Number(max));
    }

    return (
        <>
        <Header/>

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-2 lg:px-4">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                Make it your own, or learn from your peers.
                </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-center justify-between">
                    <img src={post.image} width="75%" height="75%" alt="my image" className="rounded-ss-3xl bg-gray-50"/>

                    <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                    </time>
                    
                    <a
                        href={post.category.href}
                        className="relative rounded-full bg-gray-50 px-0 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {post.category.title}
                    </a>
                    </div>
                    <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                        <span className="absolute inset-0 text-xl" />
                        {post.title}
                        </a>
                    </h3>
                    <p className="mt-1 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="relative mt-2 flex items-center gap-x-4">
                    <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                        </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                    </div>
                    </div>
                </article>
                ))}
            </div>
            </div>
        </div>
        
        </>
    );
}
