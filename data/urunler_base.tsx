// data/urunler_base.tsx

// Ürünlerin dile bağımsız (statik) verilerini içerir.
export interface UrunBase {
  slug: string;
  image: string;
  group:
    | "buyukbas"
    | "kucukbas"
    | "kanatli"
    | "homeopatik"
    | "besleme"
    | "bakim";
  ambalaj: string[];
}

// Tüm ürünlerin dile bağımsız verilerini içeren dizi
export const urunlerBase: UrunBase[] = [
  {
    slug: "negrofix",
    image: "/images/products/negrofix.png",
    group: "homeopatik",
    ambalaj: ["20 ml", "50 ml", "100 ml"],
  },
  {
    slug: "wartoff",
    image: "/images/products/wartoff.png",
    group: "homeopatik",
    ambalaj: ["20 ml", "50 ml", "100 ml"],
  },
  {
    slug: "trichofff",
    image: "/images/products/trichofff.png",
    group: "homeopatik",
    ambalaj: ["20 ml", "50 ml"],
  },
  {
    slug: "holowin",
    image: "/images/products/holowin.png",
    group: "homeopatik",
    ambalaj: ["1 kg", "5 kg"],
  },
  {
    slug: "respofix",
    image: "/images/products/respofix.png",
    group: "homeopatik",
    ambalaj: ["50 ml", "100 ml"],
  },
  {
    slug: "hepafix",
    image: "/images/products/hepafix.png",
    group: "homeopatik",
    ambalaj: ["20 ml"],
  },
  {
    slug: "pulmofix",
    image: "/images/products/pulmofix.png",
    group: "homeopatik",
    ambalaj: ["20 ml"],
  },
  {
    slug: "ultrastart",
    image: "/images/products/ultrastart.png",
    group: "besleme",
    ambalaj: ["1 lt"],
  },
  {
    slug: "3buffs",
    image: "/images/products/3buffs.png",
    group: "besleme",
    ambalaj: ["150 gr X 5 adet"],
  },
  {
    slug: "diarend",
    image: "/images/products/diarend.png",
    group: "besleme",
    ambalaj: ["100 gr X 5 adet"],
  },
  {
    slug: "surwin",
    image: "/images/products/sürwin.png",
    group: "besleme",
    ambalaj: ["100 gr X 5 adet"],
  },
  {
    slug: "pasivet",
    image: "/images/products/pasivet.png",
    group: "besleme",
    ambalaj: ["500 gr"],
  },
  {
    slug: "naturojen",
    image: "/images/products/naturojen.png",
    group: "besleme",
    ambalaj: ["500 gr"],
  },
  {
    slug: "winfresh",
    image: "/images/products/winfresh.png",
    group: "besleme",
    ambalaj: ["100 ml"],
  },
  {
    slug: "winmaxicell",
    image: "/images/products/maxicell.png",
    group: "besleme",
    ambalaj: ["100 ml", "250 ml", "1 lt", "5 lt"],
  },
  {
    slug: "winphos",
    image: "/images/products/winphos.png",
    group: "besleme",
    ambalaj: ["100 ml", "1 lt"],
  },
  {
    slug: "windosec",
    image: "/images/products/windosec.png",
    group: "besleme",
    ambalaj: ["50 gr X 10 adet"],
  },
  {
    slug: "wincalf",
    image: "/images/products/wincalf.png",
    group: "besleme",
    ambalaj: ["500 gr", "1 kg"],
  },
  {
    slug: "besipremium",
    image: "/images/products/besipremium.png",
    group: "besleme",
    ambalaj: ["25 kg"],
  },
  {
    slug: "adomega",
    image: "/images/products/adomega.png",
    group: "besleme",
    ambalaj: ["100 ml"],
  },
  {
    slug: "selemax",
    image: "/images/products/selemax.png",
    group: "besleme",
    ambalaj: [],
  },
  {
    slug: "vitabolic",
    image: "/images/products/vitabolic.png",
    group: "besleme",
    ambalaj: ["100 ml"],
  },
  {
    slug: "winmast",
    image: "/images/products/winmast.png",
    group: "bakim",
    ambalaj: ["5 gr X 24 adet"],
  },
  {
    slug: "scaroff",
    image: "/images/products/scaroff.png",
    group: "bakim",
    ambalaj: ["100 ml"],
  },
  {
    slug: "eyewin",
    image: "/images/products/eyewin.png",
    group: "bakim",
    ambalaj: ["100 ml"],
  },
  {
    slug: "winatox",
    image: "/images/products/winatox.png",
    group: "bakim",
    ambalaj: ["100 gr", "500 gr"],
  },
];
