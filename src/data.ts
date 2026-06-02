/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Treatment, Testimonial } from './types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'botox',
    title: 'Botox Elegance',
    nickname: 'O Craque dos Resultados Rápidos',
    category: 'Suavização Dinâmica',
    description: 'Atuando com precisão soberana, neutraliza as marcas de expressão mantendo sua naturalidade expressiva impecável.',
    benefits: [
      'Ação rápida com efeito perceptível entre 48h e 72h',
      'Prevenção de rugas estáticas profundas',
      'Expressividade preservada com sofisticação'
    ],
    duration: '20-30 minutos',
    recovery: 'Imediato, sem downtime',
    iconName: 'Sparkles',
    badge: 'Performance Rápida',
    detailsCopy: 'Assim como um craque de futebol define a partida em segundos com lances geniais, a toxina botulínica de alta pureza resolve as linhas indesejadas com precisão milimétrica. Um procedimento discreto que confere o ar revigorado de dez horas de sono em poucos minutos.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'skinbooster',
    title: 'Skinbooster Radiance',
    nickname: 'O Glow da Vitória',
    category: 'Hidratação Profunda',
    description: 'A tática infalível para injetar luxo e viço diretamente nas camadas celulares mais profundas da pele.',
    benefits: [
      'Luminosidade interior instantânea (efeito "filtros de luxo")',
      'Restauração de fôlego celular e elasticidade',
      'Suaviza linhas finas de desidratação'
    ],
    duration: '30-40 minutos',
    recovery: 'Leve vermelhidão por até 12h',
    iconName: 'Droplet',
    badge: 'Glow Supremo',
    detailsCopy: 'A vitória do autocuidado começa de dentro para fora. O Skinbooster não é apenas um tratamento; é um banho de ácido hialurônico de baixíssima densidade nas camadas profundas da sua derme, resgatando um brilho que cremes superficiais jamais conseguiriam alcançar.',
    imageUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'preenchimento',
    title: 'Sculpt & Contour',
    nickname: 'O Gol de Placa na Autoestima',
    category: 'Harmonização de Elite',
    description: 'A assinatura final que desenha lábios exuberantes e contornos milimetricamente harmonizados com sua essência.',
    benefits: [
      'Definição precisa do arco do cupido de forma nobre',
      'Efeito volumétrico sutil e naturalidade tátil',
      'Sensação de frescor e juventude imediata'
    ],
    duration: '45 minutos',
    recovery: 'Discreto inchaço por 24-48h',
    iconName: 'Heart',
    badge: 'Destaque Absoluto',
    detailsCopy: 'O detalhe que muda o placar da autoconfiança. Combinando ácido hialurônico de alta tecnologia em densidades específicas, criamos proporções áureas que conferem poder e magnetismo silencioso ao seu sorriso e projeção facial.',
    imageUrl: 'https://i.ibb.co/sdYj1Smh/tony-litvyak-i-VGm-PVoi8-Rk-unsplash.jpg'
  },
  {
    id: 'ultraformer',
    title: 'Ultraformer MPT',
    nickname: 'A Defesa Imbatível contra Flacidez',
    category: 'Ancoragem Muscular',
    description: 'A retaguarda tecnológica impenetrável que suspende e blinda a pele do envelhecimento com bioestimulação térmica.',
    benefits: [
      'Efeito lifting facial sem cortes ou agulhas',
      'Estímulo de colágeno ativo por até 6 meses',
      'Definição imediata do contorno mandibular'
    ],
    duration: '60 minutos',
    recovery: 'Retorno imediato às atividades normais',
    iconName: 'ShieldCheck',
    badge: 'Alta Tecnologia',
    detailsCopy: 'Sua defesa mais sólida contra o tempo. O Ultraformer MPT atua nas camadas musculares mais profundas (SMAS) utilizando calor focado de altíssima frequência para provocar uma retração imediata e duradoura. A verdadeira blindagem facial tridimensional.',
    imageUrl: 'https://i.ibb.co/5W5FscsQ/samuel-dixon-f-Q5-XNOcq-FQ-unsplash.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Drª. Helena Vasconcellos',
    role: 'Juíza Federal',
    quote: 'Minha rotina de tribunal exige um semblante descansado e sereno. Escolhi a Seleção da Beleza e o resultado do Ultraformer superou minhas expectativas mais altas, mantendo total discrição.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    location: 'Jardins, São Paulo',
    verified: true
  },
  {
    id: '2',
    name: 'Roberto Mendonça Prado',
    role: 'Investidor e Empresário Venture Capital',
    quote: 'O mercado financeiro cobra seu preço no estresse facial. Realizar o protocolo de Botox com a equipe foi uma experiência cirúrgica: rápido, elegante e extremamente profissional.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    location: 'Ipanema, Rio de Janeiro',
    verified: true
  },
  {
    id: '3',
    name: 'Alessandra Alencar Santos',
    role: 'Designer de Alta Costura',
    quote: 'Lábios autênticos e hidratados são essenciais no meu meio. O Preenchimento foi desenhado com um nível de sofisticação artística extraordinário. Um verdadeiro gol de placa no meu espelho.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    location: 'Chácara Flora, São Paulo',
    verified: true
  }
];

export const EXCLUSIVE_BENEFITS = [
  {
    title: 'Atendimento Concierge VIP',
    description: 'Suíte privativa blindada de olhares, com agendamentos espaçados para garantir 100% de sigilo e conforto absoluto.'
  },
  {
    title: 'Welcome Champagne Bar',
    description: 'Desfrute de uma seleção premium de Champagnes franceses, cafés especiais e águas gourmet enquanto nossa equipe planeja sua jornada.'
  },
  {
    title: 'Diagnóstico Digital 3D',
    description: 'Mapeamento tridimensional de alta definição do seu rosto antes do procedimento para garantir precisão cirúrgica de cada aplicação.'
  }
];
