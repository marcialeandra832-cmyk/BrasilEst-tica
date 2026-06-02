/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Droplet, 
  Heart, 
  ShieldCheck, 
  CircleDot, 
  Clock, 
  Activity, 
  PlusCircle, 
  X,
  CheckCircle2,
  Trophy,
  UserCheck
} from 'lucide-react';
import { TREATMENTS } from '../data';
import { Treatment } from '../types';

interface ServiceSectionProps {
  onSquadSelect: (id: string) => void;
  selectedSquadIds: string[];
}

export default function ServiceSection({ onSquadSelect, selectedSquadIds }: ServiceSectionProps) {
  const [activeDetailTreatment, setActiveDetailTreatment] = useState<Treatment | null>(null);

  // Helper to map icon names to Lucide icons
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Droplet':
        return <Droplet className={className} />;
      case 'Heart':
        return <Heart className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="services-section" className="relative py-24 bg-[#0a101d] border-t border-yellow-500/15 overflow-hidden">
      {/* Subtle field grid design representing the pitch of beauty */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#070b12] to-transparent" />
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] border border-emerald-500/10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-widest font-mono text-yellow-500 font-bold block mb-3">
            &mdash; O Alinhamento Inicial de Alta Performance &mdash;
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
            Os 4 Convocados para o Seu <span className="italic font-bold text-yellow-400">Resultado Extraordinário</span>
          </h2>
          <p className="mt-4 font-sans text-gray-400/90 font-light leading-relaxed">
            Desenvolvido sob o mais alto escalão clínico, cada procedimento representa uma peça-chave do seu tático de beleza. Escolha seu time de tratamentos e suba ao topo do pódio da autoconfiança de forma triunfal.
          </p>
        </div>

        {/* 4 Columns of High Performance Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TREATMENTS.map((treatment, idx) => {
            const isSelected = selectedSquadIds.includes(treatment.id);
            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative group bg-[#111827]/70 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-yellow-500/5 ${
                  isSelected 
                    ? 'border-yellow-500 bg-[#111827]/90 ring-1 ring-yellow-500/50' 
                    : 'border-yellow-500/10 hover:border-yellow-500/30'
                }`}
              >
                {/* Position/Concept Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-yellow-500/90 font-semibold px-2.5 py-1 rounded bg-yellow-500/10 border border-yellow-500/20">
                    Posição: {treatment.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800/80 text-yellow-500 group-hover:scale-110 transition-transform">
                    {renderIcon(treatment.iconName, 'w-4.5 h-4.5')}
                  </div>
                </div>

                {/* Conversion Focused Luxury Medical/Aesthetic Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-4 border border-yellow-500/10 bg-slate-900 shadow-inner">
                  <img 
                    src={treatment.imageUrl} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#111827] to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Service Details */}
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {treatment.category}
                </span>
                
                <h3 className="font-serif text-xl text-[#fcf8f0] font-medium mt-1">
                  {treatment.title}
                </h3>

                {/* Sub-line analogy requested explicitly */}
                <p className="text-xs text-yellow-500 font-mono tracking-wide mt-2 min-h-[32px] font-semibold">
                  "{treatment.nickname}"
                </p>

                {/* General description */}
                <p className="font-sans text-xs text-gray-400 mt-4 leading-relaxed flex-grow">
                  {treatment.description}
                </p>

                {/* Match Statistics Analog */}
                <div className="mt-6 py-3 border-t border-b border-yellow-500/5 grid grid-cols-2 gap-2 text-center text-gray-400 font-mono text-[10px]">
                  <div>
                    <span className="block text-gray-500 uppercase text-[8px] tracking-widest">Procedimento</span>
                    <span className="block font-semibold mt-0.5 text-gray-300">{treatment.duration}</span>
                  </div>
                  <div className="border-l border-yellow-500/5">
                    <span className="block text-gray-500 uppercase text-[8px] tracking-widest">Downtime</span>
                    <span className="block font-semibold mt-0.5 text-gray-300">{treatment.recovery}</span>
                  </div>
                </div>

                {/* Key Benefits snippet */}
                <ul className="mt-5 space-y-2 text-[11px] text-gray-300">
                  {treatment.benefits.slice(0, 2).map((b, i) => (
                    <li key={i} className="flex items-start">
                      <CircleDot className="w-3 h-3 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="mt-8 pt-4 border-t border-yellow-500/5 flex items-center gap-2">
                  <button
                    id={`btn-details-${treatment.id}`}
                    onClick={() => setActiveDetailTreatment(treatment)}
                    className="flex-1 px-3 py-2.5 rounded-lg border border-yellow-500/10 hover:border-yellow-500/25 text-gray-300 hover:text-white text-[10px] tracking-wider uppercase font-mono transition-all text-center"
                  >
                    Análise Tática
                  </button>

                  <button
                    id={`btn-convoke-${treatment.id}`}
                    onClick={() => onSquadSelect(treatment.id)}
                    className={`px-3 py-2.5 rounded-lg flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500' 
                        : 'bg-yellow-500 text-[#070b12] hover:bg-yellow-400 border border-transparent'
                    }`}
                    title={isSelected ? "Tratamento Convocado" : "Convocar Tratamento"}
                  >
                    {isSelected ? (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Convocado
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider">
                        <PlusCircle className="w-3.5 h-3.5" /> Entrar em Campo
                      </span>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Drawer/Modal/Detail View Overlay for Elegant Analysis */}
        <AnimatePresence>
          {activeDetailTreatment && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070b12]/95 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-[#0d1627] border border-yellow-500/20 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8"
              >
                <button 
                  onClick={() => setActiveDetailTreatment(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-yellow-500 uppercase px-2 py-0.5 rounded bg-yellow-500/10">
                    DIAGNÓSTICO TÁTICO
                  </span>
                  <Trophy className="w-4 h-4 text-yellow-500" />
                </div>

                <h3 className="font-serif text-3xl text-white font-semibold">
                  {activeDetailTreatment.title}
                </h3>
                <p className="text-yellow-500 font-mono tracking-wide text-xs mt-1.5">
                  "{activeDetailTreatment.nickname}"
                </p>

                {/* Tactical visual banner inside modal to spark conversion intent */}
                <div className="relative h-44 w-full overflow-hidden rounded-xl mt-5 border border-yellow-500/15">
                  <img 
                    src={activeDetailTreatment.imageUrl} 
                    alt={activeDetailTreatment.title} 
                    className="w-full h-full object-cover brightness-90 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1627] via-transparent to-transparent pointer-events-none" />
                </div>

                <p className="mt-5 font-sans text-gray-300 text-sm leading-relaxed italic">
                  {activeDetailTreatment.detailsCopy}
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#111d33] p-4 rounded-xl border border-yellow-500/5">
                    <span className="block text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-2">
                      Ficha do Procedimento
                    </span>
                    <ul className="space-y-2 text-xs text-gray-300">
                      <li><strong className="text-yellow-400">Tempo de aplicação:</strong> {activeDetailTreatment.duration}</li>
                      <li><strong className="text-yellow-400">Tempo de repouso:</strong> {activeDetailTreatment.recovery}</li>
                      <li><strong className="text-yellow-400">Nível de dor:</strong> Mínimo, anestesia tópica de alto padrão</li>
                      <li><strong className="text-yellow-400">Frequência recomendada:</strong> De acordo com planejamento médico</li>
                    </ul>
                  </div>

                  <div className="bg-[#111d33] p-4 rounded-xl border border-yellow-500/5">
                    <span className="block text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-2">
                      Objetivos Clínicos
                    </span>
                    <ul className="space-y-2 text-xs text-gray-300">
                      {activeDetailTreatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-yellow-500 mr-2 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-3">
                  <button
                    onClick={() => setActiveDetailTreatment(null)}
                    className="px-5 py-2.5 rounded-lg font-mono text-xs text-gray-400 hover:text-white transition-all uppercase"
                  >
                    Fechar Relatório
                  </button>
                  <button
                    onClick={() => {
                      onSquadSelect(activeDetailTreatment.id);
                      setActiveDetailTreatment(null);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-yellow-500 text-[#070b12] hover:bg-yellow-400 font-mono text-xs font-bold uppercase transition-all"
                  >
                    {selectedSquadIds.includes(activeDetailTreatment.id) 
                      ? 'Desconvocar' 
                      : 'Selecionar para meu Time'
                    }
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
