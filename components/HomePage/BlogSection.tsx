import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { Fade } from "react-awesome-reveal";
import useIsMobile from "@/hooks/useIsMobile";
import { useTranslation } from "@/hooks/useTranslation";

function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const isMobile = useIsMobile();

  const { t } = useTranslation();

  return (
    <section
      id="blog-section"
      aria-labelledby="blog-section-title"
      className="py-12"
    >
      <div className="container mx-auto">
        <div
          className={`flex justify-between items-end mb-12 ${
            isMobile ? "flex-col items-start gap-4" : ""
          }`}
        >
          <div className="relative">
            <h2
              id="blog-section-title"
              className="font-bold text-4xl text-red-500"
            >
              {t("blogs.last-blog")}
            </h2>
            <div className="border-b-2 border-red-500 w-24 mt-2"></div>
          </div>

          <Link
            href="/blog"
            aria-label="Tüm blog yazılarını gör"
            className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-900 transition-colors duration-300"
          >
            {t("blogs.all-blog")}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Fade key={post.slug} triggerOnce>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={`Nutriwin Blog: ${post.title}`}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.date}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Blog yazısını oku: ${post.title}`}
                    className="inline-block mt-auto bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 self-start text-center"
                  >
                    {t("blogs.read-more")}
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {totalPages > 0 && (
          <nav
            className="flex justify-center mt-8"
            aria-label="Blog sayfalandırma"
          >
            <ul className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 rounded-full text-lg font-bold ${
                      currentPage === index + 1
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}

export default BlogSection;
