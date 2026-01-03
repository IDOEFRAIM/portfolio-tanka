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
  // Optional localized fields for mocks
  title_fr?: string;
  title_en?: string;
  subtitle_fr?: string;
  subtitle_en?: string;
  summary_fr?: string;
  summary_en?: string;
  content_fr?: string;
  content_en?: string;
  toc_fr?: ArticleSection[];
  toc_en?: ArticleSection[];
};

export const mockArticles: Article[] = [
  {
    slug: 'ai-autocorrect-steroids',
    title: 'AI is Not an Encyclopedia: It\'s Autocorrect on Steroids',
    subtitle: 'Understanding the probabilistic nature of Large Language Models and why they "guess" instead of "know".',
    summary: 'Deconstructing the myth of AI knowledge. Learn why LLMs don\'t "know" facts but "guess" sequences, and why this distinction matters for developers building robust architectures like RAG.',
    date: '2025-12-28',
    readTime: '8 min',
    category: 'ai',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    
    // English Mock Data
    title_en: "AI is Not an Encyclopedia: It's Autocorrect on Steroids",
    subtitle_en: 'Understanding the probabilistic nature of Large Language Models and why they "guess" instead of "know".',
    summary_en: 'Deconstructing the myth of AI knowledge. Learn why LLMs don\'t "know" facts but "guess" sequences, and why this distinction matters for developers building robust architectures like RAG.',
    content_en: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-primary pl-6 py-2">
          "AI doesn't 'know' anything. It 'guesses' everything. And that distinction changes everything about how we build software."
        </p>
      </header>

      <section id="intro" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">The Autocorrect Analogy</h2>
        <p class="mb-4 text-lg leading-relaxed">Stop treating AI like an encyclopedia. It’s not "Google 2.0." It’s basically your phone’s autocorrect, but on steroids. 💊</p>
        <p class="mb-4 text-lg leading-relaxed">Ever since I was 15, I’ve been obsessed with what happens "under the hood." I spent countless nights deconstructing code just to understand how a few lines of text could turn into complex actions. When I looked under the hood of GPT, I didn't find a brain. I found a calculator.</p>
      </section>

      <section id="tokens" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Tokens & Probabilities</h2>
        <p class="mb-6 text-lg leading-relaxed">If there’s one thing I’ve learned by diving deep into LLMs (Large Language Models), it’s this: <strong>AI doesn't "know" anything. It "guesses" everything.</strong></p>
        
        <div class="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 mb-8">
            <h3 class="font-mono text-sm uppercase tracking-widest text-primary mb-4">The Prediction Game</h3>
            <p class="mb-4">Think about your phone when you type a message. It suggests the next word:</p>
            <ul class="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>You type: <span class="font-mono bg-gray-200 dark:bg-black px-2 py-1 rounded">"I am..."</span></li>
                <li>It suggests: <span class="font-bold text-green-500">"going" (80%)</span>, "happy" (15%), "tired" (5%).</li>
            </ul>
        </div>

        <p class="mb-4 text-lg leading-relaxed">ChatGPT does the exact same thing, but with insane computing power and a "memory" of almost the entire internet. It doesn't understand the concept of "truth". It understands the concept of "statistical likelihood".</p>
      </section>

      <section id="hallucinations" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Hallucinations: A Feature, Not a Bug</h2>
        <p class="mb-4 text-lg leading-relaxed">Why is this vital for your projects? Because it explains "hallucinations."</p>
        <p class="mb-4 text-lg leading-relaxed">If the AI doesn't find the exact answer in its training data, it won't just stop. It will build the most plausible mathematical sequence, even if it’s factually wrong. It isn't lying; it’s just predicting.</p>
        <p class="mb-4 text-lg leading-relaxed">In creative writing, this is a feature (we call it "creativity"). In banking software, it's a critical bug (we call it "lying").</p>
      </section>

      <section id="rag" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">The Solution: RAG (Retrieval Augmented Generation)</h2>
        <p class="mb-4 text-lg leading-relaxed">So how do we fix this? We don't ask the model to "remember" facts. We give it the facts.</p>
        <p class="mb-4 text-lg leading-relaxed">This is where <strong>RAG</strong> comes in. Instead of asking: <br><em>"What is Tanka's latest project?"</em> (which it doesn't know), <br>We say: <br><em>"Here is a PDF of Tanka's portfolio. Based ONLY on this file, what is his latest project?"</em></p>
        <p class="mb-4 text-lg leading-relaxed">We turn the "Creative Writer" into a "Reading Assistant". That is the key to building reliable AI systems.</p>
      </section>

      <section id="conclusion" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Why It Matters</h2>
        <p class="mb-4 text-lg leading-relaxed">The bottom line: Understanding this nuance is the difference between just using a tool and truly mastering it. It’s what allows us to build robust architectures to make these models reliable.</p>
        <p class="mb-4 text-lg leading-relaxed">Tech isn't magic; it’s logic. And that’s exactly why I love it.</p>
        <div class="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <p class="font-bold text-primary">👇 What about you?</p>
            <p class="mt-2">Have you ever caught an AI inventing very "convincing" facts? Tell me about your best "hallucination" in the comments!</p>
        </div>
      </section>
    `,
    toc_en: [
      { id: 'intro', title: 'The Autocorrect Analogy' },
      { id: 'tokens', title: 'Tokens & Probabilities' },
      { id: 'hallucinations', title: 'Hallucinations Explained' },
      { id: 'rag', title: 'The Solution: RAG' },
      { id: 'conclusion', title: 'Why It Matters' },
    ],

    // French Mock Data
    title_fr: "L'IA n'est pas une encyclopédie : C'est un correcteur sous stéroïdes",
    subtitle_fr: 'Comprendre la nature probabiliste des LLM et pourquoi ils "devinent" au lieu de "savoir".',
    summary_fr: 'Déconstruction du mythe de la connaissance de l\'IA. Découvrez pourquoi les LLM ne "savent" pas les faits mais "devinent" des séquences.',
    content_fr: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-primary pl-6 py-2">
          "L'IA ne 'sait' rien. Elle 'devine' tout. Et cette distinction change tout à la façon dont nous concevons les logiciels."
        </p>
      </header>

      <section id="intro" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">L'Analogie du Correcteur</h2>
        <p class="mb-4 text-lg leading-relaxed">Arrêtez de traiter l'IA comme une encyclopédie. Ce n'est pas "Google 2.0". C'est essentiellement le correcteur automatique de votre téléphone, mais sous stéroïdes. 💊</p>
        <p class="mb-4 text-lg leading-relaxed">Depuis mes 15 ans, je suis obsédé par ce qui se passe "sous le capot". J'ai passé des nuits entières à déconstruire du code juste pour comprendre comment quelques lignes de texte pouvaient se transformer en actions complexes. Quand j'ai regardé sous le capot de GPT, je n'ai pas trouvé un cerveau. J'ai trouvé une calculatrice.</p>
      </section>

      <section id="tokens" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Tokens & Probabilités</h2>
        <p class="mb-6 text-lg leading-relaxed">S'il y a une chose que j'ai apprise en plongeant dans les LLM (Large Language Models), c'est ceci : <strong>L'IA ne "sait" rien. Elle "devine" tout.</strong></p>
        
        <div class="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 mb-8">
            <h3 class="font-mono text-sm uppercase tracking-widest text-primary mb-4">Le Jeu de la Prédiction</h3>
            <p class="mb-4">Pensez à votre téléphone quand vous tapez un message. Il suggère le mot suivant :</p>
            <ul class="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Vous tapez : <span class="font-mono bg-gray-200 dark:bg-black px-2 py-1 rounded">"Je suis..."</span></li>
                <li>Il suggère : <span class="font-bold text-green-500">"parti" (80%)</span>, "heureux" (15%), "fatigué" (5%).</li>
            </ul>
        </div>

        <p class="mb-4 text-lg leading-relaxed">ChatGPT fait exactement la même chose, mais avec une puissance de calcul démentielle et une "mémoire" de presque tout internet. Il ne comprend pas le concept de "vérité". Il comprend le concept de "probabilité statistique".</p>
      </section>

      <section id="hallucinations" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Les Hallucinations : Une Fonctionnalité, pas un Bug</h2>
        <p class="mb-4 text-lg leading-relaxed">Pourquoi est-ce vital pour vos projets ? Parce que cela explique les "hallucinations".</p>
        <p class="mb-4 text-lg leading-relaxed">Si l'IA ne trouve pas la réponse exacte dans ses données d'entraînement, elle ne va pas s'arrêter. Elle va construire la suite mathématique la plus plausible, même si c'est factuellement faux. Elle ne ment pas ; elle prédit juste.</p>
        <p class="mb-4 text-lg leading-relaxed">En écriture créative, c'est une fonctionnalité (on appelle ça "l'imagination"). Dans un logiciel bancaire, c'est un bug critique (on appelle ça "mentir").</p>
      </section>

      <section id="rag" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">La Solution : RAG (Retrieval Augmented Generation)</h2>
        <p class="mb-4 text-lg leading-relaxed">Alors comment on répare ça ? On ne demande pas au modèle de se "souvenir" des faits. On lui donne les faits.</p>
        <p class="mb-4 text-lg leading-relaxed">C'est là qu'intervient le <strong>RAG</strong>. Au lieu de demander : <br><em>"Quel est le dernier projet de Tanka ?"</em> (ce qu'il ne sait pas), <br>On dit : <br><em>"Voici un PDF du portfolio de Tanka. En te basant UNIQUEMENT sur ce fichier, quel est son dernier projet ?"</em></p>
        <p class="mb-4 text-lg leading-relaxed">On transforme l'"Écrivain Créatif" en "Assistant de Lecture". C'est la clé pour construire des systèmes IA fiables.</p>
      </section>

      <section id="conclusion" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Pourquoi c'est Important</h2>
        <p class="mb-4 text-lg leading-relaxed">Le fond du problème : Comprendre cette nuance fait la différence entre juste utiliser un outil et vraiment le maîtriser. C'est ce qui nous permet de construire des architectures robustes pour rendre ces modèles fiables.</p>
        <p class="mb-4 text-lg leading-relaxed">La tech n'est pas de la magie ; c'est de la logique. Et c'est exactement pour ça que je l'aime.</p>
        <div class="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <p class="font-bold text-primary">👇 Et vous ?</p>
            <p class="mt-2">Avez-vous déjà surpris une IA en train d'inventer des faits très "convaincants" ? Racontez-moi votre meilleure "hallucination" en commentaire !</p>
        </div>
      </section>
    `,
    toc_fr: [
      { id: 'intro', title: 'L\'Analogie du Correcteur' },
      { id: 'tokens', title: 'Tokens & Probabilités' },
      { id: 'hallucinations', title: 'Les Hallucinations' },
      { id: 'rag', title: 'La Solution : RAG' },
      { id: 'conclusion', title: 'Pourquoi c\'est Important' },
    ],

    // Default / Fallback Content (English)
    toc: [
      { id: 'intro', title: 'The Autocorrect Analogy' },
      { id: 'tokens', title: 'Tokens & Probabilities' },
      { id: 'hallucinations', title: 'Hallucinations Explained' },
      { id: 'rag', title: 'The Solution: RAG' },
      { id: 'conclusion', title: 'Why It Matters' },
    ],
    content: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-primary pl-6 py-2">
          "AI doesn't 'know' anything. It 'guesses' everything. And that distinction changes everything about how we build software."
        </p>
      </header>

      <section id="intro" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">The Autocorrect Analogy</h2>
        <p class="mb-4 text-lg leading-relaxed">Stop treating AI like an encyclopedia. It’s not "Google 2.0." It’s basically your phone’s autocorrect, but on steroids. 💊</p>
        <p class="mb-4 text-lg leading-relaxed">Ever since I was 15, I’ve been obsessed with what happens "under the hood." I spent countless nights deconstructing code just to understand how a few lines of text could turn into complex actions. When I looked under the hood of GPT, I didn't find a brain. I found a calculator.</p>
      </section>

      <section id="tokens" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Tokens & Probabilities</h2>
        <p class="mb-6 text-lg leading-relaxed">If there’s one thing I’ve learned by diving deep into LLMs (Large Language Models), it’s this: <strong>AI doesn't "know" anything. It "guesses" everything.</strong></p>
        
        <div class="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 mb-8">
            <h3 class="font-mono text-sm uppercase tracking-widest text-primary mb-4">The Prediction Game</h3>
            <p class="mb-4">Think about your phone when you type a message. It suggests the next word:</p>
            <ul class="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>You type: <span class="font-mono bg-gray-200 dark:bg-black px-2 py-1 rounded">"I am..."</span></li>
                <li>It suggests: <span class="font-bold text-green-500">"going" (80%)</span>, "happy" (15%), "tired" (5%).</li>
            </ul>
        </div>

        <p class="mb-4 text-lg leading-relaxed">ChatGPT does the exact same thing, but with insane computing power and a "memory" of almost the entire internet. It doesn't understand the concept of "truth". It understands the concept of "statistical likelihood".</p>
      </section>

      <section id="hallucinations" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Hallucinations: A Feature, Not a Bug</h2>
        <p class="mb-4 text-lg leading-relaxed">Why is this vital for your projects? Because it explains "hallucinations."</p>
        <p class="mb-4 text-lg leading-relaxed">If the AI doesn't find the exact answer in its training data, it won't just stop. It will build the most plausible mathematical sequence, even if it’s factually wrong. It isn't lying; it’s just predicting.</p>
        <p class="mb-4 text-lg leading-relaxed">In creative writing, this is a feature (we call it "creativity"). In banking software, it's a critical bug (we call it "lying").</p>
      </section>

      <section id="rag" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">The Solution: RAG (Retrieval Augmented Generation)</h2>
        <p class="mb-4 text-lg leading-relaxed">So how do we fix this? We don't ask the model to "remember" facts. We give it the facts.</p>
        <p class="mb-4 text-lg leading-relaxed">This is where <strong>RAG</strong> comes in. Instead of asking: <br><em>"What is Tanka's latest project?"</em> (which it doesn't know), <br>We say: <br><em>"Here is a PDF of Tanka's portfolio. Based ONLY on this file, what is his latest project?"</em></p>
        <p class="mb-4 text-lg leading-relaxed">We turn the "Creative Writer" into a "Reading Assistant". That is the key to building reliable AI systems.</p>
      </section>

      <section id="conclusion" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Why It Matters</h2>
        <p class="mb-4 text-lg leading-relaxed">The bottom line: Understanding this nuance is the difference between just using a tool and truly mastering it. It’s what allows us to build robust architectures to make these models reliable.</p>
        <p class="mb-4 text-lg leading-relaxed">Tech isn't magic; it’s logic. And that’s exactly why I love it.</p>
        <div class="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <p class="font-bold text-primary">👇 What about you?</p>
            <p class="mt-2">Have you ever caught an AI inventing very "convincing" facts? Tell me about your best "hallucination" in the comments!</p>
        </div>
      </section>
    `
  },
  {
    slug: 'optimisation-nextjs-ssg',
    title: 'Light Speed: The Architecture of Instant',
    subtitle: 'Why Static Site Generation (SSG) is not just a technique, but a philosophy of performance.',
    summary: 'Deep dive into static rendering mechanisms, Edge Computing, and user perception of speed.',
    date: '2025-11-01',
    readTime: '7 min',
    category: 'web',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',

    // English Mock Data
    title_en: 'Light Speed: The Architecture of Instant',
    subtitle_en: 'Why Static Site Generation (SSG) is not just a technique, but a philosophy of performance.',
    summary_en: 'Deep dive into static rendering mechanisms, Edge Computing, and user perception of speed.',
    content_en: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-blue-500 pl-6 py-2">
          "On the web, 100 milliseconds of latency can kill an intention. Speed is not a feature, it's the foundation of trust."
        </p>
      </header>

      <section id="illusion" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">1. The Illusion of Speed</h2>
        <p class="mb-4 text-lg leading-relaxed">Imagine walking into a dark room and flipping the switch. Do you expect the light to turn on instantly? Yes. If it takes half a second, you think the bulb is broken.</p>
        <p class="mb-4 text-lg leading-relaxed">The modern web must respond with the same immediacy. The human brain perceives any delay under <strong>100ms</strong> as instant. Beyond that, the cognitive conversation breaks.</p>
      </section>

      <section id="chef" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">2. The Chef vs The Buffet (SSR vs SSG)</h2>
        <p class="mb-6 text-lg leading-relaxed">To understand SSG, let's forget code for a moment and go to a restaurant.</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <h3 class="text-xl text-blue-600 dark:text-blue-400 font-bold mb-4">SSR (Server Side Rendering)</h3>
                <p class="text-gray-700 dark:text-gray-300">It's an <strong>A La Carte Restaurant</strong>. You order. The chef gets the ticket, chops vegetables, cooks the meat, plates the dish. It's fresh, custom, but you wait 20 minutes.</p>
            </div>
            <div class="p-8 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                <h3 class="text-xl text-indigo-600 dark:text-indigo-400 font-bold mb-4">SSG (Static Site Generation)</h3>
                <p class="text-gray-700 dark:text-gray-300">It's a <strong>Luxury Buffet</strong>. The chef prepared everything at 4 AM. When you arrive, the food is there, steaming, perfect. You serve yourself. Wait time: zero.</p>
            </div>
        </div>

        <p class="mb-4 text-lg leading-relaxed">Next.js allows us to build this digital buffet. At "Build" time, we pre-calculate every possible page. The server does the hard work once, not on every visit.</p>
      </section>

      <section id="edge" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">3. The Geography of Code (The Edge)</h2>
        <div class="mb-8 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 group">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" alt="Global Network Connection" class="w-full object-cover h-[400px] transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-md p-4">
            <p class="text-white text-sm font-mono">Fig 1. CDN Distribution: Moving data closer to the user.</p>
          </div>
        </div>
        <p class="mb-4 text-lg leading-relaxed">Once your page is statically generated (HTML + JSON), it doesn't stay on a single server in New York. It gets cloned and shipped to the "Edge" of the network: London, Tokyo, Sao Paulo, Cape Town.</p>
        <p class="mb-4 text-lg leading-relaxed">When a user in Ouagadougou requests your page, they don't download it from Europe, but from a local CDN server. That is the power of Vercel's infrastructure.</p>
      </section>

      <section id="implementation" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">4. The Art of Implementation</h2>
        <p class="mb-6 text-lg leading-relaxed">Here is the exact pattern I use to generate thousands of blog pages in seconds during build:</p>
        
        <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <pre class="relative bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 shadow-2xl"><code>// app/blog/[slug]/page.tsx

// 1. Tell Next.js which pages exist
export async function generateStaticParams() {
  const posts = await getPosts(); 
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. The page is generated ONCE
export default async function Page({ params }) {
  const { slug } = params;
  // DB call happens only at build time!
  const post = await getPost(slug); 
  
  return &lt;Article content={post} /&gt;;
}</code></pre>
        </div>
      </section>
    `,
    toc_en: [
      { id: 'illusion', title: '1. The Illusion of Speed' },
      { id: 'chef', title: '2. The Chef vs The Buffet' },
      { id: 'edge', title: '3. The Geography of Code' },
      { id: 'implementation', title: '4. Implementation' },
    ],

    // French Mock Data
    title_fr: 'Vitesse Lumière : L\'Architecture de l\'Instantané',
    subtitle_fr: 'Pourquoi le Static Site Generation (SSG) n\'est pas juste une technique, mais une philosophie de performance.',
    summary_fr: 'Plongée dans les mécanismes du rendu statique, du Edge Computing et de la perception utilisateur de la vitesse.',
    content_fr: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-blue-500 pl-6 py-2">
          "Sur le web, 100 millisecondes de latence peuvent tuer une intention. La vitesse n'est pas une fonctionnalité, c'est le fondement de la confiance."
        </p>
      </header>

      <section id="illusion" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">1. L'Illusion de la Vitesse</h2>
        <p class="mb-4 text-lg leading-relaxed">Imaginez que vous entrez dans une pièce sombre et que vous appuyez sur l'interrupteur. Vous attendez-vous à ce que la lumière s'allume instantanément ? Oui. Si elle met une demi-seconde à réagir, vous pensez que l'ampoule est cassée.</p>
        <p class="mb-4 text-lg leading-relaxed">Le web moderne doit répondre avec la même immédiateté. Le cerveau humain perçoit tout délai inférieur à <strong>100ms</strong> comme instantané. Au-delà, la conversation cognitive se brise.</p>
      </section>

      <section id="chef" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">2. Le Chef vs Le Buffet (SSR vs SSG)</h2>
        <p class="mb-6 text-lg leading-relaxed">Pour comprendre le SSG, oublions le code un instant et allons au restaurant.</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <h3 class="text-xl text-blue-600 dark:text-blue-400 font-bold mb-4">SSR (Server Side Rendering)</h3>
                <p class="text-gray-700 dark:text-gray-300">C'est un <strong>restaurant à la carte</strong>. Vous commandez. Le chef reçoit le bon, coupe les légumes, cuit la viande, dresse l'assiette. C'est frais, personnalisé, mais vous devez attendre 20 minutes.</p>
            </div>
            <div class="p-8 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                <h3 class="text-xl text-indigo-600 dark:text-indigo-400 font-bold mb-4">SSG (Static Site Generation)</h3>
                <p class="text-gray-700 dark:text-gray-300">C'est un <strong>buffet de luxe</strong>. Le chef a tout préparé à 4h du matin. Quand vous arrivez, les plats sont là, fumants, parfaits. Vous vous servez. Temps d'attente : zéro.</p>
            </div>
        </div>

        <p class="mb-4 text-lg leading-relaxed">Next.js nous permet de construire ce buffet numérique. Au moment du "Build", nous précalculons toutes les pages possibles. Le serveur fait le travail difficile une seule fois, pas à chaque visite.</p>
      </section>

      <section id="edge" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">3. La Géographie du Code (The Edge)</h2>
        <div class="mb-8 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 group">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" alt="Global Network Connection" class="w-full object-cover h-[400px] transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-md p-4">
            <p class="text-white text-sm font-mono">Fig 1. Distribution CDN : Rapprocher la donnée de l'utilisateur.</p>
          </div>
        </div>
        <p class="mb-4 text-lg leading-relaxed">Une fois votre page générée statiquement (HTML + JSON), elle ne reste pas sur un serveur unique à Paris. Elle est clonée et envoyée aux "limites" (Edge) du réseau : New York, Tokyo, Sao Paulo, Le Cap.</p>
        <p class="mb-4 text-lg leading-relaxed">Quand un utilisateur à Ouagadougou demande votre page, il ne la télécharge pas depuis l'Europe, mais depuis un serveur CDN local. C'est la puissance de l'infrastructure Vercel.</p>
      </section>

      <section id="implementation" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">4. L'Art de l'Implémentation</h2>
        <p class="mb-6 text-lg leading-relaxed">Voici le pattern exact que j'utilise pour générer des milliers de pages de blog en quelques secondes lors du build :</p>
        
        <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <pre class="relative bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 shadow-2xl"><code>// app/blog/[slug]/page.tsx

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
        </div>
      </section>
    `,
    toc_fr: [
      { id: 'illusion', title: '1. L\'Illusion de la Vitesse' },
      { id: 'chef', title: '2. Le Chef vs Le Buffet' },
      { id: 'edge', title: '3. La Géographie du Code' },
      { id: 'implementation', title: '4. Implémentation' },
    ],

    // Default / Fallback Content (French)
    toc: [
      { id: 'illusion', title: '1. L\'Illusion de la Vitesse' },
      { id: 'chef', title: '2. Le Chef vs Le Buffet' },
      { id: 'edge', title: '3. La Géographie du Code' },
      { id: 'implementation', title: '4. Implémentation' },
    ],
    content: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-blue-500 pl-6 py-2">
          "Sur le web, 100 millisecondes de latence peuvent tuer une intention. La vitesse n'est pas une fonctionnalité, c'est le fondement de la confiance."
        </p>
      </header>

      <section id="illusion" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">1. L'Illusion de la Vitesse</h2>
        <p class="mb-4 text-lg leading-relaxed">Imaginez que vous entrez dans une pièce sombre et que vous appuyez sur l'interrupteur. Vous attendez-vous à ce que la lumière s'allume instantanément ? Oui. Si elle met une demi-seconde à réagir, vous pensez que l'ampoule est cassée.</p>
        <p class="mb-4 text-lg leading-relaxed">Le web moderne doit répondre avec la même immédiateté. Le cerveau humain perçoit tout délai inférieur à <strong>100ms</strong> comme instantané. Au-delà, la conversation cognitive se brise.</p>
      </section>

      <section id="chef" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">2. Le Chef vs Le Buffet (SSR vs SSG)</h2>
        <p class="mb-6 text-lg leading-relaxed">Pour comprendre le SSG, oublions le code un instant et allons au restaurant.</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <h3 class="text-xl text-blue-600 dark:text-blue-400 font-bold mb-4">SSR (Server Side Rendering)</h3>
                <p class="text-gray-700 dark:text-gray-300">C'est un <strong>restaurant à la carte</strong>. Vous commandez. Le chef reçoit le bon, coupe les légumes, cuit la viande, dresse l'assiette. C'est frais, personnalisé, mais vous devez attendre 20 minutes.</p>
            </div>
            <div class="p-8 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                <h3 class="text-xl text-indigo-600 dark:text-indigo-400 font-bold mb-4">SSG (Static Site Generation)</h3>
                <p class="text-gray-700 dark:text-gray-300">C'est un <strong>buffet de luxe</strong>. Le chef a tout préparé à 4h du matin. Quand vous arrivez, les plats sont là, fumants, parfaits. Vous vous servez. Temps d'attente : zéro.</p>
            </div>
        </div>

        <p class="mb-4 text-lg leading-relaxed">Next.js nous permet de construire ce buffet numérique. Au moment du "Build", nous précalculons toutes les pages possibles. Le serveur fait le travail difficile une seule fois, pas à chaque visite.</p>
      </section>

      <section id="edge" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">3. La Géographie du Code (The Edge)</h2>
        <div class="mb-8 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 group">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" alt="Global Network Connection" class="w-full object-cover h-[400px] transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-md p-4">
            <p class="text-white text-sm font-mono">Fig 1. Distribution CDN : Rapprocher la donnée de l'utilisateur.</p>
          </div>
        </div>
        <p class="mb-4 text-lg leading-relaxed">Une fois votre page générée statiquement (HTML + JSON), elle ne reste pas sur un serveur unique à Paris. Elle est clonée et envoyée aux "limites" (Edge) du réseau : New York, Tokyo, Sao Paulo, Le Cap.</p>
        <p class="mb-4 text-lg leading-relaxed">Quand un utilisateur à Ouagadougou demande votre page, il ne la télécharge pas depuis l'Europe, mais depuis un serveur CDN local. C'est la puissance de l'infrastructure Vercel.</p>
      </section>

      <section id="implementation" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">4. L'Art de l'Implémentation</h2>
        <p class="mb-6 text-lg leading-relaxed">Voici le pattern exact que j'utilise pour générer des milliers de pages de blog en quelques secondes lors du build :</p>
        
        <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <pre class="relative bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 shadow-2xl"><code>// app/blog/[slug]/page.tsx

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
        </div>
      </section>
    `,
  },
  {
    slug: 'transformer-vs-cnn-en-ia',
    title: 'Clash of Titans: CNN vs Transformers',
    subtitle: 'The end of the "Tunnel Vision" era and the rise of Global Attention.',
    summary: 'How AI moved from pixel-by-pixel analysis to global contextual understanding.',
    date: '2025-11-10',
    readTime: '12 min',
    category: 'ai',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',

    // English Mock Data
    title_en: 'Clash of Titans: CNN vs Transformers',
    subtitle_en: 'The end of the "Tunnel Vision" era and the rise of Global Attention.',
    summary_en: 'How AI moved from pixel-by-pixel analysis to global contextual understanding.',
    content_en: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-purple-500 pl-6 py-2">
          "A CNN looks at the world through a straw. A Transformer looks at the world through a wide-angle lens."
        </p>
      </header>

      <section id="history" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">1. The Hegemony of CNNs (2012-2020)</h2>
        <p class="mb-4 text-lg leading-relaxed">For a decade, if you wanted a computer to "see", you used a CNN (Convolutional Neural Network). Its operation is inspired by the biological visual cortex.</p>
        
        <div class="my-8 flex gap-4 items-center justify-center bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10">
            <div class="text-center">
                <div class="font-mono text-xs text-gray-400 mb-2">INPUT</div>
                <div class="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
            <div class="w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <div class="text-center">
                <div class="font-mono text-xs text-blue-500 font-bold mb-2">KERNEL</div>
                <div class="w-12 h-12 border-2 border-dashed border-blue-500 rounded flex items-center justify-center text-blue-500">🔍</div>
            </div>
            <div class="w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <div class="text-center">
                <div class="font-mono text-xs text-gray-400 mb-2">FEATURE</div>
                <div class="w-12 h-12 bg-gray-400 dark:bg-gray-600 rounded"></div>
            </div>
        </div>

        <p class="mb-4 text-lg leading-relaxed">The CNN scans the image with a small window (the kernel). It detects edges, then textures, then shapes. But it has a major flaw: <strong>tunnel vision</strong>. It struggles to relate a pixel in the top left with a pixel in the bottom right if the image is large.</p>
      </section>

      <section id="revolution" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">2. The Revolution "Attention is All You Need"</h2>
        <div class="mb-8 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000" alt="Neural Network Glowing" class="w-full object-cover h-[400px]" />
          <div class="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-transparent mix-blend-overlay"></div>
        </div>
        
        <p class="mb-4 text-lg leading-relaxed">Transformers changed everything. Instead of scanning locally, the <strong>Self-Attention</strong> mechanism looks at the entire image (or sentence) at once.</p>
        <blockquote class="border-l-4 border-purple-500 pl-6 italic text-xl my-8 text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/10 p-6 rounded-r-xl">
          "A Transformer doesn't read a sentence word by word. It contemplates it as a whole and understands that 'Bank' is related to 'Money', even if they are separated by 50 words."
        </blockquote>
      </section>

      <section id="comparison" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">3. The Ultimate Analogy: The Magnifying Glass vs The Map</h2>
        
        <div class="grid md:grid-cols-2 gap-8 my-10">
            <div class="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <h3 class="text-2xl font-black mb-4 flex items-center gap-2">The CNN 🔍</h3>
                <p class="mb-4 font-bold text-gray-500 uppercase tracking-wide text-xs">The Detective</p>
                <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Very strong for local details.</li>
                    <li class="flex items-start gap-2"><span class="text-red-500">✗</span> Ignores what happens outside its lens.</li>
                    <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Efficient, fast, lightweight.</li>
                </ul>
            </div>
            <div class="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
                <h3 class="text-2xl font-black mb-4 flex items-center gap-2">The Transformer 🗺️</h3>
                <p class="mb-4 font-bold text-gray-500 uppercase tracking-wide text-xs">The General</p>
                <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Sees all distant connections.</li>
                    <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Understands global context.</li>
                    <li class="flex items-start gap-2"><span class="text-red-500">✗</span> Resource hungry (quadratic).</li>
                </ul>
            </div>
        </div>
      </section>
    `,
    toc_en: [
      { id: 'history', title: '1. The Hegemony of CNNs' },
      { id: 'revolution', title: '2. The Revolution of Attention' },
      { id: 'comparison', title: '3. The Magnifying Glass vs The Map' },
    ],

    // French Mock Data
    title_fr: 'Le Duel des Titans : CNN vs Transformers',
    subtitle_fr: 'La fin de l\'ère de la "Vision Tunnel" et l\'avènement de l\'Attention Globale.',
    summary_fr: 'Comment l\'IA est passée de l\'analyse pixel par pixel à la compréhension contextuelle globale.',
    content_fr: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-purple-500 pl-6 py-2">
          "Un CNN regarde le monde à travers une paille. Un Transformer regarde le monde avec un grand angle."
        </p>
      </header>

      <section id="history" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">1. L'Hégémonie des CNN (2012-2020)</h2>
        <p class="mb-4 text-lg leading-relaxed">Pendant une décennie, si vous vouliez qu'un ordinateur "voie", vous utilisiez un CNN (Convolutional Neural Network). Son fonctionnement est inspiré du cortex visuel biologique.</p>
        
        <div class="my-8 flex gap-4 items-center justify-center bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10">
            <div class="text-center">
                <div class="font-mono text-xs text-gray-400 mb-2">INPUT</div>
                <div class="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
            <div class="w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <div class="text-center">
                <div class="font-mono text-xs text-blue-500 font-bold mb-2">KERNEL</div>
                <div class="w-12 h-12 border-2 border-dashed border-blue-500 rounded flex items-center justify-center text-blue-500">🔍</div>
            </div>
            <div class="w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <div class="text-center">
                <div class="font-mono text-xs text-gray-400 mb-2">FEATURE</div>
                <div class="w-12 h-12 bg-gray-400 dark:bg-gray-600 rounded"></div>
            </div>
        </div>

        <p class="mb-4 text-lg leading-relaxed">Le CNN scanne l'image avec une petite fenêtre (le noyau). Il détecte des bords, puis des textures, puis des formes. Mais il a un défaut majeur : <strong>la vision tunnel</strong>. Il a du mal à relier un pixel en haut à gauche avec un pixel en bas à droite si l'image est grande.</p>
      </section>

      <section id="revolution" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">2. La Révolution "Attention is All You Need"</h2>
        <div class="mb-8 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000" alt="Neural Network Glowing" class="w-full object-cover h-[400px]" />
          <div class="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-transparent mix-blend-overlay"></div>
        </div>
        
        <p class="mb-4 text-lg leading-relaxed">Les Transformers ont tout changé. Au lieu de scanner localement, le mécanisme d'<strong>Auto-Attention (Self-Attention)</strong> regarde toute l'image (ou toute la phrase) d'un seul coup.</p>
        <blockquote class="border-l-4 border-purple-500 pl-6 italic text-xl my-8 text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/10 p-6 rounded-r-xl">
          "Un Transformer ne lit pas une phrase mot après mot. Il la contemple dans son ensemble et comprend que 'Banque' est lié à 'Argent', même s'ils sont séparés par 50 mots."
        </blockquote>
      </section>

      <section id="comparison" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">3. L'Analogie Ultime : La Loupe vs La Carte</h2>
        
        <div class="grid md:grid-cols-2 gap-8 my-10">
            <div class="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                <h3 class="text-2xl font-black mb-4 flex items-center gap-2">Le CNN 🔍</h3>
                <p class="mb-4 font-bold text-gray-500 uppercase tracking-wide text-xs">Le Détective</p>
                <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Très fort pour les détails locaux.</li>
                    <li class="flex items-start gap-2"><span class="text-red-500">✗</span> Ignore ce qui se passe hors de sa loupe.</li>
                    <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Efficace, rapide, léger.</li>
                </ul>
            </div>
            <div class="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
                <h3 class="text-2xl font-black mb-4 flex items-center gap-2">Le Transformer 🗺️</h3>
                <p class="mb-4 font-bold text-gray-500 uppercase tracking-wide text-xs">Le Stratège</p>
                <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                    <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Voit toutes les connexions distantes.</li>
                    <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Comprend le contexte global.</li>
                    <li class="flex items-start gap-2"><span class="text-red-500">✗</span> Gourmand en ressources (quadratique).</li>
                </ul>
            </div>
        </div>
      </section>
    `,
    toc_fr: [
      { id: 'history', title: '1. L\'Hégémonie des CNN' },
      { id: 'revolution', title: '2. La Révolution de l\'Attention' },
      { id: 'comparison', title: '3. La Loupe vs La Carte' },
    ],

    // Default / Fallback Content (French)
    toc: [
      { id: 'history', title: '1. L\'Hégémonie des CNN' },
      { id: 'revolution', title: '2. La Révolution de l\'Attention' },
      { id: 'comparison', title: '3. La Loupe vs La Carte' },
    ],
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
    title: 'Chaos to Order: The Ouaga Smart City Experiment',
    subtitle: 'How to tame the traffic of an African metropolis with low-cost sensors and Big Data.',
    summary: 'Architecture of an IoT pipeline resilient to heat, dust, and unstable connectivity.',
    date: '2025-11-15',
    readTime: '6 min',
    category: 'data',
    coverImage: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&q=80&w=1000',

    // English Mock Data
    title_en: 'Chaos to Order: The Ouaga Smart City Experiment',
    subtitle_en: 'How to tame the traffic of an African metropolis with low-cost sensors and Big Data.',
    summary_en: 'Architecture of an IoT pipeline resilient to heat, dust, and unstable connectivity.',
    content_en: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-emerald-500 pl-6 py-2">
          "In a city where the temperature hits 45°C, your server room isn't just a room. It's an oven. Resilience isn't an option, it's the only spec."
        </p>
      </header>

      <section id="entropy" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">1. Urban Entropy</h2>
        <p class="mb-4 text-lg leading-relaxed">Ouagadougou. 2.5 million inhabitants. Ground temperature of 45°C. An endless ballet of motorcycles, taxis, and pedestrians.</p>
        <p class="mb-4 text-lg leading-relaxed">The problem isn't the number of vehicles, it's the unpredictability. Without data, the city is a black box. You cannot optimize what you cannot measure.</p>
      </section>

      <section id="nervous" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">2. Building a Resilient Nervous System</h2>
        <p class="mb-6 text-lg leading-relaxed">We couldn't use expensive 4K cameras. We needed <strong>Low-Tech High-Impact</strong>.</p>
        
        <div class="mb-8 p-8 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl">
            <h3 class="text-emerald-600 dark:text-emerald-400 font-mono text-sm uppercase tracking-widest mb-6">THE SURVIVAL STACK</h3>
            <ul class="space-y-6">
                <li class="flex items-start">
                    <div class="bg-emerald-100 dark:bg-emerald-900 p-2 rounded mr-4 text-emerald-600 dark:text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                    </div>
                    <div>
                        <span class="font-bold block text-gray-900 dark:text-white">HARDWARE</span>
                        <span class="text-gray-600 dark:text-gray-400">Raspberry Pi + Thermal Cameras (immune to dust and privacy concerns).</span>
                    </div>
                </li>
                <li class="flex items-start">
                    <div class="bg-emerald-100 dark:bg-emerald-900 p-2 rounded mr-4 text-emerald-600 dark:text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                    </div>
                    <div>
                        <span class="font-bold block text-gray-900 dark:text-white">PROTOCOL</span>
                        <span class="text-gray-600 dark:text-gray-400"><strong>MQTT</strong>: The ultra-lightweight protocol. If the network cuts, the message waits. Zero data loss.</span>
                    </div>
                </li>
                <li class="flex items-start">
                    <div class="bg-emerald-100 dark:bg-emerald-900 p-2 rounded mr-4 text-emerald-600 dark:text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <div>
                        <span class="font-bold block text-gray-900 dark:text-white">EDGE AI</span>
                        <span class="text-gray-600 dark:text-gray-400">Local processing with YOLO-Nano. We don't send video (too heavy), we just send JSON: <code>{ "car": 12, "moto": 45 }</code>.</span>
                    </div>
                </li>
            </ul>
        </div>
      </section>

      <section id="pulse" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">3. Visualizing the City's Pulse</h2>
        <div class="mb-8 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Data Dashboard Visualization" class="w-full object-cover h-[400px]" />
          <div class="absolute inset-0 bg-emerald-900/20 mix-blend-color"></div>
        </div>
        <p class="mb-4 text-lg leading-relaxed">All these micro-data points converge into an <strong>InfluxDB</strong> (Time Series) database. Grafana then transforms these millions of points into curves of life.</p>
        <p class="mb-4 text-lg leading-relaxed">For the first time, the municipality doesn't just see traffic jams, it sees <strong>flows</strong>. It can predict that at 5:30 PM, the United Nations intersection will saturate, and adjust the traffic lights 5 minutes beforehand.</p>
      </section>
    `,
    toc_en: [
      { id: 'entropy', title: '1. Urban Entropy' },
      { id: 'nervous', title: '2. The Nervous System (IoT)' },
      { id: 'pulse', title: '3. Visualizing the Pulse' },
    ],

    // French Mock Data
    title_fr: 'Chaos to Order : L\'Expérience Ouaga Smart City',
    subtitle_fr: 'Comment dompter le trafic d\'une métropole africaine avec des capteurs low-cost et du Big Data.',
    summary_fr: 'Architecture d\'un pipeline IoT résilient face à la chaleur, la poussière et la connectivité instable.',
    content_fr: `
      <header class="mb-12">
        <p class="lead text-2xl text-gray-600 dark:text-gray-300 font-light italic border-l-4 border-emerald-500 pl-6 py-2">
          "Dans une ville où la température atteint 45°C, votre salle serveur n'est pas juste une salle. C'est un four. La résilience n'est pas une option, c'est la seule spécification."
        </p>
      </header>

      <section id="entropy" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">1. L'Entropie Urbaine</h2>
        <p class="mb-4 text-lg leading-relaxed">Ouagadougou. 2,5 millions d'habitants. Une température au sol de 45°C. Un ballet incessant de motos, de taxis et de piétons.</p>
        <p class="mb-4 text-lg leading-relaxed">Le problème n'est pas le nombre de véhicules, c'est l'imprévisibilité. Sans données, la ville est une boîte noire. On ne peut pas optimiser ce qu'on ne mesure pas.</p>
      </section>

      <section id="nervous" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">2. Construire un Système Nerveux Résilient</h2>
        <p class="mb-6 text-lg leading-relaxed">Nous ne pouvions pas utiliser des caméras 4K couteuses. Il fallait du <strong>Low-Tech High-Impact</strong>.</p>
        
        <div class="mb-8 p-8 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl">
            <h3 class="text-emerald-600 dark:text-emerald-400 font-mono text-sm uppercase tracking-widest mb-6">LA STACK DE SURVIE</h3>
            <ul class="space-y-6">
                <li class="flex items-start">
                    <div class="bg-emerald-100 dark:bg-emerald-900 p-2 rounded mr-4 text-emerald-600 dark:text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                    </div>
                    <div>
                        <span class="font-bold block text-gray-900 dark:text-white">HARDWARE</span>
                        <span class="text-gray-600 dark:text-gray-400">Raspberry Pi + Caméras thermiques (insensibles à la poussière).</span>
                    </div>
                </li>
                <li class="flex items-start">
                    <div class="bg-emerald-100 dark:bg-emerald-900 p-2 rounded mr-4 text-emerald-600 dark:text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                    </div>
                    <div>
                        <span class="font-bold block text-gray-900 dark:text-white">PROTOCOL</span>
                        <span class="text-gray-600 dark:text-gray-400"><strong>MQTT</strong> : Le protocole ultra-léger. Si le réseau coupe, le message attend. Zéro perte de données.</span>
                    </div>
                </li>
                <li class="flex items-start">
                    <div class="bg-emerald-100 dark:bg-emerald-900 p-2 rounded mr-4 text-emerald-600 dark:text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <div>
                        <span class="font-bold block text-gray-900 dark:text-white">EDGE AI</span>
                        <span class="text-gray-600 dark:text-gray-400">Traitement local avec YOLO-Nano. On n'envoie pas la vidéo (trop lourd), on envoie juste : <code>{ "car": 12, "moto": 45 }</code>.</span>
                    </div>
                </li>
            </ul>
        </div>
      </section>

      <section id="pulse" class="mb-12">
        <h2 class="text-3xl font-bold mb-6">3. Visualiser le Pouls de la Ville</h2>
        <div class="mb-8 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Data Dashboard Visualization" class="w-full object-cover h-[400px]" />
          <div class="absolute inset-0 bg-emerald-900/20 mix-blend-color"></div>
        </div>
        <p class="mb-4 text-lg leading-relaxed">Toutes ces micro-données convergent vers une base <strong>InfluxDB</strong> (Time Series). Grafana transforme ensuite ces millions de points en courbes de vie.</p>
        <p class="mb-4 text-lg leading-relaxed">Pour la première fois, la municipalité ne voit plus des embouteillages, elle voit des <strong>flux</strong>. Elle peut prédire qu'à 17h30, le carrefour des Nations Unies va saturer, et ajuster les feux en conséquence 5 minutes avant.</p>
      </section>
    `,
    toc_fr: [
      { id: 'entropy', title: '1. L\'Entropie Urbaine' },
      { id: 'nervous', title: '2. Le Système Nerveux (IoT)' },
      { id: 'pulse', title: '3. Visualiser le Pouls' },
    ],

    // Default / Fallback Content (French)
    toc: [
      { id: 'entropy', title: '1. L\'Entropie Urbaine' },
      { id: 'nervous', title: '2. Le Système Nerveux (IoT)' },
      { id: 'pulse', title: '3. Visualiser le Pouls' },
    ],
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
  },
  {
    slug: 'vectors-the-gps-of-meaning',
    title: 'The Universal Language of AI: Vectors',
    subtitle: 'Text, images, sound... To an AI, they are all the exact same thing.',
    summary: "How AI translates words, images, and sounds into numbers (vectors) to understand and manipulate concepts.",
    date: '2025-12-05',
    readTime: '5 min',
    category: 'ai',
    coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000',
    
    // English Content
    title_en: 'The Universal Language of AI: Vectors',
    subtitle_en: 'Text, images, sound... To an AI, they are all the exact same thing.',
    summary_en: "How AI translates words, images, and sounds into numbers (vectors) to understand and manipulate concepts.",
    content_en: `
      <header class="mb-10">
        <p class="lead text-xl text-gray-600 dark:text-gray-300">
          In my last post, we saw that AI is a prediction engine. But how can a machine "predict" a painting or a melody?
        </p>
        <p class="mt-4">
          When I first started coding at 15, I thought computers needed separate brains for separate tasks. One for reading, one for seeing.
        </p>
      </header>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">The Secret: Vectors</h2>
        <p class="mb-4">
          I was wrong. The beauty of modern AI lies in one mathematical concept: <strong>Vectors</strong>.
        </p>
        <p class="mb-4">
          Here is the secret: The AI doesn't read the word "Apple." The AI doesn't see a picture of a red fruit.
          It translates both into a long list of numbers (coordinates). We call this an <strong>Embedding</strong>.
        </p>
        
        <div class="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">🗺️ GPS for Meaning</h3>
          <p>Think of it like a GPS for meaning.</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>"Paris" and "France" are mathematically close to each other on this map.</li>
            <li>"Paris" and "Banana" are very far apart.</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Algebra with Ideas</h2>
        <p class="mb-4">
          👨‍💻 The technical bit: This is why Generative AI is "Multimodal." Since everything is converted into the same mathematical space, we can do algebra with ideas.
        </p>
        <p class="mb-4">
          The most famous example?
        </p>
        <div class="text-center p-8 bg-gray-100 dark:bg-white/5 rounded-xl font-mono text-lg my-6">
          King - Man + Woman = Queen
        </div>
        <p>
          It feels like magic, but it is just geometry.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Why does this matter?</h2>
        <p class="mb-4">
          Why does this matter for us? It changes how we handle data. We are no longer just matching keywords; we are matching concepts. This is the foundation of modern search engines and recommendation systems.
        </p>
        <p class="mb-4">
          We are not just coding rules anymore; we are navigating a map of human knowledge.
        </p>
      </section>

      <footer class="border-t border-gray-200 dark:border-white/10 pt-8 mt-12">
        <p class="font-bold mb-2">👇 Question for you:</p>
        <p class="italic text-gray-600 dark:text-gray-400 mb-6">
          Have you ever used "Google Lens" or searched for a photo in your gallery just by typing "Beach"? You were using vectors without knowing it. Let me know if you want to know more about it!
        </p>
        <p class="text-sm text-gray-500">
          PS: Now that we have the data (Vectors) and the engine (Prediction), one piece is missing. Next time, we will talk about the "Transformer" and how AI learns to pay attention to what matters. 🧠
        </p>
      </footer>
    `,
    toc_en: [
      { id: 'secret', title: 'The Secret: Vectors' },
      { id: 'algebra', title: 'Algebra with Ideas' },
      { id: 'why', title: 'Why does this matter?' },
    ],

    // French Content
    title_fr: 'Le Langage Universel de l\'IA : Les Vecteurs',
    subtitle_fr: 'Texte, images, son... Pour une IA, c\'est exactement la même chose.',
    summary_fr: "Comment l'IA traduit les mots, les images et les sons en nombres (vecteurs) pour comprendre et manipuler des concepts.",
    content_fr: `
      <header class="mb-10">
        <p class="lead text-xl text-gray-600 dark:text-gray-300">
          Dans mon dernier article, nous avons vu que l'IA est un moteur de prédiction. Mais comment une machine peut-elle "prédire" une peinture ou une mélodie ?
        </p>
        <p class="mt-4">
          Quand j'ai commencé à coder à 15 ans, je pensais que les ordinateurs avaient besoin de cerveaux séparés pour des tâches séparées. Un pour lire, un pour voir. J'avais tort.
        </p>
      </header>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Le Secret : Les Vecteurs</h2>
        <p class="mb-4">
          La beauté de l'IA moderne réside dans un concept mathématique : les <strong>Vecteurs</strong>.
        </p>
        <p class="mb-4">
          Voici le secret : L'IA ne lit pas le mot "Pomme". L'IA ne voit pas une image de fruit rouge.
          Elle traduit les deux en une longue liste de nombres (coordonnées). On appelle cela un <strong>Embedding</strong> (plongement).
        </p>
        
        <div class="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">🗺️ Un GPS pour le Sens</h3>
          <p>Pensez-y comme un GPS pour le sens.</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>"Paris" et "France" sont mathématiquement proches l'un de l'autre sur cette carte.</li>
            <li>"Paris" et "Banane" sont très éloignés.</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">L'Algèbre des Idées</h2>
        <p class="mb-4">
          Le point technique : C'est pourquoi l'IA Générative est "Multimodale". Puisque tout est converti dans le même espace mathématique, nous pouvons faire de l'algèbre avec des idées.
        </p>
        <p class="mb-4">
          L'exemple le plus célèbre ?
        </p>
        <div class="text-center p-8 bg-gray-100 dark:bg-white/5 rounded-xl font-mono text-lg my-6">
          Roi - Homme + Femme = Reine
        </div>
        <p>
          Cela ressemble à de la magie, mais c'est juste de la géométrie.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Pourquoi est-ce important ?</h2>
        <p class="mb-4">
          Cela change notre façon de gérer les données. Nous ne faisons plus seulement correspondre des mots-clés ; nous faisons correspondre des concepts. C'est la base des moteurs de recherche modernes et des systèmes de recommandation.
        </p>
        <p class="mb-4">
          Nous ne codons plus seulement des règles ; nous naviguons sur une carte de la connaissance humaine.
        </p>
      </section>

      <footer class="border-t border-gray-200 dark:border-white/10 pt-8 mt-12">
        <p class="font-bold mb-2">👇 Question pour vous :</p>
        <p class="italic text-gray-600 dark:text-gray-400 mb-6">
          Avez-vous déjà utilisé "Google Lens" ou cherché une photo dans votre galerie juste en tapant "Plage" ? Vous utilisiez des vecteurs sans le savoir. Dites-moi si vous voulez en savoir plus !
        </p>
        <p class="text-sm text-gray-500">
          PS : Maintenant que nous avons les données (Vecteurs) et le moteur (Prédiction), il manque une pièce. La prochaine fois, nous parlerons du "Transformer" et de comment l'IA apprend à prêter attention à ce qui compte. 🧠
        </p>
      </footer>
    `,
    toc_fr: [
      { id: 'secret', title: 'Le Secret : Les Vecteurs' },
      { id: 'algebra', title: 'L\'Algèbre des Idées' },
      { id: 'why', title: 'Pourquoi est-ce important ?' },
    ],

    // Default Content (English)
    content: `
      <header class="mb-10">
        <p class="lead text-xl text-gray-600 dark:text-gray-300">
          In my last post, we saw that AI is a prediction engine. But how can a machine "predict" a painting or a melody?
        </p>
        <p class="mt-4">
          When I first started coding at 15, I thought computers needed separate brains for separate tasks. One for reading, one for seeing. I was wrong.
        </p>
      </header>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">The Secret: Vectors</h2>
        <p class="mb-4">
          The beauty of modern AI lies in one mathematical concept: <strong>Vectors</strong>.
        </p>
        <p class="mb-4">
          Here is the secret: The AI doesn't read the word "Apple." The AI doesn't see a picture of a red fruit.
          It translates both into a long list of numbers (coordinates). We call this an <strong>Embedding</strong>.
        </p>
        
        <div class="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">🗺️ GPS for Meaning</h3>
          <p>Think of it like a GPS for meaning.</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>"Paris" and "France" are mathematically close to each other on this map.</li>
            <li>"Paris" and "Banana" are very far apart.</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Algebra with Ideas</h2>
        <p class="mb-4">
          The technical bit: This is why Generative AI is "Multimodal." Since everything is converted into the same mathematical space, we can do algebra with ideas.
        </p>
        <p class="mb-4">
          The most famous example?
        </p>
        <div class="text-center p-8 bg-gray-100 dark:bg-white/5 rounded-xl font-mono text-lg my-6">
          King - Man + Woman = Queen
        </div>
        <p>
          It feels like magic, but it is just geometry.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Why does this matter?</h2>
        <p class="mb-4">
          It changes how we handle data. We are no longer just matching keywords; we are matching concepts. This is the foundation of modern search engines and recommendation systems.
        </p>
        <p class="mb-4">
          We are not just coding rules anymore; we are navigating a map of human knowledge.
        </p>
      </section>

      <footer class="border-t border-gray-200 dark:border-white/10 pt-8 mt-12">
        <p class="font-bold mb-2">👇 Question for you:</p>
        <p class="italic text-gray-600 dark:text-gray-400 mb-6">
          Have you ever used "Google Lens" or searched for a photo in your gallery just by typing "Beach"? You were using vectors without knowing it. Let me know if you want to know more about it!
        </p>
        <p class="text-sm text-gray-500">
          PS: Now that we have the data (Vectors) and the engine (Prediction), one piece is missing. Next time, we will talk about the "Transformer" and how AI learns to pay attention to what matters. 🧠
        </p>
      </footer>
    `,
    toc: [
      { id: 'secret', title: 'The Secret: Vectors' },
      { id: 'algebra', title: 'Algebra with Ideas' },
      { id: 'why', title: 'Why does this matter?' },
    ],
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