"use client";

import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

const fetcher = (path) =>
  fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json());

export default function Clientpage() {
  const characters = useSWR("api/character", fetcher);
  return (
    <div>
      <h2>Client Fetching</h2>
      {characters?.data?.results?.map((c) => (
        <div key={c.id}>
          <Link href={`/staticprops/${c.name}`}>
            <h3>{c.name}</h3>
          </Link>
          <Image src={c.image} width={300} height={300} alt={c.name} />
        </div>
      ))}
    </div>
  );
}
