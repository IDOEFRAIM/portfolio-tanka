import { Hero, Philosophy, Categories, FinalCTA, HookProject } from "../../components_/accueil";
// app/page.jsx (ou pages/index.js)


// app/[locale]/page.tsx

const Page = () => {
  return (
    <main className="bg-black min-h-screen flex flex-col">
      <Hero />
      <Philosophy />
      <Categories />
      <HookProject />
      <FinalCTA />
    </main>
  );
};

export default Page;