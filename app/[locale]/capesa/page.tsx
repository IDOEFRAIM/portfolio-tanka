'use client'
import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle,
  Menu,
  X,
  TrendingUp,
  Globe
} from 'lucide-react';

const page = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gestion du scroll spy pour la navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'opportunites', 'ecoles', 'details', 'dossier', 'conseils'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const NavItem = ({ id, icon: Icon, label }: { id: string; icon: any; label: string }) => (
    <button
      onClick={() => scrollTo(id)}
      className={`flex items-center space-x-3 w-full px-6 py-4 transition-all duration-300 group
        ${activeSection === id 
          ? 'bg-blue-600/20 border-r-4 border-blue-500 text-blue-400' 
          : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}
    >
      <Icon className={`w-5 h-5 ${activeSection === id ? 'text-blue-400' : 'group-hover:text-blue-300'}`} />
      <span className="font-medium tracking-wide">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          CAPESA 2026
        </span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation (Desktop) */}
      <nav className={`fixed inset-y-0 left-0 w-72 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 transform transition-transform duration-300 z-40 lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} pt-20 lg:pt-0`}>
        <div className="h-full flex flex-col">
          <div className="p-8 hidden lg:block">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CAPESA <br/> BURKINA
            </h1>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">Session 2026</p>
          </div>

          <div className="flex-1 overflow-y-auto py-4 space-y-1">
            <NavItem id="home" icon={Globe} label="Accueil" />
            <NavItem id="opportunites" icon={TrendingUp} label="Pourquoi ce concours ?" />
            <NavItem id="ecoles" icon={GraduationCap} label="Les Écoles (ISE/AS)" />
            <NavItem id="details" icon={Calendar} label="Dates & Épreuves" />
            <NavItem id="dossier" icon={FileText} label="Dossier & Conditions" />
            <NavItem id="conseils" icon={CheckCircle2} label="Conseils de préparation" />
          </div>

          <div className="p-6 border-t border-white/5">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 shadow-lg shadow-blue-900/20">
              <p className="text-sm font-semibold text-white">Date limite</p>
              <p className="text-2xl font-bold text-white mt-1">19 Déc 2025</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-72 p-6 lg:p-12 max-w-5xl mx-auto space-y-24 pt-24 lg:pt-12">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center relative">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Inscriptions Ouvertes</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Deviens l'élite de la <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Data Science en Afrique
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Le Ministère de la Fonction Publique du Burkina Faso lance le recrutement pour les prestigieuses écoles de statistique (ENSEA, ISSEA, ENSAE). Une carrière internationale vous attend.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => scrollTo('dossier')} className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Comment Postuler
              </button>
              <button onClick={() => scrollTo('opportunites')} className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                Découvrir les métiers
              </button>
            </div>
          </div>
        </section>

        {/* Opportunités */}
        <section id="opportunites" className="space-y-12">
          <div className="border-l-4 border-purple-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Pourquoi tenter ce concours ?</h2>
            <p className="text-slate-400 mt-2">Plus qu'un examen, c'est moyen de rejoindre des ecoles d'excellence en Afrique</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Carrière Internationale" icon={<Globe className="text-blue-400"/>}>
              Les diplômés travaillent pour la Banque Mondiale, le FMI, les banques centrales (BCEAO), les instituts de sondage ou les grandes firmes de Data Science partout dans le monde.
            </Card>
            <Card title="Formation d'Excellence Gratuite" icon={<BookOpen className="text-purple-400"/>}>
              Ces écoles sont des centres d'excellence de l'UEMOA et de la CEMAC. La formation est de classe mondiale, souvent accompagnée de bourses pour les lauréats.L'etat BURKINABE offre des bourses aux admis.
            </Card>
            <Card title="Forte Demande" icon={<TrendingUp className="text-green-400"/>}>
              Avec le boom de l'IA, le besoin des statisticien se fait de plus en plus sentir car l'IA est principalement base sur les lois statistique et la probabilite. Les maitriser offrent une puissance de frappe en plus.
            </Card>
            <Card title="Le Réseau" icon={<Briefcase className="text-pink-400"/>}>
              Intégrez un réseau puissant d'anciens élèves occupant des postes de décision dans toute l'Afrique(Banque,star-up de renommee...).
            </Card>
          </div>
        </section>

        {/* Ecoles et Métiers */}
        <section id="ecoles" className="space-y-12">
           <div className="border-l-4 border-blue-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Les Filières & Écoles</h2>
            <p className="text-slate-400 mt-2">Comprendre la différence entre ISE et AS.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ISE */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all group">
              <div className="bg-blue-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ingénieurs Statisticiens Économistes (ISE)</h3>
              <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full mb-4">Cycle Long (5 ans)</span>
              <p className="text-slate-400 leading-relaxed mb-6">
                Le "top niveau". Ils conçoivent les modèles mathématiques, analysent les politiques économiques et dirigent les études complexes.
                <br/><br/>
                <strong>Profil :</strong> Très fort en Mathématiques (Niveau Bac C/E).
              </p>
              <div className="flex gap-2">
                <SchoolTag name="ENSEA Abidjan" />
                <SchoolTag name="ENSAE Dakar" />
                <SchoolTag name="ISSEA Yaoundé" />
              </div>
            </div>

             {/* AS */}
             <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 rounded-3xl p-8 hover:border-purple-500/30 transition-all group">
              <div className="bg-purple-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Analystes Statisticiens (AS)</h3>
              <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-4">Formation de 3 ans</span>
              <p className="text-slate-400 leading-relaxed mb-6">
                Les techniciens ou analystes de la donnée. Ils gèrent la collecte, le traitement informatique et la production des indicateurs statistiques. Indispensables sur le terrain.
                <br/><br/>
                <strong>Profil :</strong> Bon niveau en Maths et logique.
              </p>
              <div className="flex gap-2">
                <SchoolTag name="ENSEA Abidjan" />
                <SchoolTag name="ISSEA Yaoundé" />
                <SchoolTag name="ENSAE Dakar" />
              </div>
            </div>
          </div>
        </section>

        {/* Détails Pratiques */}
        <section id="details" className="space-y-12">
          <div className="border-l-4 border-yellow-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Calendrier des Épreuves</h2>
            <p className="text-slate-400 mt-2">Session 2026 - À noter impérativement.</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-white/5 rounded-3xl p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calendar className="w-64 h-64" />
            </div>

            <div className="relative z-10 grid gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="text-yellow-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Présélection</h4>
                  <p className="text-yellow-400 font-mono mt-1">Dimanche 18 Janvier 2026</p>
                  <p className="text-slate-400 text-sm mt-1">Seulement si le nombre de candidats dépasse 100.Ca vise principalement a selectionne 100 personnes qui vont compose les epreuves definitives...</p>
                </div>
              </div>

              <div className="h-px bg-white/10 w-full"></div>

              <div>
                <h4 className="text-xl font-bold text-white mb-6">Épreuves Écrites (7 & 8 Avril)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-500 text-sm border-b border-white/10">
                        <th className="py-3 pr-4">Épreuve</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Horaire</th>
                        <th className="py-3 px-4 text-right">Coeff.</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-4 pr-4 font-medium text-blue-300">1ère Composition Mathématiques</td>
                        <td className="py-4 px-4">Mar 07 Avril</td>
                        <td className="py-4 px-4 font-mono text-sm">08H30 - 12H30</td>
                        <td className="py-4 px-4 text-right">30</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 pr-4 font-medium text-purple-300">Ordre Général</td>
                        <td className="py-4 px-4">Mar 07 Avril</td>
                        <td className="py-4 px-4 font-mono text-sm">14H30 - 17H30</td>
                        <td className="py-4 px-4 text-right">25</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 pr-4 font-medium text-blue-300">2ème Composition Mathématiques</td>
                        <td className="py-4 px-4">Mer 08 Avril</td>
                        <td className="py-4 px-4 font-mono text-sm">08H30 - 11H30</td>
                        <td className="py-4 px-4 text-right">30</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-medium text-green-300">Contraction de Texte</td>
                        <td className="py-4 px-4">Mer 08 Avril</td>
                        <td className="py-4 px-4 font-mono text-sm">14H30 - 17H30</td>
                        <td className="py-4 px-4 text-right">15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dossier */}
        <section id="dossier" className="space-y-12">
          <div className="border-l-4 border-green-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Constituer son Dossier</h2>
            <p className="text-slate-400 mt-2">Dépôt à l'INSD (Ouaga 2000).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="text-green-400"/> Infos Réception
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Période</span>
                  <span className="font-bold text-white">08 au 19 Décembre 2025</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Jours</span>
                  <span className="font-bold text-white">Lundi au Samedi</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Heures</span>
                  <span className="font-bold text-white">08h00 - 14h00</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Lieu</span>
                  <span className="font-bold text-white text-right">INSD, Ouaga 2000</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-green-400"/> Documents Requis
              </h3>
              <ul className="space-y-3">
                {[
                  "Demande manuscrite timbrée (200F)",
                  "Extrait d'acte de naissance (Légalisé)",
                  "CNIB (Légalisée)",
                  "Certificat visite & contre-visite (Timbre 300F)",
                  "CV daté et signé",
                  "Fiche de candidature (à retirer sur place)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-sm flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                Important : Vous devez indiquer votre ordre de préférence entre ISE et AS, sinon rejet du dossier.
              </div>
            </div>
          </div>
        </section>

        {/* Conseils */}
        <section id="conseils" className="space-y-12 pb-20">
          <div className="border-l-4 border-pink-500 pl-6">
            <h2 className="text-3xl font-bold text-white">Conseils Stratégiques</h2>
            <p className="text-slate-400 mt-2">Pour mettre toutes les chances de votre côté.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TipCard 
              number="01" 
              title="Maîtriser le Programme de la C" 
              desc="Le concours est basé sur le programme de Terminale C. Essayez de maitriser ce que les eleves de la C ou E font. Un exemple concret,quand tu veux deriver en meme temps...Si tu fais ca on va barrer. Tu dois d'abord montrer que c'est derivable avant de derive. Révisez l'analyse, l'algèbre et les probabilités en profondeur. Soyez rigoureux dans la rédaction." 
            />
            <TipCard 
              number="02" 
              title="Gérer le Temps" 
              desc="Les épreuves sont longues (4h pour les maths).Faut pas vouloir tout faire,surtout pour la phase eliminatoire.Le sujete comporte generallement 7 exercices. Lis tout le sujet et choisis ce que tu peux faire.Sois humble, en voulant trop,on perd tout. En plus, y a toujours un exercice tres complique,quasiment impossible pour un eleve normal de terminal.C'est facile pour le reconnaitre,tu vas rien comprendre. Concentre toi sur le reste. Nombreux ont eu le concours sans resoudre une seule question de l'exercice complique. Tu maximise sur le reste. Essayez de revoir les anciens sujet. Cherchez sur google le site du capesa,y'a ca laba. Enplus ,y'a les remarques et remarques importantes. Lisez les ,c'est important. Ca vous evite de refaire les memes erreurs. N'essayez pas forcement de finir. Concentrer vous sur la redaction, c'est ca qui va faire la difference. Bien Finir vaut mieux que tout finir et Mal finir" 
            />
            <TipCard 
              number="03" 
              title="L'EXERCICE I est eliminatoire" 
              desc="Faites attention! A l'exercice I ,si vous n'avez pas plus de 7,on corrige pas votre copie. Lisez bien toutes les remarques,c'est dit dans le sujets. Y a des petites remarques ecrites en petit caractere. Prenez le tempsde tout lire avant de commencer"
            />
            <TipCard 
              number="04" 
              title="Culture Générale" 
              desc="L'épreuve d'Ordre Général et la Contraction de texte ne sont pas à négliger. Lisez la presse, intéressez-vous à l'actualité économique africaine." 
            />

          </div>
        </section>

      </main>
    </div>
  );
};

// Composants utilitaires pour le design

const Card = ({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
    <div className="mb-4 bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center border border-white/5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{children}</p>
  </div>
);

const SchoolTag = ({ name }: { name: string }) => (
  <span className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
    {name}
  </span>
);

const TipCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-white/5 overflow-hidden group">
    <span className="absolute -right-4 -top-4 text-8xl font-black text-white/5 z-0 group-hover:text-white/10 transition-colors">{number}</span>
    <div className="relative z-10">
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

export default page;