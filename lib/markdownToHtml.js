import {unified} from 'unified'
import remarkRehype from "remark-rehype";
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import javascript from 'highlight.js/lib/languages/javascript'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight, {
      languages: {
        javascript
      }
    })
    .use(remarkGfm)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown)

  return result.value;
}
