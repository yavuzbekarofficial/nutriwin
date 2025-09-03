import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "@/hooks/useTranslation";

function AboutSection() {
  const { t } = useTranslation();

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
                {t("about.about-welcome")}
              </div>

              {/* Başlığın altına eklenen kırmızı çizgi */}
              <div className="border-b-2 border-red-500 w-48"></div>

              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t("about.about-paragraph1")}</p>
                <p className="mb-4">{t("about.about-paragraph2")}</p>
                <p className="mb-4">{t("about.about-paragraph3")}</p>
              </div>

              <div className="mt-5">
                <Link
                  href="/hakkimizda"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition "
                >
                  {t("about.about-more")}
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
