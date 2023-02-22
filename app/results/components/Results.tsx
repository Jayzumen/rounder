"use client";

import Image from "next/image";
import { db } from "../../firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Results() {
  const [votings, setVotings] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getResults = async () => {
      const pokemonRef = collection(db, "pokemon");
      const pokemonSnapshot = await getDocs(pokemonRef);
      const pokemonList = pokemonSnapshot.docs.map((doc) => doc.data());
      setVotings(pokemonList);
    };
    getResults();
  }, []);

  return (
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
  );
}
