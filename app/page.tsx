import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize">
				home
			</h1>
			<section className="py-24">
				<Button asChild={true}>
					<Link href="/random-numbers">Enter</Link>
				</Button>
			</section>
		</main>
	);
}
