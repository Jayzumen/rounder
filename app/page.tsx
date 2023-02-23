import Link from "next/link";
import PokemonVote from "./components/PokemonVote";
import { AiFillGithub } from "react-icons/ai";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-center text-4xl font-bold">Rounder</h1>
      <div className="flex min-h-[75vh] flex-col items-center justify-center">
        <p>Which Pokémon is more round?</p>
        <PokemonVote />
      </div>

      <div className="mx-auto flex flex-col items-center justify-center gap-2 p-4 md:flex-row md:gap-8">
        <Link
          aria-label="Voting Results"
          className="mx-auto p-4 text-center text-xl transition hover:underline"
          href="/results"
        >
          Voting Results
        </Link>

        <Link
          aria-label="Github Link"
          className="mx-auto p-2 text-center text-xl transition hover:underline"
          href="https://github.com/Jayzumen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={40} />
        </Link>

        <Link
          aria-label="Link to About Page"
          className="mx-auto p-4 text-center text-xl transition hover:underline"
          href="/about"
        >
          About
        </Link>
      </div>
    </main>
  );
}
