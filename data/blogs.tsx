// data/blogs.tsx

export interface BlogContent {
  type: "paragraph" | "heading";
  text: string;
}

export interface Blog {
  slug: string;
  title: string;
  image: string;
  date: string;
  content: BlogContent[];
}

export const blogs: Blog[] = [
  {
    slug: "buyukbas-hayvanlarda-sap-hastaligi",
    title: "Büyükbaş Hayvanlarda Şap Hastalığı ve Korunma Yolları",
    image: "/images/about.jpg",
    date: "14.07.2024",
    content: [
      {
        type: "paragraph",
        text: "Şap hastalığı, özellikle büyükbaş hayvanlar arasında oldukça hızlı bir şekilde yayılan ve son derece bulaşıcı bir viral hastalıktır. Bu hastalık, sığır, manda, keçi ve koyun gibi çiftlik hayvanlarında ciddi verim kaybına yol açar. Hastalık nedeniyle süt verimi azalır, kilo kaybı yaşanır ve hayvanın genel sağlığı zayıflar. Ayrıca şap hastalığı, ülke ekonomisi açısından da büyük kayıplara yol açabilen bir hastalık olduğundan çiftçilerin en çok çekindiği sağlık problemlerinden biridir.",
      },
      { type: "heading", text: "Hastalığın Belirtileri" },
      {
        type: "paragraph",
        text: "Şap hastalığının ilk belirtileri genellikle ateş, iştahsızlık, halsizlik ve salya akıntısıdır. Hastalık ilerledikçe dil, diş etleri, dudak içi, burun delikleri ve tırnak aralarında içi sıvı dolu kabarcıklar (veziküller) oluşur. Bu kabarcıklar patladığında yerlerinde açık yaralar meydana gelir. Yaralar, hayvanın beslenmesini zorlaştırır ve topallamasına neden olur. Bazı durumlarda genç buzağılarda ani ölümler de görülebilir.",
      },
      { type: "heading", text: "Korunma ve Tedavi Yöntemleri" },
      {
        type: "paragraph",
        text: "Şap hastalığının tedavisi için kesin bir ilaç bulunmamaktadır. Ancak semptomların hafifletilmesi ve ikincil enfeksiyonların önlenmesi amacıyla destekleyici tedaviler uygulanabilir. Bu noktada en önemli adım hastalıktan korunmaktır. Düzenli aşılamalar, çiftlikte hijyen kurallarına uyulması, hasta hayvanların diğerlerinden ayrılması ve yeni gelen hayvanların karantinada tutulması en etkili korunma yöntemleridir. Ayrıca yem ve su kaynaklarının temiz tutulması, hayvan barınaklarının sık sık dezenfekte edilmesi de hastalığın önlenmesine katkı sağlar.",
      },
    ],
  },
  {
    slug: "koyunlarda-ic-parazitlere-karsi-mucadele",
    title: "Koyunlarda İç Parazitlere Karşı Etkili Mücadele",
    image: "/images/about.jpg",
    date: "25.06.2024",
    content: [
      {
        type: "paragraph",
        text: "Koyunlarda iç parazitler, özellikle merada otlayan hayvanlarda sık karşılaşılan sağlık problemlerinden biridir. Parazitler, hayvanların sindirim sisteminde, akciğerlerinde veya karaciğerlerinde yaşayabilir ve koyunun besinlerden yeterince yararlanmasını engeller. Bunun sonucunda hayvanlarda kilo kaybı, gelişme geriliği, yapağı kalitesinde bozulma ve hatta ölümler meydana gelebilir. Bu durum, sürünün verimini ciddi şekilde azaltır ve yetiştirici için ekonomik kayıplara yol açar.",
      },
      { type: "heading", text: "Parazit Türleri ve Etkileri" },
      {
        type: "paragraph",
        text: "En yaygın iç parazitler arasında şerit solucanları (Cestodlar), yuvarlak solucanlar (Nematodlar) ve karaciğer kelebekleri (Trematodlar) bulunur. Bu parazitler, hayvanın sindirim sistemine yerleşerek besinleri tüketir ve koyunun bağışıklığını zayıflatır. Sonuç olarak hayvanlarda kansızlık, ishal, halsizlik ve iştahsızlık gibi sorunlar ortaya çıkar. Ayrıca akciğer parazitleri öksürük ve solunum güçlüğüne neden olurken, karaciğer parazitleri karaciğer fonksiyonlarını bozarak hayvanın genel metabolizmasını etkiler.",
      },
      { type: "heading", text: "Mücadele Yöntemleri" },
      {
        type: "paragraph",
        text: "Koyunlarda iç parazitlerle mücadelede en etkili yöntem düzenli olarak antiparaziter ilaçların kullanılmasıdır. Bununla birlikte, sadece ilaç uygulamak yeterli değildir. Meraların dinlendirilmesi, kalabalık otlatmadan kaçınılması, temiz su kaynaklarının sağlanması ve yemlerin hijyenik koşullarda verilmesi de oldukça önemlidir. Ayrıca yeni alınan hayvanların sürüye katılmadan önce kontrol edilmesi ve gerekiyorsa parazit tedavisi uygulanması gerekir. Bu önlemler sayesinde sürüde parazit kaynaklı kayıplar en aza indirilebilir.",
      },
    ],
  },
  {
    slug: "kanatli-hayvanlarda-solunum-yolu-hastaliklari",
    title: "Kanatlı Hayvanlarda Solunum Yolu Hastalıkları",
    image: "/images/about.jpg",
    date: "10.05.2024",
    content: [
      {
        type: "paragraph",
        text: "Kanatlı hayvanlarda solunum yolu hastalıkları, kümes hayvancılığında en sık karşılaşılan sağlık sorunlarının başında gelir. Özellikle kapalı, kalabalık ve havalandırması yetersiz ortamlarda bu hastalıkların görülme oranı artar. Solunum yolu hastalıkları, tavuk, hindi, ördek ve kaz gibi birçok kanatlı hayvanda görülerek hem hayvanların sağlığını hem de üretim verimini olumsuz etkiler.",
      },
      { type: "heading", text: "Hastalığın Yayılması ve Belirtileri" },
      {
        type: "paragraph",
        text: "Bu hastalıklar genellikle damlacık yoluyla veya kirli ekipman, yem ve su aracılığıyla yayılır. Hastalık belirtileri arasında öksürük, hapşırma, burun akıntısı, gözlerde sulanma, tüylerin kabarması, solunum güçlüğü ve yem tüketiminde azalma yer alır. İleri vakalarda hayvanların gelişimi durur, yumurta verimi düşer ve ölüm oranı artar. Özellikle genç civcivlerde bu hastalıklar daha ağır seyredebilir.",
      },
      { type: "heading", text: "Korunma ve Kontrol Yöntemleri" },
      {
        type: "paragraph",
        text: "Solunum yolu hastalıklarının önlenmesinde hijyen, düzenli bakım ve doğru kümes yönetimi büyük önem taşır. Kümeslerin iyi havalandırılması, yoğunluğun azaltılması, yem ve suyun temiz tutulması hastalıkların yayılmasını engeller. Ayrıca düzenli aşılama programlarının uygulanması ve hastalık belirtisi gösteren hayvanların erken dönemde ayrılarak tedavi edilmesi de kritik rol oynar. Veteriner hekim kontrolünde uygulanan antibiyotik ve destekleyici tedaviler, enfeksiyonun etkilerini hafifletmeye yardımcı olur.",
      },
    ],
  },
];
