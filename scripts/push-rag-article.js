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
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const API_KEY = process.env.APPWRITE_API_KEY;

if (!PROJECT_ID) {
    console.error('❌ Erreur : NEXT_PUBLIC_APPWRITE_PROJECT_ID manquant dans .env');
    process.exit(1);
}

if (!API_KEY) {
    console.error('❌ Erreur : APPWRITE_API_KEY manquant.');
    process.exit(1);
}

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

const databases = new Databases(client);

// ------------------------------------------------------------------
// 3. DONNÉES DE L'ARTICLE (RAG)
// ------------------------------------------------------------------

const contentHTML_EN = `
            <p>Imagine hiring a genius, but they have been in a coma since 2023.</p>
            <p>They are incredibly smart. They can write code, solve math problems, and write poetry. But if you ask them: "What is the stock price of Apple today?" they will have no idea.</p>
            
            <h2 id="limitation">The Limitation of Standard AI</h2>
            <p>This is the biggest limitation of standard AI models. Their knowledge is "frozen" in time. As someone who has been exploring these systems since I was a teenager, I quickly realized that intelligence without current information is useless for real business problems.</p>
            <p>We don't need an AI that just "remembers" the past. We need an AI that can "research" the present.</p>

            <h2 id="solution">Enter RAG (Retrieval Augmented Generation)</h2>
            <p>Think of it this way:</p>
            <ul>
                <li><strong>Standard ChatGPT:</strong> Taking a difficult exam relying <strong>only</strong> on your memory. You might hallucinate facts just to fill the gaps.</li>
                <li><strong>RAG:</strong> Taking the same exam, but with an <strong>open textbook</strong> next to you. You look up the answer, then write it down.</li>
            </ul>

            <h2 id="technical">The Technical Bit</h2>
            <p>RAG connects the "Brain" (the LLM) to a "Library" (your private data, PDFs, or live internet access).</p>
            <p>It works in 3 steps:</p>
            <ol>
                <li><strong>Retrieve:</strong> The system searches for relevant information in your specific database (using Vectors).</li>
                <li><strong>Augment:</strong> It pastes this information into the prompt behind the scenes.</li>
                <li><strong>Generate:</strong> The AI answers your question using <em>only</em> the facts it just found.</li>
            </ol>

            <h2 id="conclusion">The Bottom Line</h2>
            <p>This is the bridge between a fun gadget and a serious business tool. With RAG, we stop asking AI to be a database of facts. We let it do what it does best: <strong>Reasoning.</strong></p>
            <p>It allows us to build systems that are accurate, up-to-date, and—most importantly—trustworthy.</p>
            <blockquote>How many times have you asked an AI for specific info about your company or a recent event, only to get a generic or outdated answer? RAG is the fix.</blockquote>
`;

const tocJSON_EN = JSON.stringify([
    { id: 'limitation', title: 'The Limitation of AI' },
    { id: 'solution', title: 'Enter RAG' },
    { id: 'technical', title: 'How It Works' },
    { id: 'conclusion', title: 'The Bottom Line' }
]);

const contentHTML_FR = `
            <p>Imaginez embaucher un génie, mais qui est dans le coma depuis 2023.</p>
            <p>Il est incroyablement intelligent. Il peut écrire du code, résoudre des problèmes de maths et écrire de la poésie. Mais si vous lui demandez : "Quel est le prix de l'action Apple aujourd'hui ?", il n'en aura aucune idée.</p>
            
            <h2 id="limitation">La Limitation de l'IA Standard</h2>
            <p>C'est la plus grande limitation des modèles d'IA standard. Leurs connaissances sont "figées" dans le temps. L'intelligence sans information actuelle est inutile pour les vrais problèmes d'entreprise.</p>
            <p>Nous n'avons pas besoin d'une IA qui se contente de "se souvenir" du passé. Nous avons besoin d'une IA capable de "rechercher" dans le présent.</p>

            <h2 id="solution">Entrez la RAG (Génération Augmentée par Récupération)</h2>
            <p>Voyez-le ainsi :</p>
            <ul>
                <li><strong>ChatGPT Standard :</strong> Passer un examen difficile en comptant <strong>uniquement</strong> sur sa mémoire. Vous pourriez inventer des faits juste pour combler les vides.</li>
                <li><strong>RAG :</strong> Passer le même examen, mais avec un <strong>manuel ouvert</strong> à côté de vous. Vous cherchez la réponse, puis vous l'écrivez.</li>
            </ul>

            <h2 id="technical">La Partie Technique</h2>
            <p>La RAG connecte le "Cerveau" (le LLM) à une "Bibliothèque" (vos données privées, PDF ou accès internet en direct).</p>
            <p>Cela fonctionne en 3 étapes :</p>
            <ol>
                <li><strong>Récupérer (Retrieve) :</strong> Le système recherche des informations pertinentes dans votre base de données spécifique.</li>
                <li><strong>Augmenter (Augment) :</strong> Il colle ces informations dans le prompt en arrière-plan.</li>
                <li><strong>Générer (Generate) :</strong> L'IA répond à votre question en utilisant <em>uniquement</em> les faits qu'elle vient de trouver.</li>
            </ol>

            <h2 id="conclusion">Conclusion</h2>
            <p>C'est le pont entre un gadget amusant et un outil business sérieux. Avec la RAG, on arrête de demander à l'IA d'être une base de données de faits. On la laisse faire ce qu'elle fait de mieux : <strong>le Raisonnement.</strong></p>
            <blockquote>Combien de fois avez-vous demandé à une IA des infos spécifiques sur votre entreprise, pour n'obtenir qu'une réponse générique ? La RAG est la solution.</blockquote>
`;

const tocJSON_FR = JSON.stringify([
    { id: 'limitation', title: 'La Limitation de l\'IA' },
    { id: 'solution', title: 'La Solution RAG' },
    { id: 'technical', title: 'Fonctionnement Technique' },
    { id: 'conclusion', title: 'Conclusion' }
]);

const articleData = {
    slug: 'understanding-rag-retrieval-augmented-generation',
    date: '2026-01-09',
    readTime: '4 min',
    category: 'ai',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    
    // English Content
    title_en: 'RAG: The Smartest Way to Use AI',
    subtitle_en: 'Why intelligence without current information is useless for business.',
    summary_en: 'Discover how Retrieval Augmented Generation (RAG) connects LLMs to your private data, turning generic chatbots into accurate business tools.',
    content_en: contentHTML_EN,
    toc_en: tocJSON_EN,

    // French Content
    title_fr: 'RAG : La Méthode Intelligente pour l\'IA',
    subtitle_fr: 'Pourquoi l\'intelligence sans information actuelle est inutile pour le business.',
    summary_fr: 'Découvrez comment la RAG connecte les LLM à vos données privées, transformant les chatbots génériques en outils d\'entreprise précis.',
    content_fr: contentHTML_FR,
    toc_fr: tocJSON_FR,
};

// ------------------------------------------------------------------
// 4. PUSH VERS APPWRITE
// ------------------------------------------------------------------
async function pushArticle() {
    console.log(`🚀 Pushing article "${articleData.slug}" to Appwrite...`);
    
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
    }
}

pushArticle();
