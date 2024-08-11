"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  const [result, setResult] = React.useState("no numbers");

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary capitalize">
        random numbers
      </h1>
      <section className="py-24">
        <Button variant="secondary" onClick={() => setResult("numbers")}>
          Generate numbers
        </Button>
      </section>
      <section>
        <p>{result}</p>
      </section>
    </main>
  );
}
