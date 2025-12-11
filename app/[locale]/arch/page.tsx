'use client'
import React from 'react';
import { 
  User, 
  Monitor, 
  Server, 
  BrainCircuit, 
  GitGraph, 
  Database, 
  CloudSun, 
  Sprout, 
  Stethoscope, 
  Coins, 
  Shovel, 
  Cpu, 
  Search, 
  ArrowRight, 
  Layers,
  MessageSquare
} from 'lucide-react';

const ArchitectureDiagram = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-800 overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Architecture AgriConnect v1.2</h1>
          <p className="text-slate-500">Système Multi-Agents Orchestré avec RAG et LLM Local</p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-6 relative">
          
          {/* --- LAYER 1: CLIENT & INTERFACE --- */}
          <div className="col-span-12 md:col-span-2 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-full flex flex-col items-center justify-center relative group hover:shadow-md transition-shadow">
              <div className="absolute -right-3 top-1/2 w-4 h-4 bg-slate-300 rounded-full hidden md:block"></div>
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <User size={32} className="text-indigo-600" />
              </div>
              <h3 className="font-bold text-lg mb-1">Utilisateur</h3>
              <p className="text-xs text-center text-slate-500">Agriculteur / Conseiller</p>
            </div>
            
            <div className="flex justify-center text-slate-400">
              <ArrowRight size={24} className="rotate-90 md:rotate-0" />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-full flex flex-col items-center justify-center relative group hover:shadow-md transition-shadow border-l-4 border-l-indigo-500">
               <div className="absolute -right-3 top-1/2 w-4 h-4 bg-slate-300 rounded-full hidden md:block"></div>
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <Monitor size={32} className="text-indigo-600" />
              </div>
              <h3 className="font-bold text-lg mb-1">Frontend</h3>
              <div className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600 mb-2">Gradio UI</div>
              <p className="text-xs text-center text-slate-500">Visualisation des traces & Chat</p>
            </div>
          </div>

          {/* Arrow Connector */}
          <div className="col-span-12 md:col-span-1 flex items-center justify-center">
             <div className="h-1 w-full bg-slate-200 relative hidden md:block">
               <div className="absolute right-0 -top-1.5 w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-slate-200 border-b-8 border-b-transparent"></div>
             </div>
             <ArrowRight className="md:hidden text-slate-300 my-4" />
          </div>

          {/* --- LAYER 2: BACKEND & ORCHESTRATOR --- */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
            
            {/* Flask API Wrapper */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-blue-500 relative">
               <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-2">
                 <Server size={20} className="text-blue-500" />
                 <h3 className="font-bold text-lg">Backend API (Flask)</h3>
               </div>
               <p className="text-sm text-slate-600 mb-4">Point d'entrée, gestion des sessions et sérialisation JSON.</p>
               
               {/* The Brain: Orchestrator */}
               <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg">CORE</div>
                 <div className="flex items-center gap-3 mb-4">
                   <BrainCircuit size={24} className="text-amber-600" />
                   <h4 className="font-bold text-amber-900">Orchestrateur (LangGraph)</h4>
                 </div>
                 
                 {/* Internal Logic Flow */}
                 <div className="space-y-3 relative">
                    <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-amber-200"></div>
                    
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center text-amber-600 shadow-sm">1</div>
                      <div className="flex-1 bg-white p-2 rounded shadow-sm text-xs font-medium border border-amber-100 flex justify-between items-center">
                        <span>Classification (Intent)</span>
                        <Search size={12} className="text-amber-400"/>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center text-amber-600 shadow-sm">2</div>
                      <div className="flex-1 bg-white p-2 rounded shadow-sm text-xs font-medium border border-amber-100 flex justify-between items-center">
                        <span>Récupération Données (Context)</span>
                        <Database size={12} className="text-amber-400"/>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center text-amber-600 shadow-sm">3</div>
                      <div className="flex-1 bg-white p-2 rounded shadow-sm text-xs font-medium border border-amber-100 flex justify-between items-center">
                        <span>Dispatch (Vers Agents)</span>
                        <GitGraph size={12} className="text-amber-400"/>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Arrow Connector */}
          <div className="col-span-12 md:col-span-1 flex items-center justify-center">
             <div className="h-1 w-full bg-slate-200 relative hidden md:block">
                <div className="absolute right-0 -top-1.5 w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-slate-200 border-b-8 border-b-transparent"></div>
             </div>
             <ArrowRight className="md:hidden text-slate-300 my-4" />
          </div>

          {/* --- LAYER 3: AGENTS & LOGIC --- */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Layers size={20} className="text-emerald-600" />
              <h3 className="font-bold text-slate-700">Couche Agents Métiers</h3>
            </div>

            {/* Agent Grid */}
            <div className="grid grid-cols-1 gap-3">
              <AgentCard 
                icon={Sprout} 
                title="Crop Management" 
                desc="Itinéraires techniques, semis, récolte" 
                color="text-emerald-600" 
                bgColor="bg-emerald-50" 
                borderColor="border-emerald-200"
              />
              <AgentCard 
                icon={Shovel} 
                title="Soil Management" 
                desc="Pédologie, fertilité, amendements" 
                color="text-amber-700" 
                bgColor="bg-amber-50" 
                borderColor="border-amber-200"
              />
              <AgentCard 
                icon={CloudSun} 
                title="Météo Agent" 
                desc="Alertes, ET0, planification" 
                color="text-sky-600" 
                bgColor="bg-sky-50" 
                borderColor="border-sky-200"
              />
              <AgentCard 
                icon={Stethoscope} 
                title="Phyto-Santé" 
                desc="Diagnostic maladies, traitements" 
                color="text-red-500" 
                bgColor="bg-red-50" 
                borderColor="border-red-200"
              />
              <AgentCard 
                icon={Coins} 
                title="Subventions" 
                desc="Aides financières & Sécurité" 
                color="text-purple-600" 
                bgColor="bg-purple-50" 
                borderColor="border-purple-200"
              />
            </div>
          </div>

        </div>

        {/* --- BOTTOM LAYER: INFRASTRUCTURE & INTELLIGENCE --- */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
            <Database size={20} /> Infrastructure de Données & IA
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* RAG */}
            <div className="bg-slate-800 text-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-lg">
              <div className="bg-slate-700 p-3 rounded-lg">
                <Search size={24} className="text-cyan-400" />
              </div>
              <div>
                <h4 className="font-bold text-white">Système RAG</h4>
                <p className="text-xs text-slate-400 mt-1">Indexation vectorielle des documents techniques (PDFs SONAGESS, etc.). Fournit le contexte métier.</p>
              </div>
            </div>

            {/* External Services */}
            <div className="bg-slate-800 text-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-lg">
              <div className="bg-slate-700 p-3 rounded-lg">
                <CloudSun size={24} className="text-orange-400" />
              </div>
              <div>
                <h4 className="font-bold text-white">Services Externes</h4>
                <p className="text-xs text-slate-400 mt-1">Connecteurs API Météo, Bases de données sols, APIs tiers pour les données temps réel.</p>
              </div>
            </div>

            {/* Local LLM */}
            <div className="bg-slate-800 text-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-lg border border-purple-500/30 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
              <div className="bg-slate-700 p-3 rounded-lg relative z-10">
                <Cpu size={24} className="text-purple-400" />
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-white">IA Locale (Ollama)</h4>
                <p className="text-xs text-slate-400 mt-1">Modèle Mistral/Llama. Utilisé pour :</p>
                <ul className="text-[10px] text-slate-400 list-disc list-inside mt-1">
                  <li>Classification d'intention</li>
                  <li>Formatage réponse agent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legend / Flow Explanation */}
        <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-500 justify-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-500"></span> Interface
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span> Contrôle API
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span> Orchestration
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Logique Métier
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-800"></span> Infrastructure
          </div>
        </div>

      </div>
    </div>
  );
};

// Sub-component for Agent Cards
const AgentCard = ({ icon: Icon, title, desc, color, bgColor, borderColor }: any) => (
  <div className={`p-4 rounded-xl border ${borderColor} ${bgColor} flex items-center justify-between relative group hover:shadow-md transition-all cursor-default`}>
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg bg-white bg-opacity-60 ${color}`}>
        <Icon size={20} />
      </div>
      <div>
        <h4 className={`font-bold text-sm ${color} brightness-75`}>{title}</h4>
        <p className="text-xs text-slate-600">{desc}</p>
      </div>
    </div>
    
    {/* Internal Flow Visualization (Mini) */}
    <div className="hidden md:flex items-center gap-1 text-[10px] text-slate-400 font-mono bg-white/50 px-2 py-1 rounded border border-slate-200/50">
        <span>Logic</span>
        <ArrowRight size={8} />
        <span>Tools</span>
        <ArrowRight size={8} />
        <MessageSquare size={10} className="text-purple-400"/>
    </div>
  </div>
);

export default ArchitectureDiagram;