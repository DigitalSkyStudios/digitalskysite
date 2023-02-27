import { cache, Suspense } from 'react';
import BlogsList from './BlogsList';
import Loading from './loading';
import { ArticleType } from './types';
import styles from './blogs.module.css';
import classNames from 'classnames';

const getBlogPosts = cache(async (username: string) => {
  // digitalsky
  try {
    const url = `https://dev.to/api/articles?username=${username}`;
    const res = await fetch(url, {
      next: {
        revalidate: 60,
      }
    });
    return res.json();
  } catch {
    return Promise.reject('Error in Fetching');
  }
});

const page = async () => {
  const blogs: ArticleType[] = await getBlogPosts('digitalsky');

  return (
    <div className="text-center min-h-screen">
      <div className={classNames('mb-11', styles.separator)}>
        <h1 className="text-2xl font-bold mt-11 mb-5">Read our Blog Posts</h1>
        <p className="max-w-[40ch] m-auto">Here is a collection of our blog posts collected from Dev.to </p>
      </div>
      <div className="px-14 max-w-3xl mx-auto py-6">
        <Suspense fallback={<Loading />}>
          {/* This comment has to stay, it's a bug in Typescript lol */}
          {/* @ts-expect-error Server Component */}
          <BlogsList promise={blogs} />
        </Suspense>
      </div>
    </div>
  )
}

export default page;