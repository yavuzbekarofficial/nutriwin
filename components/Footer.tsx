import { Icon } from "@iconify/react"; // Correct import path for Iconify

const Footer = () => {
  const links = [
    {
      label: "Ana Sayfa",
      href: "/",
    },
    {
      label: "Hakkımızda",
      href: "/hakkimizda",
    },
    {
      label: "Ürünlerimiz",
      href: "/ürünlerimiz",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];

  return (
    <footer className="bg-white text-gray-800 py-8 w-full fixed bottom-0 left-0 border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo and Copyright */}
        <div className="flex-shrink-0 mb-6 md:mb-0 text-center md:text-left">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-12 mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Hızlı Linkler
          </h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media and Contact */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Bizi Takip Edin
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Icon icon="mdi:instagram" width="24" height="24" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Icon icon="mdi:facebook" width="24" height="24" />
            </a>
            <a
              href="mailto:info@example.com"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              aria-label="Email"
            >
              <Icon icon="mdi:email" width="24" height="24" />
            </a>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">İletişim</h3>
          <p className="text-gray-600">
            Örnek Mah. Örnek Cad. No:123
            <br />
            Örnek İlçe, Örnek Şehir
            <br />
            Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
