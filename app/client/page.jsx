"use client";

import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/repo.module.css";

const fetcher = (path) =>
  // fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json());
  fetch(`https://api.github.com/users/${path}`).then((res) => res.json());

export default function Clientpage() {
  const repos = useSWR("angelolev/repos", fetcher);

  return (
    <div>
      <h2>Client Fetching</h2>
      <div className={styles.list}>
        {repos?.data?.map((repo) => (
          <div className={styles.repository} key={repo.id}>
            <Link href={`/staticprops/${repo.name}`}>
              <h2>{repo.name}</h2>
            </Link>
            <Image
              src={repo.owner.avatar_url}
              width={30}
              height={30}
              alt={repo.owner.login}
            />
            <h3>{repo.owner.login}</h3>
            <p>{repo.description}</p>
            <p>
              {repo.stargazers_count} Stars | {repo.forks_count} Forks |{" "}
              {repo.watchers_count} Watchers
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
