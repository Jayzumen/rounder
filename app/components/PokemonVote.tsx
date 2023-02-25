"use client";

import Image from "next/image";
import { db } from "../firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getRandomPokemon, Pokemon } from "../getPokemon";
import { useEffect, useState } from "react";

export default function PokemonVote() {
  const [firstPokemon, setFirstPokemon] = useState<Pokemon>();
  const [secondPokemon, setSecondPokemon] = useState<Pokemon>();

  const fetchPokemon = async (firstPokemon: Pokemon | undefined) => {
    setFirstPokemon(await getRandomPokemon());
    setSecondPokemon(await getRandomPokemon(firstPokemon && firstPokemon?.id));
  };

  useEffect(() => {
    fetchPokemon(firstPokemon);
  }, []);

  const voteRounder = async (pokemon: Pokemon) => {
    const pokemonRef = collection(db, "pokemon");
    const pokemonDoc = await getDoc(doc(pokemonRef, pokemon.name));
    if (pokemonDoc.exists()) {
      await updateDoc(doc(pokemonRef, pokemon.name), {
        rounder: pokemonDoc.data().rounder + 1,
      });
    } else {
      await setDoc(doc(pokemonRef, pokemon.name), {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        rounder: 1,
      });
    }
  };

  const handleClick = async (pokemon: Pokemon) => {
    voteRounder(pokemon);
    fetchPokemon(firstPokemon);
  };

  if (!firstPokemon || !secondPokemon) return <p>Loading...</p>;
  return (
    <div className="flex items-center justify-center gap-4 p-2 md:gap-8">
      {/* First */}
      <section className="">
        <div className="flex flex-col gap-2 text-center capitalize">
          <Image
            priority
            width={250}
            height={250}
            src={firstPokemon.image}
            alt={firstPokemon.name}
          />
          <p>{firstPokemon.name}</p>
          <button
            onClick={() => {
              handleClick(firstPokemon);
            }}
            className="items-center rounded-md bg-slate-700 px-4 py-2 transition hover:bg-slate-800"
          >
            Rounder
          </button>
        </div>
      </section>
      <p className="text-xl">VS</p>
      {/* Second */}
      <section className="">
        <div className="flex flex-col gap-2 text-center capitalize">
          <Image
            width={250}
            height={250}
            src={secondPokemon.image}
            alt={secondPokemon.name}
          />
          <p>{secondPokemon.name}</p>
          <button
            onClick={() => {
              handleClick(secondPokemon);
            }}
            className="items-center rounded-md bg-slate-700 px-4 py-2 transition hover:bg-slate-800"
          >
            Rounder
          </button>
        </div>
      </section>
    </div>
  );
}
