"use client";

import React from "react";
import NextLink from "next/link";
import { Button, Link } from "@nextui-org/react";
import Transition from "@/components/Transition";
export default function App() {
	return (
		<Transition>
			<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<h1 className="text-4xl font-bold">404</h1>
				<p className="text-center text-lg">Are you lost, mate?</p>
				<Button className="mt-4" variant="ghost">
					<Link href="/" color="foreground" as={NextLink}>
						Go back home
					</Link>
				</Button>
			</div>
		</Transition>
	);
}
