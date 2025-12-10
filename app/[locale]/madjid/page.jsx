'use client'
import React, { useState, useEffect } from 'react';
import { Play, BookOpen, Brain, Wind, Lock, Battery, Wifi, MoreVertical, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const App = () => {
  // States: 'dashboard', 'work', 'pause'
  const [currentView, setCurrentView] = useState('dashboard');
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeSubject, setActiveSubject] = useState("Mécanique Quantique");

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // Speed up for demo purposes if needed, kept normal here
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
      if (currentView === 'work') {
        handleStartPause();
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft, currentView]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartSession = () => {
    setCurrentView('work');
    setTimeLeft(25 * 60);
    setIsTimerRunning(true);
  };

  const handleStartPause = () => {
    setCurrentView('pause');
    setTimeLeft(5 * 60);
    setIsTimerRunning(true);
  };

  const handleEndPause = () => {
    setCurrentView('dashboard');
    setIsTimerRunning(false);
    setTimeLeft(25 * 60);
  };

  // --- COMPOSANTS VISUELS ---

  // 1. STATUS BAR (Simulation téléphone)
  const StatusBar = ({ theme }) => (
    <div className={`flex justify-between items-center px-6 py-3 text-xs font-medium ${theme === 'light' ? 'text-green-900' : 'text-slate-400'}`}>
      <span>09:41</span>
      <div className="flex gap-2 items-center">
        <Wifi size={14} />
        <Battery size={14} />
      </div>
    </div>
  );

  // 2. DASHBOARD VIEW
  const DashboardView = () => (
    <div className="h-full flex flex-col bg-slate-900 text-white relative overflow-hidden font-sans">
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <StatusBar theme="dark" />

      {/* Header */}
      <div className="px-6 pt-6 z-10">
        <h1 className="text-2xl font-bold tracking-tight">Bonjour, Karim.</h1>
        <p className="text-slate-400 text-sm mt-1">Ton énergie est optimale ce matin.</p>
      </div>

      {/* Main Circle Ring */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 relative">
        <div className="w-64 h-64 rounded-full border-4 border-slate-800 flex items-center justify-center relative bg-slate-900/50 backdrop-blur-sm shadow-2xl shadow-blue-900/20">
           {/* Progress Ring Simulation */}
           <svg className="absolute w-full h-full rotate-[-90deg]">
             <circle cx="128" cy="128" r="124" stroke="#fbbf24" strokeWidth="4" fill="none" strokeDasharray="779" strokeDashoffset="200" className="transition-all duration-1000 ease-out" />
           </svg>
           
           <div className="text-center">
             <span className="block text-slate-400 text-xs uppercase tracking-widest mb-1">Prochaine Session</span>
             <span className="block text-2xl font-bold text-white mb-1">{activeSubject}</span>
             <span className="block text-amber-400 text-sm font-medium">Chapitre 4 : Dualité Onde-Corpuscule</span>
           </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="px-6 pb-12 z-10 flex justify-center">
        <button 
          onClick={handleStartSession}
          className="group relative flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-amber-400/20 transition-all transform hover:scale-105 active:scale-95 w-full justify-center"
        >
          <Play size={24} fill="currentColor" />
          <span>Entrer dans le Flow</span>
          <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 group-hover:ring-white/40"></div>
        </button>
      </div>

      {/* Bottom Nav Simulation */}
      <div className="absolute bottom-0 w-full h-1 bg-slate-800 mx-auto rounded-full mb-1 w-1/3 left-1/3"></div>
    </div>
  );

  // 3. WORK SESSION VIEW (Fortress Mode)
  const WorkView = () => (
    <div className="h-full flex flex-col bg-slate-950 text-white relative font-sans">
      <StatusBar theme="dark" />
      
      {/* Top Bar: Timer & Status */}
      <div className="px-4 py-3 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex justify-between items-center z-20">
        <div className="flex items-center gap-2 text-amber-400">
           <Lock size={16} />
           <span className="text-xs font-bold tracking-wider">FORTRESS MODE ACTIVE</span>
        </div>
        <div className="font-mono text-xl font-bold tracking-widest text-white">
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Split Screen Content */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        
        {/* UPPER PART: The Library/Document */}
        <div className="h-[60%] bg-white text-slate-900 p-6 overflow-y-auto relative">
           <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-slate-900 leading-tight">Dualité Onde-Corpuscule</h2>
                <p className="text-slate-500 text-xs mt-1">Physique &gt; Mécanique Quantique &gt; Chap. 4</p>
              </div>
              <BookOpen size={20} className="text-slate-400" />
           </div>
           
           <div className="font-serif text-lg leading-relaxed text-slate-700 space-y-4">
             <p>En physique classique, on considère que la matière est constituée de particules et que la lumière est une onde. Cependant, à l'échelle microscopique, cette distinction s'effondre.</p>
             <div className="p-4 bg-blue-50 border-l-4 border-blue-500 my-4 rounded-r-lg">
               <p className="text-sm italic text-blue-900"> <span className="font-bold">Hypothèse de De Broglie :</span> Toute particule en mouvement est associée à une onde de longueur d'onde λ = h/p.</p>
             </div>
             <p>Cette relation fondamentale relie la quantité de mouvement p (propriété corpusculaire) à la longueur d'onde λ (propriété ondulatoire).</p>
             <p>L'expérience des fentes de Young appliquée aux électrons démontre ce comportement de manière spectaculaire...</p>
           </div>
        </div>

        {/* LOWER PART: AI Coach */}
        <div className="h-[40%] bg-slate-900 border-t border-slate-800 flex flex-col">
           {/* AI Chat Area */}
           <div className="flex-1 p-4 space-y-4 overflow-y-auto">
             <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                 <Brain size={14} className="text-white" />
               </div>
               <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-200 shadow-sm border border-slate-700/50">
                 Je vois que tu t'attardes sur l'hypothèse de De Broglie. Veux-tu un moyen mnémotechnique pour retenir la formule ?
               </div>
             </div>
             
             {/* Fake User Input Area */}
             <div className="flex justify-end">
                <div className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-2 rounded-xl text-sm">
                  Oui, explique-moi ça simplement.
                </div>
             </div>
           </div>

           {/* Input Field Simulation */}
           <div className="p-4 bg-slate-900 border-t border-slate-800">
             <div className="h-10 bg-slate-800 rounded-full flex items-center px-4 text-slate-500 text-sm">
               Pose une question à Athena...
             </div>
             
             {/* DEMO BUTTON TO SKIP TO PAUSE */}
             <button onClick={handleStartPause} className="mt-2 w-full text-xs text-slate-600 hover:text-slate-400 text-center">
               (Démo: Forcer la Pause)
             </button>
           </div>
        </div>

      </div>
    </div>
  );

  // 4. REGENERATIVE PAUSE VIEW (Bio-Break)
  const PauseView = () => (
    <div className="h-full flex flex-col bg-emerald-50 text-emerald-900 relative font-sans overflow-hidden transition-colors duration-700">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <StatusBar theme="light" />

      <div className="flex-1 flex flex-col items-center justify-center px-8 z-10 text-center">
        
        {/* Icon Animation */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-200 mb-8 animate-bounce-slow">
           <Wind size={32} className="text-emerald-600" />
        </div>

        <h2 className="text-3xl font-bold text-emerald-900 mb-2">Respire.</h2>
        <p className="text-emerald-700 font-medium text-lg mb-8">Lâche ton écran.</p>

        {/* The Task Card */}
        <div className="bg-white/60 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-lg w-full max-w-xs transform transition-all hover:scale-105">
           <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-3 opacity-70">Mission Régénératrice</h3>
           <p className="text-xl font-serif text-emerald-900 leading-snug">
             "Ouvre la fenêtre. Regarde un point à l'horizon pendant 60 secondes pour reposer tes yeux."
           </p>
        </div>

        {/* Timer */}
        <div className="mt-12">
           <div className="text-5xl font-light font-mono text-emerald-800 tabular-nums">
             {formatTime(timeLeft)}
           </div>
           <p className="text-xs text-emerald-600 mt-2 font-medium uppercase tracking-widest">Temps de pause restant</p>
        </div>

        {/* Blocked Apps Notice */}
        <div className="mt-12 flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full opacity-70">
           <Lock size={12} className="text-emerald-700" />
           <span className="text-xs font-bold text-emerald-800">Réseaux Sociaux Bloqués</span>
        </div>

        {/* DEMO BUTTON TO END PAUSE */}
        <button onClick={handleEndPause} className="mt-6 text-xs text-emerald-400 hover:text-emerald-600">
            (Démo: Finir la Pause)
        </button>

      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8 font-sans">
      {/* PHONE CONTAINER */}
      <div className="w-full max-w-[380px] aspect-[9/19.5] bg-black rounded-[50px] shadow-2xl border-[8px] border-slate-800 overflow-hidden relative ring-4 ring-slate-900/10">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50"></div>

        {/* Views Router */}
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'work' && <WorkView />}
        {currentView === 'pause' && <PauseView />}

      </div>

      {/* Presentation Text (Desktop Only) */}
      <div className="hidden md:block absolute left-8 md:left-16 top-1/2 -translate-y-1/2 max-w-sm space-y-6">
        <div>
           <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Athena Flow.</h2>
           <p className="text-lg text-slate-600">L'Écosystème Unifié de Réussite.</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
             <div className="p-2 bg-slate-900 rounded-lg text-amber-400 mt-1"><CheckCircle size={18}/></div>
             <div>
               <h4 className="font-bold text-slate-900">Planning Contextuel</h4>
               <p className="text-sm text-slate-500">L'IA prépare ta session en fonction de tes besoins réels.</p>
             </div>
          </div>
          <div className="flex gap-4 items-start">
             <div className="p-2 bg-slate-900 rounded-lg text-amber-400 mt-1"><Lock size={18}/></div>
             <div>
               <h4 className="font-bold text-slate-900">Fortress Mode</h4>
               <p className="text-sm text-slate-500">Un écran partagé Cours + IA. Tout le reste est bloqué.</p>
             </div>
          </div>
          <div className="flex gap-4 items-start">
             <div className="p-2 bg-slate-900 rounded-lg text-amber-400 mt-1"><Wind size={18}/></div>
             <div>
               <h4 className="font-bold text-slate-900">Pauses Bio-Hackées</h4>
               <p className="text-sm text-slate-500">Déconnexion forcée pour une vraie régénération mentale.</p>
             </div>
          </div>
        </div>

        <div className="pt-8 text-xs text-slate-400 italic border-t border-slate-200">
           Interagissez avec le prototype à droite pour voir le flux.
        </div>
      </div>
    </div>
  );
};

export default App;