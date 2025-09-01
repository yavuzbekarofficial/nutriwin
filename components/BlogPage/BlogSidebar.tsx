// components/BlogPage/BlogSidebar.tsx

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { blogs } from "@/data/blogs";

const BlogSidebar: React.FC = () => {
  const router = useRouter();

  return (
    <aside className="w-full md:w-80 p-6 bg-gray-200 rounded-xl h-auto md:h-[500px] overflow-y-auto">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">
        Blog Yazıları
      </h4>
      <ul className="space-y-2">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link
              href={`/blog/${blog.slug}`}
              className={`block py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-between ${
                router.query.blog_slug === blog.slug
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-white"
              }`}
            >
              {blog.title}
              <Icon icon="mingcute:right-line"></Icon>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogSidebar;
