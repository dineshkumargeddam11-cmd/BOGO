import { Product, ProductCategory } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Kaja",
    teluguName: "కాజా",
    description: "Crispy layered sweet pastry.",
    category: ProductCategory.SWEETS,
    image: "https://picsum.photos/seed/kaja/400/400",
    variants: [ { weight: '250 gms', price: 150 }, { weight: '500 gms', price: 280 }, { weight: '1 kg', price: 540 } ],
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: 2,
    name: "Pootharekulu",
    teluguName: "పూతరేకులు",
    description: "Paper-thin sweet crepes.",
    category: ProductCategory.SWEETS,
    image: "https://picsum.photos/seed/pootharekulu/400/400",
    variants: [ { weight: '250 gms', price: 200 }, { weight: '500 gms', price: 380 }, { weight: '1 kg', price: 750 } ],
    rating: 4.9,
    reviewCount: 231
  },
  {
    id: 3,
    name: "Avakaya Pickle",
    teluguName: "ఆవకాయ పచ్చడి",
    description: "Spicy raw mango pickle.",
    category: ProductCategory.PICKLES,
    image: "https://picsum.photos/seed/avakaya/400/400",
    variants: [ { weight: '250 gms', price: 120 }, { weight: '500 gms', price: 220 }, { weight: '1 kg', price: 420 } ],
    rating: 4.7,
    reviewCount: 189
  },
  {
    id: 4,
    name: "Gongura Pickle",
    teluguName: "గోంగూర పచ్చడి",
    description: "Tangy sorrel leaves pickle.",
    category: ProductCategory.PICKLES,
    image: "https://picsum.photos/seed/gongura/400/400",
    variants: [ { weight: '250 gms', price: 110 }, { weight: '500 gms', price: 200 }, { weight: '1 kg', price: 380 } ],
    rating: 4.6,
    reviewCount: 98
  },
  {
    id: 5,
    name: "Chegodilu",
    teluguName: "చేగోడీలు",
    description: "Crispy, spicy rice flour rings.",
    category: ProductCategory.SNACKS,
    image: "https://picsum.photos/seed/chegodilu/400/400",
    variants: [ { weight: '250 gms', price: 90 }, { weight: '500 gms', price: 170 }, { weight: '1 kg', price: 320 } ],
    rating: 4.5,
    reviewCount: 76
  },
  {
    id: 6,
    name: "Sunnundalu",
    teluguName: "సున్నుండలు",
    description: "Sweet ladoos of roasted lentils.",
    category: ProductCategory.SWEETS,
    image: "https://picsum.photos/seed/sunnundalu/400/400",
    variants: [ { weight: '250 gms', price: 180 }, { weight: '500 gms', price: 350 }, { weight: '1 kg', price: 680 } ],
    rating: 4.8,
    reviewCount: 152
  },
  {
    id: 7,
    name: "Bellam Gavvalu",
    teluguName: "బెల్లం గవ్వలు",
    description: "Jaggery-coated flour shells.",
    category: ProductCategory.SNACKS,
    image: "https://picsum.photos/seed/gavvalu/400/400",
    variants: [ { weight: '250 gms', price: 100 }, { weight: '500 gms', price: 190 }, { weight: '1 kg', price: 360 } ],
    rating: 4.4,
    reviewCount: 65
  },
  {
    id: 8,
    name: "Tomato Pickle",
    teluguName: "టమాటో పచ్చడి",
    description: "Spicy and tangy tomato pickle.",
    category: ProductCategory.PICKLES,
    image: "https://picsum.photos/seed/tomato/400/400",
    variants: [ { weight: '250 gms', price: 100 }, { weight: '500 gms', price: 180 }, { weight: '1 kg', price: 340 } ],
    rating: 4.6,
    reviewCount: 88
  },
  {
    id: 9,
    name: "Ariselu",
    teluguName: "అరిసెలు",
    description: "Traditional jaggery & rice flour sweets.",
    category: ProductCategory.SWEETS,
    image: "https://picsum.photos/seed/ariselu/400/400",
    variants: [ { weight: '250 gms', price: 160 }, { weight: '500 gms', price: 300 }, { weight: '1 kg', price: 580 } ],
    rating: 4.7,
    reviewCount: 110
  },
  {
    id: 10,
    name: "Jantikalu",
    teluguName: "జంతికలు",
    description: "Crunchy spiral-shaped snacks.",
    category: ProductCategory.SNACKS,
    image: "https://picsum.photos/seed/jantikalu/400/400",
    variants: [ { weight: '250 gms', price: 85 }, { weight: '500 gms', price: 160 }, { weight: '1 kg', price: 300 } ],
    rating: 4.5,
    reviewCount: 91
  },
  {
    id: 11,
    name: "Kobbari Kova",
    teluguName: "కొబ్బరి కోవా",
    description: "Coconut and khoya sweet.",
    category: ProductCategory.SWEETS,
    image: "https://picsum.photos/seed/kobbari/400/400",
    variants: [ { weight: '250 gms', price: 220 }, { weight: '500 gms', price: 420 }, { weight: '1 kg', price: 800 } ],
    rating: 4.9,
    reviewCount: 134
  },
  {
    id: 12,
    name: "Cauliflower Pickle",
    teluguName: "కాలీఫ్లవర్ పచ్చడి",
    description: "Crunchy and spicy gobi achar.",
    category: ProductCategory.PICKLES,
    image: "https://picsum.photos/seed/cauliflower/400/400",
    variants: [ { weight: '250 gms', price: 130 }, { weight: '500 gms', price: 250 }, { weight: '1 kg', price: 480 } ],
    rating: 4.3,
    reviewCount: 54
  },
  {
    id: 13,
    name: "Madatha Kaja",
    teluguName: "మడత కాజా",
    description: "Folded sweet pastry, soaked in syrup.",
    category: ProductCategory.SWEETS,
    image: "https://picsum.photos/seed/madatha/400/400",
    variants: [ { weight: '250 gms', price: 140 }, { weight: '500 gms', price: 270 }, { weight: '1 kg', price: 520 } ],
    rating: 4.7,
    reviewCount: 99
  },
  {
    id: 14,
    name: "Ribbon Pakoda",
    teluguName: "రిబ్బన్ పకోడా",
    description: "Flat, crispy ribbon-shaped snack.",
    category: ProductCategory.SNACKS,
    image: "https://picsum.photos/seed/ribbon/400/400",
    variants: [ { weight: '250 gms', price: 95 }, { weight: '500 gms', price: 180 }, { weight: '1 kg', price: 340 } ],
    rating: 4.6,
    reviewCount: 72
  },
  {
    id: 15,
    name: "Citron Pickle (Dabbakaya)",
    teluguName: "దబ్బకాయ పచ్చడి",
    description: "Unique and tangy citron pickle.",
    category: ProductCategory.PICKLES,
    image: "https://picsum.photos/seed/citron/400/400",
    variants: [ { weight: '250 gms', price: 150 }, { weight: '500 gms', price: 280 }, { weight: '1 kg', price: 540 } ],
    rating: 4.5,
    reviewCount: 48
  },
  {
    id: 16,
    name: "Boondi Ladoo",
    teluguName: "బూందీ లడ్డూ",
    description: "Classic sweet balls of fried gram flour.",
    category: ProductCategory.SWEETS,
    image: "https://picsum.photos/seed/boondi/400/400",
    variants: [ { weight: '250 gms', price: 130 }, { weight: '500 gms', price: 250 }, { weight: '1 kg', price: 480 } ],
    rating: 4.8,
    reviewCount: 201
  },
  {
    id: 17,
    name: "Pakam Garelu",
    teluguName: "పాకం గారెలు",
    description: "Vada soaked in sweet jaggery syrup.",
    category: ProductCategory.SWEETS,
    image: "https://picsum.photos/seed/pakamgarelu/400/400",
    variants: [ { weight: '250 gms', price: 120 }, { weight: '500 gms', price: 230 }, { weight: '1 kg', price: 450 } ],
    rating: 4.7,
    reviewCount: 115
  },
  {
    id: 18,
    name: "Garlic Pickle",
    teluguName: "వెల్లుల్లి పచ్చడి",
    description: "Pungent and flavorful garlic pickle.",
    category: ProductCategory.PICKLES,
    image: "https://picsum.photos/seed/garlic/400/400",
    variants: [ { weight: '250 gms', price: 140 }, { weight: '500 gms', price: 260 }, { weight: '1 kg', price: 500 } ],
    rating: 4.6,
    reviewCount: 102
  },
  {
    id: 19,
    name: "Sakinalu",
    teluguName: "సకినాలు",
    description: "Traditional Telangana snack for festivals.",
    category: ProductCategory.SNACKS,
    image: "https://picsum.photos/seed/sakinalu/400/400",
    variants: [ { weight: '250 gms', price: 110 }, { weight: '500 gms', price: 200 }, { weight: '1 kg', price: 380 } ],
    rating: 4.5,
    reviewCount: 68
  },
  {
    id: 20,
    name: "Badusha",
    teluguName: "బాదుషా",
    description: "Flaky, melt-in-your-mouth pastry.",
    category: ProductCategory.SWEETS,
    image: "https://picsum.photos/seed/badusha/400/400",
    variants: [ { weight: '250 gms', price: 170 }, { weight: '500 gms', price: 320 }, { weight: '1 kg', price: 620 } ],
    rating: 4.9,
    reviewCount: 167
  },
  {
    id: 21,
    name: "Chicken Pickle",
    teluguName: "చికెన్ పచ్చడి",
    description: "Spicy and tangy boneless chicken pickle.",
    category: ProductCategory.PICKLES,
    image: "https://picsum.photos/seed/chickenpickle/400/400",
    variants: [ { weight: '250 gms', price: 250 }, { weight: '500 gms', price: 480 }, { weight: '1 kg', price: 950 } ],
    rating: 4.9,
    reviewCount: 312
  },
  {
    id: 22,
    name: "Mutton Pickle",
    teluguName: "మటన్ పచ్చడి",
    description: "Rich and flavorful boneless mutton pickle.",
    category: ProductCategory.PICKLES,
    image: "https://picsum.photos/seed/muttonpickle/400/400",
    variants: [ { weight: '250 gms', price: 350 }, { weight: '500 gms', price: 680 }, { weight: '1 kg', price: 1350 } ],
    rating: 4.8,
    reviewCount: 255
  },
  {
    id: 23,
    name: "Prawn Pickle",
    teluguName: "రొయ్యల పచ్చడి",
    description: "Deliciously spiced prawn pickle.",
    category: ProductCategory.PICKLES,
    image: "https://picsum.photos/seed/prawnpickle/400/400",
    variants: [ { weight: '250 gms', price: 300 }, { weight: '500 gms', price: 580 }, { weight: '1 kg', price: 1150 } ],
    rating: 4.9,
    reviewCount: 298
  },
  {
    id: 24,
    name: "Cold Pressed Groundnut Oil",
    teluguName: "గానుగ వేరుశనగ నూనె",
    description: "Pure, unrefined groundnut oil, cold-pressed to retain nutrients.",
    category: ProductCategory.STAPLES,
    image: "https://picsum.photos/seed/groundnutoil/400/400",
    variants: [ { weight: '250 gms', price: 120 }, { weight: '500 gms', price: 230 }, { weight: '1 kg', price: 460 } ],
    rating: 4.9,
    reviewCount: 180
  },
  {
    id: 25,
    name: "Red Chilli Powder",
    teluguName: "కారం పొడి",
    description: "Spicy and vibrant red chilli powder, ground from premium dried chillies.",
    category: ProductCategory.STAPLES,
    image: "https://picsum.photos/seed/chillipowder/400/400",
    variants: [ { weight: '250 gms', price: 130 }, { weight: '500 gms', price: 250 }, { weight: '1 kg', price: 490 } ],
    rating: 4.7,
    reviewCount: 210
  },
  {
    id: 26,
    name: "Dry Coconut (Copra)",
    teluguName: "ఎండు కొబ్బరి",
    description: "Sun-dried coconut halves, perfect for curries and sweets.",
    category: ProductCategory.STAPLES,
    image: "https://picsum.photos/seed/drycoconut/400/400",
    variants: [ { weight: '250 gms', price: 90 }, { weight: '500 gms', price: 175 }, { weight: '1 kg', price: 340 } ],
    rating: 4.8,
    reviewCount: 145
  },
  {
    id: 27,
    name: "Foxtail Millet",
    teluguName: "కొర్రలు",
    description: "Nutritious and gluten-free foxtail millets, a healthy rice alternative.",
    category: ProductCategory.STAPLES,
    image: "https://picsum.photos/seed/foxtailmillet/400/400",
    variants: [ { weight: '250 gms', price: 45 }, { weight: '500 gms', price: 80 }, { weight: '1 kg', price: 150 } ],
    rating: 4.9,
    reviewCount: 198
  },
  {
    id: 28,
    name: "Turmeric Powder",
    teluguName: "పసుపు పొడి",
    description: "Aromatic and authentic turmeric powder with high curcumin content.",
    category: ProductCategory.STAPLES,
    image: "https://picsum.photos/seed/turmeric/400/400",
    variants: [ { weight: '250 gms', price: 100 }, { weight: '500 gms', price: 190 }, { weight: '1 kg', price: 370 } ],
    rating: 4.8,
    reviewCount: 250
  },
  {
    id: 29,
    name: "Cold Pressed Sesame Oil",
    teluguName: "గానుగ నువ్వుల నూనె",
    description: "Nutrient-rich sesame oil, ideal for cooking and traditional recipes.",
    category: ProductCategory.STAPLES,
    image: "https://picsum.photos/seed/sesameoil/400/400",
    variants: [ { weight: '250 gms', price: 135 }, { weight: '500 gms', price: 260 }, { weight: '1 kg', price: 520 } ],
    rating: 4.9,
    reviewCount: 165
  }
];

export const DOMESTIC_CITIES = ['Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai', 'Kolkata', 'Bhubaneswar', 'Mysore'];
export const INTERNATIONAL_COUNTRIES = ['USA', 'UK', 'Malaysia', 'Dubai', 'UAE', 'Singapore', 'Australia', 'Canada', 'South Africa'];