import { Article } from './types';

export const mockArticles: Article[] = [
    {
        slug: 'modern-web-development-2024',
        title: 'Modern Web Development in 2024',
        subtitle: 'A comprehensive guide to the latest trends and technologies.',
        summary: 'Explore the shifting landscape of web development, from Next.js 14 to Server Actions and the rise of AI-assisted coding.',
        date: '2024-03-15',
        readTime: '8 min',
        category: 'web',
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop',
        toc: [
            { id: 'intro', title: 'Introduction' },
            { id: 'nextjs', title: 'The Rise of Next.js 14' },
            { id: 'ai', title: 'AI in Web Dev' },
            { id: 'conclusion', title: 'Conclusion' }
        ],
        content: `
            <p>The web development landscape is constantly evolving. As we move through 2024, several key trends are shaping how we build and deploy applications.</p>
            <h2 id="nextjs">The Rise of Next.js 14</h2>
            <p>Next.js 14 has introduced Server Actions, simplifying data mutations and mental models for developers. The App Router is now stable and widely adopted.</p>
            <h2 id="ai">AI in Web Dev</h2>
            <p>Tools like GitHub Copilot and ChatGPT are becoming integral parts of the developer workflow, not replacing developers but augmenting their capabilities.</p>
        `,
        title_fr: 'Le Développement Web Moderne en 2024',
        title_en: 'Modern Web Development in 2024',
        subtitle_fr: 'Un guide complet des dernières tendances et technologies.',
        subtitle_en: 'A comprehensive guide to the latest trends and technologies.',
        summary_fr: 'Explorez le paysage changeant du développement web, de Next.js 14 aux Server Actions et l\'essor du codage assisté par IA.',
        summary_en: 'Explore the shifting landscape of web development, from Next.js 14 to Server Actions and the rise of AI-assisted coding.',
        content_fr: `
            <p>Le paysage du développement web évolue constamment. En 2024, plusieurs tendances clés façonnent la manière dont nous construisons et déployons des applications.</p>
            <h2 id="nextjs">L'essor de Next.js 14</h2>
            <p>Next.js 14 a introduit les Server Actions, simplifiant les mutations de données et les modèles mentaux pour les développeurs.</p>
        `,
        content_en: `
            <p>The web development landscape is constantly evolving. As we move through 2024, several key trends are shaping how we build and deploy applications.</p>
            <h2 id="nextjs">The Rise of Next.js 14</h2>
            <p>Next.js 14 has introduced Server Actions, simplifying data mutations and mental models for developers.</p>
        `
    },
    {
        slug: 'introduction-to-mobile-dev-flutter',
        title: 'Introduction to Mobile Dev with Flutter',
        subtitle: 'Building cross-platform apps with a single codebase.',
        summary: 'Why Flutter continues to be a top choice for startups and enterprises looking for efficiency and performance.',
        date: '2024-02-28',
        readTime: '6 min',
        category: 'mobile',
        coverImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop',
        toc: [
            { id: 'why-flutter', title: 'Why Flutter?' },
            { id: 'widgets', title: 'Understanding Widgets' },
            { id: 'dart', title: 'The Dart Language' }
        ],
        content: `
            <p>Flutter has revolutionized cross-platform development. By compiling to native code, it ensures high performance.</p>
            <h2 id="why-flutter">Why Flutter?</h2>
            <p>Hot Reload, expressive UI, and native performance make it a compelling choice.</p>
        `,
        title_fr: 'Introduction au Dev Mobile avec Flutter',
        title_en: 'Introduction to Mobile Dev with Flutter',
        subtitle_fr: 'Créer des applications multiplateformes avec une seule base de code.',
        subtitle_en: 'Building cross-platform apps with a single codebase.',
        summary_fr: 'Pourquoi Flutter continue d\'être un choix de premier ordre pour les startups et les entreprises.',
        summary_en: 'Why Flutter continues to be a top choice for startups and enterprises looking for efficiency and performance.',
        content_fr: `
            <p>Flutter a révolutionné le développement multiplateforme. En compilant en code natif, il assure de hautes performances.</p>
        `,
        content_en: `
            <p>Flutter has revolutionized cross-platform development. By compiling to native code, it ensures high performance.</p>
        `
    },
    {
        slug: 'artificial-intelligence-impact',
        title: 'The Impact of AI on Data Science',
        subtitle: 'How Large Language Models are changing the field.',
        summary: 'From automated EDA to code generation, found out how LLMs are assisting data scientists.',
        date: '2024-01-10',
        readTime: '10 min',
        category: 'ai',
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop',
        toc: [
            { id: 'llms', title: 'Large Language Models' },
            { id: 'automation', title: 'Automating EDA' }
        ],
        content: `
            <p>Data Science is undergoing a paradigm shift with the introduction of accessible LLMs.</p>
        `,
        title_fr: 'L\'Impact de l\'IA sur la Data Science',
        title_en: 'The Impact of AI on Data Science',
        subtitle_fr: 'Comment les grands modèles de langage changent le domaine.',
        subtitle_en: 'How Large Language Models are changing the field.',
        summary_fr: 'De l\'analyse exploratoire automatisée à la génération de code, découvrez comment les LLM assistent les data scientists.',
        summary_en: 'From automated EDA to code generation, found out how LLMs are assisting data scientists.',
        content_fr: `
            <p>La Data Science subit un changement de paradigme avec l'introduction de LLM accessibles.</p>
        `,
        content_en: `
            <p>Data Science is undergoing a paradigm shift with the introduction of accessible LLMs.</p>
        `
    },
    {
        slug: 'understanding-rag-retrieval-augmented-generation',
        title: 'RAG: The Smartest Way to Use AI',
        subtitle: 'Why intelligence without current information is useless for business.',
        summary: 'Discover how Retrieval Augmented Generation (RAG) connects LLMs to your private data, turning generic chatbots into accurate business tools.',
        date: '2026-01-09',
        readTime: '4 min',
        category: 'ai',
        coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
        toc: [
            { id: 'limitation', title: 'The Limitation of AI' },
            { id: 'solution', title: 'Enter RAG' },
            { id: 'technical', title: 'How It Works' },
            { id: 'conclusion', title: 'The Bottom Line' }
        ],
        content: `
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
        `,
        title_fr: 'RAG : La Méthode Intelligente pour l\'IA',
        title_en: 'RAG: The Smartest Way to Use AI',
        subtitle_fr: 'Pourquoi l\'intelligence sans information actuelle est inutile pour le business.',
        subtitle_en: 'Why intelligence without current information is useless for business.',
        summary_fr: 'Découvrez comment la RAG connecte les LLM à vos données privées, transformant les chatbots génériques en outils d\'entreprise précis.',
        summary_en: 'Discover how Retrieval Augmented Generation (RAG) connects LLMs to your private data, turning generic chatbots into accurate business tools.',
        content_fr: `
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
        `,
        content_en: `
            <p>Imagine hiring a genius, but they have been in a coma since 2023.</p>
            <p>They are incredibly smart. They can write code, solve math problems, and write poetry. But if you ask them: "What is the stock price of Apple today?" they will have no idea.</p>
            
            <h2 id="limitation">The Limitation of Standard AI</h2>
            <p>This is the biggest limitation of standard AI models. Their knowledge is "frozen" in time. As someone who has been exploring these systems since I was a teenager, I quickly realized that intelligence without current information is useless for real business problems.</p>
            
            <h2 id="solution">Enter RAG (Retrieval Augmented Generation)</h2>
            <p>Think of it this way:</p>
            <ul>
                <li><strong>Standard ChatGPT:</strong> Taking a difficult exam relying <strong>only</strong> on your memory.</li>
                <li><strong>RAG:</strong> Taking the same exam, but with an <strong>open textbook</strong> next to you.</li>
            </ul>

            <h2 id="technical">The Technical Bit</h2>
            <p>RAG connects the "Brain" (the LLM) to a "Library" (your private data, PDFs, or live internet access). It works in 3 steps: Retrieve, Augment, Generate.</p>

            <h2 id="conclusion">The Bottom Line</h2>
            <p>With RAG, we stop asking AI to be a database of facts. We let it do what it does best: <strong>Reasoning.</strong></p>
        `,
        toc_fr: [
            { id: 'limitation', title: 'La Limitation de l\'IA' },
            { id: 'solution', title: 'La Solution RAG' },
            { id: 'technical', title: 'Fonctionnement Technique' },
            { id: 'conclusion', title: 'Conclusion' }
        ],
        toc_en: [
            { id: 'limitation', title: 'The Limitation of AI' },
            { id: 'solution', title: 'Enter RAG' },
            { id: 'technical', title: 'How It Works' },
            { id: 'conclusion', title: 'The Bottom Line' }
        ]
    }
];
