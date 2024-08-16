"use client";

import { Button } from "@/components/ui/button";
import { generateRandomNumbers } from "@/lib/randomNumbers";
import React from "react";

export default function Home() {
  const [result, setResult] = React.useState<Array<Array<string>> | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize">
        random numbers
      </h1>
      <section className="py-24">
        <Button
          onClick={() => setResult(generateRandomNumbers(1, 1_000_000, 30))}
        >
          Generate numbers
        </Button>
      </section>
      <section className="flex">
        {result ? (
          result.map((ns, i) => (
            <ul key={i} className="flex flex-col px-10">
              {ns.map((n, ii) => (
                <li key={ii} className="flex items-center">
                  {n.split("").map((l, iii) => (
                    <span key={iii} className="p-1 w-[2rem] text-center">
                      {l}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          ))
        ) : (
          <p className="italic">no numbers generated</p>
        )}
      </section>
    </main>
  );
}
