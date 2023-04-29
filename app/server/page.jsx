//getServerSideProps in Next13
import Image from "next/image";
import { use } from "react";

async function getCharacters() {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  return await (
    await fetch("https://rickandmortyapi.com/api/character", {
      cache: "no-store",
    })
  ).json();
}

export default function Serverpage() {
  const characters = use(getCharacters());

  return (
    <div>
      <h2>Server Fetching (getServerSideProps)</h2>
      {characters?.results?.map((c) => {
        return (
          <div key={c.id}>
            <h3>{c.name}</h3>
            <Image src={c.image} width={300} height={300} alt={c.name} />
          </div>
        );
      })}
    </div>
  );
}
