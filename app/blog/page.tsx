// pages/blogs.tsx
import dynamic from 'next/dynamic';
import { Spinner } from '@nextui-org/spinner';
import { getBlogs } from '@/lib/blogs';
import { Suspense } from 'react';

// Dynamically import BlogGrid
const BlogGrid = dynamic(() => import('@/components/blogitem').then(mod => mod.BlogGrid), {
  suspense: true
});

export default async function BlogsPage({ searchParams }: { searchParams: any }) {
  const unfilteredBlogs = await getBlogs();

  let blogs = unfilteredBlogs
    .sort((a, b) => {
      return new Date(b.frontmatter.date as string).getTime() - new Date(a.frontmatter.date as string).getTime();
    })
    .filter((blog) => {
      if (searchParams.query !== undefined && searchParams.query !== '') {
        let query = searchParams.query.toLowerCase();
        let title = (blog.frontmatter.title as string).toLowerCase();
        return title.includes(query);
      }
      return true;
    });

  return (
    <Suspense fallback={<Spinner />}>
      <div className={`flex ${blogs.length === 0 ? 'items-center' : ''} justify-center h-full`}>
        {blogs.length === 0 ? (<div><p className="text-2xl">No result</p></div>) : <BlogGrid blogs={blogs} />}
      </div>
    </Suspense>
  );
}
