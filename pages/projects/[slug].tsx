import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import {getPostBySlug, getAllProjects, projectsDirectory} from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

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
                        {post.title} | Project
                    </title>
                  {post.ogImage?.url && (<meta property="og:image" content={post.ogImage.url} />)}
                </Head>
              <PostHeader
                title={post.title}
                coverImage={`../${post.coverImage}`}
                date={post.date}
              />
              <PostBody content={post.content} />
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
    ], projectsDirectory)
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
    const posts = getAllProjects(['slug']);

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
