import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";

function AboutSection() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Sol tarafta resim (soldan animasyonlu) */}
        <div className="flex-shrink-0">
          <Slide direction="left" triggerOnce>
            <Image
              src="/images/about.jpg"
              alt="About"
              width={400}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </Slide>
        </div>

        {/* Sağ tarafta metin (sağdan animasyonlu) */}
        <div className="flex-1 flex flex-col gap-6">
          <Slide direction="right" triggerOnce>
            <div>
              <div className="font-bold text-4xl text-red-500">
                Nutriwine Hoş Geldiniz
              </div>

              {/* Başlığın altına eklenen kırmızı çizgi */}
              <div className="border-b-2 border-red-500 w-48"></div>

              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  2019 yılında kurulan Nutriwin, hayvan sağlığını en üst
                  seviyeye taşımak amacıyla homeopati ve beslenme destek
                  ürünleri geliştiren yenilikçi bir markadır. Türkiye’deki
                  homeopatik ürünlerde endüstriyel anlamda üretim yapabilen tek
                  firmayız. Bilimsel araştırmalara dayalı formüllerimizle, evcil
                  hayvanlardan çiftlik hayvanlarına kadar geniş bir yelpazede
                  sağlıklı ve dengeli çözümler sunuyoruz.
                </p>
                <p className="mb-4">
                  Homeopatlarımız ve veteriner hekimlerimizle hayvanların yaşam
                  kalitesini artıran, bağışıklık sistemlerini güçlendiren ve
                  gelişimlerini destekleyen ürünler üretiyoruz. Doğru beslenme
                  ve etkili destek ilkesiyle hareket eden Nutriwin, kalite ve
                  güvenirliği ön planda tutarak en iyi bileşenleri
                  kullanmaktadır.
                </p>
                <p className="mb-4">
                  Sürekli gelişen Ar-Ge çalışmalarımızla, doğa dostu ve etik
                  üretim anlayışını benimseyerek, hayvan dostlarımızın sağlıklı
                  ve mutlu bir yaşam sürmelerine katkı sağlıyoruz. Nutriwin
                  olarak, hayvan sağlığında güvenilir bir çözüm ortağı olmaktan
                  gurur duyuyoruz.
                </p>
              </div>

              <div className="mt-5">
                <Link
                  href="/hakkimizda"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition "
                >
                  Daha Fazla
                </Link>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
