const { Client, Databases, ID, Query } = require('node-appwrite');
const fs = require('fs');
const path = require('path');

// ------------------------------------------------------------------
// 1. CHARGEMENT DES VARIABLES D'ENVIRONNEMENT (.env)
// ------------------------------------------------------------------
function loadEnv() {
    try {
        const envPath = path.resolve(__dirname, '../.env');
        if (fs.existsSync(envPath)) {
            const envConfig = fs.readFileSync(envPath, 'utf8');
            envConfig.split('\n').forEach(line => {
                const match = line.match(/^\s*([\w\d_]+)\s*=\s*(.*)?\s*$/);
                if (match) {
                    const key = match[1];
                    let value = match[2] || '';
                    // Enlever les guillemets si présents
                    if (value.startsWith('"') && value.endsWith('"')) {
                        value = value.slice(1, -1);
                    }
                    if (!process.env[key]) {
                        process.env[key] = value;
                    }
                }
            });
            console.log('✅ .env chargé');
        } else {
            console.warn('⚠️ Fichier .env non trouvé à la racine');
        }
    } catch (e) {
        console.error('Erreur lecture .env:', e);
    }
}

loadEnv();

// ------------------------------------------------------------------
// 2. CONFIGURATION APPWRITE
// ------------------------------------------------------------------
const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE; // Note: Nom variable spécifique utilisateur
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const API_KEY = process.env.APPWRITE_API_KEY; // Doit être ajouté dans .env ou passé en ligne de commande

if (!PROJECT_ID) {
    console.error('❌ Erreur : NEXT_PUBLIC_APPWRITE_PROJECT_ID manquant dans .env');
    process.exit(1);
}

if (!API_KEY) {
    console.error('❌ Erreur : APPWRITE_API_KEY manquant.');
    console.log('👉 Ajoutez APPWRITE_API_KEY="votre_cle_api" dans votre fichier .env');
    console.log('   La clé doit avoir les permissions "documents.read" et "documents.write"');
    process.exit(1);
}

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

const databases = new Databases(client);

// ------------------------------------------------------------------
// 3. DONNÉES DE L'ARTICLE
// ------------------------------------------------------------------
const contentHTML_EN = `
<header class="mb-10">
  <p class="lead text-xl text-gray-600 dark:text-gray-300 font-light italic">
    "It stands for Transformer. And it is the specific piece of technology that changed my life as a developer."
  </p>
</header>
<section id="intro" class="mb-12">
  <h2>The Missing Piece</h2>
  <p>In my previous posts, we saw that AI "predicts" the next word and transforms data into "Vectors" (numbers). But when I started digging into this years ago, I realized something was missing.</p>
  <p>How does the AI understand <strong>Context</strong>?</p>
  <p>If I say: "I deposited money at the <strong>bank</strong>."<br>Or: "I sat on the <strong>bank</strong> of the river."</p>
  <p>The word is the same. The vector is the same. But the meaning is completely different.</p>
</section>
<section id="transformer" class="mb-12">
  <h2>Enter the Transformer</h2>
  <p>Old AI models used to read sentences from left to right, just like us. By the time they reached the end of a long paragraph, they often "forgot" the beginning. They lacked focus.</p>
  <p>Then came the Transformer architecture (from a Google paper in 2017), and it introduced a revolutionary concept: "Attention."</p>
  <p>👨‍💻 <strong>The technical bit:</strong> Instead of reading word by word, a Transformer reads the whole sentence at once. It calculates relationships between every single word.</p>
  <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>In the first sentence, the model draws a strong mathematical link between "Bank" and "Money."</li>
      <li>In the second, it links "Bank" to "River."</li>
  </ul>
  <p>It learns what to pay attention to.</p>
</section>
<section id="conclusion" class="mb-12">
  <h2>From Black & White to 4K</h2>
  <p>This is why modern AI feels so "smart." It doesn't just vomit words; it understands the nuance, the tone, and the subtle links between ideas, even in very long documents.</p>
  <p>The "Transformer" is what turned simple text generators into the reasoning engines we use today. It gave the machine the ability to focus.</p>
  <p>For a passionate tech guy like me, seeing this shift was like watching TV go from black & white to 4K. It opens up endless possibilities for solving complex problems.</p>
  <p>👇 <strong>Question for you:</strong> Before ChatGPT, do you remember talking to "Chatbots" that couldn't remember what you said 10 seconds ago? That was the world before Transformers. Tell me about your worst chatbot experience!</p>
  <p class="text-sm text-gray-500 mt-4">PS: Now we have the full picture: Prediction + Vectors + Attention. But the AI is still "frozen" in time. In the next post, I will explain how we give AI a fresh memory using a technique called RAG (Retrieval Augmented Generation). 🧠</p>
</section>
`;

const tocJSON_EN = JSON.stringify([
    { id: 'intro', title: 'Context' },
    { id: 'transformer', title: 'Transformer' },
    { id: 'conclusion', title: '4K Era' },
]);

const contentHTML_FR = `
<header class="mb-10">
  <p class="lead text-xl text-gray-600 dark:text-gray-300 font-light italic">
    "Le 'T' signifie Transformer. C'est la technologie qui a tout changé."
  </p>
</header>
<section id="intro" class="mb-12">
  <h2>La Pièce Manquante</h2>
  <p>Dans mes posts précédents, nous avons vu que l'IA "prédit" le mot suivant et transforme les données en "Vecteurs". Mais il manquait quelque chose.</p>
  <p>Comment l'IA comprend-elle le <strong>Contexte</strong> ?</p>
  <p>Prenons l'exemple du mot "Avocat". Le mot est le même. Le vecteur est le même. Mais le sens est totalement différent selon qu'on parle d'un fruit ou d'un métier.</p>
</section>
<section id="transformer" class="mb-12">
  <h2>L'Arrivée du Transformer</h2>
  <p>Les anciens modèles d'IA lisaient de gauche à droite. À la fin d'un long paragraphe, ils oubliaient souvent le début. Ils manquaient de concentration.</p>
  <p>Puis est arrivée l'architecture Transformer (Google, 2017) avec un concept révolutionnaire : "L'Attention".</p>
  <p>👨‍💻 <strong>La technique :</strong> Au lieu de lire mot à mot, un Transformer lit toute la phrase d'un coup. Il calcule les liens entre chaque mot.</p>
  <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Il lie "Avocat" à "Manger" (Fruit).</li>
      <li>Ou "Avocat" à "Tribunal" (Métier).</li>
  </ul>
  <p>Il apprend sur quoi porter son "attention".</p>
</section>
<section id="conclusion" class="mb-12">
  <h2>Du Noir & Blanc à la 4K</h2>
  <p>C'est pourquoi l'IA moderne semble si "intelligente". Elle ne vomit pas des mots ; elle comprend la nuance et les liens subtils.</p>
  <p>Le "Transformer" a transformé de simples générateurs de texte en moteurs de raisonnement. Pour un passionné comme moi, c'était comme passer de la TV noir et blanc à la 4K.</p>
  <p>👇 <strong>Question :</strong> Vous souvenez-vous des "Chatbots" d'avant qui oubliaient tout après 10 secondes ? Racontez-moi votre pire expérience !</p>
  <p class="text-sm text-gray-500 mt-4">PS : Prochain post : Comment donner une mémoire fraîche à l'IA avec le RAG (Retrieval Augmented Generation). 🧠</p>
</section>
`;

const tocJSON_FR = JSON.stringify([
    { id: 'intro', title: 'Le Contexte' },
    { id: 'transformer', title: 'Le Transformer' },
    { id: 'conclusion', title: 'L\'Ère 4K' },
]);

const articleData = {
    slug: 'what-the-t-stands-for',
    date: '2026-01-03',
    readTime: '5 min',
    category: 'ai',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    
    // English Content
    title_en: "What the 'T' in ChatGPT Stands For",
    subtitle_en: 'It stands for Transformer. The tech that changed everything.',
    summary_en: 'Discover the Transformer architecture, the "Attention" mechanism, and why modern AI can understand context unlike older chatbots.',
    content_en: contentHTML_EN,
    toc_en: tocJSON_EN,

    // French Content
    title_fr: "Que signifie le 'T' de ChatGPT ?",
    subtitle_fr: 'Il signifie Transformer. La technologie qui a tout changé.',
    summary_fr: 'Découvrez l\'architecture Transformer, le mécanisme d\'"Attention", et pourquoi l\'IA moderne comprend le contexte contrairement aux anciens chatbots.',
    content_fr: contentHTML_FR,
    toc_fr: tocJSON_FR,
};

// ------------------------------------------------------------------
// 4. PUSH VERS APPWRITE
// ------------------------------------------------------------------
async function pushArticle() {
    console.log(`🚀 Pushing article "${articleData.slug}" to Appwrite...`);
    console.log(`   Endpoint: ${ENDPOINT}`);
    console.log(`   Project: ${PROJECT_ID}`);
    console.log(`   Database: ${DATABASE_ID}`);
    console.log(`   Collection: ${COLLECTION_ID}`);

    try {
        // 1. Check if article exists
        console.log('🔍 Checking for existing article...');
        const existing = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Query.equal('slug', articleData.slug)
            ]
        );
        
        if (existing.documents.length > 0) {
            const docId = existing.documents[0].$id;
            console.log(`⚠️ Article already exists (ID: ${docId}). Updating...`);
            await databases.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                docId,
                articleData
            );
            console.log('✅ Article updated successfully!');
        } else {
            console.log('✨ Creating new article...');
            await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                articleData
            );
            console.log('✅ Article created successfully!');
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
        if (error.code === 401) {
            console.error('👉 Check your API KEY permissions. It needs "documents.read" and "documents.write".');
        }
    }
}

pushArticle();
