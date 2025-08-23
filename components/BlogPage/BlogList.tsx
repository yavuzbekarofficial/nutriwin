// components/BlogPage/BlogList.tsx

import React from "react";
import BlogPostCard from "./BlogPostCard";
import { Blog } from "@/data/blogs";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        Henüz blog yazısı bulunmamaktadır.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <BlogPostCard
          key={blog.slug}
          slug={blog.slug}
          title={blog.title}
          image={blog.image}
          date={blog.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
