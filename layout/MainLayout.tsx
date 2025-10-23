// layout/MainLayout.tsx

import React, { ReactNode } from "react";
// Importları kapalı tuttuğunuz için burada varsayılan olarak bıraktım.
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      {/* <Navbar /> */}
      {/* DEĞİŞİKLİK BURADA: translate="no" ve className="notranslate" eklendi */}
      <main translate="no" className="notranslate">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
