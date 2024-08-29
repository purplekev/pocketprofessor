"use client";

import Head from "next/head";
import Header from '../components/Header';

const posts = [
    {
      id: 1,
      image: '../images/image1.png',
      title: 'Weather App',
      href: '#',
      description:
        'Create an app that fetches and displays weather information based on the user\'s location.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-16',
      category: { title: 'Beginner/Group', href: '#' },
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
        image: '../images/image2.png',
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Implement a simple calculator with basic arithmetic operations.',
        date: 'Mar 8, 2020',
        datetime: '2020-03-16',
        category: { title: 'Beginner', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        image: '../images/image3.png',
        title: 'To-Do List Application',
        href: '#',
        description:
          'Build a basic to-do list app where users can add, remove, and mark tasks as complete.',
        date: 'Mar 7, 2020',
        datetime: '2020-03-16',
        category: { title: 'Beginner', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 1,
        image: '../images/image4.png',
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
          image: '../images/image1.png',
          title: 'Boost your conversion rate',
          href: '#',
          description:
              'Create a project management tool with features for task management.',
          date: 'Mar 5, 2020',
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
          id: 1,
          image: '../images/image2.png',
          title: 'Project Management Tool',
          href: '#',
          description:
            'Develop a real-time collaborative text editor that allows simultaenously.',
          date: 'Mar 4, 2020',
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
            id: 1,
            image: '../images/image3.png',
            title: 'Event Booking System',
            href: '#',
            description:
              'Build a system for booking and managing events with user authentication.',
            date: 'Mar 3, 2020',
            datetime: '2020-03-16',
            category: { title: 'Expert', href: '#' },
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
              image: '../images/image4.png',
              title: 'Online Learning Platform',
              href: '#',
              description:
                  'Develop a platform for online courses with features for video hosting.',
              date: 'Mar 2, 2020',
              datetime: '2020-03-16',
              category: { title: 'Expert', href: '#' },
              author: {
                  name: 'Michael Foster',
                  role: 'Co-Founder / CTO',
                  href: '#',
                  imageUrl:
                  'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
          },
          {
              id: 1,
              image: '../images/image1.png',
              title: 'Financial Dashboard',
              href: '#',
              description:
                'Create a financial dashboard that aggregates and visualizes financial data from various sources.',
              date: 'Mar 1, 2020',
              datetime: '2020-03-16',
              category: { title: 'Expert', href: '#' },
              author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                href: '#',
                imageUrl:
                  'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
            },
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
                <div className="mb-2">
                    <h1 className="text-center text-2xl font-bold">Pocket Professor</h1>
                    <h3 className="text-center"> Your own completed projects! </h3>
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
        </>
    );
}
