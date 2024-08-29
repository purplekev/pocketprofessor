"use client";

import clsx from "clsx";
import Header from './components/Header';
import Chat from './components/Chat';
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { EnterIcon, LoadingIcon } from "@/lib/icons";
import { usePlayer } from "@/lib/usePlayer";
import { track } from "@vercel/analytics";
import { useMicVAD, utils } from "@ricky0123/vad-react";

type Message = {
	role: "user" | "assistant";
	content: string;
	latency?: number;
};

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSideSection = () => {
		setIsOpen(!isOpen);
	};

	return (
        <>
            <Header />
            <div className="flex h-screen w-screen">
                {/* Left Side */}
                <div className="flex-1 bg-gray-100 p-4">
                    <Chat />
                </div>

                {/* Right Side */}
                <div className="w-1/3 bg-gray-200 p-4">
                    <h2 className="text-xl font-semibold">Info Section</h2>
                    <p>Content goes here.</p>
                </div>
            </div>
        </>
    );
}

function A(props: any) {
	return (
		<a
			{...props}
			className="text-neutral-500 dark:text-neutral-500 hover:underline font-medium"
		/>
	);
}
