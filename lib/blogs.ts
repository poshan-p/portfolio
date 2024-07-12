import fs from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export async function loadBlog(slug: any) {
    const filename = slug.endsWith('.mdx') ? slug : slug.concat('.mdx');
    const filePath = path.join(process.cwd(), 'contents', decodeURI(filename));
    
    return await fs.readFile(filePath, 'utf-8');
}

export async function getBlog(slug: any) {
    const source = await loadBlog(slug);

    return await compileMDX({
        source,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                // @ts-ignore
                rehypePlugins: [rehypeKatex, rehypePrettyCode, rehypeHighlight],
                remarkPlugins: [remarkMath],
            },
        }
    });
}

export async function getBlogs() {
    const files = await fs.readdir(path.join(process.cwd(), 'contents'));

    const blogs = await Promise.all(
        files.map(async (filename) => {
            const { frontmatter } = await getBlog(filename);
            return {
                frontmatter,
                slug: filename.replace('.mdx', '')
            };
        })
    );

    return blogs;
}

