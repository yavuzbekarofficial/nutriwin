import React from "react";

const SignaturePage = () => {
  // Resimlerin tam URL'si (Webmail'in görebilmesi için sitenin canlı linki olmalı)

  const signatures = [
    {
      id: "ali-kaya",
      image: "/images/alikayaimza.jpg",
      alt: "Ali Kaya İmza",
    },
    {
      id: "info",
      image: "/images/infoimza.jpg",

      alt: "Info İmza",
    },
  ];

  const copyAsHTML = (imageUrl: string, altText: string) => {
    const htmlCode = `<img src="${imageUrl}" alt="${altText}" style="display: block; max-width: 100%; height: auto;">`;
    navigator.clipboard.writeText(htmlCode);
    alert("Resim HTML kodu kopyalandı!");
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-10 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-12">
          {signatures.map((sig) => (
            <div
              key={sig.id}
              className="bg-white p-8 rounded-sm shadow-sm border border-neutral-200"
            >
              <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-tighter mb-6">
                {sig.id.replace("-", " ")}
              </h2>

              <div className="mb-8 flex justify-center bg-neutral-100 p-4">
                <img
                  src={sig.image}
                  alt={sig.alt}
                  className="max-w-full h-auto"
                />
              </div>

              <button
                onClick={() => copyAsHTML(sig.image, sig.alt)}
                className="w-full bg-black text-white py-3 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all"
              >
                KAYNAK KODUNU KOPYALA
              </button>

              <div className="mt-4 p-3 bg-neutral-50 rounded border border-dashed border-neutral-300">
                <code className="text-[10px] text-neutral-500 break-all">
                  {`<img src="${sig.image}" ... />`}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignaturePage;
