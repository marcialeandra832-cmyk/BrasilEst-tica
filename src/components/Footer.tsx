/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, ArrowUp, Compass } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export default function Footer({ onBackToTop }: FooterProps) {
  return (
    <footer className="bg-[#05080e] border-t border-yellow-500/10 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative emerald grass overlay subtle background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-emerald-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-yellow-500/5">
          
          {/* Clinic Brand Columns */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-serif text-xl tracking-widest text-white uppercase font-bold">
                BRASIL <span className="text-yellow-500 font-sans font-light">ESTÉTICA</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-sm">
              Clínica Médica de Estética Integrada. Liderando com ciência de ponta, discrição irrepreensível e resultados majestosos inspirados na busca implacável pela perfeição.
            </p>

            <p className="text-[10px] text-gray-500 font-mono">
              Alameda Lorena, 1500 - Suíte 42 &bull; Jardins, São Paulo - SP
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-4">
            <span className="block font-mono text-[9px] text-yellow-500 uppercase tracking-widest">Contatos Principais</span>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>CRM VIP Line: (11) 99999-0000</li>
              <li>Concierge: jardins@brasilestetica.com.br</li>
              <li>Secretária Chefe: (11) 3088-0000</li>
            </ul>
          </div>

          {/* Sponsoring detail analog */}
          <div className="md:col-span-4 space-y-4">
            <span className="block font-mono text-[9px] text-yellow-500 uppercase tracking-widest">Soberania Médica & RT</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              Responsável Técnico: Dra. Simone Albuquerque de Carvalho <br />
              <strong className="text-yellow-500">CRM-SP: 185.029 / RQE: 90.871</strong> <br />
              Membro Titular da Sociedade Brasileira de Dermatologia (SBD).
            </p>
          </div>

        </div>

        {/* Closing details and legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-500 font-mono gap-4">
          <div className="text-center sm:text-left">
            <p>&copy; 2026 Brasil Estética &middot; Todos os direitos reservados.</p>
            <p className="mt-1 text-[9px] text-gray-600">O conteúdo deste material possui caráter puramente elucidativo e informativo de acordo com as permissões éticas do CFM.</p>
          </div>

          <button
            onClick={onBackToTop}
            className="group flex items-center space-x-2 text-yellow-500/80 hover:text-yellow-500 transition-colors uppercase tracking-widest px-3 py-1.5 rounded-full border border-yellow-500/5 hover:border-yellow-500/15"
          >
            <span>Voltar ao Campeonat</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
