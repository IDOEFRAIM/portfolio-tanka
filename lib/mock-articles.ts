// lib/mock-articles.ts

export type ArticleSection = {
  id: string;
  title: string;
};

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  readTime: string;
  category: 'web' | 'mobile' | 'ai' | 'data';
  toc: ArticleSection[];
  content: string;
  coverImage?: string;
};

export const mockArticles: Article[] = [
  {
    slug: 'optimisation-nextjs-ssg',
    title: 'Vitesse Lumière : L\'Architecture de l\'Instantané',
    subtitle: 'Pourquoi le Static Site Generation (SSG) n\'est pas juste une technique, mais une philosophie de performance.',
    summary: 'Plongée dans les mécanismes du rendu statique, du Edge Computing et de la perception utilisateur de la vitesse.',
    date: '2025-11-01',
    readTime: '7 min',
    category: 'web',
    toc: [
      { id: 'illusion', title: '1. L\'Illusion de la Vitesse' },
      { id: 'chef', title: '2. Le Chef vs Le Buffet' },
      { id: 'edge', title: '3. La Géographie du Code' },
      { id: 'implementation', title: '4. Implémentation' },
    ],
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    content: `
      <header class="mb-10">
        <p class="lead text-xl text-gray-600 dark:text-gray-300 font-light italic">
          "Sur le web, 100 millisecondes de latence peuvent tuer une intention. La vitesse n'est pas une fonctionnalité, c'est le fondement de la confiance."
        </p>
      </header>

      <section id="illusion" class="mb-12">
        <h2>1. L'Illusion de la Vitesse</h2>
        <p>Imaginez que vous entrez dans une pièce sombre et que vous appuyez sur l'interrupteur. Vous attendez-vous à ce que la lumière s'allume instantanément ? Oui. Si elle met une demi-seconde à réagir, vous pensez que l'ampoule est cassée.</p>
        <p>Le web moderne doit répondre avec la même immédiateté. Le cerveau humain perçoit tout délai inférieur à <strong>100ms</strong> comme instantané. Au-delà, la conversation cognitive se brise.</p>
      </section>

      <section id="chef" class="mb-12">
        <h2>2. Le Chef vs Le Buffet (SSR vs SSG)</h2>
        <p>Pour comprendre le SSG, oublions le code un instant et allons au restaurant.</p>
        
        <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h3 class="text-blue-600 dark:text-blue-400 font-bold mb-2">SSR (Server Side Rendering)</h3>
                <p class="text-sm">C'est un <strong>restaurant à la carte</strong>. Vous commandez. Le chef reçoit le bon, coupe les légumes, cuit la viande, dresse l'assiette. C'est frais, personnalisé, mais vous devez attendre 20 minutes.</p>
            </div>
            <div class="p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                <h3 class="text-indigo-600 dark:text-indigo-400 font-bold mb-2">SSG (Static Site Generation)</h3>
                <p class="text-sm">C'est un <strong>buffet de luxe</strong>. Le chef a tout préparé à 4h du matin. Quand vous arrivez, les plats sont là, fumants, parfaits. Vous vous servez. Temps d'attente : zéro.</p>
            </div>
        </div>

        <p>Next.js nous permet de construire ce buffet numérique. Au moment du "Build", nous précalculons toutes les pages possibles. Le serveur fait le travail difficile une seule fois, pas à chaque visite.</p>
      </section>

      <section id="edge" class="mb-12">
        <h2>3. La Géographie du Code (The Edge)</h2>
        <div class="my-8 relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" alt="Global Network Connection" class="w-full object-cover h-[350px]" />
          <div class="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-md p-3">
            <p class="text-white text-xs font-mono">Fig 1. Distribution CDN : Rapprocher la donnée de l'utilisateur.</p>
          </div>
        </div>
        <p>Une fois votre page générée statiquement (HTML + JSON), elle ne reste pas sur un serveur unique à Paris. Elle est clonée et envoyée aux "limites" (Edge) du réseau : New York, Tokyo, Sao Paulo, Le Cap.</p>
        <p>Quand un utilisateur à Ouagadougou demande votre page, il ne la télécharge pas depuis l'Europe, mais depuis un serveur CDN local. C'est la puissance de l'infrastructure Vercel.</p>
      </section>

      <section id="implementation" class="mb-12">
        <h2>4. L'Art de l'Implémentation</h2>
        <p>Voici le pattern exact que j'utilise pour générer des milliers de pages de blog en quelques secondes lors du build :</p>
        
        <pre class="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 shadow-inner"><code>// app/blog/[slug]/page.tsx

// 1. Dites à Next.js quelles pages existent
export async function generateStaticParams() {
  const posts = await getPosts(); 
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. La page est générée une seule fois
export default async function Page({ params }) {
  const { slug } = params;
  const post = await getPost(slug); // Appel BDD uniquement au build !
  
  return &lt;Article content={post} /&gt;;
}</code></pre>
      </section>
    `,
  },
  {
    slug: 'transformer-vs-cnn-en-ia',
    title: 'Le Duel des Titans : CNN vs Transformers',
    subtitle: 'La fin de l\'ère de la "Vision Tunnel" et l\'avènement de l\'Attention Globale.',
    summary: 'Comment l\'IA est passée de l\'analyse pixel par pixel à la compréhension contextuelle globale.',
    date: '2025-11-10',
    readTime: '12 min',
    category: 'ai',
    toc: [
      { id: 'history', title: '1. L\'Hégémonie des CNN' },
      { id: 'revolution', title: '2. La Révolution de l\'Attention' },
      { id: 'comparison', title: '3. La Loupe vs La Carte' },
    ],
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    content: `
      <section id="history" class="mb-12">
        <h2>1. L'Hégémonie des CNN (2012-2020)</h2>
        <p>Pendant une décennie, si vous vouliez qu'un ordinateur "voie", vous utilisiez un CNN (Convolutional Neural Network). Son fonctionnement est inspiré du cortex visuel biologique.</p>
        
        <div class="my-8 flex gap-4 items-center">
            <div class="flex-1 text-right font-mono text-xs text-gray-400">INPUT IMAGE</div>
            <div class="w-16 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <div class="w-16 h-16 border-2 border-dashed border-blue-500 rounded flex items-center justify-center text-blue-500 font-bold">KERNEL</div>
            <div class="w-16 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <div class="flex-1 font-mono text-xs text-gray-400">FEATURE MAP</div>
        </div>

        <p>Le CNN scanne l'image avec une petite fenêtre (le noyau). Il détecte des bords, puis des textures, puis des formes. Mais il a un défaut majeur : <strong>la vision tunnel</strong>. Il a du mal à relier un pixel en haut à gauche avec un pixel en bas à droite si l'image est grande.</p>
      </section>

      <section id="revolution" class="mb-12">
        <h2>2. La Révolution "Attention is All You Need"</h2>
        <div class="my-8 relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000" alt="Neural Network Glowing" class="w-full object-cover h-[400px]" />
          <div class="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-transparent mix-blend-overlay"></div>
        </div>
        
        <p>Les Transformers ont tout changé. Au lieu de scanner localement, le mécanisme d'<strong>Auto-Attention (Self-Attention)</strong> regarde toute l'image (ou toute la phrase) d'un seul coup.</p>
        <blockquote class="border-l-4 border-purple-500 pl-6 italic text-xl my-8 text-gray-700 dark:text-gray-300">
          "Un Transformer ne lit pas une phrase mot après mot. Il la contemple dans son ensemble et comprend que 'Banque' est lié à 'Argent', même s'ils sont séparés par 50 mots."
        </blockquote>
      </section>

      <section id="comparison" class="mb-12">
        <h2>3. L'Analogie Ultime : La Loupe vs La Carte</h2>
        
        <div class="grid md:grid-cols-2 gap-8 my-10">
            <div class="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <h3 class="text-2xl font-black mb-4">Le CNN 🔍</h3>
                <p class="mb-4">C'est un <strong>Détective avec une loupe</strong>.</p>
                <ul class="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Très fort pour les détails locaux.</li>
                    <li>• Ignore ce qui se passe hors de sa loupe.</li>
                    <li>• Efficace, rapide, léger.</li>
                </ul>
            </div>
            <div class="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg border-t-4 border-purple-500">
                <h3 class="text-2xl font-black mb-4">Le Transformer 🗺️</h3>
                <p class="mb-4">C'est un <strong>Stratège avec une carte d'état-major</strong>.</p>
                <ul class="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Voit toutes les connexions distantes.</li>
                    <li>• Comprend le contexte global.</li>
                    <li>• Gourmand en ressources (quadratique).</li>
                </ul>
            </div>
        </div>
      </section>
    `,
  },
  {
    slug: 'ouaga-smart-city-data',
    title: 'Chaos to Order : L\'Expérience Ouaga Smart City',
    subtitle: 'Comment dompter le trafic d\'une métropole africaine avec des capteurs low-cost et du Big Data.',
    summary: 'Architecture d\'un pipeline IoT résilient face à la chaleur, la poussière et la connectivité instable.',
    date: '2025-11-15',
    readTime: '6 min',
    category: 'data',
    toc: [
      { id: 'entropy', title: '1. L\'Entropie Urbaine' },
      { id: 'nervous', title: '2. Le Système Nerveux (IoT)' },
      { id: 'pulse', title: '3. Visualiser le Pouls' },
    ],
    coverImage: 
    'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&q=80&w=1000',
    
    content: `
      <section id="entropy" class="mb-12">
        <h2>1. L'Entropie Urbaine</h2>
        <p>Ouagadougou. 2,5 millions d'habitants. Une température au sol de 45°C. Un ballet incessant de motos, de taxis et de piétons.</p>
        <p>Le problème n'est pas le nombre de véhicules, c'est l'imprévisibilité. Sans données, la ville est une boîte noire. On ne peut pas optimiser ce qu'on ne mesure pas.</p>
      </section>

      <section id="nervous" class="mb-12">
        <h2>2. Construire un Système Nerveux Résilient</h2>
        <p>Nous ne pouvions pas utiliser des caméras 4K couteuses. Il fallait du <strong>Low-Tech High-Impact</strong>.</p>
        
        <div class="my-8 p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-xl">
            <h3 class="text-emerald-600 dark:text-emerald-400 font-mono text-sm uppercase tracking-widest mb-4">LA STACK DE SURVIE</h3>
            <ul class="space-y-4">
                <li class="flex items-start">
                    <span class="font-bold mr-3 text-emerald-500">HARDWARE</span>
                    <span>Raspberry Pi + Caméras thermiques (insensibles à la poussière).</span>
                </li>
                <li class="flex items-start">
                    <span class="font-bold mr-3 text-emerald-500">PROTOCOL</span>
                    <span><strong>MQTT</strong> : Le protocole ultra-léger. Si le réseau coupe, le message attend. Zéro perte de données.</span>
                </li>
                <li class="flex items-start">
                    <span class="font-bold mr-3 text-emerald-500">EDGE AI</span>
                    <span>Traitement local avec YOLO-Nano. On n'envoie pas la vidéo (trop lourd), on envoie juste : <code>{ "car": 12, "moto": 45 }</code>.</span>
                </li>
            </ul>
        </div>
      </section>

      <section id="pulse" class="mb-12">
        <h2>3. Visualiser le Pouls de la Ville</h2>
        <div class="my-8 relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Data Dashboard Visualization" class="w-full object-cover h-[400px]" />
          <div class="absolute inset-0 bg-emerald-900/20 mix-blend-color"></div>
        </div>
        <p>Toutes ces micro-données convergent vers une base <strong>InfluxDB</strong> (Time Series). Grafana transforme ensuite ces millions de points en courbes de vie.</p>
        <p>Pour la première fois, la municipalité ne voit plus des embouteillages, elle voit des <strong>flux</strong>. Elle peut prédire qu'à 17h30, le carrefour des Nations Unies va saturer, et ajuster les feux en conséquence 5 minutes avant.</p>
      </section>
    `,
  },
  {
    slug: 'two-ais-two-personalities',
    title: 'Two AIs, Two Personalities',
    subtitle: 'Observer vs Creator — Like two geniuses in history.',
    summary: "A pedagogical comparison between Discriminative AI (the rigorous observer) and Generative AI (the creative artist), illustrated with agricultural examples.",
    date: '2025-11-28',
    readTime: '6 min',
    category: 'ai',
    toc: [
      { id: 'intro', title: 'The Two Hats' },
      { id: 'discriminative', title: '1. Discriminative AI (Gauss)' },
      { id: 'generative', title: '2. Generative AI (Picasso)' },
      { id: 'tldr', title: 'TL;DR Summary' },
    ],
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    content: `
      <header class="mb-10">
        <p class="lead text-xl text-gray-600 dark:text-gray-300">
          When you show something to an AI or ask it a question, it can react in two main ways. It’s almost like it’s wearing two different hats:
        </p>
        <div class="flex gap-4 mt-6">
          <div class="flex-1 p-4 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 text-center">
            <span class="text-4xl mb-2 block">🎩</span>
            <span class="font-bold text-sm uppercase tracking-wider">The Observer</span>
          </div>
          <div class="flex-1 p-4 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 text-center">
            <span class="text-4xl mb-2 block">🎨</span>
            <span class="font-bold text-sm uppercase tracking-wider">The Creator</span>
          </div>
        </div>
        <p class="mt-6">
          In technical terms, we talk about <strong>Discriminative AI</strong> (the one that recognizes) and <strong>Generative AI</strong> (the one that creates).
        </p>
      </header>

      <section id="discriminative" class="mb-16">
        <h2 class="flex items-center gap-3">
          <span class="text-4xl">🧠🌿</span>
          <span>1) Discriminative AI: The Rigorous Mathematician</span>
        </h2>
        
        <div class="my-8 relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000" alt="Mathematics Geometry" class="w-full object-cover h-[300px]" />
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <p class="text-white text-sm font-mono">Analog: Gauss in a field, obsessed with boundaries.</p>
          </div>
        </div>

        <p>Imagine someone like <strong>Gauss</strong>: super logical, precise, obsessed with boundaries. That’s exactly what a discriminative AI does: it tries to draw the correct separation between things.</p>

        <div class="callout border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-r-lg my-6">
          <p class="font-mono text-sm text-blue-600 dark:text-blue-400 mb-2 font-bold">TECHNICAL DEFINITION</p>
          <p class="text-lg italic">It focuses on <code>p(y|x)</code> 👉 “What is the correct label or class <strong>y</strong> for what I see <strong>x</strong>?”</p>
        </div>

        <p>In other words, it doesn’t create anything. It classifies, identifies, and divides space.</p>

        <h3 class="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Agricultural Examples:</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>A leaf → <strong>healthy</strong> or <strong>sick</strong></span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>A fruit → <strong>ripe</strong> or <strong>not ripe</strong></span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>A field → <strong>corn</strong>, <strong>soy</strong>, or <strong>rice</strong></span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-green-500 mt-1">✓</span>
            <span>A plant → <strong>millet</strong> or <strong>not millet</strong></span>
          </li>
        </ul>
        
        <p class="mt-6 text-sm text-gray-500 border-t border-gray-200 dark:border-white/10 pt-4">
          👉 Question it answers: “What am I looking at?” (The famous decision boundary).
        </p>
      </section>

      <section id="generative" class="mb-16">
        <h2 class="flex items-center gap-3">
          <span class="text-4xl">🧠✨</span>
          <span>2) Generative AI: The Digital Picasso</span>
        </h2>

        <div class="my-8 relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
          <img src="data:image/jpeg;base64,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" alt="Artistic Abstract Painting" class="w-full object-cover h-[300px]" />
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <p class="text-white text-sm font-mono">Analog: The artist of computation.</p>
          </div>
        </div>

        <p>Here, we’re with someone like <strong>Picasso</strong> or <strong>Leonardo da Vinci</strong>: not just observers, but creators. Generative AI works in the same way.</p>

        <div class="callout border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-r-lg my-6">
          <p class="font-mono text-sm text-yellow-600 dark:text-yellow-400 mb-2 font-bold">TECHNICAL DEFINITION</p>
          <p class="text-lg italic">It plays with <code>p(x|y)</code>, sometimes even <code>p(x)</code>, and asks: 👉 “What could <strong>x</strong> look like if I want it to be <strong>y</strong>?”</p>
        </div>

        <p>In simpler words: it doesn’t just recognize or classify—it <strong>creates new things</strong>.</p>

        <h3 class="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Agricultural Examples:</h3>
        <ul class="space-y-2">
          <li class="flex items-start gap-3">
            <span class="text-yellow-500 mt-1">✦</span>
            <span>A new leaf design → <strong>healthy-looking</strong> or <strong>patterned</strong></span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-yellow-500 mt-1">✦</span>
            <span>A fruit → <strong>what could a perfectly ripe mango look like?</strong></span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-yellow-500 mt-1">✦</span>
            <span>A field → <strong>simulating corn growing under different weather conditions</strong></span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-yellow-500 mt-1">✦</span>
            <span>A plant → <strong>generating a realistic millet image from scratch</strong></span>
          </li>
        </ul>

        <p class="mt-6 text-sm text-gray-500 border-t border-gray-200 dark:border-white/10 pt-4">
          👉 Question it answers: “What could this be or look like?” (The canvas of possibilities).
        </p>
      </section>

      <section id="tldr" class="mb-10 p-8 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10">
        <h2 class="text-center text-2xl font-black uppercase tracking-widest mb-8">🎯 TL;DR Summary</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-bold text-blue-500 mb-2">Discriminative AI</h3>
            <p class="text-2xl font-light mb-2">"What is this?"</p>
            <ul class="text-sm text-gray-500 space-y-1 font-mono">
              <li>- Classification</li>
              <li>- Boundaries</li>
              <li>- Recognition</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-yellow-500 mb-2">Generative AI</h3>
            <p class="text-2xl font-light mb-2">"What could this be?"</p>
            <ul class="text-sm text-gray-500 space-y-1 font-mono">
              <li>- Creation</li>
              <li>- Imagination</li>
              <li>- Simulation</li>
            </ul>
          </div>
        </div>
        <p class="text-center mt-8 italic text-gray-600 dark:text-gray-400">
          Two minds, two hats. One observes, the other imagines. Together, they make AI not just smart, but also creative.
        </p>
      </section>
    `,
  }
];

export function getAllArticles() {
  console.log("getAllArticles:", mockArticles.length, "articles found");

  return mockArticles
    .map((a) => ({
      ...a,
      slug: a.slug.trim().toLowerCase(),
    }))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA; // plus récent d'abord
    });
}

export function getArticleBySlug(slug: string) {
  if (!slug || typeof slug !== "string") {
    console.warn("getArticleBySlug: invalid slug:", slug);
    return undefined;
  }

  const normalized = slug.trim().toLowerCase();

  const article = mockArticles.find(
    (a) => a.slug.trim().toLowerCase() === normalized
  );

  if (!article) {
    console.warn("getArticleBySlug: no article found for slug:", normalized);
  }

  return article;
}