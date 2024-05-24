import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import rehypeHighlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

export function loadBlog(slug: any) {
    const filename = slug.endsWith('.mdx') ? slug : slug.concat('.mdx')

    return fs.readFileSync(
        path.join(process.cwd(), 'contents', decodeURI(filename))
    )
}


export async function getBlog(slug: any) {
    const source = loadBlog(slug)

    return await compileMDX({
        source,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                // @ts-ignore
                rehypePlugins: [rehypePrettyCode, rehypeHighlight],
                
            },
        }
    });;
}

export async function getBlogs() {
    const files = fs.readdirSync(path.join(process.cwd(), 'contents'))

    return await Promise.all(
        files.map(async filename => {
            const { frontmatter } = await getBlog(filename)

            return {
                frontmatter,
                slug: filename.replace('.mdx', '')
            }
        })
    )
}

