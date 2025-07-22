import React from "react";

function index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-white p-6 text-center">
      <h1 className="text-5xl font-bold text-red-700 mb-4">Nutriwin</h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-xl mb-8">
        Web sitemiz şu anda yapım aşamasındadır. En kısa sürede sizlerle
        buluşacağız.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.instagram.com/nutriwin.tr/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-red-600 text-red-600 rounded-full hover:bg-red-50 transition"
        >
          Instagram
        </a>
      </div>

      <div className="mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-64 text-red-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Nutriwin. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
}

export default index;
