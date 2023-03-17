import Link from "next/link";
import Results from "./components/Results";

export const metadata = {
  title: "Rounder | Results",
  description: "Results page for Rounder",
};

export default async function ResultsPage() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="pt-4 pb-8 text-center text-4xl font-bold">Results</h1>
      <Link
        className="mx-auto px-6 py-4 text-xl transition hover:underline"
        href="/"
      >
        Vote
      </Link>
      <table className="border px-10 text-center text-xl">
        <thead>
          <tr>
            <th className="w-[200px] border-r">Pokemon</th>
            <th className="w-[250px] border-r">Image</th>
            <th className="w-[200px]">Votes</th>
          </tr>
        </thead>
        <Results />
      </table>
    </main>
  );
}
