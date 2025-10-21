"use client";
import React from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

interface PageBannerProps {
  title: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        // ✅ Web'de 420px, mobilde biraz daha yüksek ama abartısız
        height: isMobile ? "100px" : "150px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/banner.jpg"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          // ✅ Mobilde daha küçük, web’de daha büyük yazı
          fontSize: isMobile ? "1.6rem" : "2.8rem",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          padding: "0 1rem",
          width: "100%",
          maxWidth: "90%",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default PageBanner;
