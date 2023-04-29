//getServerSideProps in Next13
import Image from "next/image";
import { use } from "react";
import styles from "../../styles/repo.module.css";

async function getRepos(user) {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  return await (
    await fetch(`https://api.github.com/users/${user}/repos`, {
      cache: "no-store",
    })
  ).json();
}

export default function Serverpage() {
  const repositories = use(getRepos("angelolev"));

  return (
    <div>
      <h2>Server Fetching (getServerSideProps)</h2>
      <div className={styles.list}>
        {repositories?.map((repo) => {
          return (
            <div className={styles.repository} key={repo.id}>
              <h2>{repo.name}</h2>
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
          );
        })}
      </div>
    </div>
  );
}
