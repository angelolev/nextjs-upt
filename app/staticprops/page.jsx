import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import styles from "../../styles/repo.module.css";

// getStaticProps in Next13
async function getRepos() {
  return await (
    await fetch("https://api.github.com/users/angelolev/repos")
  ).json();
}

export default function BlogList() {
  const allRepos = use(getRepos());
  return (
    <div>
      <h2>getStaticPaths and getStaticProps</h2>
      <div className={styles.list}>
        {allRepos?.map((repo) => (
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
