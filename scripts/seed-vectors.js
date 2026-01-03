const sdk = require('node-appwrite');

// Configuration
const client = new sdk.Client();

const ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const PROJECT_ID = '695935b0003a4a42a41a';
const API_KEY = 'standard_ea6d32788b1040ad2cd48f9f77264552cc82de67556b7ca541861a40273bb8b5db0e7bb3c46b6d1ea2d527a52749ed9f762a8b4bd84d7a89f1daba827357cbfa15d34580373cf4cdb3b77db68908cc6681c9fa1602d7f80567a83429891d96f4ba80195152ba3e01248808aa615f1eaac4a0e45c627c7baf65127b847c39d324';
const DATABASE_ID = '6959360700271227abbc';
const COLLECTION_ID = 'articles';

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

const databases = new sdk.Databases(client);

const article = {
    slug: 'vectors-the-gps-of-meaning',
    title_en: 'The Universal Language of AI: Vectors',
    subtitle_en: 'Text, images, sound... To an AI, they are all the exact same thing.',
    summary_en: "How AI translates words, images, and sounds into numbers (vectors) to understand and manipulate concepts.",
    date: '2025-12-05',
    readTime: '5 min',
    category: 'ai',
    coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000',
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
    toc_en: JSON.stringify([
      { id: 'secret', title: 'The Secret: Vectors' },
      { id: 'algebra', title: 'Algebra with Ideas' },
      { id: 'why', title: 'Why does this matter?' },
    ]),

    // French Content (Using English as placeholder or translated if available, but for now using English structure to ensure fields exist)
    title_fr: 'Le Langage Universel de l\'IA : Les Vecteurs',
    subtitle_fr: 'Texte, images, son... Pour une IA, c\'est exactement la même chose.',
    summary_fr: "Comment l'IA traduit les mots, les images et les sons en nombres (vecteurs) pour comprendre et manipuler des concepts.",
    content_fr: `
      <header class="mb-10">
        <p class="lead text-xl text-gray-600 dark:text-gray-300">
          Dans mon dernier article, nous avons vu que l'IA est un moteur de prédiction. Mais comment une machine peut-elle "prédire" une peinture ou une mélodie ?
        </p>
        <p class="mt-4">
          Quand j'ai commencé à coder à 15 ans, je pensais que les ordinateurs avaient besoin de cerveaux séparés pour des tâches séparées. Un pour lire, un pour voir.
        </p>
      </header>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Le Secret : Les Vecteurs</h2>
        <p class="mb-4">
          J'avais tort. La beauté de l'IA moderne réside dans un concept mathématique : <strong>Les Vecteurs</strong>.
        </p>
        <p class="mb-4">
          Voici le secret : L'IA ne lit pas le mot "Pomme". L'IA ne voit pas une image d'un fruit rouge.
          Elle traduit les deux en une longue liste de nombres (coordonnées). On appelle ça un <strong>Embedding</strong>.
        </p>
        
        <div class="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">🗺️ GPS du Sens</h3>
          <p>Pensez-y comme un GPS pour le sens.</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>"Paris" et "France" sont mathématiquement proches l'un de l'autre sur cette carte.</li>
            <li>"Paris" et "Banane" sont très éloignés.</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Algèbre avec des Idées</h2>
        <p class="mb-4">
          👨‍💻 La partie technique : C'est pourquoi l'IA Générative est "Multimodale". Puisque tout est converti dans le même espace mathématique, on peut faire de l'algèbre avec des idées.
        </p>
        <p class="mb-4">
          L'exemple le plus célèbre ?
        </p>
        <div class="text-center p-8 bg-gray-100 dark:bg-white/5 rounded-xl font-mono text-lg my-6">
          Roi - Homme + Femme = Reine
        </div>
        <p>
          Ça ressemble à de la magie, mais c'est juste de la géométrie.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Pourquoi est-ce important ?</h2>
        <p class="mb-4">
          Pourquoi cela nous importe-t-il ? Cela change la façon dont nous traitons les données. Nous ne faisons plus correspondre des mots-clés ; nous faisons correspondre des concepts. C'est la base des moteurs de recherche modernes et des systèmes de recommandation.
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
    toc_fr: JSON.stringify([
      { id: 'secret', title: 'Le Secret : Les Vecteurs' },
      { id: 'algebra', title: 'Algèbre avec des Idées' },
      { id: 'why', title: 'Pourquoi est-ce important ?' },
    ]),
};

async function seed() {
    try {
        console.log('Checking if article exists...');
        const list = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [sdk.Query.equal('slug', article.slug)]
        );

        if (list.documents.length > 0) {
            console.log('Article already exists. Updating...');
            const docId = list.documents[0].$id;
            await databases.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                docId,
                article
            );
            console.log('Article updated successfully!');
        } else {
            console.log('Creating new article...');
            await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                sdk.ID.unique(),
                article
            );
            console.log('Article created successfully!');
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

seed();
