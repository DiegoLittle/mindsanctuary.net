import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function markdown(markdown) {
  const result = await remark().process(markdown)
  return result.toString()
}