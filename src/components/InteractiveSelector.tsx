/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Trophy, ShieldCheck, Heart, Sparkles, Droplet, Users, ArrowRight } from 'lucide-react';
import { TREATMENTS } from '../data';

interface InteractiveSelectorProps {
  selectedIds: string[];
  onSelect: (id: string) => void;
  onProceedToForm: () => void;
}

export default function InteractiveSelector({ selectedIds, onSelect, onProceedToForm }: InteractiveSelectorProps) {
  
  // Tactical Positions defined for the soccer-themed Beauty grid
  const positions = [
    {
      id: 'ultraformer',
      positionName: 'A DEFESA',
      title: 'Ultraformer MPT',
      role: 'Ancoragem & Blindagem Profunda',
      icon: ShieldCheck,
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
    },
    {
      id: 'skinbooster',
      positionName: 'O MEIO-CAMPO',
      title: 'Skinbooster Radiance',
      role: 'Circulação, Glow & Nutrição',
      icon: Droplet,
      color: 'border-blue-500/40 text-blue-400 bg-blue-950/20'
    },
    {
      id: 'botox',
      positionName: 'A TÁTICA RÁPIDA',
      title: 'Botox Elegance',
      role: 'Ação Imediata & Suavidade',
      icon: Sparkles,
      color: 'border-yellow-500/40 text-yellow-400 bg-yellow-950/20'
    },
    {
      id: 'preenchimento',
      positionName: 'O ATAQUE SOBERANO',
      title: 'Sculpt & Volumetry',
      role: 'Expressividade & Autoestima Única',
      icon: Heart,
      color: 'border-rose-500/40 text-rose-400 bg-rose-950/20'
    }
  ];

  // Dynamic feedback copy based on selection size
  const getSynergyFeedback = () => {
    const total = selectedIds.length;
    if (total === 0) {
      return {
        score: '0%',
        grade: 'Alinhamento Indefinido',
        copy: 'Seu time de beleza está vazio. Selecione um ou mais jogadores de alta performance abaixo para iniciar seu tático facial.'
      };
    }
    if (total === 1) {
      return {
        score: '35%',
        grade: 'Foco Tático Focado',
        copy: 'Você escalou um excelente especialista em campo! No entanto, assim como em um grande time da Copa, a derme precisa de retaguarda profunda. Considere somar a barreira do Ultraformer para blindar sua estrutura.'
      };
    }
    if (total === 2 || total === 3) {
      return {
        score: '75%',
        grade: 'Alta Performance Coesa',
        copy: 'Combinação tática sofisticada! O entrelaçamento de estímulo sistêmico com preenchimento ou toxina produz um resultado sinérgico maravilhoso, minimizando tempos de tratamento e estendendo a longevidade estética.'
      };
    }
    return {
      score: '100%',
      grade: 'Soberania Visual Plena',
      copy: 'A formação imbatível! Defesa tridimensional (Ultraformer), meio-campo radiante (Skinbooster), finalização primorosa (Preenchimento) e tática preventiva absoluta (Botox). Seu rosto está certificado para reinar no topo do pódio.'
    };
  };

  const { score, grade, copy } = getSynergyFeedback();

  return (
    <section id="squad-builder" className="relative py-24 bg-[#070b12] border-t border-yellow-500/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent pointer-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-500/80 font-mono text-[10px] tracking-widest uppercase block mb-2">
            Simulador de Protocolo Estético
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#fcf8f0] tracking-tight">
            Escalar Meu <span className="italic font-bold text-yellow-400">Time de Estética</span>
          </h2>
          <p className="mt-4 font-sans text-xs sm:text-sm text-gray-400 font-light">
            Monte o seu plano de jogo de rejuvenescimento. Clique nos quadrantes para convocar ou dispensar jogadores e veja o índice de coesão tática do seu rosto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Tactical Pitch Visual Column */}
          <div className="lg:col-span-7 bg-[#0d1627]/90 border border-yellow-500/10 rounded-2xl p-6 relative overflow-hidden shadow-2xl h-full flex flex-col justify-between min-h-[460px]">
            {/* Center circle representing pitch */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-48 h-48 border border-yellow-500/5 rounded-full pointer-events-none" />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-48 h-48 border border-yellow-500/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-dashed border-emerald-500/5 rounded-full pointer-events-none" />
            <div className="absolute top-0 bottom-0 left-1/2 border-l border-yellow-500/5 pointer-events-none" />

            <div className="relative flex items-center justify-between border-b border-yellow-500/10 pb-4 mb-6">
              <span className="text-[10px] text-gray-400 font-mono tracking-wider">OUTLINE TÁTICO ESTÉTICO &middot; COPA '26</span>
              <span className="text-[9px] text-[#fcf8f0] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 uppercase">Suíte Digital</span>
            </div>

            {/* Field Grid representing the face segments arranged like a football squad */}
            <div className="grid grid-cols-2 gap-4 relative z-10 my-4 flex-grow">
              {positions.map((pos) => {
                const isSelected = selectedIds.includes(pos.id);
                const Icon = pos.icon;
                return (
                  <div
                    key={pos.id}
                    onClick={() => onSelect(pos.id)}
                    className={`cursor-pointer group flex flex-col justify-between p-4 rounded-xl border transition-all duration-300 relative ${
                      isSelected 
                        ? `${pos.color} ring-1 ring-yellow-500/10 shadow-lg` 
                        : 'border-yellow-500/5 bg-[#111827]/30 hover:border-yellow-500/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono tracking-widest text-[#fcf8f0]/40 group-hover:text-yellow-500 transition-colors uppercase">
                          {pos.positionName}
                        </span>
                        <Icon className={`w-4 h-4 ${isSelected ? 'animate-bounce' : 'text-gray-600'}`} />
                      </div>
                      
                      <h4 className="font-serif text-sm sm:text-base text-white mt-2 font-medium">
                        {pos.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">
                        {pos.role}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-yellow-500/5 pt-3">
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-gray-800 text-gray-500'
                      }`}>
                        {isSelected ? 'Convocado' : 'Disponível'}
                      </span>
                      <span className="text-[9px] text-[#fcf8f0]/50 hover:text-yellow-500 select-none">
                        {isSelected ? 'Remover' : 'Adicionar'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-t border-yellow-500/5 pt-4 text-center">
              <span className="text-[9px] text-gray-500 font-mono italic">
                *Você pode combinar quantos procedimentos desejar para formar sua experiência 360&deg;.
              </span>
            </div>
          </div>

          {/* Analysis Dashboard Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div className="bg-[#111827]/40 border border-yellow-500/10 p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-xl">
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 font-mono tracking-wider">STATUS FACIAL</span>
                  <p className="text-sm font-semibold text-white uppercase tracking-wider">{grade}</p>
                </div>
              </div>

              {/* Dynamic Synergy Meter */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-gray-400">Harmonização e Coesão Tática</span>
                  <span className="text-yellow-400 font-bold">{score}</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: score }}
                    transition={{ type: "spring", stiffness: 40 }}
                    className="h-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-amber-600 rounded-full"
                  />
                </div>
              </div>

              {/* Beautiful Analysis Output */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed min-h-[80px]">
                {copy}
              </p>

              {/* List of Convoked players in elite text form */}
              <div className="mt-8 pt-6 border-t border-yellow-500/5">
                <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase block mb-3">
                  Suas Escolhas de Luxo:
                </span>
                {selectedIds.length === 0 ? (
                  <p className="text-xs text-gray-500 italic">Nenhum procedimento selecionado. Clique nos cartões ao lado!</p>
                ) : (
                  <div className="space-y-2">
                    {selectedIds.map(id => {
                      const treat = TREATMENTS.find(t => t.id === id);
                      return (
                        <div key={id} className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/40 p-2 rounded-lg border border-yellow-500/5">
                          <span className="font-serif">{treat?.title}</span>
                          <span className="text-[9px] font-mono text-yellow-500 px-2 py-0.5 rounded bg-yellow-500/5">
                            {treat?.badge}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

            {/* Direct transition CTA to form */}
            <button
              id="squad-submit-cta"
              onClick={onProceedToForm}
              disabled={selectedIds.length === 0}
              className={`w-full py-4.5 rounded-full flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg ${
                selectedIds.length > 0 
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 hover:scale-[1.01] active:scale-[0.98] text-[#070b12] shadow-yellow-500/15' 
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700/50'
              }`}
            >
              <span>Prosseguir para Reservar Meu Time</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
