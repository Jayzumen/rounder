"use client";

import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";
import { db } from "../firebase";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [notFound, setNotFound] = useState(false);

  const searchPokemon = async (search: string) => {
    const searchTerm = search.toLowerCase();

    const colRef = collection(db, "pokemon");
    const querySnapshot = await getDocs(colRef);
    const searchResults = querySnapshot.docs.filter((doc) => {
      const pokemonName = doc.data().name.toLowerCase();
      return pokemonName.includes(searchTerm.toLowerCase());
    });
    const pokemon: Pokemon[] = [];
    searchResults.forEach((doc) => {
      const data = doc.data();
      pokemon.push(data as Pokemon);
    });

    if (pokemon.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setPokemon(pokemon);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPokemon(search);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <h1 className="text-4xl">Search for a Pokemon</h1>
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center gap-4 "
      >
        <label className="sr-only" htmlFor="pokemonName">
          Pokemon Name
        </label>
        <input
          className="rounded-lg px-4 py-2 text-black outline-none"
          type="text"
          name="pokemonName"
          id="pokemonName"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="rounded-lg bg-slate-700 px-4 py-2 text-xl transition-colors hover:bg-slate-800"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {!notFound ? (
          pokemon.map((mon) => (
            <div
              className="rounded-lg bg-slate-700 p-2 text-center text-xl font-semibold"
              key={mon.id}
            >
              <p>#{mon.id}</p>
              <p className="capitalize">{mon.name}</p>
              <Image height={400} width={400} src={mon.image} alt={mon.name} />
              <p>Rounder Votes: {mon.rounder}</p>
            </div>
          ))
        ) : (
          <p className="text-2xl">No Pokemon Found</p>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
