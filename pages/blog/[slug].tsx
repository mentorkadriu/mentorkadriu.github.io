import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import 'highlight.js/styles/monokai-sublime.css';

export default function Post({ post }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
    <>
        {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
        ) : (
            <main>
                <Head>
                    <title>
                        {post.title} | Next.js Blog Example with {CMS_NAME}
                    </title>
                  {post.ogImage && <meta property="og:image" content={post.ogImage.url} />}
                </Head>
                <div className="column">
                    <PostHeader
                        title={post.title}
                        coverImage={`../${post.coverImage}`}
                        date={post.date}
                    />
                </div>
                <div className="phi-column">
                    <PostBody content={post.content} />
                </div>
            </main>
        )}
    </>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
