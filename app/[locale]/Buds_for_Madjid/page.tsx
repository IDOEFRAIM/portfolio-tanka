'use client'

import React, { useState, useEffect } from 'react';
import { Brain, Zap, Dumbbell, CheckCircle, TrendingUp, DollarSign, XCircle, Clock, ChevronRight, Camera } from 'lucide-react';

const Presentation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // IMAGES OFFICIELLES SAMSUNG (Modèle exact : Galaxy Buds FE)
  // Ces liens proviennent directement des serveurs de Samsung (CDN) pour garantir l'affichage.
  const productImages = [
    {
      // Vue d'ensemble (Blanc)
      url: "/ecouteur.webp",
      title: "Design Blanc Épuré",
      desc: "Discrétion totale pour la bibliothèque et les cours.Dans la zone"
    },
    {
      // Vue d'ensemble (Noir/Graphite)
      url: "/ecou2.jpg",
      title: "Édition Graphite",
      desc: "Finition mate professionnelle, résistant aux salissures."
    },
    {
      // Vue détaillée de l'ailette (Le point fort pour le sport)
      url: "/ecou3.jpg",
      title: "Ergonomie Sportive",
      desc: "Zoom sur l'ailette de maintien (Wing-tip) qui garantit la stabilité à la salle."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* --- EN-TÊTE / NAVIGATION --- */}
      <nav className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">EDUTECH <span className="text-blue-400">INVEST</span></span>
          </div>
          <div className="text-xs font-mono text-slate-400 border border-slate-700 px-2 py-1 rounded">
            DOSSIER #ENSAB-2025-2026(Ad astra per aspera)
          </div>
        </div>
      </nav>

      {/* --- SECTION HÉROS (TITRE PRINCIPAL) --- */}
      <header className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Effets d'arrière-plan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
              RECOMMANDATION STRATÉGIQUE
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
              L'Outil de Productivité de l'Ingénieur Moderne
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ne voyez pas cela comme des écouteurs. Voyez cela comme un <span className="text-white font-semibold">bouclier cognitif</span> pour réussir les années Prépas.
            </p>
            
            {/* Image Principale Flottante */}
            <div className="flex justify-center items-center gap-8">
              <div className="relative group cursor-default">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative animate-float">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={productImages[0].url} 
                    alt="Galaxy Buds FE White" 
                    className="relative z-10 drop-shadow-2xl w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src='https://placehold.co/400x400/1e293b/FFF?text=Image+Non+Disponible'
                    }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-white">Samsung Galaxy Buds FE</h3>
                  <p className="text-blue-400 font-mono">Technologie de Silence Actif (ANC)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- GALERIE PHOTO --- */}
      <section className="py-16 bg-slate-800/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Galerie Visuelle : Ergonomie & Design</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Affichage Principal */}
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center h-[350px] md:h-[400px] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs px-3 py-1 rounded-full font-mono z-20">
                 {productImages[activeImage].title}
               </div>
               <img 
                 src={productImages[activeImage].url} 
                 alt="Product View" 
                 className="max-h-full max-w-full object-contain transition-transform duration-700 transform group-hover:scale-110"
                 onError={(e) => {
                    e.currentTarget.onerror = null; 
                    e.currentTarget.src='https://placehold.co/400x400/E2E8F0/1E293B?text=Chargement...'
                 }}
               />
               <div className="absolute bottom-0 left-0 w-full bg-slate-900/10 p-4 text-slate-800 text-center text-sm font-medium backdrop-blur-sm">
                 {productImages[activeImage].desc}
               </div>
            </div>

            {/* Sélecteur de miniatures */}
            <div className="space-y-4">
              <p className="text-slate-400 mb-4 text-sm md:text-base">
                Sélectionnez une vue pour observer la qualité de fabrication et le système de maintien exclusif "Wing-tip" (ailettes).
              </p>
              {productImages.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-4 group ${
                    activeImage === index 
                    ? 'bg-slate-800 border-blue-500 ring-1 ring-blue-500' 
                    : 'bg-slate-900/50 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="w-14 h-14 bg-white rounded-lg p-2 flex-shrink-0">
                    <img 
                        src={img.url} 
                        alt="thumbnail" 
                        className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className={`font-semibold truncate ${activeImage === index ? 'text-blue-400' : 'text-slate-200'}`}>
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 truncate">
                      {img.desc}
                    </p>
                  </div>
                  {activeImage === index && <ChevronRight className="ml-auto text-blue-500 flex-shrink-0" size={20} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- LES 3 ARGUMENTS CLÉS --- */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Argument 1: FOCUS */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Brain className="text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Isolation Académique</h3>
              <p className="text-slate-400 mb-4 text-sm">
                La technologie <strong className="text-white">ANC (Active Noise Cancellation)</strong> crée une bulle de silence instantanée.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Focus total à la bibliothèque</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Suppression du bruit des transports</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> +40% de rétention d'information</li>
              </ul>
            </div>

            {/* Argument 2: SPORT */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <Dumbbell className="text-purple-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Discipline & Santé</h3>
              <p className="text-slate-400 mb-4 text-sm">
                Le seul modèle avec <strong className="text-white">Wing-tips (ailettes)</strong> pour un maintien absolu.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Ne tombe jamais (Musculation)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Résistant à la transpiration (IPX2)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Évacuation du stress prépa</li>
              </ul>
            </div>

            {/* Argument 3: ÉCOSYSTÈME */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors group">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <Zap className="text-emerald-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Zéro Friction</h3>
              <p className="text-slate-400 mb-4 text-sm">
                Synergie parfaite avec le <strong className="text-white">Smartphone Samsung</strong> existant.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Connexion instantanée</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Pas de bugs techniques</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Latence nulle pour les cours vidéos</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- COMPARATIF VS JBL --- */}
      <section className="py-16 border-t border-slate-800 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Pourquoi écarter l'alternative JBL ?</h2>
          <div className="grid md:grid-cols-2 gap-0 border border-slate-700 rounded-xl overflow-hidden">
             
             {/* Colonne JBL */}
             <div className="bg-slate-800/30 p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-slate-700 relative opacity-60">
                <h3 className="text-xl font-bold text-slate-400 mb-2">Casque JBL 670NC</h3>
                <div className="text-2xl font-bold text-red-400 mb-6">1000 - 1300 DH</div>
                <ul className="space-y-4 w-full">
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 shrink-0 mt-1" size={18} />
                    <span className="text-sm text-slate-400">Chauffe les oreilles (Cuir synthétique)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 shrink-0 mt-1" size={18} />
                    <span className="text-sm text-slate-400">Glisse pendant le sport (instable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 shrink-0 mt-1" size={18} />
                    <span className="text-sm text-slate-400">Encombrant en classe</span>
                  </li>
                </ul>
             </div>

             {/* Colonne SAMSUNG */}
             <div className="bg-blue-900/10 p-8 flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-500 text-xs font-bold px-3 py-1 rounded-bl-lg text-white">RECOMMANDÉ</div>
                <h3 className="text-xl font-bold text-white mb-2">Galaxy Buds FE</h3>
                <div className="text-3xl font-bold text-green-400 mb-6">900 DH</div>
                <ul className="space-y-4 w-full">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                    <span className="text-sm text-white">Maintien sportif parfait (Wingtips)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                    <span className="text-sm text-white">Discret pour la bibliothèque</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                    <span className="text-sm text-white">Économie immédiate de 200-400 DH</span>
                  </li>
                </ul>
             </div>

          </div>
        </div>
      </section>

      {/* --- ANALYSE FINANCIÈRE (ROI) --- */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-block p-3 bg-blue-500/10 rounded-full mb-6">
            <DollarSign size={32} className="text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Analyse de Rentabilité (ROI)</h2>
          <p className="text-slate-400 mb-10">
            Investissement amorti sur la durée du cycle Prépa (24 mois).
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-slate-700">
              <div className="text-center px-4">
                <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">Coût Total</div>
                <div className="text-4xl font-bold text-white">900 DH</div>
              </div>
              <div className="text-center px-4">
                <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">Coût Journalier</div>
                <div className="text-4xl font-bold text-green-400">1.23 DH<span className="text-lg text-slate-500 font-normal">/j</span></div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800">
              <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
                <Clock size={16} />
                <span>Pour le prix d'un café par semaine, 2 ans de productivité assurée.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PIED DE PAGE --- */}
      <footer className="py-12 border-t border-slate-800 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6">Conclusion du Dossier</h3>
          <p className="text-slate-400 italic mb-8">
            "L'excellence académique requiert les bons outils. Cet achat n'est pas une dépense de loisir, c'est un investissement structurel dans la réussite."
          </p>
          <a 
            href="https://wa.me/212782901778"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            VALIDER L'INVESTISSEMENT
          </a>
          <p className="mt-6 text-xs text-slate-600 uppercase font-mono">
            Document généré pour l'optimisation des études ENSAB
          </p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Presentation;