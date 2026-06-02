/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Como é assegurado o sigilo VIP das minhas escolhas estéticas?",
      answer: "A privacidade é nossa maior virtude. Nossos atendimentos são meticulosamente espaçados em 60 minutos adicionais de margem, impedindo que os clientes se cruzem em rol de entrada ou salas de espera. Dispomos de acesso alternativo discreto pelos fundos via valet privado para veículos de chefes de estado e celebridades."
    },
    {
      question: "Posso realizar os 4 tratamentos no mesmo dia de um camarote ou evento importante?",
      answer: "Dentre a seleção, o Botox Elegance e o Skinbooster de baixíssima densidade possuem recuperação praticamente imediata, permitindo maquiagem leve imediata. O Ultraformer MPT é conhecido mundialmente como o lifting instantâneo de tapete vermelho, pois gera efeito lifting sem nenhuma marca externa. Sugerimos agendar o Preenchimento Labial com pelo menos 7 a 10 dias de antecedência das grandes celebrações apenas para dissipar quaisquer discretos inchaços com perfeição."
    },
    {
      question: "Quem assina a condução dos procedimentos?",
      answer: "Em absoluto cumprimento com as normas éticas vigentes, todas as manipulações e planos de agulha são desenhados e executados por médicos especialistas em Dermatologia (membros da Sociedade Brasileira de Dermatologia) ou cirurgiões plásticos assistentes de renome, garantindo a máxima segurança anatômica."
    },
    {
      question: "O conceito 'Seleção da Beleza' prevê pacotes fechados?",
      answer: "Não trabalhamos com pacotes impessoais. O conceito da Seleção é uma alusão à reunião dos tratamentos mais eficientes e premiados do ano. Cada protocolo é individualmente lapidado para dar contorno, brilho e jovialidade ao seu padrão facial único, de acordo com o diagnóstico 3D prévio realizado em consulta."
    }
  ];

  return (
    <section id="faq-section" className="relative py-24 bg-[#070b12] border-t border-yellow-500/10">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-500 font-mono text-[9px] tracking-widest uppercase block mb-3">
            &mdash; O TÁTICO DA SEGURANÇA &mdash;
          </span>
          <h2 className="font-serif text-3xl text-white tracking-tight">
            Esclarecimentos de <span className="italic text-yellow-400 font-bold">Alta Estirpe</span>
          </h2>
          <p className="mt-3 font-sans text-xs sm:text-sm text-gray-400 font-light">
            Transparência científica e ética de classe para as suas dúvidas mais reservadas.
          </p>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-yellow-500 bg-[#0d1627]/60 shadow-lg' 
                    : 'border-yellow-500/5 bg-[#0e1626]/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-yellow-500 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-yellow-500/5 font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Banner Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-slate-900/60 to-emerald-950/10 border border-emerald-500/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mx-auto sm:mx-0">
              <Sparkles className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-sm font-serif text-white font-medium">Alguma dúvida médica reservada?</p>
              <p className="text-[11px] text-gray-400 font-mono">Nosso time de dermatologistas assistentes responde de forma confidencial.</p>
            </div>
          </div>
          <a
            href="https://wa.me/5511999990000?text=Olá,%20gostaria%20de%20tirar%20uma%20dúvida%20médica%20privada."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 text-xs font-mono uppercase tracking-widest transition-all"
          >
            Falar com Dermatologista
          </a>
        </div>

      </div>
    </section>
  );
}
