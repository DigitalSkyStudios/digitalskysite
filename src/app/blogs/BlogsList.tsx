import { ArticleType } from "./types";

const BlogsList = async ({ promise }: any) => {
  const blogs: ArticleType[] = await promise;
  
  return (
      <div>
          {blogs.length === 0 && (
              <div className="italic">
                  <p className="font-bold">We are currently working on producing some amazing content for you to read...</p>
                  <p>We Appreciate your Patience</p>
              </div>
          )}
          {blogs.length > 0 && blogs.map((blog: ArticleType) => {
              return (
                  <div key={blog.id} className="p-7 border-2 border-black text-left my-8">
                      <h1 className="text-xl font-bold">{blog.title}</h1>
                      <p className="text-gray-700 text-sm m-1">{blog.readable_publish_date}</p>
                      <p className="">{blog.description}</p>
                      <div className="flex gap-4">
                          {
                              blog.tag_list.slice(0,2).map((tag:string) => (
                                  <span className="tag" key={tag}>{tag}</span>
                              ))
                          } 
                      </div>
                  </div>
              );
            })}
    </div>
  )
}

export default BlogsList