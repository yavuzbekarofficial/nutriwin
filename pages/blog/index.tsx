// pages/blog/index.tsx

import Head from "next/head";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogPage/BlogList";
import { blogs } from "@/data/blogs";
import { useTranslation } from "@/hooks/useTranslation";

const BlogAnaSayfa: React.FC = () => {
  const { t } = useTranslation();
  const pageTitle = `Blog | ${t("company_name")}`;
  const pageDescription = t("blogs.meta-description"); // blogs.json veya translation dosyasında tanımlı olmalı

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.example.com/blog" />
      </Head>

      <Navbar />

      <div className="mt-[80px]">
        <PageBanner title={"Blog"} />
      </div>

      <main className="max-w-6xl mx-auto px-12 py-10 flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("blogs.all-blog")}
        </h1>
        {/* Blog yazılarını listelemek için BlogList bileşenini kullanıyoruz */}
        <BlogList blogs={blogs} />
      </main>

      <Footer />
    </div>
  );
};

export default BlogAnaSayfa;
