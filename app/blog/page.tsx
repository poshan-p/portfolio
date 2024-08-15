// pages/blogs.tsx
import dynamic from 'next/dynamic';
import { getBlogs } from '@/lib/blogs';

const BlogGrid = dynamic(() => import('@/components/blogitem').then(mod => mod.BlogGrid));

export default async function BlogsPage({ searchParams }: { searchParams: any }) {
  const unfilteredBlogs = getBlogs();

  let blogs = unfilteredBlogs
    .sort((a, b) => {
      return new Date(b.date as string).getTime() - new Date(a.date as string).getTime();
    })
    .filter((blog) => {
      if (searchParams.query !== undefined && searchParams.query !== '') {
        let query = searchParams.query.toLowerCase();
        let title = (blog.title as string).toLowerCase();
        return title.includes(query);
      }
      return true;
    });

  return (
    <div className={`flex ${blogs.length === 0 ? 'items-center' : ''} justify-center h-full`}>
      {blogs.length === 0 ? (<div><p className="text-2xl">No result</p></div>) : <BlogGrid blogs={blogs} />}
    </div>
  );
}
