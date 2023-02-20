import Head from "next/head";
import {getAllPosts} from "../lib/api";
import MoreStories from '../components/more-stories';

export default function Blog({allPosts}) {
  return (
    <>
      <Head>
        <title>Mentor Kadriu - Blog</title>
        <meta name="description" content="Mentor Kadriu - Projects listings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto flex flex-col gap-4">
          {allPosts.length > 0 && <MoreStories posts={allPosts} preSlug={"/blog"} />}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  }
}
