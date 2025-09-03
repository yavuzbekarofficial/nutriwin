// hooks/useTranslation.ts

import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";

interface NestedObject {
  [key: string]: string | NestedObject;
}

export function useTranslation() {
  const router = useRouter();
  const [locale, setLocale] = useState<string>(router.locale || "tr"); // Varsayılan olarak 'tr' kullan

  const [translations, setTranslations] = useState<NestedObject | null>(null);

  useEffect(() => {
    // Uygulama yüklendiğinde localStorage'dan dili oku
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && savedLocale !== locale) {
      setLocale(savedLocale);
      router.push(router.asPath, undefined, {
        locale: savedLocale,
        shallow: true,
      });
    }
  }, [router]);

  useEffect(() => {
    async function getTranslations() {
      try {
        const response = await fetch(`/locales/${locale}.json`);
        const data: NestedObject = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    }
    getTranslations();
  }, [locale]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let result: string | NestedObject = translations || {};

    for (const k of keys) {
      if (typeof result === "object" && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return typeof result === "string" ? result : key;
  };

  const changeLanguage = useCallback(
    (newLocale: string) => {
      if (newLocale !== locale) {
        setLocale(newLocale);
        // Dili localStorage'a kaydet
        localStorage.setItem("locale", newLocale);
        // Next.js yönlendirme yaparak sayfanın dilini değiştir
        // `shallow: true` kullanmadık çünkü tüm sayfa içeriğinin yeniden yüklenmesini istiyoruz
        router.push(router.asPath, undefined, { locale: newLocale });
      }
    },
    [locale, router]
  );

  return { t, locale, isLoading: !translations, changeLanguage };
}
