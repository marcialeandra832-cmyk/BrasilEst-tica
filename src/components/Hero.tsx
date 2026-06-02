/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Crown, Sparkles, Trophy, Star, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onLearnMoreClick: () => void;
  onBookClick: () => void;
}

export default function Hero({ onLearnMoreClick, onBookClick }: HeroProps) {
  const [seconds, setSeconds] = useState(3402); // Mock ticket countdown for urgency

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => (prev > 1 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const min = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-10 pb-20 overflow-hidden bg-[#070b12] animate-drift-luxury">
      
      {/* 3D Floating Gold Particles / Dust (Solução à prova de falhas de bateria recomendada para Médicas Estetas) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Glamour Particle 1 */}
        <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-yellow-400 rounded-full blur-[1px] opacity-35 animate-gold-float-slow" />
        {/* Glamour Particle 2 */}
        <div className="absolute top-[65%] right-[20%] w-4 h-4 bg-amber-500 rounded-full blur-[2px] opacity-40 animate-gold-float-fast" />
        {/* Glamour Particle 3 */}
        <div className="absolute top-[35%] right-[35%] w-2 h-2 bg-yellow-300 rounded-full opacity-50 animate-gold-float-slow" />
        {/* Glamour Particle 4 */}
        <div className="absolute bottom-[25%] left-[30%] w-5 h-5 bg-yellow-600 rounded-full blur-[3px] opacity-25 animate-gold-float-fast" />
        {/* Large Aesthetic Glow Orb */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Background Video with Poster fallback and fail-safe direct loop streaming */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-85 transition-opacity duration-1000"
      >
        {/* 1. Vídeo local original enviado via upload pela médica */}
        <source src="/11140919-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <source src="11140919-hd_1920_1080_30fps.mp4" type="video/mp4" />
        
        {/* 2. Link reserva direta de altíssima velocidade (Fluid fumaça dourada em loop sem bloqueamento regulamentar de iframe) */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-golden-fluid-with-shiny-particles-background-30048-large.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-gold-dust-particles-4428-large.mp4" type="video/mp4" />
        
        {/* 3. Link alternativo de fumaça dourada e partículas luxuosas */}
        <source src="https://player.vimeo.com/external/435674703.hd.mp4?s=72fe6aff351f8be52e753e20e54ea8eecbb6eb51&profile_id=174&oauth2_token_id=57447761" type="video/mp4" />
        <source src="https://player.vimeo.com/external/435674703.sd.mp4?s=72fe6aff351f8be52e753e20e54ea8eecbb6eb51&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        Seu navegador não suporta este vídeo.
      </video>

      {/* Dark Translucent Overlay (.hero-overlay) - Garante legibilidade soberana de toda a tipografia */}
      <div 
        className="hero-overlay absolute inset-0 z-10 transition-opacity duration-1000" 
        style={{ backgroundColor: 'rgba(5, 8, 15, 0.76)', backdropFilter: 'blur(3px)' }} 
      />

      {/* Cinematic Stadium Lights Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-slate-950/50 to-[#070b12] z-10 opacity-70 pointer-events-none" />
      
      {/* Decorative Gold Rings & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] z-10 pointer-events-none" />
      
      {/* Organic luxury glowing nodes behind glassmorphism */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-32 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl z-10 pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Glassmorphic Panel Container (Efeito Vidro Glassmorphism Supremo) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/10 sm:border-yellow-500/20 bg-slate-950/35 backdrop-blur-xl p-8 sm:p-12 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.92),0_0_50px_rgba(234,179,8,0.06)] flex flex-col items-center mb-12"
        >
          {/* Subtle light reflection on glass border */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none rounded-3xl" />
          
          {/* Luxury Badge inside Glassmorphic Frame */}
          <div className="inline-flex items-center space-x-2.5 px-4.5 py-2 rounded-full bg-[#070b12]/60 border border-yellow-500/20 shadow-lg mb-8 backdrop-blur-md">
            <Crown className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#fcf8f0] uppercase">
              A Solenidade Médica do Autocuidado &middot; Estética Copa '26
            </span>
          </div>

          {/* Headline Associating "Seu Rosto no Topo do Pódio" */}
          <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl">
            Seu Rosto no <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 font-semibold italic drop-shadow-sm">Topo do Pódio</span>.
            <span className="block mt-2 font-light text-xl sm:text-2xl md:text-3xl text-[#faf6ee] font-sans">
              A Convocação Seleta da Estética de Alta Performance.
            </span>
          </h1>

          {/* Copy Focused on Class A Public */}
          <p className="mt-6 font-sans text-gray-300/95 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-light">
            Inspirada no rigor científico de atletas de elite e na elegância do maior espetáculo esportivo do planeta, 
            apresentamos <span className="text-[#fcf8f0] font-medium">A Seleção da Beleza</span>: uma curadoria hermética de procedimentos bio-desenhados para esculpir derme, olhar e contornos faciais, garantindo a sua soberania visual absoluta antes, durante e após a grande temporada festeira.
          </p>

          {/* Exclusive Urgency & Availability Counter with micro glass style */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4 bg-emerald-950/30 border border-emerald-500/20 p-4 rounded-2xl backdrop-blur-md">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-emerald-300/90 font-mono tracking-wider font-semibold">
                SUÍTE CONCIERGE ATIVA NESTE MOMENTO
              </span>
            </div>
            <div className="hidden md:block text-emerald-500/55">|</div>
            <p className="text-xs text-[#faf6ee]/90 font-mono">
              Acesso VIP Temporário Exclusivo: <span className="text-yellow-400 font-bold">{formatTime(seconds)}</span> para agendamentos prioritários.
            </p>
          </div>

          {/* Premium Call to Action */}
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-md justify-center z-30">
            <button
              id="hero-book-cta"
              onClick={onBookClick}
              className="flex-1 px-8 py-4 px-4 rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 text-[#070b12] text-xs font-bold tracking-widest uppercase hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-yellow-500/25 cursor-pointer"
            >
              Reservar Vaga no Pódio
            </button>
            
            <button
              id="hero-services-cta"
              onClick={onLearnMoreClick}
              className="flex-1 px-8 py-4 rounded-full border border-yellow-500/30 hover:border-yellow-500/60 bg-yellow-500/5 hover:bg-yellow-500/10 transition-all duration-300 text-yellow-500 text-xs font-bold tracking-widest uppercase cursor-pointer"
            >
              Explorar Tratamentos
            </button>
          </div>
        </motion.div>

        {/* Trust Markers Section (Podium analogue design) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full py-8 border-t border-b border-yellow-500/15 backdrop-blur-subtle bg-slate-950/20 rounded-2xl px-4"
        >
          <div>
            <span className="block font-serif text-2xl text-yellow-400 font-semibold md:text-3xl">100%</span>
            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-mono mt-1">
              Dermatologia Assinada
            </span>
          </div>
          <div>
            <span className="block font-serif text-2xl text-yellow-400 font-semibold md:text-3xl">Zero</span>
            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-mono mt-1">
              Tempo de Repouso
            </span>
          </div>
          <div>
            <span className="block font-serif text-2xl text-yellow-400 font-semibold md:text-3xl">4 &times; 10</span>
            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-mono mt-1">
              Sistemas de Alta Performance
            </span>
          </div>
          <div>
            <span className="block font-serif text-2xl text-yellow-400 font-semibold md:text-3xl">VIP</span>
            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-mono mt-1">
              Atendimento Blindado
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce cursor-pointer z-30" onClick={onLearnMoreClick}>
          <ChevronDown className="w-5 h-5 text-yellow-500/60 hover:text-yellow-500" />
        </div>

      </div>
    </section>
  );
}
