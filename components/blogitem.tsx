import Link from "next/link"

export function BlogCard({ blog }: { blog: any }) {
    return (
        <Link href={`/blog/${blog.slug}`} className="hover:scale-90 duration-150 flex flex-col bg-default-100 w-78 h-48 p-6 rounded-xl ">
            <h1 className="text-xl">{blog.frontmatter.title}</h1>
            <div className="flex-1" />
            <p className="text-sm text-default-600 mt-2">{blog.frontmatter.date}</p>
        </Link>
    )
}

export function BlogGrid({ blogs }: { blogs: any[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {blogs.map(blog => (
                <BlogCard key={blog.slug} blog={blog} />
            ))}
        </div>
    )
}