/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialSection() {
  return (
    <section id="depoimentos" className="relative py-24 bg-[#070b12] border-t border-yellow-500/10">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-yellow-500 font-mono text-[10px] tracking-widest uppercase block mb-3">
            &mdash; CHANCELAS DE SOBERANIA ESTÉTICA &mdash;
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
            Quem Já Conquistou o <span className="italic text-yellow-400 font-bold">Lugar no Podiúm</span> da Brasil Estética
          </h2>
          <p className="mt-4 font-sans text-gray-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
            A opinião de quem exige discernimento científico absoluto, privacidade irrestrita e resultados elegantes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#0e1626]/40 border border-yellow-500/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative hover:border-yellow-500/20 transition-all group"
            >
              <div>
                {/* Quotation icon */}
                <div className="w-10 h-10 bg-yellow-500/5 rounded-full flex items-center justify-center text-yellow-500/40 group-hover:text-yellow-500 transition-colors mb-6">
                  <Quote className="w-5 h-5" />
                </div>
                
                {/* Quote copy */}
                <p className="font-serif text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* User profile details */}
              <div className="mt-8 pt-6 border-t border-yellow-500/5 flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover grayscale border border-yellow-500/20"
                    referrerPolicy="no-referrer"
                  />
                  {t.verified && (
                    <span className="absolute -bottom-1 -right-1 bg-[#070b12] text-emerald-400 rounded-full p-0.5 border border-yellow-500/20 shadow">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
                <div>
                  <span className="block text-sm font-serif text-white font-medium">{t.name}</span>
                  <span className="block text-[10px] text-yellow-500/80 font-mono tracking-wider">{t.role}</span>
                  <span className="block text-[9px] text-gray-500 font-mono">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Medical Note */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-[11px] text-gray-500 font-mono">
            *Em respeito ao código de ética médica, os nomes e fotos originais de nossos pacientes jurídicos e de alta evidência são preservados sob termo de sigilo, reproduzidos aqui exclusivamente com consentimento formal por escrito.
          </p>
        </div>

      </div>
    </section>
  );
}
