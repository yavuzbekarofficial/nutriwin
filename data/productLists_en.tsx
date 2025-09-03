// data/productLists_en.tsx

// A single interface containing all product details
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
  description?: string;
  content?: string;
  kullanimAmaci: string | string[];
  etkiAlani?: string[];
  kullanimSekli?: string | string[];
  ambalaj: string | string[];
}

// Creating a single array containing all products
export const products: UrunDetay[] = [
  {
    slug: "negrofix",
    name: "Negrofix",
    image: "/images/products/negrofix.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Strengthens the immune system to provide effective protection against severe bacterial infections.",
      "Accelerates the healing process by supporting the drainage of necrotic and abscessed tissues.",
      "Balances inflammatory processes in the skin and mucosa, reducing the risk of chronic infections.",
      "Promotes healthy tissue formation by accelerating wound healing.",
      "Regulates excessive immune system reactions, balancing autoimmune tendencies.",
    ],
    etkiAlani: [
      "Effect on Tissue Necrosis and Deep Infections",
      "Strengthening the Immune Response Against Bacterial Infections",
      "Regulatory Mechanism for Abscesses and Pathological Inflammation",
      "Accelerating Tissue Repair and Regeneration",
    ],
    ambalaj: ["20 ml", "50 ml", "100 ml"],
  },
  {
    slug: "wartoff",
    name: "Wartoff",
    image: "/images/products/wartoff.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Supports the treatment of warts, papillomas, and other skin lesions, accelerating their reduction and disappearance.",
      "Modulates the immune system at a cellular level to prevent the recurrence of viral infections. Thanks to Thuja's powerful anti-miasmatic effect, it clears not only existing warts but also hidden remnants of old infections in the body.",
      "Regulates the skin-lung connection to balance the excretion of toxins accumulated in the respiratory system through the skin.",
      "Balances hereditary or suppressed disease tendencies, allowing the immune system to return to its natural rhythm.",
      "Supports healthy cell regeneration on the skin surface, promoting healthy tissue formation after lesions.",
    ],
    etkiAlani: [
      "Thuja's Anti-Psychotic Miasmatic Effect and the Skin-Lung Connection",
      "Immune Support Mechanism Against Virus-Induced Skin Lesions",
      "Regulation of Abnormal Cellular Growth in the Skin",
      "Reducing Inflammation and Promoting Tissue Repair",
    ],
    ambalaj: ["20 ml", "50 ml", "100 ml"],
  },
  {
    slug: "trichofff",
    name: "Trichofff",
    image: "/images/products/trichofff.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Prevents the spread of fungal infections, supporting the rapid healing of affected areas. Activates the immune system to build resistance against chronic and recurrent fungal infections.",
      "Provides a deep-level healing of treated skin diseases through its miasmatic cleansing effect.",
      "Promotes tissue regeneration, ensuring the reconstruction of a healthy skin structure and strengthening the skin barrier for long-term protection against fungi and other pathogens.",
    ],
    etkiAlani: [
      "Miasmatic and Antifungal Effects",
      "Antimicrobial and Antifungal Mechanism Against Deep-seated Skin Infections",
      "Balancing Inflammation and Cellular Damage in the Skin",
      "Tissue Repair and Strengthening the Skin Barrier",
    ],
    ambalaj: ["20 ml", "50 ml"],
  },
  {
    slug: "holowin",
    name: "Holowin",
    image: "/images/products/holowin.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Reduces the duration and severity of diarrhea, alleviating the effects of bacterial and viral infections.",
      "Strengthens the immune system, providing long-term resistance against intestinal infections.",
      "Prevents dehydration that may occur due to diarrhea by maintaining water and electrolyte balance.",
      "Supports gut flora, ensuring the long-term balance of the digestive system.",
      "Accelerates toxin excretion, reducing the risk of sepsis and complications.",
      "Increases nutrient absorption, preventing weight loss associated with diarrhea and supporting calf growth.",
    ],
    etkiAlani: [
      "Protection Against Gastrointestinal Infections in Calves",
      "Detoxification Against Bacterial and Viral Toxins",
      "Preservation of Water and Electrolyte Balance",
      "Regulation of Gut Flora and Probiotic Support",
      "Strengthening the Immune System to Prevent Recurrent Diarrhea",
    ],
    ambalaj: ["1 kg", "5 kg"],
  },
  {
    slug: "respofix",
    name: "Respofix",
    image: "/images/products/respofix.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Opens the bronchi, increasing airflow.",
      "Activates immune cells, strengthening the defense against infections.",
      "Reduces inflammation, protecting lung tissue.",
      "Balances mucus, relieves cough. Suppresses allergic reactions.",
    ],
    etkiAlani: [
      "Strengthening the Immune Response",
      "Supporting Respiratory Functions (Bronchodilator and Mucolytic Effect)",
      "Protection Against Respiratory Tract Infections (Antibacterial and Antiviral Mechanisms)",
      "Regulation of Allergic Reactions",
    ],
    ambalaj: ["50 ml", "100 ml"],
  },
  {
    slug: "hepafix",
    name: "Hepafix",
    image: "/images/products/hepafix.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Supports liver functions, accelerating the excretion of toxins.",
      "Strengthens the immune system, providing resistance against diseases.",
      "Regulates reproductive health and hormonal balance, improves overall metabolism by increasing energy levels.",
    ],
    etkiAlani: [
      "Liver Support Mechanism",
      "Strengthening the Immune System",
      "Hormone and Reproductive System Support",
      "Metabolic and Neural Support Mechanism",
    ],
    ambalaj: ["20 ml"],
  },
  {
    slug: "pulmofix",
    name: "Pulmofix",
    image: "/images/products/pulmofix.png",
    group: "homeopatik",
    kullanimAmaci: [
      "Opens the bronchi, increasing airflow.",
      "Activates immune cells, strengthening the defense against infections.",
      "Reduces inflammation, protecting lung tissue.",
      "Balances mucus, relieves cough. Suppresses allergic reactions.",
    ],
    etkiAlani: [
      "Strengthening the Immune Response",
      "Supporting Respiratory Functions (Bronchodilator and Mucolytic Effect)",
      "Protection Against Respiratory Tract Infections (Antibacterial and Antiviral Mechanisms)",
      "Regulation of Allergic Reactions",
    ],
    ambalaj: ["20 ml"],
  },
  {
    slug: "ultrastart",
    name: "Ultra Start",
    image: "/images/products/ultrastart.png",
    group: "besleme",
    kullanimAmaci: [
      "Formulated for healthy growth, strong immunity, and superior performance, UltraStart supports the development of lambs and calves for maximum efficiency. This advanced premix, containing RFC (Refined Functional Carbonates), optimizes digestive functions while maintaining the animals' metabolic balance. The combination of homeopathic, probiotic, biotechnological components, and RFC strengthens the immune system, increases body resistance, and enables animals to grow more efficiently.",
    ],
    etkiAlani: [
      "Immunity Strengthening and Disease Resistance",
      "Digestion and Gut Health",
      "Supporting Growth and Muscle Development",
      "Respiratory Health and Stress Management",
    ],
    ambalaj: ["1 lt"],
  },
  {
    slug: "3buffs",
    name: "3 Buff s",
    image: "/images/products/3buffs.png",
    group: "besleme",
    kullanimAmaci: [
      "8-Hour Effective Buffering & Liver Supporting Rumen Regulator",
      "Stabilizes rumen pH to prevent acidosis, supports liver functions to increase detoxification, and maximizes metabolic efficiency.",
    ],
    etkiAlani: [
      "Energy and Metabolic Support",
      "Digestion and Acid-Base Balance",
      "Bone and Muscle Health",
      "Protective and Supportive Effect",
    ],
    ambalaj: ["150 gr X 5 units"],
  },
  {
    slug: "diarend",
    name: "Diar-end",
    image: "/images/products/diarend.png",
    group: "besleme",
    kullanimAmaci: [
      "Supports rapid recovery by reducing the effects of diarrhea.",
      "Prevents dehydration by preventing electrolyte loss.",
      "Improves digestive health by regulating gut flora.",
      "Strengthens the immune system to provide protection against diseases.",
    ],
    etkiAlani: [
      "Rapid Rehydration and Electrolyte Balance",
      "Supports the Gut Microbiota",
      "Strengthens the Immune System",
    ],
    ambalaj: ["100 gr X 5 units"],
  },
  {
    slug: "surwin",
    name: "Sürwin",
    image: "/images/products/sürwin.png",
    group: "besleme",
    kullanimAmaci: [
      "Relieves constipation and digestive problems.",
      "Regulates bowel movements, supporting the healthy functioning of the digestive system.",
      "Improves overall gut health by accelerating toxin excretion.",
    ],
    etkiAlani: [
      "Bowel Cleansing and Regulatory Effect",
      "Supports the Digestive System",
      "Toxin Excretion and Electrolyte Balance",
    ],
    ambalaj: ["100 gr X 5 units"],
  },
  {
    slug: "pasivet",
    name: "Pasivet",
    image: "/images/products/pasivet.png",
    group: "besleme",
    kullanimAmaci: [
      "Reduces stress levels in bulls, enabling them to exhibit calmer and more balanced behavior.",
      "Helps control aggressive and restless behavior by providing relaxation for the animal.",
      "Increases the animal's feed utilization rate.",
    ],
    etkiAlani: [
      "Stress-Reducing Effect",
      "Physical and Psychological Balance",
      "Psycho-physical Support",
    ],
    ambalaj: ["500 gr"],
  },
  {
    slug: "naturojen",
    name: "Naturojen",
    image: "/images/products/naturojen.png",
    group: "besleme",
    kullanimAmaci: [
      "Increases signs of heat in female animals, ensuring the reproductive cycle functions healthily.",
      "Regulates hormone levels in animals preparing for mating, increasing reproductive efficiency.",
      "Helps achieve more productive results during the reproductive period and ensures high performance in farm management.",
    ],
    etkiAlani: [
      "Supports Reproductive Health and the Heat Cycle",
      "Supports with Calcium and Minerals",
      "Support Enriched with Natural Components",
    ],
    ambalaj: ["500 gr"],
  },
  {
    slug: "winfresh",
    name: "Win Fresh",
    image: "/images/products/winfresh.png",
    group: "besleme",
    kullanimAmaci: [
      "Improves respiratory tract health, reducing congestion and infection risk.",
      "Strengthens immune system functions and provides resistance against infections.",
      "Reduces inflammation in the body for relief.",
      "Balances the digestive system to optimize overall metabolic health.",
      "Enhances the general health and well-being of animals.",
    ],
    etkiAlani: [
      "Supports Respiratory Tracts",
      "Strengthens the Immune System",
      "Anti-inflammatory Effect",
      "Digestion and Metabolism Support",
      "Enhances General Health and Well-being",
    ],
    ambalaj: ["100 ml"],
  },
  {
    slug: "winmaxicell",
    name: "Win Maxi Cell",
    image: "/images/products/maxicell.png",
    group: "besleme",
    kullanimAmaci: [
      "General Health Support: With its vitamin and mineral content, it improves the overall health of animals and optimizes all bodily functions.",
      "Strengthens the Immune System: Thanks to its antioxidant properties, it reduces free radical damage in the body and enhances the immune response.",
      "Growth and Performance Boost: Amino acids increase the growth rate of animals and support muscle development.",
      "Metabolism and Digestive System Support: Essential oil mixtures and amino acids improve digestive health and optimize nutrient absorption.",
      "Supports Bone and Muscle Health: Along with Vitamin D and K, it increases bone density and improves muscle functions.",
    ],
    etkiAlani: [
      "Vitamin Supplements",
      "Minerals and Trace Elements",
      "Essential Oil Mixtures",
      "Essential Amino Acids",
    ],
    ambalaj: ["100 ml", "250 ml", "1 lt", "5 lt"],
  },
  {
    slug: "winphos",
    name: "Win Phos",
    image: "/images/products/winphos.png",
    group: "besleme",
    kullanimAmaci: [
      "General Health Support: The combination of minerals and amino acids improves the body's basic functions and increases overall health levels.",
      "Immune System Strengthening: Minerals like zinc, copper, iron, and selenium support immune responses and provide resistance against diseases.",
      "Bone and Muscle Health: Calcium, phosphorus, and magnesium support strong bones and a healthy muscle structure.",
      "Energy Production and Muscle Development: Methionine and L-Lysine improve muscle development and overall energy production, increasing performance.",
      "Digestion and Metabolism Support: The mineral and amino acid content supports the healthy functioning of the digestive system and increases nutrient absorption.",
    ],
    etkiAlani: ["Minerals", "Essential Amino Acids"],
    ambalaj: ["100 ml", "1 lt"],
  },
  {
    slug: "windosec",
    name: "Win Dose C",
    image: "/images/products/windosec.png",
    group: "besleme",
    kullanimAmaci: [
      "Preservation of Electrolyte and Acid-Base Balance: This premix ensures the regulation of fluid and electrolyte balance in the body, increases energy levels, and improves the health of animals by balancing their general metabolism.",
      "Digestive Health: Lactose monohydrate and Ent. Faceium improve gut health and facilitate digestion.",
      "High Performance and Endurance: Ideal for animals exhibiting high performance even under stress, as it increases energy production.",
      "General Metabolism Support: Components like glycine and glutamic acid accelerate all metabolic processes of the body, improving the animal's overall health.",
    ],
    etkiAlani: [
      "Electrolyte Balancers",
      "Metabolic Supporters",
      "Other Components",
    ],
    ambalaj: ["50 gr X 10 units"],
  },
  {
    slug: "wincalf",
    name: "Win Calf",
    image: "/images/products/wincalf.png",
    group: "besleme",
    kullanimAmaci: [
      "Support During Feed Transition: Provides effective nutrient absorption during the transition period for calves and lambs, strengthening the digestive system and accelerating the adaptation process.",
      "Immune Strengthening: The vitamins and minerals it contains support the immune system of young animals, helping to increase their resistance to diseases.",
      "Growth and Performance Boost: Nutrients like organic methionine and lysine increase growth rate and support muscle development.",
      "Digestive Health: Prebiotics and yeast components ensure a healthy microbiota balance in the digestive system, improving nutrient absorption.",
      "Bone and Skeletal Health: Calcareous seaweed and calcium supplements promote bone development and help create strong skeletal structures in ruminants.",
    ],
    etkiAlani: [
      "Vitamins and Minerals",
      "Amino Acid and Metabolism Support",
      "Mineral and Prebiotic Supporters",
      "Aromatic Components",
    ],
    ambalaj: ["500 gr", "1 kg"],
  },
  {
    slug: "besipremium",
    name: "Besi Premium",
    image: "/images/products/besipremium.png",
    group: "besleme",
    kullanimAmaci: [
      "Rapid Growth and Development: The high concentration of vitamins and minerals supports the rapid and healthy growth of beef ruminants.",
      "Immune System Support: The high-quality selenium, zinc, and other vitamins it contains strengthen immune functions and provide resistance against diseases.",
      "Digestive Health: Components like inactive yeast and bentonite help the digestive system function healthily and maintain the balance of the microflora.",
      "Bone and Skeletal Health: Vitamin D3, calcium, and phosphorus components ensure the formation of a strong bone structure.",
      "Cell Regeneration and Antioxidant Protection: Antioxidant components like alpha-tocopherol (Vitamin E) and selenium prevent cellular damage and slow down aging.",
    ],
    etkiAlani: ["Vitamins", "Minerals", "Supportive Components"],
    ambalaj: ["25 kg"],
  },
  {
    slug: "adomega",
    name: "Adomega",
    image: "/images/products/adomega.png",
    group: "besleme",
    kullanimAmaci: [
      "ADOMEGA is a liquid supplement that synergistically combines Vitamins A, D3, and E, which play critical roles in the immune system, epithelial tissues, reproductive health, and nervous balance of ruminants (calves, lambs, kids, cows, sheep, goats), with anti-inflammatory Omega-3 fatty acids.",
      "Vitamin A preserves the integrity of the mucosal barrier, Vitamin D3 regulates calcium-phosphorus metabolism, and Vitamin E provides antioxidant protection at a cellular level. Omega-3 fatty acids, in turn, suppress inflammation, supporting the healthy functioning of the vascular, nervous, and reproductive systems.",
    ],
    etkiAlani: [
      "Strengthens the immune system",
      "Supports musculoskeletal and bone development",
      "Increases reproductive efficiency and conception rates",
      "Improves epithelial integrity and skin-coat quality",
      "Provides physiological resilience against heat and production stress",
      "Supports nervous transmission and brain functions",
    ],
    ambalaj: ["100 ml"],
  },
  {
    slug: "selemax",
    name: "Selemax",
    image: "/images/products/selemax.png",
    group: "besleme",
    kullanimAmaci: [
      "SELEMAX is a powerful antioxidant formula containing Vitamin E, selenium, and zinc. It is used in ruminants (calves, lambs, kids, cows, sheep, and goats) to strengthen immune functions, protect muscle health, maintain epithelial integrity, and increase reproductive efficiency.",
      "Vitamin E protects cell membranes against free radicals, while sodium selenite, as a co-factor for the glutathione peroxidase enzyme, reduces cellular oxidative stress. Zinc, in turn, plays a role in many enzyme systems, affecting wound healing, skin health, and immune activity.",
    ],
    etkiAlani: [
      "Strengthens cellular antioxidant defense",
      "Protects muscle tissue and neural transmission",
      "Increases sperm and egg quality in the reproductive system",
      "Improves skin-coat health, reduces hair loss",
      "Increases immune response against infections",
      "Reduces the risk of developmental delay, provides vitality",
    ],
    ambalaj: [],
  },
  {
    slug: "vitabolic",
    name: "Vitabolic",
    image: "/images/products/vitabolic.png",
    group: "besleme",
    kullanimAmaci: [
      "VITABOLIC is a high-density B vitamin combination that regulates energy metabolism, strengthens immunity, and supports the nervous system in high-yielding dairy and beef ruminants, starting from calves, lambs, and kids. It is particularly used to maintain metabolic balance and increase performance during periods of growth, transition, stress, and disease.",
    ],
    etkiAlani: [
      "Accelerates energy metabolism",
      "Supports growth and development",
      "Protects the nervous system and muscle coordination",
      "Increases appetite and feed utilization",
      "Accelerates post-stress and post-disease recovery",
      "Strengthens immunity and overall resilience",
    ],
    ambalaj: ["100 ml"],
  },
  {
    slug: "alkamix",
    name: "Alkamix",
    image: "/images/products/alkamix.png",
    group: "besleme",
    kullanimAmaci: [
      "Advanced Nutritional Support: A powerful combination of vitamins, minerals, and chelates supports the growth and development of ruminants.",
      "Immune System Strengthening: Fortified with vitamins C, E, D, and micro-minerals, this formula boosts immune functions.",
      "Digestive Support: Components like Saccharomyces Cerevisiae and Clinoptilolite enhance digestion and improve feed efficiency.",
      "Bone and Skeletal Health: The content of Vitamin D3, calcium carbonate, and phosphorus strengthens bone structure and promotes skeletal development.",
      "Antioxidant Defense: Ingredients such as Vitamin E and Sodium Selenite aid in cell regeneration and provide overall health support.",
    ],
    etkiAlani: [
      "Vitamins",
      "Minerals and Chelates",
      "Supportive Components and Additives",
    ],
    ambalaj: ["5 kg", "20 kg", "25 kg"],
  },
  {
    slug: "kuzubuzagimamasi",
    name: "Kuzu Buzağı Maması",
    image: "/images/products/kuzubuzağımaması.png",
    group: "besleme",
    kullanimAmaci: [
      "Growth and Development Support: A potent combination of vitamins and minerals supports the healthy growth and development of young ruminants.",
      "Immune Strengthening: The content of vitamins C, E, A, and minerals strengthens the immune system, providing resistance against diseases.",
      "Bone Health: Ensures effective absorption of vitamin D, calcium, and phosphorus, promoting bone and skeletal development.",
      "Energy and Metabolism Support: B-complex vitamins and iron boost energy production, ensuring proper metabolic function.",
      "Cell Regeneration and Antioxidant Defense: Vitamins E and C prevent the accumulation of free radicals in the body, supporting cellular health.",
    ],
    etkiAlani: ["Vitamins", "Minerals"],
    ambalaj: ["1 kg"],
  },
  {
    slug: "winmast",
    name: "Winmast",
    image: "/images/products/winmast.png",
    group: "bakim",
    kullanimAmaci: [
      "Improves udder health",
      "Provides skin care",
      "Reduces irritations and sores",
      "Prevents infections",
      "Ensures the healthy functioning of teats. In lactating animals, regular use helps prevent problems that would negatively affect milk production by protecting the teats.",
    ],
    etkiAlani: [
      "St. John's Wort Oil",
      "Calendula Oil (Marigold Oil)",
      "Glycerol",
      "Colloidal Silver Water",
    ],
    ambalaj: ["5 gr X 24 units"],
  },
  {
    slug: "scaroff",
    name: "Scaroff",
    image: "/images/products/scaroff.png",
    group: "bakim",
    kullanimAmaci: [
      "The wound care spray is formulated with natural herbal extracts and homeopathic components. The Calendula Oil (Marigold Oil) and Hypericum Oil (St. John's Wort Oil) in its content are natural compounds with skin-healing, soothing, and therapeutic properties. Scaroff supports the rapid healing of wounds, accelerates skin regeneration, and reduces the risk of infections.",
    ],
    etkiAlani: [
      "Calendula Oil",
      "Hypericum Oil (St. John's Wort Oil)",
      "Homeopathic Components",
    ],
    ambalaj: ["100 ml"],
  },
  {
    slug: "eyewin",
    name: "Eyewin",
    image: "/images/products/eyewin.png",
    group: "bakim",
    kullanimAmaci: [
      "Eyewin eye care spray is developed with a formula that supports and soothes eye health. The Boric Acid in its content, with its antiseptic properties, reduces the risk of infections around the eyes while helping to soothe eye irritations and protect eye health. Regular use reduces problems like dryness, redness, and foreign body sensation in the eyes, cleaning and refreshing them.",
    ],
    etkiAlani: ["Boric Acid"],
    ambalaj: ["100 ml"],
  },
  {
    slug: "winatox",
    name: "Winatox",
    image: "/images/products/winatox.png",
    group: "bakim",
    kullanimAmaci: [
      "The animal pest and parasite repellent powder containing diatom is a natural and effective formula that protects domestic and farm animals from harmful parasites. Diatomaceous earth is a natural component consisting of microscopic silica layers that effectively kill pests and skin parasites. This powder eliminates fleas, lice, ticks, and other parasites that threaten the health of animals while protecting their skin health.",
    ],
    etkiAlani: ["Diatomaceous Earth", "Skin Protective Properties"],
    ambalaj: ["100 gr", "500 gr"],
  },
];

export const productsPageTitle = "All Our Products";
