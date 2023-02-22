import Link from "next/link";
import PokemonVote from "./components/PokemonVote";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-center text-4xl font-bold">Rounder</h1>
      <div className="flex min-h-[80vh] flex-col items-center justify-center">
        <p>Which Pokémon is more round?</p>
        <PokemonVote />
      </div>

      <Link
        aria-label="Voting Results"
        className="mx-auto rounded-md bg-slate-800 p-4 text-center text-xl transition hover:bg-slate-700"
        href="/results"
      >
        Voting Results
      </Link>
    </main>
  );
}
