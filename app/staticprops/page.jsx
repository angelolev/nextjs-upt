import Link from "next/link";
import Image from "next/image";
import { use } from "react";

// getStaticProps in Next13
async function getCharacters() {
  return await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
}

export default function BlogList() {
  const allCharacters = use(getCharacters());
  return (
    <div>
      <h2>getStaticPaths and getStaticProps</h2>
      {allCharacters?.results.map((c) => (
        <div key={c.id}>
          <Link
            href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}
          >
            <h3>{c.name}</h3>
          </Link>
          <Image src={c.image} width={300} height={300} alt={c.name} />
        </div>
      ))}
    </div>
  );
}
