import { Metadata } from "next";
import Link from "next/link";

export const metadata = (): Metadata => {
  return {
    title: "Rounder | About",
    description: "About page for Rounder",
  };
};

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-4 p-4 text-2xl">
      <h1 className="pt-4 pb-10 text-center text-4xl font-bold">About</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <p>
          Rounder is a simple app that allows you to vote on which Pokémon is
          more round.
        </p>
        <p>
          It's inspired by an idea from{" "}
          <Link
            aria-label="Theo's Twitter"
            className="font-semibold text-sky-400 underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/t3dotgg"
          >
            Theo(t3dotgg)
          </Link>
        </p>
        <p>It was created using Next.js, TailwindCss, and Firebase.</p>

        <Link
          aria-label="Link to Home Page"
          className="mx-auto mt-10 p-4 text-center text-xl transition hover:underline"
          href="/"
        >
          Vote
        </Link>
      </div>
    </main>
  );
}
