import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { db } from "../firebase";

export const metadata = {
  title: "Rounder | Results",
  description: "Results page for Rounder",
};

export const revalidate = 10;

const getResults = async () => {
  const pokemonRef = collection(db, "pokemon");
  const pokemonSnapshot = await getDocs(pokemonRef);
  const pokemonList = pokemonSnapshot.docs.map((doc) => doc.data());
  return pokemonList;
};

export default async function ResultsPage() {
  const votings = await getResults();
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
        <tbody>
          {votings
            .sort((a, b) => b.rounder - a.rounder)
            .map((pokemon) => (
              <tr className="border" key={pokemon.name}>
                <td className="border-r capitalize">{pokemon.name}</td>
                <td className="flex justify-center border-r">
                  <Image
                    width={150}
                    height={150}
                    src={pokemon.image}
                    alt={pokemon.name}
                  />
                </td>
                <td>{pokemon.rounder}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
