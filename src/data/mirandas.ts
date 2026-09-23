export interface ClinicaConfig {
  nome: string;
  categoria: string;
  endereco: string;
  enderecoCurto: string;
  bairro: string;
  cidadeEstado: string;
  cep: string;
  telefone: string;
  whatsapp: string; // confirmar se é igual ao telefone informado
  instagramUrl: string;
  facebookUrl: string;
  siteUrl: string;
  horarioFuncionamento?: string;
  responsavelTecnico?: string;
  cro?: string;
}

export interface Tratamento {
  id: string;
  nome: string;
  descricao?: string;
  icone?: string;
  destaque?: boolean;
}

export interface Profissional {
  id: string;
  nome: string;
  especialidade?: string;
  cro?: string;
  foto?: string;
  descricao?: string;
}

export interface Depoimento {
  id: string;
  autor: string;
  texto: string;
  nota?: number;
}

export interface GaleriaItem {
  id: string;
  src: string;
  alt: string;
  categoria?: string;
}

export interface Diferencial {
  id: string;
  titulo: string;
  descricao: string;
}

export const clinica: ClinicaConfig = {
  nome: "Miranda's Odontologia",
  categoria: "Clínica / Consultório Odontológico",
  endereco: "Rua Bento Barbosa, 230, São Paulo - SP, 04716-020",
  enderecoCurto: "Rua Bento Barbosa, 230",
  bairro: "Chácara Santo Antônio",
  cidadeEstado: "São Paulo - SP",
  cep: "04716-020",
  telefone: "(11) 96450-8931",
  whatsapp: "(11) 96450-8931", // confirmar se este é o número de WhatsApp
  instagramUrl: "https://www.instagram.com/mirandas.odontologia/",
  facebookUrl: "https://www.facebook.com/mirandas.odontologia/",
  siteUrl: "https://www.mirandasodontologia.com.br/",
};

// Placeholder — substituir pelos tratamentos reais da clínica antes da publicação.
// As categorias abaixo são exemplos amplamente comuns em odontologia geral e devem ser validadas com a Miranda's Odontologia.
export const tratamentos: Tratamento[] = [
  {
    id: "clinica-geral",
    nome: "Clínica geral",
    descricao: "Exemplo a validar: avaliação, rotina de cuidados e acompanhamento da saúde bucal.",
    icone: "✦",
    destaque: true,
  },
  {
    id: "ortodontia",
    nome: "Ortodontia",
    descricao: "Exemplo a validar: acompanhamento para alinhamento e correção da mordida.",
    icone: "◈",
  },
  {
    id: "estetica-dental",
    nome: "Estética dental",
    descricao: "Exemplo a validar: cuidados voltados à harmonia e naturalidade do sorriso.",
    icone: "✧",
  },
  {
    id: "implantes",
    nome: "Implantes",
    descricao: "Exemplo a validar: avaliação para reposição dentária e reabilitação oral.",
    icone: "◆",
  },
  {
    id: "odontopediatria",
    nome: "Odontopediatria",
    descricao: "Exemplo a validar: cuidado odontológico acolhedor para crianças.",
    icone: "❋",
  },
  {
    id: "prevencao",
    nome: "Prevenção",
    descricao: "Exemplo a validar: orientações e cuidados contínuos para manter a saúde bucal.",
    icone: "○",
  },
];

// Conteúdo genérico e defensável; validar e expandir com a clínica.
export const diferenciais: Diferencial[] = [
  {
    id: "localizacao",
    titulo: "Localização na Chácara Santo Antônio",
    descricao: "Atendimento na Rua Bento Barbosa, 230, na Zona Sul de São Paulo.",
  },
  {
    id: "atendimento-odontologico",
    titulo: "Atendimento odontológico",
    descricao: "Estrutura preparada para receber pacientes que buscam cuidado odontológico no bairro.",
  },
  {
    id: "agendamento-whatsapp",
    titulo: "Agendamento facilitado",
    descricao: "Contato direto pelo WhatsApp para tirar dúvidas e iniciar o agendamento.",
  },
];

export const profissionais: Profissional[] = [];
export const depoimentos: Depoimento[] = [];
export const galeria: GaleriaItem[] = [];

export const politicaPrivacidade = {
  resumo:
    "Os dados enviados pelo formulário são usados apenas para retorno de contato e agendamento. Não solicite informações sensíveis de saúde por este formulário.",
};