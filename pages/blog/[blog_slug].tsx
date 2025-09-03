// pages/blog/[blog_slug].tsx

import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogPage/BlogSidebar";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

const BlogDetay: React.FC = () => {
  const router = useRouter();
  const { blog_slug } = router.query;

  const blog = blogs.find((b) => b.slug === blog_slug);
  const { t } = useTranslation();

  if (!blog) {
    return <div>Blog yazısı bulunamadı.</div>;
  }

  return (
    <div>
      <Head>
        <title>{blog.title} | Blog</title>
      </Head>

      <Navbar />

      <div className="mt-[80px]">
        <PageBanner title="Blog"></PageBanner>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 flex flex-col gap-10">
        {/* Geri Dön butonu */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-700 hover:text-red-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {t("blogs.all-blog")}
          </Link>
        </div>

        {/* Ana içerik alanı */}
        <div className="flex flex-col md:flex-row gap-8">
          {/*
            Sol tarafta blog başlıklarını listeleyen sidebar.
            Mobil görünümde üstte, masaüstünde solda kalır.
          */}
          <BlogSidebar />

          {/* Sağ tarafta blog içeriği */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{blog.date}</p>

            <div className="relative w-full h-[250px] sm:h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Blog içeriğini dinamik olarak render ediyoruz */}
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {blog.content.map((item, index) => (
                <div key={index}>
                  {item.type === "heading" && (
                    <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
                      {item.text}
                    </h2>
                  )}
                  {item.type === "paragraph" && (
                    <p className="mb-4">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetay;
