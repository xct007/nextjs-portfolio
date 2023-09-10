import React from "react";

export default function About() {
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<h1 className="text-4xl font-bold">About Me</h1>
			</div>
			<div className="flex w-full flex-col items-center">
				<div className="flex flex-col md:flex-row w-full items-center justify-center gap-4">
					<p className="text-center text-lg">Well i&apos;m not sure, sometimes I believe I can fly, like flies.</p>
				</div>
			</div>
		</>
	);
}
