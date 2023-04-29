// getStaticProps in Next13
async function getRepos() {
  return await (
    await fetch("https://api.github.com/users/angelolev/repos")
  ).json();
}

// getStaticPaths in Next13
export async function generateStaticParams() {
  const repos = await getRepos();

  return repos?.map((repo) => ({
    slug: repo?.name,
  }));
}

export default function Staticpage({ params }) {
  return (
    <>
      <h1>El nombre del repositorio es: {params.slug}</h1>
    </>
  );
}
