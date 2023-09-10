import Transition from "@/components/Transition";
export default function Home() {
	return (
		<Transition>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
					<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
						<h1 className="text-4xl font-bold">Welocome dear luv</h1>
					</div>
				</div>
			</main>
		</Transition>
	);
}
