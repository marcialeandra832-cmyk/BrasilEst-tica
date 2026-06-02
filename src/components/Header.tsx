/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Phone, Compass, Sparkles } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export default function Header({ onBookClick, onServicesClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#070b12]/80 backdrop-blur-md border-b border-yellow-500/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500 via-yellow-500 to-amber-600 p-0.5 shadow-lg shadow-emerald-500/10">
            <div className="w-full h-full bg-[#070b12] rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
          <div>
            <span className="block font-serif text-lg tracking-widest text-[#fcf8f0] uppercase font-semibold">
              BRASIL <span className="text-yellow-500 font-sans font-light">ESTÉTICA</span>
            </span>
            <span className="block text-[9px] text-yellow-500/80 font-mono tracking-widest uppercase">
              A Seleção da Beleza &middot; Alta Performance
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={onServicesClick}
            className="font-sans text-xs tracking-widest text-gray-300 hover:text-yellow-500 uppercase transition-colors"
          >
            A Seleção de Tratamentos
          </button>
          <a 
            href="#exclusive"
            className="font-sans text-xs tracking-widest text-gray-300 hover:text-yellow-500 uppercase transition-colors"
          >
            Experiência Privada
          </a>
          <a 
            href="#depoimentos"
            className="font-sans text-xs tracking-widest text-gray-300 hover:text-yellow-500 uppercase transition-colors"
          >
            Depoimentos VIP
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a 
            href="tel:+5511999990000" 
            className="hidden lg:flex items-center space-x-2 text-xs text-yellow-500/90 font-mono bg-yellow-500/5 px-3 py-1.5 rounded-full border border-yellow-500/10 hover:bg-yellow-500/10 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>VIP Line: (11) 99999-0000</span>
          </a>
          
          <button 
            id="header-cta-concierge"
            onClick={onBookClick}
            className="relative px-5 py-2.5 rounded-full overflow-hidden group bg-gradient-to-r from-yellow-500 to-amber-600 transition-all duration-300 shadow-lg shadow-yellow-500/20 active:scale-95"
          >
            <div className="absolute inset-0 bg-[#070b12] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative text-[11px] font-semibold tracking-wider uppercase text-[#070b12] group-hover:text-yellow-500 transition-colors">
              Solicitar Convocação VIP
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
