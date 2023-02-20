import Head from "next/head";
import {getAllProjects} from "../lib/api";
import MoreStories from '../components/more-stories';

export default function Projects({allProjects}) {
  return (
    <>
      <Head>
        <title>Mentor Kadriu - Playground</title>
        <meta name="description" content="Mentor Kadriu - Projects listings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
        {allProjects.length > 0 && <MoreStories posts={allProjects} preSlug={"/projects"}/>}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allProjects },
  }
}
