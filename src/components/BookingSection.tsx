/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  Sparkles, 
  CornerDownRight, 
  CheckCircle2, 
  ChevronRight, 
  Trophy, 
  Info,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { TREATMENTS } from '../data';
import { BookingPayload } from '../types';

interface BookingSectionProps {
  selectedIds: string[];
  onSelect: (id: string) => void;
  formRef: React.RefObject<HTMLDivElement | null>;
}

export default function BookingSection({ selectedIds, onSelect, formRef }: BookingSectionProps) {
  const [formData, setFormData] = useState<BookingPayload>({
    name: '',
    phone: '',
    email: '',
    selectedTreatments: [...selectedIds],
    preferredDate: '',
    preferredPeriod: 'vespera_vip',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdTicketId, setCreatedTicketId] = useState('');

  // Sync selectedIds from global state with local formData
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      selectedTreatments: [...selectedIds]
    }));
  }, [selectedIds]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToggleTreatment = (id: string) => {
    onSelect(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate luxury concierge scheduling flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Generate a ticket ID mimicking a premium FIFA cup gate pass
      const ticketNum = Math.floor(100000 + Math.random() * 900000);
      setCreatedTicketId(`VIP-COPA-${ticketNum}`);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      selectedTreatments: [],
      preferredDate: '',
      preferredPeriod: 'vespera_vip',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <section ref={formRef} id="booking-section" className="relative py-24 bg-[#0a101d] border-t border-yellow-500/15 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/10 via-transparent to-transparent pointer-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#0b1322] border border-yellow-500/15 rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Column: Urgency and Invitation Banner */}
            <div className="md:col-span-4 bg-gradient-to-b from-[#111c30] to-[#070b12] p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-yellow-500/10">
              <div>
                <span className="text-yellow-500 font-mono text-[9px] tracking-widest uppercase block mb-2">SOLENIDADE</span>
                <h3 className="font-serif text-2xl text-white font-medium leading-tight">
                  Sua Convocação Privada.
                </h3>
                <p className="text-xs text-gray-400 mt-4 leading-relaxed font-light">
                  Preencha o formulário seguro de agendamento para que nosso concierge VIP monte os detalhes da sua chegada física na clínica.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-mono text-[10px] shrink-0">1</div>
                  <p className="text-[11px] text-gray-300 leading-tight">Suas escolhas são enviadas diretamente ao dermatologista chefe.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-mono text-[10px] shrink-0">2</div>
                  <p className="text-[11px] text-gray-300 leading-tight">Ligação ou mensagem discreta para certificar seu horário secreto.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-mono text-[10px] shrink-0">3</div>
                  <p className="text-[11px] text-gray-300 leading-tight">Drink de boas-vindas e atendimento cirurgicamente individualizado.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-yellow-500/5 text-center md:text-left">
                <span className="inline-flex items-center space-x-2 text-[10px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Ambiente Exclusivo</span>
                </span>
              </div>
            </div>

            {/* Right Column: Dynamic Form UI */}
            <div className="md:col-span-8 p-6 sm:p-10 relative">

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="border-b border-yellow-500/10 pb-4 mb-4">
                      <h4 className="font-serif text-lg text-[#fcf8f0] font-medium">Formulário de Confirmação VIP</h4>
                      <p className="text-xs text-gray-400">Preencha com dados confidenciais ativos para procedermos.</p>
                    </div>

                    {/* Step 1: Select Treatments explicitly */}
                    <div>
                      <label className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-3">
                        Tratamentos Convocados para Seu Tático (*Selecione 1 ou mais)
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {TREATMENTS.map((treat) => {
                          const isSelected = formData.selectedTreatments.includes(treat.id);
                          return (
                            <button
                              key={treat.id}
                              type="button"
                              onClick={() => handleToggleTreatment(treat.id)}
                              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                                isSelected 
                                  ? 'border-yellow-500 bg-yellow-500/10 text-white' 
                                  : 'border-yellow-500/5 bg-slate-900/40 text-gray-400 hover:border-yellow-500/15'
                              }`}
                            >
                              <div>
                                <span className="block text-xs font-serif font-medium">{treat.title}</span>
                                <span className="block text-[8px] text-gray-500 font-mono uppercase tracking-wider">{treat.badge}</span>
                              </div>
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[9px] ${
                                isSelected ? 'border-yellow-500 bg-yellow-500 text-[#070b12]' : 'border-gray-700'
                              }`}>
                                {isSelected && '✓'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Contacts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-2">
                          Seu Nome Completo *
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Ex: Dra. Helena Vasconcellos" 
                            className="w-full bg-slate-900/70 border border-yellow-500/10 focus:border-yellow-500 rounded-xl py-3 px-4 text-xs text-white placeholder-gray-500 outline-none transition-all"
                          />
                          <User className="w-3.5 h-3.5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-2">
                          Telefone Comercial / WhatsApp *
                        </label>
                        <div className="relative">
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Ex: (11) 99999-0000" 
                            className="w-full bg-slate-900/70 border border-yellow-500/10 focus:border-yellow-500 rounded-xl py-3 px-4 text-xs text-white placeholder-gray-500 outline-none transition-all"
                          />
                          <Phone className="w-3.5 h-3.5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-2">
                        E-mail de Contato Seguro *
                      </label>
                      <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: helena@exemplo.com.br" 
                          className="w-full bg-slate-900/70 border border-yellow-500/10 focus:border-yellow-500 rounded-xl py-3 px-4 text-xs text-white placeholder-gray-500 outline-none transition-all"
                        />
                        <Mail className="w-3.5 h-3.5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Date and Preferred Period */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-2">
                          Previsão de Data de Preferência
                        </label>
                        <div className="relative">
                          <input 
                            type="date" 
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            className="w-full bg-slate-900/70 border border-yellow-500/10 focus:border-yellow-500 rounded-xl py-3 px-4 text-xs text-white outline-none transition-all"
                          />
                          <Calendar className="w-3.5 h-3.5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-2">
                          Período de Preferência
                        </label>
                        <div className="relative">
                          <select 
                            name="preferredPeriod"
                            value={formData.preferredPeriod}
                            onChange={handleInputChange}
                            className="w-full bg-slate-900/70 border border-yellow-500/10 focus:border-yellow-500 rounded-xl py-3 px-4 text-xs text-white outline-none transition-all appearance-none"
                          >
                            <option value="vespera_vip">Véspera VIP de Jogo/Evento</option>
                            <option value="manha">Manhã (Discreto & Silencioso)</option>
                            <option value="tarde">Tarde (Networking e Champagne)</option>
                          </select>
                          <Clock className="w-3.5 h-3.5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Messages note */}
                    <div>
                      <label className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-2">
                        Recomendações Especiais ou Restrições (Opcional)
                      </label>
                      <textarea 
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Ex: Preciso de estacionamento privativo / discrição de entrada lateral..." 
                        className="w-full bg-slate-900/70 border border-yellow-500/10 focus:border-yellow-500 rounded-xl py-3 px-4 text-xs text-white placeholder-gray-500 outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submission Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || formData.selectedTreatments.length === 0}
                      className={`w-full py-4 rounded-xl flex items-center justify-center space-x-2 text-xs font-bold tracking-widest uppercase transition-all ${
                        isSubmitting 
                          ? 'bg-yellow-500/50 text-[#070b12] cursor-wait' 
                          : formData.selectedTreatments.length === 0 
                            ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-[#070b12] shadow-lg shadow-yellow-500/15 cursor-pointer hover:scale-[1.01]'
                      }`}
                    >
                      {isSubmitting ? (
                        <span>Autenticando Entrada VIP...</span>
                      ) : (
                        <span>Concluir Convocação Clínica</span>
                      )}
                    </button>

                    {formData.selectedTreatments.length === 0 && (
                      <p className="text-[10px] text-yellow-500/80 font-mono text-center">
                        *Por favor, selecione pelo menos um procedimento para convocar seu tático de beleza.
                      </p>
                    )}
                  </motion.form>
                ) : (
                  // Elegantly designed Success/Receipt view mimicking ticket
                  <motion.div 
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                      <Trophy className="w-8 h-8 animate-bounce" />
                    </div>

                    <h3 className="font-serif text-3xl text-white font-medium">Sua Convocação Está Confirmada!</h3>
                    <p className="text-gray-400 font-sans text-xs mt-2 max-w-md">
                      Parabéns, seu rosto está escalado para o rejuvenescimento supremo. Nosso concierge ligará de forma discreta nas próximas horas para finalizar sua suíte privativa.
                    </p>

                    {/* Premium Receipt ticket pass */}
                    <div className="mt-8 bg-gradient-to-r from-yellow-5000 via-amber-600/10 to-[#111c30] border border-yellow-500/20 rounded-2xl p-6 text-left max-w-sm w-full relative">
                      {/* Ticket top notches */}
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0b1322] border-r border-yellow-500/20" />
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0b1322] border-l border-yellow-500/20" />

                      <div className="flex justify-between items-center text-[9px] text-yellow-500 font-mono tracking-widest mb-4">
                        <span>BRASIL ESTÉTICA 2026</span>
                        <span>PASSAPORTE SOBERANIA</span>
                      </div>

                      <div className="text-xl font-serif text-white uppercase tracking-tight">{formData.name}</div>
                      <span className="text-[9px] text-gray-500 font-mono block mt-1">Convocado Especial VIP</span>

                      <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-yellow-500/10">
                        <div>
                          <span className="text-[8px] text-gray-500 font-mono block">Ticket ID</span>
                          <span className="text-xs font-mono font-bold text-yellow-400">{createdTicketId}</span>
                        </div>
                        <div>
                          <span className="text-[8px] text-gray-500 font-mono block">Data Sugerida</span>
                          <span className="text-xs font-mono text-gray-300">{formData.preferredDate || 'A Confirmar'}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-yellow-500/10">
                        <span className="text-[8px] text-gray-500 font-mono block">Jogadores Convocados:</span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {formData.selectedTreatments.map(id => {
                            const match = TREATMENTS.find(t => t.id === id);
                            return (
                              <span key={id} className="text-[9px] text-emerald-300 bg-emerald-950/20 border border-emerald-500/10 px-2.5 py-0.5 rounded-full">
                                {match?.title}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <a 
                        href={`https://wa.me/5511999990000?text=Olá,%20acabo%20de%20gerar%20meu%20ticket%20de%20convocação%20Brasil%20Estética%20(${createdTicketId}).%20Gostaria%20de%20confirmar%20minha%20data%20VIP.`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase transition-all flex items-center justify-center space-x-2"
                      >
                        <span>WhatsApp Direto Concierge</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <button
                        onClick={handleReset}
                        className="px-6 py-3 rounded-xl border border-yellow-500/15 hover:border-yellow-500/25 text-gray-400 hover:text-white font-mono text-xs uppercase transition-all"
                      >
                        Novo Agendamento
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
