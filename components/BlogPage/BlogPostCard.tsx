// components/BlogPage/BlogPostCard.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPostCardProps {
  slug: string;
  title: string;
  image: string;
  date: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  slug,
  title,
  image,
  date,
}) => {
  return (
    <Link href={`/blog/${slug}`} legacyBehavior>
      <a className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
        {/* Blog görseli */}
        <div className="relative w-full h-48">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>

        {/* Blog içeriği */}
        <div className="p-5">
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
            {title}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default BlogPostCard;
