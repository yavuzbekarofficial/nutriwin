// pages/blog/index.tsx

import Head from "next/head";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogPage/BlogList";
import { blogs } from "@/data/blogs";

const BlogAnaSayfa: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Blog | İlaç Firması</title>
      </Head>

      <Navbar />

      <div className="mt-[80px]">
        <PageBanner title="Blog"></PageBanner>
      </div>

      <div className="max-w-6xl mx-auto px-12 py-10 flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Tüm Blog Yazıları
        </h1>
        {/* Blog yazılarını listelemek için BlogList bileşenini kullanıyoruz */}
        {/* <BlogList blogs={blogs} /> */}
        <div>Henüz bir blog yazısı girilmemiştir</div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogAnaSayfa;
