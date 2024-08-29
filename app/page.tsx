"use client";

import clsx from "clsx";
import Header from './components/Header';
import Styles from './components/Styles'
import Card from './components/Card';
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { EnterIcon, LoadingIcon } from "@/lib/icons";
import { usePlayer } from "@/lib/usePlayer";
import { track } from "@vercel/analytics";
import { useMicVAD, utils } from "@ricky0123/vad-react";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import { ST } from "next/dist/shared/lib/utils";

type Message = {
	role: "user" | "assistant";
	content: string;
	latency?: number;
};

export default function Home() {
	const [input, setInput] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const player = usePlayer();

	const vad = useMicVAD({
		startOnLoad: true,
		onSpeechEnd: (audio) => {
			player.stop();
			const wav = utils.encodeWAV(audio);
			const blob = new Blob([wav], { type: "audio/wav" });
			submit(blob);
			const isFirefox = navigator.userAgent.includes("Firefox");
			if (isFirefox) vad.pause();
		},
		workletURL: "/vad.worklet.bundle.min.js",
		modelURL: "/silero_vad.onnx",
		positiveSpeechThreshold: 0.6,
		minSpeechFrames: 4,
		ortConfig(ort) {
			const isSafari = /^((?!chrome|android).)*safari/i.test(
				navigator.userAgent
			);

			ort.env.wasm = {
				wasmPaths: {
					"ort-wasm-simd-threaded.wasm":
						"/ort-wasm-simd-threaded.wasm",
					"ort-wasm-simd.wasm": "/ort-wasm-simd.wasm",
					"ort-wasm.wasm": "/ort-wasm.wasm",
					"ort-wasm-threaded.wasm": "/ort-wasm-threaded.wasm",
				},
				numThreads: isSafari ? 1 : 4,
			};
		},
	});

	useEffect(() => {
		function keyDown(e: KeyboardEvent) {
			if (e.key === "Enter") return inputRef.current?.focus();
			if (e.key === "Escape") return setInput("");
		}

		window.addEventListener("keydown", keyDown);
		return () => window.removeEventListener("keydown", keyDown);
	});

	const [messages, submit, isPending] = useActionState<
		Array<Message>,
		string | Blob
	>(async (prevMessages, data) => {
		const formData = new FormData();

		if (typeof data === "string") {
			formData.append("input", data);
			track("Text input");
		} else {
			formData.append("input", data, "audio.wav");
			track("Speech input");
		}

		for (const message of prevMessages) {
			formData.append("message", JSON.stringify(message));
		}

		const submittedAt = Date.now();

		const response = await fetch("/api", {
			method: "POST",
			body: formData,
		});

		const transcript = decodeURIComponent(
			response.headers.get("X-Transcript") || ""
		);
		const text = decodeURIComponent(
			response.headers.get("X-Response") || ""
		);

		if (!response.ok || !transcript || !text || !response.body) {
			if (response.status === 429) {
				toast.error("Too many requests. Please try again later.");
			} else {
				toast.error((await response.text()) || "An error occurred.");
			}

			return prevMessages;
		}

		const latency = Date.now() - submittedAt;
		player.play(response.body, () => {
			const isFirefox = navigator.userAgent.includes("Firefox");
			if (isFirefox) vad.start();
		});
		setInput(transcript);

		return [
			...prevMessages,
			{
				role: "user",
				content: transcript,
			},
			{
				role: "assistant",
				content: text,
				latency,
			},
		];
	}, []);

	function handleFormSubmit(e: React.FormEvent) {
		e.preventDefault();
		submit(input);
	}

	return (
		<>
			<div className="flex h-full">
				<Header />
				{/* Left Column - Chat Box */}
				<div className="flex-1 flex flex-col items-center p-8 pt-20 w-3/5 bg-white dark:bg-neutral-900">
					<div className="pb-4 min-h-28" />
					<form
						className="rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 flex items-center w-full max-w-3xl border border-transparent hover:border-neutral-300 focus-within:border-neutral-400 hover:focus-within:border-neutral-400 dark:hover:border-neutral-700 dark:focus-within:border-neutral-600 dark:hover:focus-within:border-neutral-600"
						onSubmit={handleFormSubmit}
					>
						<input
							type="text"
							className="bg-transparent focus:outline-none p-4 w-full placeholder:text-neutral-600 dark:placeholder:text-neutral-400"
							required
							placeholder="Ask me anything"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							ref={inputRef}
						/>

						<button
							type="submit"
							className="p-4 text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
							disabled={isPending}
							aria-label="Submit"
						>
							{isPending ? <LoadingIcon /> : <EnterIcon />}
						</button>
					</form>

					<div className="text-neutral-400 dark:text-neutral-600 pt-4 text-center max-w-xl text-balance min-h-28 space-y-4">
						{messages.length > 0 && (
							<p>
								{messages.at(-1)?.content}
								<span className="text-xs font-mono text-neutral-300 dark:text-neutral-700">
									{" "}
									({messages.at(-1)?.latency}ms)
								</span>
							</p>
						)}

						{messages.length === 0 && (
							<>
								<p>
									Empowering curiosity,
									<A href="https://vercel.com"> one conversation at a time.</A>{" "}
									
								</p>

								{vad.loading ? (
									<p>Loading speech detection...</p>
								) : vad.errored ? (
									<p>Failed to load speech detection.</p>
								) : (
									<p>Start talking to chat.</p>
								)}
							</>
						)}
					</div>
					<div className="flex flex-row space-x-4 pt-10">
						{/* First Styles Card */}
						<div className="w-40 h-40">
							<Styles text="Learn with hands-on examples" fromColor="from-green-500" toColor="to-green-300" />
						</div>

						{/* Second Styles Card */}
						<div className="w-40 h-40">
							<Styles text="For Visual Learners" fromColor="from-purple-500" toColor="to-purple-300" />
						</div>

						{/* Third Styles Card */}
						<div className="w-40 h-40">
							<Styles text="Made For Conversational Learners" fromColor="from-red-500" toColor="to-red-300" />
						</div>
					</div>
					<div
						className={clsx(
							"absolute size-36 blur-3xl rounded-full bg-gradient-to-b from-red-200 to-red-400 dark:from-red-600 dark:to-red-800 -z-50 transition ease-in-out",
							{
								"opacity-0": vad.loading || vad.errored,
								"opacity-30":
									!vad.loading && !vad.errored && !vad.userSpeaking,
								"opacity-100 scale-110": vad.userSpeaking,
							}
						)}
					/>
				</div>

				{/* Right Column - Additional Content
				<h2 className="font-bold"></h2>
				<div className="flex flex-col justify-between w-2/5 bg-gray-100 dark:bg-gray-800 p-8">
					<Card />
				</div> */}
				<div className="flex-1 flex flex-col items-center p-8 pl-40 w-2/5 bg-white dark:bg-neutral-900">
				{/* Flex container for the Styles cards */}
				<div className="flex flex-row space-x-4 pt-10">

				<div className="w-40 h-40">
					<Styles text="To-Do List" fromColor="from-green-500" toColor="to-green-300" />
				</div>

				{/* Second Styles Card */}
				<div className="w-40 h-40">
					<Styles text="Weather app" fromColor="from-purple-500" toColor="to-purple-300" />
				</div>

				{/* Third Styles Card */}
				<div className="w-40 h-40">
					<Styles text="Tracker App" fromColor="from-red-500" toColor="to-red-300" />
				</div>


					</div>

				<div className="pb-2" />
				<div className="text-neutral-400 dark:text-neutral-600 pt-4 text-center max-w-xl text-balance min-h-28 space-y-4 flex items-center justify-center">
					<Card />
					{/* <span className="ml-4"># text here</span> Add text inside a span and add margin-left for spacing */}
				</div>


				<div
					className={clsx(
					"absolute size-36 blur-3xl rounded-full bg-gradient-to-b from-red-200 to-red-400 dark:from-red-600 dark:to-red-800 -z-50 transition ease-in-out",
					{
						"opacity-0": vad.loading || vad.errored,
						"opacity-30": !vad.loading && !vad.errored && !vad.userSpeaking,
						"opacity-100 scale-110": vad.userSpeaking,
					}
					)}
				/>
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
