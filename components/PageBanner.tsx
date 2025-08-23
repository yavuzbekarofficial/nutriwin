"use client";
import React from "react";
import Image from "next/image";

interface PageBannerProps {
  title: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <Image
        src="/images/banner.jpg"
        alt="Banner"
        layout="responsive"
        width={1920}
        height={500}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default PageBanner;
