import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document(props: DocumentProps) {
  // O anki dili props içinden çekiyoruz, varsayılan olarak 'tr' diyoruz.
  const locale = props.__NEXT_DATA__.locale || "tr";

  // Eğer dil Arapça ise yönü 'rtl' (sağdan sola), değilse 'ltr' (soldan sağa) yap.
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <Html lang={locale} dir={dir}>
      <Head>
        {/* Arapça için Google Fonts'tan Cairo fontunu ekliyoruz (daha iyi görünmesi için) */}
        {locale === "ar" && (
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        )}
      </Head>
      <body className={`antialiased ${locale === "ar" ? "font-arabic" : ""}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
