/* ============================================
   RESTAURANT DATABASE - ALL 50 RESTAURANTS
   ============================================ */

const restaurantsData = [
    {
        rank: 1,
        name: 'Providence',
        city: 'Hollywood',
        chef: 'Michael Cimarusti',
        cuisine: 'Sustainable California Seafood',
        stars: 3,
        awards: ['Michelin 3 Stars', 'James Beard Nomination'],
        description: 'A testament to culinary precision and rigorous sourcing. The physical space underwent a post-pandemic renovation, transitioning to abstract maritime aesthetics. Offers $375 Classic Tasting Menu and $495 Chef\'s Tasting Menu.',
        sustainability: 'Dedicated to sustainable seafood sourcing and ocean preservation.',
        notableDishes: 'Kaluga caviar with potato and morel, red fruits with shiso and lemon verbena',
        priceLevel: '$$$'
    },
    {
        rank: 2,
        name: 'Somni',
        city: 'West Hollywood',
        chef: 'Aitor Zabala',
        cuisine: 'Modern Spanish Avant-Garde',
        stars: 3,
        awards: ['Michelin 3 Stars'],
        description: 'Translating to "dream" in Catalan, this restaurant captured three Michelin Stars merely seven months after opening. A 20-course tasting experience to 14 guests at a luminous counter. Total costs range from $745 to $1,595.',
        sustainability: 'High-concept molecular technique with precision-driven execution.',
        notableDishes: '20-course avant-garde Spanish tasting',
        priceLevel: '$$$+'
    },
    {
        rank: 3,
        name: 'Addison',
        city: 'San Diego',
        chef: 'William Bradley',
        cuisine: 'California Gastronomy',
        stars: 3,
        awards: ['Michelin 3 Stars', 'AAA Five Diamond', 'Forbes Five Star'],
        description: 'The first and only restaurant south of Los Angeles to achieve three Michelin stars. Located within the Fairmont Grand Del Mar. Chef Bradley\'s philosophy leverages classical French techniques to elevate regional produce.',
        sustainability: 'Regional California produce with classical French technique.',
        notableDishes: 'Caramelized cod with cured miso, artichoke au gratin with bottarga',
        priceLevel: '$$$+'
    },
    {
        rank: 4,
        name: 'Atelier Crenn',
        city: 'San Francisco',
        chef: 'Dominique Crenn',
        cuisine: 'Regenerative Pescatarian',
        stars: 3,
        awards: ['Michelin 3 Stars', 'Green Star', 'Sustainable Restaurant Award'],
        description: 'Chef Dominique Crenn\'s flagship seamlessly marries poetry with pescatarian gastronomy and rigorous ecological ethics. Menu driven by ingredients sourced from Crenn\'s own regenerative farm in Sonoma.',
        sustainability: 'Regenerative farm in Sonoma, partnerships with micro-dairies',
        notableDishes: 'Onion tartlet with caviar, smoked carrot with scallop, golden eye snapper with white truffle',
        priceLevel: '$$$'
    },
    {
        rank: 5,
        name: 'Quince',
        city: 'San Francisco',
        chef: 'Michael Tusk',
        cuisine: 'Farm-Integrated Cal-Italian',
        stars: 3,
        awards: ['Michelin 3 Stars', 'Green Star'],
        description: 'Represents the apex of Californian-Italian contemporary cuisine. Strategic partnership with Fresh Run Farm in Bolinas ensures absolute control over supply chain with over 40 varieties of exclusive organic produce.',
        sustainability: 'Closed-loop culinary ecosystem with dedicated regenerative farm',
        notableDishes: 'White and black truffles, seasonal chicories with luxurious imports',
        priceLevel: '$$$'
    },
    {
        rank: 6,
        name: 'SingleThread',
        city: 'Healdsburg',
        chef: 'Kyle Connaughton',
        cuisine: 'Japanese Kaiseki / Farm',
        stars: 3,
        awards: ['Michelin 3 Stars', 'Green Star'],
        description: 'Both a farm-driven restaurant and luxury inn commanding a $425 tasting menu influenced by Japanese Kaiseki principles. Features five guest rooms seamlessly blending accommodation with elite gastronomy.',
        sustainability: 'Farm-to-table with Japanese kaiseki principles',
        notableDishes: 'Micro-seasonal 10-course Japanese-influenced cuisine',
        priceLevel: '$$$+'
    },
    {
        rank: 7,
        name: 'The French Laundry',
        city: 'Yountville',
        chef: 'Thomas Keller',
        cuisine: 'Classical French-American',
        stars: 3,
        awards: ['Michelin 3 Stars', 'Green Star'],
        description: 'Chef Thomas Keller\'s foundational crucible of American fine dining. Base cost of $425 per person includes nine-course Chef\'s Tasting or parallel Tasting of Vegetables. True cost frequently exceeds $1,200 for two guests.',
        sustainability: 'Michelin Green Star recognition for sustainable practices',
        notableDishes: 'Nine-course French-American tasting, vegetables tasting menu',
        priceLevel: '$$$+'
    },
    {
        rank: 8,
        name: 'Benu',
        city: 'San Francisco',
        chef: 'Corey Lee',
        cuisine: 'Asian-Influenced Fine Dining',
        stars: 3,
        awards: ['Michelin 3 Stars', 'Estrella Damm Chefs\' Choice Award'],
        description: 'Under exacting direction of Chef Corey Lee, seamlessly integrates pan-Asian flavor profiles with classical Western technique. Awarded prestigious Chefs\' Choice Award at North America\'s 50 Best.',
        sustainability: 'Pan-Asian techniques with western sophistication',
        notableDishes: 'Asian-influenced multi-course tasting menu',
        priceLevel: '$$$'
    },
    {
        rank: 9,
        name: 'Enclos',
        city: 'Sonoma',
        chef: 'Brian Limoges',
        cuisine: 'Carbon-Negative Californian',
        stars: 2,
        awards: ['Michelin 2 Stars', 'Green Star'],
        description: 'An architectural and ecological marvel concealed in an 1880 Victorian. The $280 tasting menu features hyper-seasonal dishes from Stone Edge Farm. Proof that rigorous sustainability metrics coalesce with elite critical acclaim.',
        sustainability: 'Carbon-negative, energy-independent agriculture',
        notableDishes: 'Maine lobster croustade, venison tartare on deer antler, 22-ingredient "Summer in Sonoma"',
        priceLevel: '$$'
    },
    {
        rank: 10,
        name: 'Californios',
        city: 'San Francisco',
        chef: 'Val Cantu',
        cuisine: 'Elevated Regional Mexican',
        stars: 2,
        awards: ['Michelin 2 Stars', 'North America\'s 50 Best #14'],
        description: 'Chef Val Cantu elevates traditional Mexican cuisine into the highest strata of global fine dining. Utilizes heirloom corn for masterclass in masa, reframing humble street food through luxury lens.',
        sustainability: 'Heritage corn preservation and elevation of diaspora cuisine',
        notableDishes: 'Mezcal-battered black cod, white corn tortillas with smoked quail mole, Hokkaido sea urchin sope',
        priceLevel: '$$'
    },
    {
        rank: 11,
        name: 'Harbor House Inn',
        city: 'Elk',
        chef: 'Matthew Kammerer',
        cuisine: 'Hyper-Local Coastal Foraging',
        stars: 2,
        awards: ['Michelin 2 Stars', 'Green Star'],
        description: 'Perched dramatically on the Mendocino Coast. Chef Matthew Kammerer\'s menu relies heavily on extreme coastal foraging and 100-bed on-site garden, purchasing externally only for citrus and mushrooms.',
        sustainability: 'Localized supply chain with coastal kelp depletion mitigation',
        notableDishes: 'Sake-poached abalone with liver sauce, grilled wakame ice cream, Devil\'s Gulch squab',
        priceLevel: '$$'
    },
    {
        rank: 12,
        name: 'Kiln',
        city: 'San Francisco',
        chef: 'John Wesley',
        cuisine: 'New Nordic Preservation',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'In a stark 1910s mechanic\'s garage, Chef John Wesley earned two Michelin stars through uncompromising New Nordic philosophy. The $305 tasting menu leans heavily on intense preservation techniques.',
        sustainability: 'Preservation and fermentation-focused Nordic approach',
        notableDishes: 'Fermented, cured, dried, and brined preparations',
        priceLevel: '$$'
    },
    {
        rank: 13,
        name: 'Saison',
        city: 'San Francisco',
        chef: 'Richard Lee',
        cuisine: 'Open-Hearth Live Fire',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'Under Executive Chef Richard Lee, continues pioneering open-hearth, wood-fired cuisine. Priced around $298, focuses on extracting absolute flavor purity through fire and ember-roasting techniques.',
        sustainability: 'Live-fire cooking with foraged elements',
        notableDishes: 'Ember-roasted black cod, chilled tea with oysters and gooseberries, buckwheat tea service',
        priceLevel: '$$'
    },
    {
        rank: 14,
        name: 'Sons & Daughters',
        city: 'San Francisco',
        chef: 'Harrison Cheney',
        cuisine: 'Acid-Driven New Nordic',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'Following strategic relocation to Mission district, Chef Harrison Cheney transformed into bastion of New Nordic cuisine. The $315 menu is unabashedly acid-driven, restrained, and precise.',
        sustainability: 'Nordic preservation with California sourcing',
        notableDishes: 'Fermented pear juice with toasted barley, venison with huckleberries, grilled apple ice cream',
        priceLevel: '$$'
    },
    {
        rank: 15,
        name: 'Vespertine',
        city: 'Culver City',
        chef: 'Jordan Kahn',
        cuisine: 'Architectural Sensory Immersion',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'An exercise in total sensory immersion deliberately blurring boundary between gastronomy and architecture. Housed in striking lattice-clad steel structure designed by Eric Owen Moss.',
        sustainability: 'Architectural experience integrated with culinary artistry',
        notableDishes: 'Multi-stage culinary and spatial performance journey',
        priceLevel: '$$'
    },
    {
        rank: 16,
        name: 'Acquerello',
        city: 'San Francisco',
        chef: 'Suzette Gresham',
        cuisine: 'Classic Italian Elegance',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'A stalwart of San Francisco\'s fine dining scene, retains its two stars by delivering uncompromising, classic Italian elegance. Longevity points to continued market desire for polished service.',
        sustainability: 'Traditional Italian refinement',
        notableDishes: 'Classic Italian cuisine with elegant execution',
        priceLevel: '$$'
    },
    {
        rank: 17,
        name: 'Aubergine',
        city: 'Carmel-by-the-Sea',
        chef: 'Justin Cogley',
        cuisine: 'Coastal Californian',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'The culinary crown jewel of the Monterey Peninsula. Capitalizes on rich marine and agricultural terroir of the Central Coast with meticulous technique.',
        sustainability: 'Central Coast terroir-focused cooking',
        notableDishes: 'Coastal Californian cuisine with classical execution',
        priceLevel: '$$'
    },
    {
        rank: 18,
        name: 'Birdsong',
        city: 'San Francisco',
        chef: 'Chris Bleidorn',
        cuisine: 'Pacific Northwest Heritage',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'Focused on heritage cooking of the Pacific Northwest, explores primal elements of food preparation. Prioritizes whole-animal butchery and ancient cooking techniques.',
        sustainability: 'Whole-animal butchery and heritage techniques',
        notableDishes: 'Pacific Northwest preparations with ancient techniques',
        priceLevel: '$$'
    },
    {
        rank: 19,
        name: 'Commis',
        city: 'Oakland',
        chef: 'James Syhabout',
        cuisine: 'Minimalist Californian',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'Chef James Syhabout\'s Oakland standard-bearer for elite gastronomy. Precise, minimalist approach to Californian fare proves East Bay sustains multi-starred fine dining.',
        sustainability: 'Minimalist, precise Californian approach',
        notableDishes: 'Minimalist fine dining with Californian ingredients',
        priceLevel: '$$'
    },
    {
        rank: 20,
        name: 'Hayato',
        city: 'Los Angeles',
        chef: 'Brandon Go',
        cuisine: 'Japanese Washoku & Kaiseki',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'Operating in Downtown LA, a masterclass in Japanese Washoku and Kaiseki. Highly exclusive seating ensures microscopic attention to detail and seasonal progression.',
        sustainability: 'Japanese seasonal and sustainable practices',
        notableDishes: 'Multi-course Japanese kaiseki and washoku tasting',
        priceLevel: '$$'
    },
    {
        rank: 21,
        name: 'Lazy Bear',
        city: 'San Francisco',
        chef: 'David Barzelay',
        cuisine: 'Nostalgic Communal American',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'Originating as underground pop-up, maintains communal dinner-party ethos while executing highly technical, nostalgia-driven American cuisine.',
        sustainability: 'American comfort food with technical execution',
        notableDishes: 'Nostalgic American cuisine at Michelin level',
        priceLevel: '$$'
    },
    {
        rank: 22,
        name: 'Mélisse',
        city: 'Santa Monica',
        chef: 'Josiah Citrin',
        cuisine: 'Modern French-Californian',
        stars: 2,
        awards: ['Michelin 2 Stars'],
        description: 'Josiah Citrin\'s Westside anchor continues with meticulous French-Californian tasting menus. Balances classical indulgence with modern aesthetic sensibilities.',
        sustainability: 'French technique with California ingredients',
        notableDishes: 'Modern French-Californian tasting menus',
        priceLevel: '$$'
    },
    {
        rank: 23,
        name: 'Lilo',
        city: 'Carlsbad',
        chef: 'Eric Bost',
        cuisine: 'Coastal Californian Counter',
        stars: 1,
        awards: ['Michelin 1 Star'],
        description: 'Earning a Michelin star a mere six weeks after opening. Intimate 22-seat chef\'s counter welcomes guests for kinetic 12-course tasting. Names derives from Dictionary of Obscure Sorrows.',
        sustainability: 'Coastal California sourcing',
        notableDishes: 'Japanese kinmedai, wagyu, Maine lobster, California abalone',
        priceLevel: '$'
    },
    {
        rank: 24,
        name: 'Mori Nozomi',
        city: 'Los Angeles',
        chef: 'Nozomi Mori',
        cuisine: 'Unembellished Sushi Omakase',
        stars: 1,
        awards: ['Michelin 1 Star'],
        description: 'A quiet but profound disruptive force in Japanese culinary industry. Impeccably pure, unembellished omakase for $250 run by all-female team in 8-seat counter.',
        sustainability: 'Sustainable sushi practices',
        notableDishes: 'Seasonal sushi omakase with perfect rice and technique',
        priceLevel: '$'
    },
    {
        rank: 25,
        name: 'Restaurant Ki',
        city: 'Los Angeles',
        chef: 'Ki Kim',
        cuisine: 'Contemporary Korean',
        stars: 1,
        awards: ['Michelin 1 Star', 'Young Chef Award'],
        description: 'Chef Ki Kim, recipient of 2025 Michelin Young Chef Award. Phenomenal 10-seat venue in Little Tokyo offering creative contemporary Korean cuisine.',
        sustainability: 'Modern Korean with California ingredients',
        notableDishes: '45-day dry-aged dairy cow with golden beet jus, charred sugar snap peas with steelhead trout roe',
        priceLevel: '$'
    },
    {
        rank: 26,
        name: 'Silvers Omakase',
        city: 'Santa Barbara',
        chef: 'Lennon Silvers Lee',
        cuisine: 'Minimalist Japanese Tasting',
        stars: 1,
        awards: ['Michelin 1 Star'],
        description: 'Located in Santa Barbara\'s Funk Zone. Executive Chef Lennon Silvers Lee, just 27 years old, utilizes rigorous Japanese minimalism for ever-evolving tasting menu.',
        sustainability: 'Japanese minimalist sushi',
        notableDishes: 'Daily-changing omakase menu',
        priceLevel: '$'
    },
    {
        rank: 27,
        name: 'Sun Moon Studio',
        city: 'Oakland',
        chef: 'Sarah Cooper & Alan Hsu',
        cuisine: 'Farmer-Driven Californian',
        stars: 1,
        awards: ['Michelin 1 Star'],
        description: 'Co-chefs Sarah Cooper and Alan Hsu orchestrate hyper-local, farmer-driven California cuisine. Intimate 12-seat restaurant shares building with local artists.',
        sustainability: 'Hyper-local farmer integration',
        notableDishes: 'Seasonal farmer-driven California cuisine',
        priceLevel: '$'
    },
    {
        rank: 28,
        name: 'n/naka',
        city: 'Los Angeles',
        chef: 'Niki Nakayama',
        cuisine: 'Modern California Kaiseki',
        stars: 1,
        awards: ['Michelin 1 Star', 'James Beard Outstanding Chef Nomination'],
        description: 'A global icon of modern kaiseki. Chefs Niki Nakayama and Carole Iida-Nakayama bridge Japanese heritage with California micro-seasons. 26-seat journey.',
        sustainability: 'Seasonal Japanese-Californian cuisine',
        notableDishes: 'Kumamoto oyster saki zuke, handmade ceramic plate presentations',
        priceLevel: '$'
    },
    {
        rank: 29,
        name: 'Holbox',
        city: 'Los Angeles',
        chef: 'Gilberto Cetina',
        cuisine: 'Coastal Mexican Seafood',
        stars: 1,
        awards: ['Michelin 1 Star', 'World\'s 50 Best #2025'],
        description: 'Operates out of stall inside Mercado la Paloma food hall. Proves Michelin-level cooking doesn\'t require white tablecloths. Transitioned from Bib Gourmand to star.',
        sustainability: 'Authentic coastal Mexican techniques',
        notableDishes: 'Taco de pulpo en su pinta, smoked kanpachi taco, ceviche',
        priceLevel: '$'
    },
    {
        rank: 30,
        name: 'Kato',
        city: 'Los Angeles',
        chef: 'Jon Yao',
        cuisine: 'Taiwanese American Tasting',
        stars: 1,
        awards: ['Michelin 1 Star', 'North America\'s 50 Best #49'],
        description: 'Commands $325 tasting menu translating familiar Taiwanese flavors into high-art gastronomy. Supported by 3000-bottle wine list and exceptional $95 non-alcoholic pairing.',
        sustainability: 'Taiwanese-American high cuisine',
        notableDishes: 'Caviar with milk bread, aged duck breast with rice and gai lan, cumin lamb skewers',
        priceLevel: '$$'
    },
    {
        rank: 31,
        name: 'Camphor',
        city: 'Los Angeles',
        chef: 'Max Boonthanakit & Lijo George',
        cuisine: 'South Asian-Inflected French',
        stars: 1,
        awards: ['Michelin 1 Star'],
        description: 'Chefs Max Boonthanakit and Lijo George inject vibrant South Asian vigor into classic French bistro foundations. Cross-cultural dialogue through cuisine.',
        sustainability: 'South Asian and French fusion',
        notableDishes: 'Sea Bream Crudo with horseradish-Tabasco cream, roasted chicken with Kerala spices',
        priceLevel: '$'
    },
    {
        rank: 32,
        name: 'Valle',
        city: 'Oceanside',
        chef: 'Roberto Alcocer',
        cuisine: 'Baja Guadalupe Valley Inspired',
        stars: 1,
        awards: ['Michelin 1 Star'],
        description: 'Chef Roberto Alcocer brings rich viticultural ethos of Baja\'s Guadalupe Valley to San Diego County. Sources heavily from nearby Oceanside Harbor Pelican Market.',
        sustainability: 'Baja Valley-inspired coastal Mexican',
        notableDishes: 'Buñuelo de maiz with caviar, black bean bread with black garlic, trucha tom kha',
        priceLevel: '$'
    },
    {
        rank: 33,
        name: 'Cyrus',
        city: 'Geyserville',
        chef: 'Douglas Keane',
        cuisine: 'Kinetic Dining Journey',
        stars: 1,
        awards: ['Michelin 1 Star'],
        description: 'Reborn in 2022 in Geyserville. Chef Douglas Keane orchestrates multi-sensory "Dining Journey" requiring patrons to move through distinct, beautifully landscaped rooms.',
        sustainability: 'Kinetic spatial dining experience',
        notableDishes: 'Tomago dofu with oyster and creamed corn, gazpacho consommé',
        priceLevel: '$$'
    },
    {
        rank: 34,
        name: 'Burdell',
        city: 'Oakland',
        chef: 'Geoff Davis',
        cuisine: 'Nostalgic Soul Food',
        stars: 0,
        awards: ['SF Chronicle Top 100 #1'],
        description: 'Ranked absolute best restaurant in Bay Area by SF Chronicle. Chef Geoff Davis\'s masterclass in "nostalgic soul food" bypasses steam-table tropes for California fine dining.',
        sustainability: 'Soul food with California elevation',
        notableDishes: 'Halibut crudo with buttermilk and grapefruit, dry-aged duck with cherry drippings',
        priceLevel: '$'
    },
    {
        rank: 35,
        name: 'Copra',
        city: 'San Francisco',
        chef: 'Srijith Gopinathan',
        cuisine: 'Coastal South Indian',
        stars: 0,
        awards: ['SF Chronicle Top 100'],
        description: 'Restaurateur Ayesha Thapar and Chef Srijith Gopinathan\'s extravagant, ballsy love letter to coastal cuisines of Kerala, Tamil Nadu, and Sri Lanka.',
        sustainability: 'South Indian coastal cuisine',
        notableDishes: 'Shell-on Konkan crab curry, rasam poori sphere with passionfruit',
        priceLevel: '$'
    },
    {
        rank: 36,
        name: 'Baroo',
        city: 'Los Angeles',
        chef: 'Kwang Uh',
        cuisine: 'Modern Korean Fermentation',
        stars: 0,
        awards: ['James Beard Nominee'],
        description: 'Kwang Uh and Mina Park\'s profound deep dive into art of fermentation. $125 modern Korean tasting menu operates with "beginner\'s mind."',
        sustainability: 'Korean fermentation and preservation',
        notableDishes: 'Celeriac puree with black sesame, soy-braised black cod',
        priceLevel: '$'
    },
    {
        rank: 37,
        name: 'Anajak Thai',
        city: 'Sherman Oaks',
        chef: 'Justin Pichetrungsi',
        cuisine: 'Thai Heritage & Omakase',
        stars: 0,
        awards: ['LA Times 101 Best'],
        description: 'Second-generation Chef Justin Pichetrungsi transformed father\'s 40-year-old restaurant into national culinary phenomenon. Balances traditional Thai staples with omakase.',
        sustainability: 'Thai traditional and modern fusion',
        notableDishes: 'Thai classics with omakase experience',
        priceLevel: '$'
    },
    {
        rank: 38,
        name: 'Kuya Lord',
        city: 'Los Angeles',
        chef: 'Lord Maynard Llera',
        cuisine: 'Southern Tagalog (Filipino)',
        stars: 0,
        awards: ['James Beard Nominee'],
        description: 'Chef Lord Maynard Llera elevates regional Southern Tagalog cuisine. Transitioned from pandemic pop-up to indispensable Melrose Avenue fixture.',
        sustainability: 'Filipino regional cuisine elevation',
        notableDishes: 'Lucenachon, thick gravy-coated Pancit Chami, blue prawns in crab sauce',
        priceLevel: '$'
    },
    {
        rank: 39,
        name: 'Chez Panisse',
        city: 'Berkeley',
        chef: 'Alice Waters',
        cuisine: 'Foundational Farm-to-Table',
        stars: 0,
        awards: ['Michelin Green Star'],
        description: 'Fifty-five years after Alice Waters birthed American farm-to-table movement. Fixed-price menu entirely dictated by micro-seasons of 80+ partner farms.',
        sustainability: 'Founding farm-to-table movement, 80+ partner farms',
        notableDishes: 'Menu entirely seasonal farm-driven cuisine',
        priceLevel: '$'
    },
    {
        rank: 40,
        name: 'Dunsmoor',
        city: 'Los Angeles',
        chef: 'Brian Dunsmoor',
        cuisine: 'American Heritage Live-Fire',
        stars: 0,
        awards: ['James Beard Best Chef Nominee'],
        description: 'Chef Brian Dunsmoor earned James Beard "Best Chef: California" nomination. Obsessive focus on American heritage cooking and live-fire techniques.',
        sustainability: 'American heritage preservation',
        notableDishes: 'Historical American recipes with live-fire',
        priceLevel: '$'
    },
    {
        rank: 41,
        name: 'RVR',
        city: 'Venice',
        chef: 'N/A',
        cuisine: 'Modern Coastal Californian',
        stars: 0,
        awards: ['James Beard Best New Restaurant Nominee'],
        description: 'Breakout hit recognized as Best New Restaurant contender. Blends quintessential California cool with rigorous culinary execution in relaxed coastal environment.',
        sustainability: 'Modern coastal California sourcing',
        notableDishes: 'Contemporary California cuisine',
        priceLevel: '$'
    },
    {
        rank: 42,
        name: 'Osteria Mozza',
        city: 'Los Angeles',
        chef: 'Nancy Silverton',
        cuisine: 'Foundational Italian',
        stars: 0,
        awards: ['Michelin Green Star'],
        description: 'Nancy Silverton\'s enduring titan of Italian cuisine. Recognized with Green Star for ongoing commitment to sustainable gastronomy.',
        sustainability: 'Sustainable Italian cuisine with mozzarella focus',
        notableDishes: 'Unparalleled mozzarella bar, texture-perfect pastas',
        priceLevel: '$'
    },
    {
        rank: 43,
        name: 'Majordomo',
        city: 'Los Angeles',
        chef: 'David Chang',
        cuisine: 'Korean-American Innovation',
        stars: 0,
        awards: ['LA Times 101 Best'],
        description: 'Operating on industrial fringes of Chinatown. David Chang blends Korean heritage with Southern California\'s agricultural diversity.',
        sustainability: 'Korean-American innovation',
        notableDishes: 'Famed smoked whole plate short rib, family-style meats',
        priceLevel: '$$'
    },
    {
        rank: 44,
        name: 'ALTO',
        city: 'Studio City',
        chef: 'Juana Castellanos Lagemann',
        cuisine: 'Argentine Live-Fire',
        stars: 0,
        awards: ['LA Times 101 Best'],
        description: 'Chefs Juana Castellanos Lagemann and Esteban Klenzi bring intense live-fire traditions of Argentina and Uruguay. Breaking into LA Times list in 2025.',
        sustainability: 'South American wood-fired cooking',
        notableDishes: 'Hearty wood-fired meats, robust South American flavors',
        priceLevel: '$$'
    },
    {
        rank: 45,
        name: 'Antico Nuovo',
        city: 'Los Angeles',
        chef: 'Chad Colby',
        cuisine: 'Rustic Italian Hearth Cooking',
        stars: 0,
        awards: ['James Beard Outstanding Restaurant Nominee'],
        description: 'Nominated for James Beard Outstanding Restaurant award. Rustic, deeply soulful Italian fare focused on open-flame cooking and handmade pastas.',
        sustainability: 'Rustic Italian hearth cooking',
        notableDishes: 'Handmade pastas, open-flame Italian preparations',
        priceLevel: '$'
    },
    {
        rank: 46,
        name: 'Komal',
        city: 'Los Angeles',
        chef: 'Fátima Juárez',
        cuisine: 'Elevated Latin American',
        stars: 0,
        awards: ['Michelin Bib Gourmand'],
        description: 'Helmed by James Beard Emerging Chef nominee Fátima Juárez. Earned Bib Gourmand by delivering exceptionally crafted Latin American cuisine at accessible price.',
        sustainability: 'Accessible Latin American excellence',
        notableDishes: 'Elevated Latin American techniques',
        priceLevel: '$'
    },
    {
        rank: 47,
        name: 'Moo\'s Craft Barbecue',
        city: 'Los Angeles',
        chef: 'Andrew & Michelle Muñoz',
        cuisine: 'Tex-Mex Craft Barbecue',
        stars: 0,
        awards: ['James Beard Best Chef Nominee'],
        description: 'Andrew and Michelle Muñoz completely shattered myth that elite barbecue is confined to Texas. East LA operation fuses Texas techniques with Mexican-American flavor.',
        sustainability: 'Traditional offset smoking with Mexican-American fusion',
        notableDishes: 'Central Texas smoking meets Mexican-American flavors',
        priceLevel: '$'
    },
    {
        rank: 48,
        name: 'Tsubaki',
        city: 'Los Angeles',
        chef: 'Charles Namba',
        cuisine: 'Modern Japanese Izakaya',
        stars: 0,
        awards: ['LA Times 101 Best'],
        description: 'Located in Echo Park, operates as modern Izakaya. Impeccable seasonal Japanese small plates alongside expertly curated sake list.',
        sustainability: 'Modern Japanese with seasonal focus',
        notableDishes: 'Japanese small plates, excellent sake program',
        priceLevel: '$'
    },
    {
        rank: 49,
        name: 'Si! Mon',
        city: 'Venice',
        chef: 'José Olmedo Carles Rojas',
        cuisine: 'Central American Heritage',
        stars: 0,
        awards: ['James Beard Emerging Chef Nominee'],
        description: 'Chef José Olmedo Carles Rojas earned 2026 James Beard Emerging Chef nomination. Introduces LA to refined interpretation of Central American cuisine.',
        sustainability: 'Central American heritage cuisine',
        notableDishes: 'California seafood with Panamanian traditions',
        priceLevel: '$'
    },
    {
        rank: 50,
        name: 'Seline',
        city: 'Santa Monica',
        chef: 'Dave Beran',
        cuisine: 'Progressive Fine Dining',
        stars: 0,
        awards: ['James Beard Best Chef Nominee'],
        description: 'Chef Dave Beran, nominated for Best Chef: California. Pushes boundaries of progressive fine dining with cerebral, highly technical menu conceptualization.',
        sustainability: 'Progressive California fine dining',
        notableDishes: 'Intellectually stimulating progressive cuisine',
        priceLevel: '$$'
    }
];

/* ============================================
   DOM ELEMENTS
   ============================================ */

const restaurantsList = document.getElementById('restaurantsList');
const searchInput = document.getElementById('searchInput');
const cityFilter = document.getElementById('cityFilter');
const starsFilter = document.getElementById('starsFilter');
const cuisineFilter = document.getElementById('cuisineFilter');
const sortBy = document.getElementById('sortBy');
const modal = document.getElementById('restaurantModal');
const modalClose = document.querySelector('.modal-close');
const navHamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');
const faqItems = document.querySelectorAll('.faq-item');
const progressBar = document.querySelector('.progress-bar');

/* ============================================
   INITIALIZE APPLICATION
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    populateRestaurants(restaurantsData);
    populateFilters();
    initializeEventListeners();
    initializeFAQ();
    animateCounters();
    setupScrollAnimations();
});

/* ============================================
   RESTAURANT CARD RENDERING
   ============================================ */

function populateRestaurants(restaurants) {
    restaurantsList.innerHTML = '';
    
    if (restaurants.length === 0) {
        restaurantsList.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #D4AF37;">No restaurants found matching your search.</div>';
        return;
    }
    
    restaurants.forEach((restaurant, index) => {
        const card = createRestaurantCard(restaurant);
        restaurantsList.appendChild(card);
        
        // Stagger animation
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 50);
    });
}

function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    
    const starsHTML = '★'.repeat(restaurant.stars) + '☆'.repeat(3 - restaurant.stars);
    const awardsHTML = restaurant.awards.map(award => `<span class="award-badge">${award}</span>`).join('');
    
    card.innerHTML = `
        <div class="restaurant-rank">#${restaurant.rank}</div>
        <div class="restaurant-header">
            <h3 class="restaurant-name">${restaurant.name}</h3>
            <p class="restaurant-city">${restaurant.city}</p>
            <p class="restaurant-chef"><strong>Chef:</strong> ${restaurant.chef}</p>
            <p class="restaurant-cuisine"><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
            <div class="restaurant-stars">${starsHTML}</div>
            <div class="restaurant-awards">${awardsHTML}</div>
        </div>
        <div class="restaurant-buttons">
            <button class="btn btn-primary" onclick="openModal('${restaurant.name}')">View Details</button>
            <button class="btn btn-secondary">Website</button>
        </div>
    `;
    
    return card;
}

/* ============================================
   MODAL FUNCTIONALITY
   ============================================ */

function openModal(restaurantName) {
    const restaurant = restaurantsData.find(r => r.name === restaurantName);
    if (!restaurant) return;
    
    const starsHTML = '★'.repeat(restaurant.stars) + '☆'.repeat(3 - restaurant.stars);
    const awardsHTML = restaurant.awards.map(award => `<li>${award}</li>`).join('');
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2>${restaurant.name}</h2>
        <p style="color: #D4AF37; margin-bottom: 1rem;"><strong>${restaurant.city}</strong> • ${restaurant.cuisine}</p>
        
        <h3>★ ${starsHTML} (${restaurant.stars} Stars)</h3>
        
        <h3>About</h3>
        <p>${restaurant.description}</p>
        
        <h3>Chef</h3>
        <p>${restaurant.chef}</p>
        
        <h3>Awards & Recognition</h3>
        <ul style="list-style: none;">
            ${awardsHTML}
        </ul>
        
        <h3>Notable Dishes</h3>
        <p>${restaurant.notableDishes}</p>
        
        <h3>Sustainability Practices</h3>
        <p>${restaurant.sustainability}</p>
        
        <h3>Price Level</h3>
        <p>${restaurant.priceLevel}</p>
    `;
    
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

/* ============================================
   FILTER FUNCTIONALITY
   ============================================ */

function populateFilters() {
    // Get unique cities
    const cities = [...new Set(restaurantsData.map(r => r.city))].sort();
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
    
    // Get unique cuisines
    const cuisines = [...new Set(restaurantsData.map(r => r.cuisine))].sort();
    cuisines.forEach(cuisine => {
        const option = document.createElement('option');
        option.value = cuisine;
        option.textContent = cuisine;
        cuisineFilter.appendChild(option);
    });
}

function filterRestaurants() {
    let filtered = [...restaurantsData];
    
    // Search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(r => 
            r.name.toLowerCase().includes(searchTerm) ||
            r.city.toLowerCase().includes(searchTerm) ||
            r.chef.toLowerCase().includes(searchTerm)
        );
    }
    
    // City filter
    const selectedCity = cityFilter.value;
    if (selectedCity) {
        filtered = filtered.filter(r => r.city === selectedCity);
    }
    
    // Stars filter
    const selectedStars = starsFilter.value;
    if (selectedStars !== '') {
        filtered = filtered.filter(r => r.stars === parseInt(selectedStars));
    }
    
    // Cuisine filter
    const selectedCuisine = cuisineFilter.value;
    if (selectedCuisine) {
        filtered = filtered.filter(r => r.cuisine === selectedCuisine);
    }
    
    // Sorting
    const sortValue = sortBy.value;
    switch(sortValue) {
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'stars':
            filtered.sort((a, b) => b.stars - a.stars);
            break;
        case 'city':
            filtered.sort((a, b) => a.city.localeCompare(b.city));
            break;
        case 'rank':
        default:
            filtered.sort((a, b) => a.rank - b.rank);
    }
    
    populateRestaurants(filtered);
}

/* ============================================
   EVENT LISTENERS
   ============================================ */

function initializeEventListeners() {
    searchInput.addEventListener('input', filterRestaurants);
    cityFilter.addEventListener('change', filterRestaurants);
    starsFilter.addEventListener('change', filterRestaurants);
    cuisineFilter.addEventListener('change', filterRestaurants);
    sortBy.addEventListener('change', filterRestaurants);
    
    // Mobile menu
    navHamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Navigation links close mobile menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
    
    // Smooth scroll offset for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */

function animateCounters() {
    const counters = document.querySelectorAll('.counter-value');
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

/* ============================================
   PROGRESS BAR
   ============================================ */

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

/* ============================================
   FAQ ACCORDION
   ============================================ */

function initializeFAQ() {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.summary-card, .trend-card, .three-star-card, .award-card'
    );
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Scroll to top button functionality
document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
        // Show scroll to top button if needed
    }
});

// SEO: Structured data helpers
function generateSchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Top 50 Restaurants in California",
        "description": "The definitive guide to California's finest dining destinations",
        "url": "https://yourdomain.com",
        "areaServed": "California, USA",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "50"
        }
    };
    return schema;
}

// Performance optimization
if ('IntersectionObserver' in window) {
    // Use intersection observer for lazy loading if needed
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
}

console.log('California Dining Guide 2026 - Application Initialized');
