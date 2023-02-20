import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export const postsDirectory = join(process.cwd(), '_blog')
export const projectsDirectory = join(process.cwd(), '_projects')

export function getPostSlugs(directory = postsDirectory) {
  return fs.readdirSync(directory)
}

export function getPostBySlug(slug, fields = [], directory = postsDirectory) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllProjects(fields = []) {
  const slugs = getPostSlugs(projectsDirectory)
  const projects = slugs
    .map((slug) => getPostBySlug(slug, fields, projectsDirectory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return projects
}
