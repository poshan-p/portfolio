import { BlogGrid } from "@/components/blogitem";
import { getBlogs } from "@/lib/blogs";

export default async function BlogsPage({ searchParams } : { searchParams: any}) {
  const unfilteredBlogs = await getBlogs();
  
  let blogs = unfilteredBlogs.sort((a, b) => {
    return new Date(b.frontmatter.date as string).getTime() - new Date(a.frontmatter.date as string).getTime()
  }).filter((blog) => {
    if (searchParams.query !== undefined && searchParams.query !== '') {
      let query = searchParams.query.toLowerCase()
      let title = (blog.frontmatter.title as string).toLowerCase()
      return title.includes(query)
    }
    return true
  })
  return (
    <div className={`flex ${blogs.length === 0 ? 'items-center' : ''} justify-center h-full`}>
      {blogs.length === 0 ? (<div><p className="text-2xl">No result</p></div>) : BlogGrid({ blogs })}
    </div>
  );
}
