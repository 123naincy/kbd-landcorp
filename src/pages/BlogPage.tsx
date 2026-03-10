import { blogs } from "../data/blogs";
import BlogCardComponent from "../components/BlogCard";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-14">
      <h1 className="text-4xl font-bold text-center mb-12">
        Latest Blogs
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCardComponent
            key={blog.id}
            id={blog.id}
            title={blog.title}
           
            date={blog.date}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
}
