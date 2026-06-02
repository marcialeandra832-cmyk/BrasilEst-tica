/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Coffee, Compass, Landmark } from 'lucide-react';
import { EXCLUSIVE_BENEFITS } from '../data';

export default function ConciergeExperience() {
  return (
    <section id="exclusive" className="relative py-24 bg-[#0a101d] border-t border-yellow-500/15 overflow-hidden">
      {/* Decorative premium graphics */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Aesthetic Luxury Image with premium framing */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl transform rotate-3 scale-102 opacity-10 blur-md" />
            <div className="relative rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl bg-slate-900 aspect-[4/5] max-w-sm mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Suíte VIP de Atendimento" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:scale-105 hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#070b12]/60 mix-blend-multiply" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070b12]/90 border border-yellow-500/20 backdrop-blur-md">
                <span className="text-[10px] text-yellow-500 font-mono tracking-widest uppercase block">SUÍTE PRIVADA JARDINS</span>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  "Agendas intencionalmente distanciadas para que nenhum paciente cruze com outro no lobby. Sua privacidade no topo do pódio."
                </p>
              </div>
            </div>
          </div>

          {/* Copy Description & Features */}
          <div className="lg:col-span-7">
            <span className="text-yellow-500 font-mono text-[10px] tracking-widest uppercase block mb-3">
              &mdash; PRIVACIDADE & REQUINTE CLASSE A &mdash;
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              A Experiência de um <span className="italic text-yellow-400 font-bold">Resort Premium</span>, 
              sob a Tutela Médica Mais Avançada.
            </h2>
            <p className="mt-6 text-gray-300/90 font-sans text-sm sm:text-base font-light leading-relaxed">
              O bem-estar e o rejuvenescimento não toleram pressa ou ambientes clínicos frios. Nosso espaço foi projetado para acolher as personalidades mais influentes do país sob um rígido protocolo de segurança, sofisticação intelectual e sigilo absoluto. 
            </p>

            {/* List of exclusive benefits */}
            <div className="mt-10 space-y-8">
              {EXCLUSIVE_BENEFITS.map((b, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
                    {idx === 0 && <Compass className="w-5 h-5" />}
                    {idx === 1 && <Coffee className="w-5 h-5" />}
                    {idx === 2 && <Trophy className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-white font-medium">{b.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed font-light">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote of authenticity */}
            <div className="mt-12 p-4 rounded-xl border border-dashed border-emerald-500/20 bg-emerald-950/10 flex items-center space-x-3">
              <span className="emoji text-2xl">🇧🇷</span>
              <p className="text-xs text-emerald-300 font-mono">
                Atendimento estruturado de acordo com a agenda festiva dos jogos: recupere-se deslumbrantemente a tempo dos eventos esportivos e comemorações.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
