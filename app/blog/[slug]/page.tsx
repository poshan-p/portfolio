import { getBlog,getBlogs } from '@/lib/blogs';
import { notFound } from 'next/navigation';


export async function generateMetadata({ params }: { params: any }) {
    try {
        const { frontmatter } = await getBlog(params.slug)
        return frontmatter
    } catch (e) { }
}

export async function generateStaticParams() {
    const blogs = await getBlogs()
   
    return blogs.map((blog) => ({
      slug: blog.slug,
    }))
  }

export default async function BlogPage({ params }: { params: any }) {
    let { content } = await getBlog(params.slug)
    
    try {
    } catch {
        notFound()
    }
    return (
        <div className='w-full content-center justify-center prose dark:prose-invert'>
            {content}
        </div>
    )
}

