"use client";

import { Button } from "@/components/ui/button";
import { generateRandomNumbers } from "@/lib/randomNumbers";
import React from "react";

function Row({ numberAsStringInList }: { numberAsStringInList: string }) {
	const numberAsDigitsWithKeys = numberAsStringInList
		.split("")
		.map((num, index) => [index + numberAsStringInList, num]);

	return (
		<li className="flex items-center">
			{numberAsDigitsWithKeys.map(([key, num]) => (
				<span key={key} className="p-1 w-[2rem] text-center">
					{num}
				</span>
			))}
		</li>
	);
}

function Column({ listWithNumbers }: { listWithNumbers: string[] }) {
	return (
		<ul className="flex flex-col px-10">
			{listWithNumbers.map((numberAsStringInList) => (
				<Row
					key={numberAsStringInList}
					numberAsStringInList={numberAsStringInList}
				/>
			))}
		</ul>
	);
}

export default function RandomNumbers() {
	const [randomNumbers, setRandomNumbers] = React.useState<string[][] | null>(
		null,
	);

	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize">
				random numbers
			</h1>
			<section className="py-24">
				<Button
					onClick={() =>
						setRandomNumbers(generateRandomNumbers(1, 1_000_000, 30))
					}
				>
					Generate numbers
				</Button>
			</section>
			<section className="flex">
				{randomNumbers ? (
					randomNumbers.map((listWithNumbers) => (
						<Column
							key={listWithNumbers.join("-")}
							listWithNumbers={listWithNumbers}
						/>
					))
				) : (
					<p className="italic">no random numbers generated</p>
				)}
			</section>
		</main>
	);
}
