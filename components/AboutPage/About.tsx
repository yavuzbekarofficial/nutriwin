"use client";
import React from "react";
import Image from "next/image";
import NumbersSection from "../NumbersSection";
import { Slide, Fade } from "react-awesome-reveal"; // Animasyon bileşenleri eklendi

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Üst Kısım: Resim ve Hakkımızda Metni */}
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-16">
        {/* Sol tarafta resim (soldan animasyonlu) */}
        <div className="lg:w-1/2 flex-shrink-0">
          <Slide direction="left" triggerOnce>
            <Image
              src="/images/about.jpg"
              alt="About Us"
              width={500}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </Slide>
        </div>

        {/* Sağ tarafta Hakkımızda metni (sağdan animasyonlu) */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <Slide direction="right" triggerOnce>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                2019 yılında kurulan Nutriwin, hayvan sağlığını en üst seviyeye
                taşımak amacıyla homeopati ve beslenme destek ürünleri
                geliştiren yenilikçi bir markadır. Türkiye’deki homeopatik
                ürünlerde endüstriyel anlamda üretim yapabilen tek firmayız.
                Bilimsel araştırmalara dayalı formüllerimizle, evcil
                hayvanlardan çiftlik hayvanlarına kadar geniş bir yelpazede
                sağlıklı ve dengeli çözümler sunuyoruz.
              </p>
              <p className="mb-4">
                Homeopatlarımız ve veteriner hekimlerimizle hayvanların yaşam
                kalitesini artıran, bağışıklık sistemlerini güçlendiren ve
                gelişimlerini destekleyen ürünler üretiyoruz. Doğru beslenme ve
                etkili destek ilkesiyle hareket eden Nutriwin, kalite ve
                güvenirliği ön planda tutarak en iyi bileşenleri kullanmaktadır.
              </p>
              <p className="mb-4">
                Sürekli gelişen Ar-Ge çalışmalarımızla, doğa dostu ve etik
                üretim anlayışını benimseyerek, hayvan dostlarımızın sağlıklı ve
                mutlu bir yaşam sürmelerine katkı sağlıyoruz. Nutriwin olarak,
                hayvan sağlığında güvenilir bir çözüm ortağı olmaktan gurur
                duyuyoruz.
              </p>
            </div>
          </Slide>
        </div>
      </div>

      {/* Alt Kısım: Misyon ve Vizyon */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* Sol tarafta Misyon (yukarıdan animasyonlu) */}
        <Fade triggerOnce>
          <div>
            <h4 className="text-2xl font-bold text-red-600 mb-4">Misyonumuz</h4>
            <ul className="text-gray-700 leading-relaxed space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <span>
                  Bilimsel ve inovatif çözümler geliştirerek hayvan sağlığını,
                  büyümesini ve üretkenliğini destekleyen yüksek kaliteli yem
                  katkıları ve tedavi destek ürünleri sunmak.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <span>
                  Hayvan refahı ve verimliliğini artırarak sürdürülebilir tarım
                  ve hayvancılık sektörüne katkı sağlamak.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <span>
                  Veteriner hekimler, çiftçiler ve üreticiler için güvenilir bir
                  iş ortağı olmak ve ihtiyaçlarına özel çözümler üretmek.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <span>
                  Doğaya ve çevreye duyarlı üretim süreçleriyle ekolojik dengeyi
                  koruyarak sürdürülebilir bir gelecek inşa etmek.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <span>
                  Ar-Ge ve kalite standartlarını en üst seviyede tutarak müşteri
                  memnuniyetini sürekli artırmak.
                </span>
              </li>
            </ul>
          </div>
        </Fade>

        {/* Sağ tarafta Vizyon (yukarıdan animasyonlu) */}
        <Fade triggerOnce>
          <div>
            <h4 className="text-2xl font-bold text-red-600 mb-4">Vizyonumuz</h4>
            <p className="text-gray-700 leading-relaxed">
              Hayvan sağlığı ve beslenme alanında yenilikçi ve bilimsel çözümler
              sunarak, sürdürülebilir verimliliği ve refahı en üst seviyeye
              taşımak. Küresel ölçekte güvenilir, kaliteli ve çevre dostu yem
              katkıları ile tedavi destek ürünleri sağlayarak sektördeki öncü
              konumda yer almak.
            </p>
          </div>
        </Fade>
      </div>

      {/* Ayrı bir bileşen olarak çağrılan Sayılarla Biz bölümü */}
      <NumbersSection />
    </div>
  );
}

export default About;
