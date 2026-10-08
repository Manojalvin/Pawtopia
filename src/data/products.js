export const CATEGORIES = [
  {
    id: 'dog-food',
    name: 'Dog Food',
    petType: 'Dog',
    icon: 'Bone',
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=600&q=80',
    description: 'Nutritious kibble, wet food & grain-free recipes'
  },
  {
    id: 'cat-food',
    name: 'Cat Food',
    petType: 'Cat',
    icon: 'Fish',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    description: 'High-protein gravies, salmon pate & dry blends'
  },
  {
    id: 'treats',
    name: 'Treats',
    petType: 'All',
    icon: 'Cookie',
    image: 'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=600&q=80',
    description: 'Jerky strips, training bites & dental chews'
  },
  {
    id: 'toys',
    name: 'Toys',
    petType: 'All',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    description: 'Ropes, squeakers, laser pointers & interactive balls'
  },
  {
    id: 'grooming',
    name: 'Grooming',
    petType: 'All',
    icon: 'Sparkle',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80',
    description: 'Herbal shampoos, shedding brushes & paw balms'
  },
  {
    id: 'beds-accessories',
    name: 'Beds & Accessories',
    petType: 'All',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80',
    description: 'Orthopedic memory foam beds, harness & collars'
  }
];

export const BRANDS = [
  'PawPure',
  'BarkBites',
  'MeowDelight',
  'RoyalPaws',
  'FurryTail',
  'WildTail',
  'Nala & Co'
];

export const PRODUCTS = [
  {
    id: 'dog-food-puppy-power',
    name: 'PawPure Farm Fresh Puppy Kibble',
    brand: 'PawPure',
    category: 'Dog Food',
    petType: 'Dog',
    price: 849,
    originalPrice: 1199,
    discount: '29% OFF',
    rating: 4.9,
    reviews: 342,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Formulated with tender free-range chicken, brown rice, and DHA for optimal brain and bone development in young growing puppies.',
    highlights: [
      'Real Deboned Chicken is #1 Ingredient',
      'Infused with DHA & EPA for Cognitive Health',
      'Calcium & Phosphorus for Sturdy Teeth & Bones',
      'Zero Corn, Wheat or Artificial Flavors'
    ],
    sizes: ['1.2 kg', '3 kg', '10 kg'],
    inStock: true,
    isFeatured: true,
    feedGuide: 'Feed 1.5 cups daily per 5kg body weight, divided into two meals.',
    ingredients: 'Chicken, Brown Rice, Sweet Potato, Flaxseed, Salmon Oil, Vitamins & Minerals.'
  },
  {
    id: 'dog-food-salmon-adult',
    name: 'WildTail Atlantic Salmon Adult Dog Food',
    brand: 'WildTail',
    category: 'Dog Food',
    petType: 'Dog',
    price: 1399,
    originalPrice: 1850,
    discount: '24% OFF',
    rating: 4.8,
    reviews: 215,
    badge: 'Vet Choice',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Rich in Omega-3 fatty acids from wild-caught salmon to promote silky coats, reduce skin allergies, and support joint mobility.',
    highlights: [
      'Single Novel Protein Source',
      'Glucosamine & Chondroitin for Healthy Joints',
      'Prebiotics for Gentle Digestion',
      'Hypoallergenic Recipe'
    ],
    sizes: ['2.5 kg', '6 kg', '12 kg'],
    inStock: true,
    isFeatured: true,
    feedGuide: '2 cups daily for adult dogs weighing 10-15kg.',
    ingredients: 'Atlantic Salmon, Peas, Tapioca, Canola Oil, Spinach, Cranberries, Turmeric.'
  },
  {
    id: 'dog-treats-chicken-jerky',
    name: 'BarkBites Slow-Smoked Chicken Jerky',
    brand: 'BarkBites',
    category: 'Treats',
    petType: 'Dog',
    price: 349,
    originalPrice: 499,
    discount: '30% OFF',
    rating: 4.9,
    reviews: 512,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
    ],
    description: '100% human-grade chicken breast strips slow roasted over hickory wood. Soft, chewy, and easily broken down for training sessions.',
    highlights: [
      'Single Ingredient: 100% Chicken Breast',
      'High Protein (72%), Low Fat (<3%)',
      'Grain-Free & Gluten-Free',
      'Resealable pouch keeps jerky fresh'
    ],
    sizes: ['150 g', '300 g', '500 g'],
    inStock: true,
    isFeatured: true,
    feedGuide: 'Give up to 3 pieces daily as rewarding treat.',
    ingredients: 'Chicken Breast, Natural Smoked Flavor.'
  },
  {
    id: 'dog-toy-chew-rope',
    name: 'ToughPaws Braided Cotton Chew Rope',
    brand: 'FurryTail',
    category: 'Toys',
    petType: 'Dog',
    price: 299,
    originalPrice: 450,
    discount: '33% OFF',
    rating: 4.7,
    reviews: 189,
    badge: 'Durable',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Tightly woven natural organic cotton fibers that naturally floss teeth and massage gums during enthusiastic tug-of-war games.',
    highlights: [
      'Non-Toxic 100% Natural Cotton',
      'Clean teeth and massage gums while playing',
      'Reinforced triple-knot construction',
      'Machine washable'
    ],
    sizes: ['Small (2 knots)', 'Large (4 knots)'],
    inStock: true,
    isFeatured: false,
    feedGuide: 'Supervise playtime and discard if frayed.',
    ingredients: '100% Unbleached Cotton Fiber.'
  },
  {
    id: 'dog-bed-calming-donut',
    name: 'CloudRest Orthopedic Calming Donut Bed',
    brand: 'RoyalPaws',
    category: 'Beds & Accessories',
    petType: 'Dog',
    price: 1899,
    originalPrice: 2899,
    discount: '34% OFF',
    rating: 4.9,
    reviews: 420,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Designed with a raised circular rim to create a sense of security and relieve pressure on aching joints. Ultra plush faux-fur.',
    highlights: [
      'High-Density Orthopedic Memory Foam',
      'Waterproof Inner Lining with Anti-Slip Base',
      'Removable Machine-Washable Cover',
      'Promotes Deeper, Anxious-Free Sleep'
    ],
    sizes: ['Medium (60cm)', 'Large (80cm)', 'XL (100cm)'],
    inStock: true,
    isFeatured: true,
    feedGuide: 'Allow 24 hours to fully expand after unboxing.',
    ingredients: 'Faux Shag Fur, High Resilient PP Cotton.'
  },
  {
    id: 'dog-harness-reflective',
    name: 'PawSafe No-Pull Breathable Dog Harness',
    brand: 'Nala & Co',
    category: 'Beds & Accessories',
    petType: 'Dog',
    price: 699,
    originalPrice: 1099,
    discount: '36% OFF',
    rating: 4.7,
    reviews: 164,
    badge: 'Safe Walk',
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ergonomic dual-clip chest harness that gently redistributes pulling pressure across the body to eliminate choking hazards.',
    highlights: [
      'Dual Metal Leash Clips (Front & Back)',
      '3M High-Visibility Reflective Stitching',
      'Breathable Padded Air Mesh Lining',
      'Quick-Snap Buckles for Fast Dressing'
    ],
    sizes: ['Small (Neck 30-40cm)', 'Medium (Neck 40-52cm)', 'Large (Neck 50-65cm)'],
    inStock: true,
    isFeatured: false,
    feedGuide: 'Adjust the straps leaving room for two fingers.',
    ingredients: 'Nylon Oxford, Soft Air Mesh, Zinc Alloy Rings.'
  },
  {
    id: 'cat-food-salmon-ocean',
    name: 'MeowDelight Ocean Salmon & Tuna Pate',
    brand: 'MeowDelight',
    category: 'Cat Food',
    petType: 'Cat',
    price: 649,
    originalPrice: 899,
    discount: '28% OFF',
    rating: 4.9,
    reviews: 290,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Silky smooth wet gourmet pate formulated specifically to provide crucial hydration and complete balanced feline nutrition.',
    highlights: [
      'Real Salmon & Tuna Fillets in Rich Broth',
      'Added Taurine for Sharp Vision & Heart Health',
      'Supports Urinary Tract Health with Optimal pH',
      'Grain, Corn, Soy & Gluten Free'
    ],
    sizes: ['Pack of 6 (85g)', 'Pack of 12 (85g)', 'Pack of 24 (85g)'],
    inStock: true,
    isFeatured: true,
    feedGuide: 'Feed 2 cans daily per 4kg adult cat.',
    ingredients: 'Salmon, Tuna, Fish Broth, Taurine, Vitamin E, Minerals.'
  },
  {
    id: 'cat-food-indoor-formula',
    name: 'PawPure Indoor Hairball Control Cat Dry Food',
    brand: 'PawPure',
    category: 'Cat Food',
    petType: 'Cat',
    price: 899,
    originalPrice: 1199,
    discount: '25% OFF',
    rating: 4.8,
    reviews: 178,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Natural fiber blend gently moves swallowed fur through digestive tract to prevent uncomfortable hairballs in indoor cats.',
    highlights: [
      'Natural Cellulose Fiber for Hairball Control',
      'Controlled Magnesium for Urinary Health',
      'L-Carnitine for Healthy Indoor Weight',
      'Crisp Kibble Shape Cleans Dental Plaque'
    ],
    sizes: ['1.2 kg', '3 kg', '7 kg'],
    inStock: true,
    isFeatured: true,
    feedGuide: '50-65g daily for active indoor cats.',
    ingredients: 'Deboned Turkey, Brown Rice, Dried Beet Pulp, Cranberries, Prebiotics.'
  },
  {
    id: 'cat-treats-creamy-puree',
    name: 'MeowDelight Creamy Lickable Treats (Pack of 10)',
    brand: 'MeowDelight',
    category: 'Treats',
    petType: 'Cat',
    price: 399,
    originalPrice: 550,
    discount: '27% OFF',
    rating: 5.0,
    reviews: 640,
    badge: 'Pet Favorite',
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Irresistible creamy puree squeeze tubes designed for hand feeding, bond building, and masking oral medications with ease.',
    highlights: [
      'Made with Real Chicken & Farm-Raised Bonito',
      'High Moisture (91%) to Hydrate Fussy Drinkers',
      'No Artificial Colors, Flavors or Preservatives',
      'Easy Tear Tubes for Mess-Free Snacking'
    ],
    sizes: ['10 Tubes (14g each)', '25 Tubes (14g each)'],
    inStock: true,
    isFeatured: true,
    feedGuide: 'Feed 1-2 tubes daily as complementary snack.',
    ingredients: 'Chicken, Bonito, Tapioca Starch, Green Tea Extract, Taurine.'
  },
  {
    id: 'cat-toy-feather-wand',
    name: 'FurryTail Interactive Bird Wand & Bell',
    brand: 'FurryTail',
    category: 'Toys',
    petType: 'Cat',
    price: 249,
    originalPrice: 399,
    discount: '38% OFF',
    rating: 4.6,
    reviews: 132,
    badge: 'Fun',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Flexible carbon fiber rod with aerodynamic natural goose feathers and soft chime bell that mimics fluttery bird flight.',
    highlights: [
      'Flexible 90cm Elastic Carbon Fiber Wand',
      'Includes 3 Replaceable Feather Attachments',
      'Safe Non-Toxic Dyes and Soft Jingling Bell',
      'Unleashes Natural Hunting Instincts'
    ],
    sizes: ['Standard (90cm)'],
    inStock: true,
    isFeatured: false,
    feedGuide: 'Keep wand stored safely away when not playing together.',
    ingredients: 'Carbon Fiber, Natural Feathers, Steel Bell.'
  },
  {
    id: 'cat-scratcher-lounger',
    name: 'RoyalPaws Infinity Wave Scratching Post & Bed',
    brand: 'RoyalPaws',
    category: 'Beds & Accessories',
    petType: 'Cat',
    price: 999,
    originalPrice: 1499,
    discount: '33% OFF',
    rating: 4.9,
    reviews: 310,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Dual-purpose curved cardboard lounger and scratching ramp that satisfies claw sharpening while saving sofa corners.',
    highlights: [
      'Heavy-Duty Corrugated Recycled Cardboard',
      'Ergonomic Curved Design for Comfortable Napping',
      'Comes with 100% Organic Catnip packet',
      'Reversible for 2x Extended Lifespan'
    ],
    sizes: ['Compact (50cm)', 'Deluxe (70cm)'],
    inStock: true,
    isFeatured: true,
    feedGuide: 'Sprinkle catnip on the textured surface to attract.',
    ingredients: '100% Recycled Corrugated Cardboard, Cornstarch Glue.'
  },
  {
    id: 'cat-litter-clumping',
    name: 'PawPure Ultra-Odor Shield Bento Clumping Litter',
    brand: 'PawPure',
    category: 'Grooming',
    petType: 'Cat',
    price: 499,
    originalPrice: 699,
    discount: '29% OFF',
    rating: 4.7,
    reviews: 245,
    badge: 'Clean Home',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Instant hard-clumping sodium bentonite clay infused with activated charcoal to trap ammonia odors for up to 14 days.',
    highlights: [
      '99.9% Dust-Free Formula Safe for Feline Airways',
      'Ultra Strong Clumps for Effortless Scooping',
      'Infused with Activated Carbon Micro-Pores',
      'Soft on Sensitive Paws'
    ],
    sizes: ['5 kg', '10 kg', '20 kg'],
    inStock: true,
    isFeatured: false,
    feedGuide: 'Fill litter tray with 3-4 inches of fresh litter.',
    ingredients: 'Natural Bentonite Clay, Activated Carbon.'
  },
  {
    id: 'grooming-herbal-shampoo',
    name: 'BarkBites Oatmeal & Aloe Soothing Pet Shampoo',
    brand: 'BarkBites',
    category: 'Grooming',
    petType: 'All',
    price: 379,
    originalPrice: 520,
    discount: '27% OFF',
    rating: 4.8,
    reviews: 198,
    badge: 'Organic',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Gentle, pH-balanced herbal formula infused with colloidal oatmeal, aloe vera, and coconut extract to soothe itchy dry skin.',
    highlights: [
      'Soap-Free, Paraben-Free & Sulfate-Free',
      'Deodorizes with a Soft Lavender-Chamomile Scent',
      'Moisturizes Undercoat & Repels Mats',
      'Safe for Dogs & Cats over 12 weeks'
    ],
    sizes: ['300 ml', '500 ml', '1 Liter'],
    inStock: true,
    isFeatured: true,
    feedGuide: 'Massage wet fur gently for 5 minutes and rinse thoroughly.',
    ingredients: 'Colloidal Oatmeal, Aloe Leaf Juice, Chamomile Extract.'
  },
  {
    id: 'grooming-deshedding-brush',
    name: 'PawPure Pro Self-Cleaning Slicker Brush',
    brand: 'PawPure',
    category: 'Grooming',
    petType: 'All',
    price: 449,
    originalPrice: 699,
    discount: '36% OFF',
    rating: 4.9,
    reviews: 388,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Fine bent stainless steel wire bristles with protective comfort tips reach deep into the undercoat to remove up to 95% of loose hair.',
    highlights: [
      'One-Click Self-Cleaning Hair Ejection Button',
      'Comfort-Coated Wire Tips Prevent Scratching Skin',
      'Ergonomic Non-Slip Silicone Handle',
      'Works wonders on both short and long coats'
    ],
    sizes: ['Medium', 'Large'],
    inStock: true,
    isFeatured: false,
    feedGuide: 'Brush in gentle strokes along the direction of coat growth.',
    ingredients: 'Stainless Steel Bristles, ABS Plastic, Silicone Grip.'
  },
  {
    id: 'dog-dental-chew-sticks',
    name: 'WildTail Fresh Mint & Chlorophyll Dental Sticks',
    brand: 'WildTail',
    category: 'Treats',
    petType: 'Dog',
    price: 429,
    originalPrice: 599,
    discount: '28% OFF',
    rating: 4.7,
    reviews: 145,
    badge: 'Dental Care',
    image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Unique cross-shaped dental chew ridges scrape away tartar and freshen dog breath with real peppermint and spirulina.',
    highlights: [
      'Clinically Proven to Reduce Tartar Buildup',
      'Enriched with Green Tea Extract & Mint',
      'Low Calorie and Highly Digestible',
      'Veterinarian Endorsed Formula'
    ],
    sizes: ['Pack of 7', 'Pack of 14', 'Pack of 28'],
    inStock: true,
    isFeatured: false,
    feedGuide: 'Give one dental stick daily after meals.',
    ingredients: 'Rice Flour, Potato Starch, Vegetable Glycerin, Peppermint Oil, Spirulina.'
  },
  {
    id: 'accessories-ceramic-feeder',
    name: 'Nala & Co Elevated Double Ceramic Bowl Set',
    brand: 'Nala & Co',
    category: 'Beds & Accessories',
    petType: 'All',
    price: 1199,
    originalPrice: 1699,
    discount: '29% OFF',
    rating: 4.8,
    reviews: 204,
    badge: 'Eco Friendly',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Crafted with premium sustainable bamboo and heavy food-grade ceramic dishes raised 15 degrees to promote smooth digestion and avoid neck strain.',
    highlights: [
      '15-Degree Tilted Ergonomic Bamboo Stand',
      'Heavy Lead-Free Food Safe Ceramic Bowls',
      'Dishwasher and Microwave Safe',
      'Non-Skid Feet Prevent Messy Meal Spills'
    ],
    sizes: ['Small (400ml each)', 'Large (850ml each)'],
    inStock: true,
    isFeatured: true,
    feedGuide: 'Wash ceramic bowls weekly with warm mild soap.',
    ingredients: 'Natural Solid Bamboo, Glazed High-Fired Ceramic.'
  },
  {
    id: 'dog-jacket-raincoat',
    name: 'FurryTail All-Weather Waterproof Dog Raincoat',
    brand: 'FurryTail',
    category: 'Beds & Accessories',
    petType: 'Dog',
    price: 799,
    originalPrice: 1150,
    discount: '31% OFF',
    rating: 4.6,
    reviews: 88,
    badge: 'Monsoon Ready',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Lightweight ripstop waterproof jacket featuring a clear hood visor and leash hole opening so your pooch stays dry on stormy strolls.',
    highlights: [
      '100% Waterproof Lightweight Polyurethane',
      'Reflective Safety Strips for Night Walks',
      'Adjustable Belly Strap & Leg Elastic Loops',
      'Folds into Compact Pocket Pouch'
    ],
    sizes: ['Small (Back 30cm)', 'Medium (Back 45cm)', 'Large (Back 60cm)'],
    inStock: true,
    isFeatured: false,
    feedGuide: 'Wipe down with damp cloth or hand wash in cold water.',
    ingredients: 'Waterproof PU Coated Polyester.'
  },
  {
    id: 'cat-laser-automatic-toy',
    name: 'MeowDelight 360° Rotating Laser Ball Toy',
    brand: 'MeowDelight',
    category: 'Toys',
    petType: 'Cat',
    price: 699,
    originalPrice: 999,
    discount: '30% OFF',
    rating: 4.7,
    reviews: 173,
    badge: 'Interactive',
    image: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Smart random orbit laser beam with automatic 15-minute rest timer to prevent over-exhaustion while keeping solo indoor kitties active.',
    highlights: [
      '3 Speed Modes: Slow, Fast, and Unpredictable',
      'USB Rechargeable (Up to 4 Hours Battery)',
      'Class 1 Pet-Safe Low Power Laser Diode',
      'Auto Shut-off Timer after 15 Minutes'
    ],
    sizes: ['One Size (Rechargeable)'],
    inStock: true,
    isFeatured: false,
    feedGuide: 'Charge fully before first use. Includes USB-C cable.',
    ingredients: 'BPA-Free Polycarbonate, LED Diode.'
  }
];

export const MOCK_REVIEWS = [
  {
    id: 1,
    author: 'Priya Sharma',
    pet: 'Golden Retriever (Max, 2 yrs)',
    rating: 5,
    date: '3 days ago',
    verified: true,
    title: 'Remarkable improvement in coat and energy!',
    comment: 'Max has been eating this for 3 months now. His shedding reduced drastically and he licks the bowl completely clean within 30 seconds!'
  },
  {
    id: 2,
    author: 'Rohan Mehra',
    pet: 'Persian Cat (Simba, 1 yr)',
    rating: 5,
    date: '1 week ago',
    verified: true,
    title: 'Top notch quality and packaging',
    comment: 'Pawtopia delivery was super fast! Ordered on Monday and received by Tuesday noon in secure eco-packaging. Simba loves the taste.'
  },
  {
    id: 3,
    author: 'Ananya Verma',
    pet: 'Beagle (Cookie, 3 yrs)',
    rating: 4,
    date: '2 weeks ago',
    verified: true,
    title: 'Good value for money',
    comment: 'Very happy with the genuine ingredients and reasonable price compared to offline pet stores. Will definitely subscribe.'
  }
];

export const FAQS = [
  {
    q: 'How fast is Pawtopia delivery?',
    a: 'Orders placed before 2 PM are dispatched the same day! Metro cities typically receive orders within 24 to 48 hours.'
  },
  {
    q: 'Are your pet food products vet-verified?',
    a: 'Yes, 100%! All food items and wellness formulas in Pawtopia undergo strict quality and nutritional checks in collaboration with licensed veterinarians.'
  },
  {
    q: 'What is your return & exchange policy?',
    a: 'We offer an easy 7-day hassle-free return or replacement on toys, beds, accessories, and unopened food packages if your pet is not satisfied.'
  },
  {
    q: 'Is Cash on Delivery (COD) supported?',
    a: 'Yes, we accept Cash on Delivery, UPI (Google Pay, PhonePe, Paytm), and all major Credit/Debit cards with zero extra fees.'
  }
];
