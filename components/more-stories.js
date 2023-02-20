import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, preSlug }) {
  return (
    <>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={`${preSlug}/${post.slug}`}
          image={post.coverImage}
        />
      ))}
    </>
  )
}
