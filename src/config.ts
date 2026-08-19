/* src/config.ts - Dados centrais do site */
export const SITE = {
  name: 'Pink Studio',
  tagline: 'Conectamos pessoas através de histórias bem contadas',
  description:
    'Somos especialistas em transformar momentos, empresas e marcas em histórias capazes de gerar conexão, autoridade e resultados através do audiovisual.',
  url: 'https://pinkstudio.com.br',
  city: 'Curvelo',
  state: 'MG',
  location: 'Curvelo - MG',
  email: 'contato@pinkstudio.com.br',
  whatsappNumber: '5538999305943',
  whatsappDisplay: '+55 38 99930-5943',
  whatsappMessage:
    'Olá! Vim pelo site da Pink Studio e quero contar a história da minha marca. 💖',
} as const;

export const LINKS = {
  home: '/',
  whatsapp: `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`,
  instagram: 'https://www.instagram.com/pinkstudio_pks',
  tiktok: 'https://www.tiktok.com/@pinkstudio',
} as const;

export type Service = {
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
};

export const SERVICES: Service[] = [
  {
    icon: 'camera',
    title: 'Captação de vídeos',
    description: 'Produção audiovisual profissional para sua marca. Convertemos a essência do seu negócio em imagens que comunicam autoridade e geram confiança.',
  },
  {
    icon: 'calendar',
    title: 'Cobertura de eventos',
    description: 'Registramos cada momento importante do seu evento — social ou corporativo — com olhar cinematográfico. Unimos Storymaker e Videomaker para contar a história completa.',
  },
  {
    icon: 'zap',
    title: 'Storymaker',
    description: 'Cobertura em tempo real para redes sociais. Capturamos o momento no ar e transformamos em conteúdo que gera engajamento imediato.',
    bullets: ['Promoções', 'Eventos', 'Ações comerciais', 'Lançamentos'],
  },
  {
    icon: 'clapperboard',
    title: 'Videomaker',
    description: 'Vídeos planejados e produzidos com estratégia. Cada roteiro, cada corte e cada música são pensados para atingir seu objetivo.',
    bullets: ['Feed', 'Campanhas', 'Tráfego Pago', 'Institucionais', 'Lançamentos'],
  },
  {
    icon: 'hashtag',
    title: 'Social Media',
    description: 'Gestão completa das suas redes sociais. Do planejamento de conteúdo à publicação, cuidamos da sua presença digital para que sua marca seja lembrada.',
  },
];

export type MethodLetter = {
  letter: string;
  word: string;
  description: string;
};

export const METHOD: MethodLetter[] = [
  {
    letter: 'P',
    word: 'Presença',
    description: 'Sua marca precisa ser lembrada.',
  },
  {
    letter: 'I',
    word: 'Identidade',
    description: 'Construímos uma comunicação única.',
  },
  {
    letter: 'N',
    word: 'Narrativa',
    description: 'Toda empresa possui uma história. Nós contamos da maneira certa.',
  },
  {
    letter: 'K',
    word: 'Conexão',
    description: 'Histórias emocionam. Emoção gera confiança. Confiança gera vendas.',
  },
];

export type Differential = {
  icon: string;
  title: string;
  description: string;
};

export const DIFFERENTIALS: Differential[] = [
  {
    icon: 'fa6-brands:whatsapp',
    title: 'Atendimento humanizado',
    description: 'Você não é mais um número. Cada cliente é tratado com atenção, paciência e dedicação — do primeiro contato à entrega final.',
  },
  {
    icon: 'film',
    title: 'Produção cinematográfica',
    description: 'Cada vídeo é produzido com qualidade de cinema. Iluminação, composição e captação pensados para elevar a percepção da sua marca.',
  },
  {
    icon: 'target',
    title: 'Estratégia antes da gravação',
    description: 'Antes de ligar a câmera, entendemos seu público, seu objetivo e sua história. Planejamento é o que separa um vídeo comum de um que converte.',
  },
  {
    icon: 'users',
    title: 'Conteúdo que conecta pessoas',
    description: 'Não fazemos vídeos bonitinhos. Criamos conteúdos que emocionam, geram confiança e fazem seu público se identificar com a sua marca.',
  },
  {
    icon: 'award',
    title: 'Qualidade premium',
    description: 'Equipamentos de ponta, pós-produção profissional e atenção a cada detalhe. O resultado é um conteúdo que se destaca em qualquer tela.',
  },
  {
    icon: 'handshake',
    title: 'Preço justo',
    description: 'Produção de alto nível não precisa ser inacessível. Trabalhamos com pacotes pensados para atender desde pequenas até grandes marcas.',
  },
];

export type Case = {
  image: string;
  client: string;
  description: string;
};

export const CASES: Case[] = [
  {
    image: '/cases/case-1.svg',
    client: 'Loja de Roupas',
    description:
      'Transformamos a presença digital de uma boutique local em Curvelo. Com uma série de vídeos curtos para Reels, o engajamento cresceu 340% em 30 dias e as vendas online triplicaram.',
  },
  {
    image: '/cases/case-2.svg',
    client: 'Escritório de Advocacia',
    description:
      'Criamos uma série institucional humanizada que transmitia credibilidade e proximidade. Em 3 meses, o escritório dobrou o fluxo de novos clientespelo canal digital.',
  },
  {
    image: '/cases/case-3.svg',
    client: 'Clínica Odontológica',
    description:
      'Conteúdo educativo + emocional para redes sociais. A clínica se tornou referência na região e aumentou em 280% os agendamentospelo Instagram.',
  },
];

export type Testimonial = {
  photo: string;
  name: string;
  company: string;
  text: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    photo: '/foto-kate.webp',
    name: 'Ana Paula Ribeiro',
    company: 'Loja de Roupas Femininas',
    text: 'Eu não sabia que um vídeo poderia mudar tanto a percepção da minha marca. A Pink entendeu exatamente o que eu queria transmitir e o resultado superou tudo. Minhas clientes agora me procuram dizendo "vim pelo vídeo".',
  },
  {
    photo: '/foto-kate.webp',
    name: 'Carlos Eduardo Silva',
    company: 'Escritório de Advocacia',
    text: 'Profissionalismo incomum. Antes de gravar, eles entenderam minha história, meu público, meu objetivo. O vídeo institucional que criaram transmitiu exatamente a credibilidade que eu precisava. Em 3 meses, o dobro de consultas.',
  },
  {
    photo: '/foto-kate.webp',
    name: 'Mariana Costa',
    company: 'Clínica Odontológica',
    text: 'Fiquei impressionada com a dedicação. Cada frame, cada música, cada corte — tudo pensado para emocionar. Meus pacientes chegam dizendo que se identificaram com o conteúdo. Isso não tem preço.',
  },
];