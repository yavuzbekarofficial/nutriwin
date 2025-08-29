// data/productLists.tsx

// Tüm ürün detaylarını içeren tek bir arayüz
export interface UrunDetay {
  slug: string;
  name: string;
  image: string;
  group:
    | "buyukbas"
    | "kucukbas"
    | "kanatli"
    | "homeopatik"
    | "besleme"
    | "bakim";
  description?: string; // Bu alanlar opsiyonel hale getirildi
  content?: string; // Bu alanlar opsiyonel hale getirildi
  kullanimAmaci: string | string[]; // Dizi veya string olabilir
  etkiAlani?: string[]; // Yeni eklenen alan
  kullanimSekli?: string | string[]; // Hem string hem de dizi olabilir
  ambalaj: string | string[]; // Dizi veya string olabilir
}

// Tüm ürünleri içeren tek bir dizi oluşturuyoruz
export const urunler: UrunDetay[] = [
  {
    slug: "negrofix",
    name: "Negrofix",
    image: "/images/products/negrofix.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Bağışıklık sistemini güçlendirerek ağır bakteriyel enfeksiyonlara karşı etkin koruma sağlar",
      "Nekrotik ve apseli dokuların drenajını destekleyerek iyileşme sürecini hızlandırır.",
      "Cilt ve mukozadaki iltihabi süreçleri dengeleyerek kronik enfeksiyon riskini azaltır.",
      "Yara iyileşmesini hızlandırarak sağlıklı doku oluşumunu teşvik eder.",
      "Bağışıklık sisteminin aşırı reaksiyonlarını düzenleyerek otoimmün eğilimleri dengeler.",
    ],
    etkiAlani: [
      "Doku Nekrozu ve Derin Enfeksiyonlar Üzerindeki Etkisi",
      "Bakteriyel Enfeksiyonlara Karşı Bağışıklık Yanıtının Güçlendirilmesi",
      "Apse ve Patolojik İltihabı Düzenleyici Mekanizma",
      "Doku Onarımı ve Yenilenmeyi Hızlandırma",
    ],
    ambalaj: ["20 ml", "50 ml", "100 ml"],
  },
  {
    slug: "wartoff",
    name: "Wartoff",
    image: "/images/products/wartoff.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Siğil, papillom vb. cilt lezyonlarının tedavisini destekleyerek, lezyonların küçülmesini ve yok olmasını hızlandırır.",
      "Bağışıklık sistemini hücresel düzeyde modüle ederek, viral enfeksiyonların tekrar etmesini engeller. Thuja'nın güçlü antimiyazmatik etkisi sayesinde, sadece mevcut siğilleri değil, vücutta gizlenmiş eski enfeksiyon kalıntılarını da temizler.",
      "Cilt-akciğer bağlantısını düzenleyerek, solunum sisteminde biriken toksinlerin cilt üzerinden dışa atılmasını dengeler.",
      "Kalıtsal veya baskılanmış hastalık eğilimlerini dengeleyerek bağışıklık sisteminin doğal ritmine dönmesini sağlar.",
      "Cilt yüzeyinde sağlıklı hücre yenilenmesini destekleyerek, lezyon sonrası sağlıklı doku oluşumunu teşvik eder.",
    ],
    etkiAlani: [
      " Thuja'nın Anti-Sikotik Miazmatik Etkisi ve Cilt-Akciğer Bağlantısı",
      "Virüs Kaynaklı Cilt Lezyonlarına Karşı Bağışıklık Destek Mekanizması",
      "Ciltteki Anormal Hücresel Büyümenin Düzenlenmesi",
      "Enflamasyonu Azaltma ve Doku Onarımı",
    ],
    ambalaj: ["20 ml", "50 ml", "100 ml"],
  },
  {
    slug: "trichofff",
    name: "Trichofff",
    image: "/images/products/trichofff.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Mantar enfeksiyonlarının yayılmasını engelleyerek, etkilenen bölgelerin hızla iyileşmesini destekler. Bağışıklık sistemini aktive ederek, kronik ve tekrarlayan mantar enfeksiyonlarına karşı direnç oluşturur.",
      "Miazmatik temizleme etkisiyle, tedavi edilen deri hastalıklarının derinlemesine iyileşmesini sağlar.",
      "Doku yenilenmesini teşvik ederek, sağlıklı bir cilt yapısının yeniden oluşmasını sağlar ve deri bariyerini güçlendirerek, mantar ve diğer patojenlere karşı uzun vadeli koruma sunar.",
    ],
    etkiAlani: [
      "Miazmatik ve Antifungal Etkisi",
      "Derinleşmiş Deri Enfeksiyonlarına Karşı Antimikrobiyal ve Antifungal Mekanizma",
      "Ciltteki Enflamasyonu ve Hücresel Hasarı Dengeleme",
      "Doku Onarımı ve Cilt Bariyerinin Güçlendirilmesi",
    ],
    ambalaj: ["20 ml", "50 ml"],
  },
  {
    slug: "holowin",
    name: "Holowin",
    image: "/images/products/holowin.png",
    group: "homeopatik",
    kullanimAmaci: [
      "İshalin süresini ve şiddetini azaltarak, bakteriyel ve viral enfeksiyonlara bağlı ishalin etkilerini hafifletir.",
      "Bağışıklık sistemini güçlendirerek, bağırsak enfeksiyonlarına karşı uzun vadeli direnç sağlar.",
      "Su ve elektrolit dengesini koruyarak, ishal nedeniyle oluşabilecek dehidrasyonu engeller.",
      "Bağırsak florasını destekleyerek, sindirim sisteminin uzun vadeli dengesini sağlar.",
      "Toksinlerin atılmasını hızlandırarak, bağırsaktan toksinlerin atılmasını hızlandırarak sepsis ve komplikasyon risklerini azaltır.",
      "Besin emilimini artırarak, ishale bağlı kilo kaybını engeller ve buzağının büyümesini destekler.",
    ],
    etkiAlani: [
      "Buzağılarda Gastrointestinal Enfeksiyonlara Karşı Koruma",
      " Bakteriyel ve Viral Toksinlere Karşı Detoksifikasyon",
      "Su ve Elektrolit Dengesinin Korunması",
      "Bağırsak Florasının Düzenlenmesi ve Probiyotik Destek",
      "Bağışıklık Sistemini Güçlendirerek Tekrarlayan İshalleri Önleme",
    ],
    ambalaj: ["1 kg", "5 kg"],
  },
  {
    slug: "respofix",
    name: "Respofix",
    image: "/images/products/respofix.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Bronşları açarak, hava akışını artırır.",
      "Bağışıklık hücrelerini aktive ederek, enfeksiyonlara karşı savunmayı güçlendirir.",
      "İnflamasyonu azaltarak, akciğer dokusunu korur.",
      "Mukusu dengeler, öksürüğü hafifletir.Alerjik reaksiyonları baskılar.",
    ],
    etkiAlani: [
      "Bağışıklık Yanıtının Güçlendirilmesi",
      "Solunum Fonksiyonlarının Desteklenmesi (Bronş Açıcı ve Mukolitik Etki)",
      "Solunum Yolu Enfeksiyonlarına Karşı Koruma (Antibakteriyel ve Antiviral Mekanizmalar)",
      "Alerjik Reaksiyonların Düzenlenmesi",
    ],
    ambalaj: ["50 ml", "100 ml"],
  },
  {
    slug: "hepafix",
    name: "Hepafix",
    image: "/images/products/hepafix.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Karaciğer fonksiyonlarını destekleyerek, toksinlerin atılmasını hızlandırır.",
      "Bağışıklık sistemini güçlendirerek, hastalıklara karşı direnç sağlar",
      "Üreme sağlığını ve hormon dengesini düzenleyerek, enerji seviyelerini artırarak genel metabolizmayı iyileştirir.",
    ],
    etkiAlani: [
      " Karaciğer Destek Mekanizması",
      "Bağışıklık Sisteminin Güçlendirilmesi",
      "Hormon ve Üreme Sistemi Desteği",
      "Metabolik ve Sinirsel Destek Mekanizması",
    ],
    ambalaj: ["20 ml"],
  },
  {
    slug: "pulmofix",
    name: "Pulmofix",
    image: "/images/products/pulmofix.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Bronşları açarak, hava akışını artırır.",
      "Bağışıklık hücrelerini aktive ederek, enfeksiyonlara karşı savunmayı güçlendirir.",
      "İnflamasyonu azaltarak, akciğer dokusunu korur.",
      "Mukusu dengeler, öksürüğü hafifletir.Alerjik reaksiyonları baskılar.",
    ],
    etkiAlani: [
      "Bağışıklık Yanıtının Güçlendirilmesi",
      "Solunum Fonksiyonlarının Desteklenmesi (Bronş Açıcı ve Mukolitik Etki)",
      "Solunum Yolu Enfeksiyonlarına Karşı Koruma (Antibakteriyel ve Antiviral Mekanizmalar)",
      "Alerjik Reaksiyonların Düzenlenmesi",
    ],
    ambalaj: ["20 ml"],
  },

  {
    slug: "ultrastart",
    name: "Ultra Start",
    image: "/images/products/ultrastart.png",
    group: "besleme",
    kullanimAmaci: [
      "Sağlıklı büyüme, güçlü bağışıklık ve üstün performans için formüle edilen UltraStart, kuzu ve buzağıların gelişim süreçlerini destekleyerek maksimum verimlilik sağlar. RFC (Rafine Fonksiyonel Karbonat) içeren bu ileri düzey premiks, hayvanların metabolik dengeyi korurken sindirim fonksiyonlarını optimize eder. Homeopatik, probiyotik, biyoteknolojik bileşenler ve RFC'nin birleşimi, bağışıklık sistemini güçlendirir, vücut direncini artırır ve hayvanların daha verimli büyümesini sağlar.",
    ],
    etkiAlani: [
      "Bağışıklık Güçlendirme ve Hastalık Direnci",
      "Sindirim ve Bağırsak Sağlığı",
      "Büyüme ve Kas Gelişimini Destekleme",
      "Solunum Sağlığı ve Stres Yönetimi",
    ],
    ambalaj: ["1 lt"],
  },
  {
    slug: "3buffs",
    name: "3 Buff s",
    image: "/images/products/3buffs.png",
    group: "besleme",
    kullanimAmaci: [
      "8 Saat Etkili Tamponlayıcı & Karaciğer Destekleyici Rumen Regülatörü",
      "Rumen pH’ını stabilize ederek asidozu önler, karaciğer fonksiyonlarını destekleyerek detoksifikasyonu artırır ve metabolik verimliliği maksimize eder.",
    ],
    etkiAlani: [
      "Enerji ve Metabolik Destek",
      "Sindirim ve Asit-Baz Dengesi",
      "Kemik ve Kas Sağlığı",
      "Koruyucu ve Destekleyici Etki",
    ],
    ambalaj: ["150 gr X 5 adet"],
  },
  {
    slug: "diarend",
    name: "Diar-end",
    image: "/images/products/diarend.png",
    group: "besleme",
    kullanimAmaci: [
      "İshalin etkilerini azaltarak hızlı toparlanmayı destekler.",
      "Elektrolit kaybını önleyerek dehidrasyonu engeller",
      "Bağırsak florasını düzenleyerek sindirim sağlığını iyileştirir.",
      "Bağışıklık sistemini güçlendirerek hastalıklara karşı koruma sağlar.",
    ],
    etkiAlani: [
      " Hızlı Rehidrasyon ve Elektrolit Dengesi",
      "Bağırsak Mikrobiyotasını Destekler",
      "Bağışıklık Sistemini Güçlendirir",
    ],
    ambalaj: ["100 gr X 5 adet"],
  },
  {
    slug: "surwin",
    name: "Sürwin",
    image: "/images/products/sürwin.png",
    group: "besleme",
    kullanimAmaci: [
      "Kabızlık ve sindirim problemlerini hafifletir.",
      "Bağırsak hareketlerini düzenler, sindirim sisteminin sağlıklı çalışmasını destekler.",
      "Toksin atımını hızlandırarak genel bağırsak sağlığını iyileştirir.",
    ],
    etkiAlani: [
      "Bağırsak Temizliği ve Düzenleyici Etki",
      "Sindirim Sistemini Destekler",
      "Toksin Atımı ve Elektrolit Dengesi",
    ],
    ambalaj: ["100 gr X 5 adet"],
  },
  {
    slug: "pasivet",
    name: "Pasivet",
    image: "/images/products/pasivet.png",
    group: "besleme",
    kullanimAmaci: [
      "Boğaların stres seviyelerini düşürerek daha sakin ve dengeli bir davranış sergilemelerini sağlar.",
      "Hayvanın rahatlamasını sağlayarak, agresif ve huzursuz davranışları kontrol altına alır.",
      "Hayvanın yemden yararlanma oranını arttırır.",
    ],
    etkiAlani: [
      "Stres Azaltıcı Etki",
      "Fiziksel ve Psikolojik Denge",
      "Psiko-fiziksel Destek",
    ],
    ambalaj: ["500 gr"],
  },
  {
    slug: "naturojen",
    name: "Naturojen",
    image: "/images/products/naturojen.png",
    group: "besleme",
    kullanimAmaci: [
      "Dişi hayvanlarda kızgınlık belirtilerini artırarak, üreme döngüsünün sağlıklı bir şekilde işlemesini sağlar.",
      "Çiftleşmeye hazırlanan hayvanlarda hormon seviyelerini düzenleyerek, üreme verimliliğini artırır.",
      "Üreme döneminde daha verimli sonuçlar elde edilmesine yardımcı olur ve çiftlik yönetiminde yüksek performans sağlar.",
    ],
    etkiAlani: [
      "Üreme Sağlığını ve Kızgınlık Döngüsünü",
      "Kalsiyum ve Minerallerle Destekler",
      "Doğal Bileşenlerle Zenginleştirilmiş Destek",
    ],
    ambalaj: ["500 gr"],
  },
  {
    slug: "winfresh",
    name: "Win Fresh",
    image: "/images/products/winfresh.png",
    group: "besleme",
    kullanimAmaci: [
      "Solunum yolları sağlığını iyileştirmek, tıkanıklığı ve enfeksiyon riskini azaltmak.",
      "Bağışıklık sistemi fonksiyonlarını güçlendirmek ve enfeksiyonlara karşı direnç sağlamak.",
      "Vücutta iltihaplanmayı azaltarak rahatlama sağlamak.",
      "Sindirim sistemini dengeleyerek genel metabolizma sağlığını optimize etmek.",
      "Hayvanların genel sağlığını ve refahını artırmak.",
    ],
    etkiAlani: [
      "Solunum Yollarını Destekler",
      "Bağışıklık Sistemini Güçlendirir",
      "Antiinflamatuar Etki",
      "Sindirim ve Metabolizma Desteği",
      "Genel Sağlık ve İyi Hallerini Artırır",
    ],
    ambalaj: ["100 ml"],
  },
  {
    slug: "winmaxicell",
    name: "Win Maxi Cell",
    image: "/images/products/maxicell.png",
    group: "besleme",
    kullanimAmaci: [
      "Genel Sağlık Desteği: Vitamin ve mineral içeriği ile hayvanların genel sağlığını iyileştirir ve tüm vücut fonksiyonlarını optimize eder.",
      "Bağışıklık Sistemini Güçlendirir: Antioksidan özellikleri sayesinde vücutta serbest radikal hasarını azaltır ve bağışıklık yanıtını artırır.",
      "Büyüme ve Performans Artışı: Amino asitler, hayvanların büyüme hızını artırır ve kas gelişimini destekler.",
      "Metabolizma ve Sindirim Sistemi Desteği: Esansiyel yağ karışımları ve amino asitler, sindirim sağlığını iyileştirir ve besin emilimini optimize eder.",
      "Kemik ve Kas Sağlığını Destekler: Vitamin D ve K ile birlikte, kemik yoğunluğunu artırır ve kas fonksiyonlarını iyileştirir.",
    ],
    etkiAlani: [
      "Vitamin Destekleri",
      "Mineraller ve İz Elementler",
      "Esansiyel Yağ Karışımları",
      "Esansiyel Amino Asitler",
    ],
    ambalaj: ["100 ml", "250 ml", "1 lt", "5 lt"],
  },
  {
    slug: "winphos",
    name: "Win Phos",
    image: "/images/products/winphos.png",
    group: "besleme",
    kullanimAmaci: [
      "Genel Sağlık Desteği: Mineraller ve amino asitlerin birleşimi, vücudun temel fonksiyonlarını iyileştirir ve genel sağlık seviyesini artırır.",
      "Bağışıklık Sistemi Güçlendirme: Çinko, bakır, demir ve selenyum gibi mineraller bağışıklık yanıtlarını destekler ve hastalıklara karşı direnç sağlar.",
      "Kemik ve Kas Sağlığı: Kalsiyum, fosfor ve magnezyum, güçlü kemikler ve sağlıklı kas yapısını destekler.",
      "Enerji Üretimi ve Kas Gelişimi: Metiyonin ve L-Lizin, kas gelişimini ve genel enerji üretimini iyileştirerek performansı artırır.",
      "Sindirim ve Metabolizma Desteği: Mineral ve amino asit içeriği, sindirim sisteminin sağlıklı çalışmasını destekler ve besin emilimini artırır.",
    ],
    etkiAlani: ["Mineraller", "Esansiyel Amino Asitler"],
    ambalaj: ["100 ml", "1 lt"],
  },
  {
    slug: "windosec",
    name: "Win Dose C",
    image: "/images/products/windosec.png",
    group: "besleme",
    kullanimAmaci: [
      "Elektrolit ve Asit-Baz Dengesinin Korunması: Bu premiks, vücutta sıvı ve elektrolit dengesinin düzenlenmesini sağlar, enerji seviyelerini artırır ve hayvanların genel metabolizmasını dengeleyerek sağlıklarını iyileştirir.",
      "Sindirim Sağlığı: Laktoz monohidrat ve Ent. Faceium, bağırsak sağlığını iyileştirir ve sindirimi kolaylaştırır.",
      "Yüksek Performans ve Dayanıklılık: Enerji üretimini artırarak, stres altında dahi yüksek performans sergileyen hayvanlar için idealdir.",
      "Genel Metabolizma Desteği: Glisin ve glutamik asit gibi bileşenler, vücudun tüm metabolik süreçlerini hızlandırarak, hayvanın genel sağlığını iyileştirir.",
    ],
    etkiAlani: [
      "Elektrolit Dengeleyiciler:",
      "Metabolik Destekleyiciler",
      "Diğer Bileşenler",
    ],
    ambalaj: ["50 gr X 10 adet"],
  },
  {
    slug: "wincalf",
    name: "Win Calf",
    image: "/images/products/wincalf.png",
    group: "besleme",
    kullanimAmaci: [
      "Yeme Geçiş Dönemi Desteği: Buzağı ve kuzuların yem geçişi sırasında besinlerin etkili bir şekilde emilimini sağlayarak, sindirim sistemini güçlendirir ve adaptasyon sürecini hızlandırır.",
      "Bağışıklık Güçlendirme: İçeriğindeki vitamin ve mineraller, genç hayvanların bağışıklık sistemini destekler, hastalıklara karşı direncin artırılmasına yardımcı olur.",
      "Büyüme ve Performans Artışı: Organik metiyonin ve lizin gibi besin bileşenleri, büyüme hızını artırır ve kas gelişimini destekler.",
      "Sindirim Sağlığı: Prebiyotikler ve maya bileşenleri, sindirim sistemindeki sağlıklı mikrobiyota dengesini sağlar, besin emilimini iyileştirir.",
      "Kemik ve Iskelet Sağlığı: Kalkerli deniz algesi ve kalsiyum destekleri, kemik gelişimini teşvik eder ve ruminantların güçlü iskelet yapılarının oluşmasına yardımcı olur.",
    ],
    etkiAlani: [
      "Vitamin ve Mineraller",
      "Amino Asit ve Metabolizma Desteği",
      "Mineral ve Prebiyotik Destekleyiciler",
      "Aromatik Bileşenler",
    ],
    ambalaj: ["500 gr", "1 kg"],
  },
  {
    slug: "besipremium",
    name: "Besi Premium",
    image: "/images/products/besipremium.png",
    group: "besleme",
    kullanimAmaci: [
      "Hızlı Büyüme ve Gelişim: Vitaminler ve minerallerin yüksek konsantrasyonu, besi ruminantlarının hızlı ve sağlıklı bir şekilde büyümelerini destekler.",
      "Bağışıklık Sistemi Desteği: İçeriğindeki yüksek kaliteli selenyum, çinko ve diğer vitaminler, bağışıklık fonksiyonlarını güçlendirir ve hastalıklara karşı direnç sağlar.",
      "Sindirim Sağlığı: İnaktif maya ve bentonit gibi bileşenler, sindirim sisteminin sağlıklı çalışmasına yardımcı olur, mikrofloranın dengesini sağlar.",
      "Kemik ve İskelet Sağlığı: Vitamin D3, kalsiyum ve fosfor bileşenleri, güçlü bir kemik yapısının oluşmasını sağlar.",
      "Hücre Yenilenmesi ve Antioksidan Koruma: Alfa tokoferol (Vitamin E) ve selenyum gibi antioksidan bileşenler, hücresel hasarı önler ve yaşlanmayı geciktirir.",
    ],
    etkiAlani: ["Vitaminler", "Mineraller", "Destekleyici Bileşenler"],
    ambalaj: ["25 kg"],
  },
  {
    slug: "adomega",
    name: "Adomega",
    image: "/images/products/adomega.png",
    group: "besleme",
    kullanimAmaci: [
      "ADOMEGA, ruminantlarda (buzağı, kuzu, oğlak, inek, koyun, keçi) bağışıklık sistemi, epitel dokular, üreme sağlığı ve sisnirsel denge üzerinde kritik roller üstlenen A, D3 ve E vitaminlerinin, anti-inflamatuvar etkili Omega-3 yağ asitleriyle sinerjik şekilde birleştirildiği sıvı destek ürünüdür.",
      "Vitamin A mukolaz bariyer bütünlüğünü korur, Vitamin D3 kalsiyum-fosfor metabolizmasını düzenlerken, Vitamin E hücresel düzeyde antioksidan koruma sağlar. Omega-3 yağ asitleri ise inflamasyonu baskılayarak damar, sinir ve üreme sistemlerinin sağlıklı işleyişini destekler.",
    ],
    etkiAlani: [
      "Bağışıklık sistemini güçlendirir",
      "Kas-iskelet ve kemik gelişimini destekler",
      "Üreme verimini ve döl tutma oranlarını artırır",
      "Epitel bütünlüğünü ve cilt-tüy kalitesini iyileştirir",
      "Sıcaklık ve üretim stresine karşı fizyolojik dayanıklılık sağlar",
      "Sinirsel iletim ve beyin fonksiyonlarını destekler",
    ],
    ambalaj: ["100 ml"],
  },
  {
    slug: "selemax",
    name: "Selemax",
    image: "/images/products/selemax.png",
    group: "besleme",
    kullanimAmaci: [
      "SELEMAX, E vitamini, selenyum ve çinko içeren güçlü bir antioksidan formüldür. Remiantlarda (buzağı, kuzu, oğlak, inek, koyun ve keçilerde) bağışıklık fonksiyonlarının güçlendirilmesi, kas sağlığının korunması, epitel bütünlüğünün sürdürülmesi ve üreme verimliliğinin artırılması amacıyla kullanılır.",
      "Vitemin E, hücre zarlarını serbest radikallere karşı korurken, sodyum selenit glutatyon peroksidaz enziminin kofaktörü olarak hücresel oksidatif stresi azaltır. Çünko ise birçok enzim sisteminde rol alarak yar aiyileşmesi, cilt sağlığı ve bağışıklık aktivitesi üzerinde etkilidir.",
    ],
    etkiAlani: [
      "Hücresel antioksidan savunmayı güçlendirir",
      "Kas dokusunu ve sinirsel iletimi korur",
      "Üreme sisteminde sperm ve yumurta kalitesini artırır",
      "Deri-tüy sağlığını iyileştirir, tüy dökülmesini azaltır",
      "Enfeksiyonlara karşı bağışıklık yanıtını artırır",
      "Gelişme geriliği riskini azaltır, canlıık kazandırır",
    ],
    ambalaj: [],
  },
  {
    slug: "vitabolic",
    name: "Vitabolic",
    image: "/images/products/vitabolic.png",
    group: "besleme",
    kullanimAmaci: [
      "VITABOLIC buzağı, kuzu ve oğlaklardan başlayarak yüksek verimli süt ve et ruminantlarında enerji metabolizmasını düzenleyen, bağışıklığı güçlendiren ve sinir sistemini destekleyen, yüksek yoğunluklu B vitamini kombinasyonudur. Özellikle büyüme, geçiş, stres ve hastalık dönemlerinde metabolik dengeyi korumak ve performansı artırmak amacıyla kullanılır.",
    ],
    etkiAlani: [
      "Enerji metabolizmasını hızlandırır",
      "Büyüme ve gelişmeyi destekler",
      "Sinir sistemi ve kas koordinasyonunu korur",
      "İştah ve yemden yararlanmayı artırır",
      "Stres ve hastalık sonrası toparlanmayı hızlandırır",
      "Bağışıklığı ve genel dayanıklığı güçlendirir",
    ],
    ambalaj: ["100 ml"],
  },
  {
    slug: "winmast",
    name: "Winmast",
    image: "/images/products/winmast.png",
    group: "bakim",
    kullanimAmaci: [
      "Meme sağlığını iyileştirir",
      "Cilt bakımını sağlar",
      "Tahrişleri ve yaraları azaltır",
      "Enfeksiyonları engeller",
      "Meme uçlarının sağlıklı bir şekilde çalışmasını sağlar. Emziren hayvanlarda, düzenli kullanımı, meme uçlarını koruyarak süt üretimini olumsuz etkileyecek sorunların önlenmesine katkı sağlar",
    ],
    etkiAlani: [
      "Sarı Kantaron Yağı",
      "Kalendula Yağı (Arap Çiçeği Yağı)",
      "Gliserol",
      "Kolloidal Gümüş Suyu",
    ],
    ambalaj: ["5 gr X 24 adet"],
  },
  {
    slug: "scaroff",
    name: "Scaroff",
    image: "/images/products/scaroff.png",
    group: "bakim",
    kullanimAmaci: [
      "Yara bakım spreyi, doğal bitkisel özler ve homeopatik bileşenlerle formüle edilmiştir. İçeriğindeki Calendula (Arap Çiçeği) Yağı ve Hypericum (Sarı Kantaron) Yağı, cilt sağlığını iyileştiren, yatıştırıcı ve tedavi edici özelliklere sahip doğal bileşiklerdir. Scaroff, yaraların hızlı iyileşmesini destekler, cildin yenilenmesini hızlandırır ve enfeksiyon risklerini azaltır.",
    ],
    etkiAlani: [
      "Calendula Yağı",
      "Hypericum Yağı (Sarı Kantaron Yağı)",
      "Homeopatik Bileşenler",
    ],
    ambalaj: ["100 ml"],
  },
  {
    slug: "eyewin",
    name: "Eyewin",
    image: "/images/products/eyewin.png",
    group: "bakim",
    kullanimAmaci: [
      "Eyewin göz bakım spreyi, göz sağlığını destekleyen ve rahatlatan bir formülle geliştirilmiştir. İçeriğindeki Borik Asit, antiseptik özellikleri ile göz çevresindeki enfeksiyon risklerini azaltırken, gözdeki tahrişleri yatıştırmaya ve göz sağlığını korumaya yardımcı olur. Düzenli kullanım, gözlerdeki kuruluk, kızarıklık ve yabancı cisim hissi gibi sorunları azaltır, gözleri temizler ve tazeler.",
    ],
    etkiAlani: ["Borik Asit"],
    ambalaj: ["100 ml"],
  },
  {
    slug: "winatox",
    name: "Winatox",
    image: "/images/products/winatox.png",
    group: "bakim",
    kullanimAmaci: [
      "Diatom içeren hayvan haşere ve parazit kovucu toz, doğal ve etkili bir formülle, evcil ve çiftlik hayvanlarını zararlı parazitlerden korur. Diatom tozu, mikroskobik silis tabakalarından oluşan doğal bir bileşen olup, haşereleri ve cilt parazitlerini etkili bir şekilde öldürür. Bu toz, hayvanların sağlığını tehdit eden pire, bit, kene ve diğer parazitleri yok ederken, hayvanların cilt sağlığını korur.",
    ],
    etkiAlani: ["Diatom Tozu (Diatomaceous Earth)", "Cilt Koruyucu Özellikler"],
    ambalaj: ["100 gr", "500 gr"],
  },
];

export const urunlerSayfaBasligi = "Tüm Ürünlerimiz";
