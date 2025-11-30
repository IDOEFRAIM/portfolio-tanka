export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link: string;
  category: 'dev' | 'ai' | 'ml';
  skills: string[];
};

export const certifications: Certification[] = [
  {
    id: "ibm-fullstack",
    title: "Introduction to devops",
    issuer: "Coursera / IBM",
    date: "Octobre 2025",
    credentialId: "IBM-FS-2025-X99",
    link: "https://www.coursera.org/account/accomplishments/verify/6Y2ALEQMZ33P?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    category: "dev",
    skills: ["devopsculture", "React", "Node.js", "Python", "DevOps"]
  },
  {
    id: "gen-ai-llm",
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI / AWS",
    date: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/MFT5OMGAN2HF?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    category: "ai",
    skills: ["Transformers", "BERT", "Fine-tuning", "PEFT", "RLHF"]
  },
  {
    id: "ml-spec",
    title: "Machine Learning Specialization",
    issuer: "Stanford / DeepLearning.AI",
    date: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/09PPUGOLA3A2?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    category: "ml",
    skills: ["Supervised Learning", "Unsupervised Learning", "Recommender Systems", "Neural Networks"]
  },
  {
    id: "ibm-rag",
    title: "IBM RAG specialization", 
    issuer: "Coursera / IBM",
    date: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/TUHXS2HH299Y?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n",
    category: "ai",
    skills: ["RAG", "Vector Databases", "LangChain","langgraph","crewai", "Prompt Engineering",
      "orchestration","reflection"
    ]
  }
];