# Miranda's Landing Page Builder

# PROMPT PARA O LOVABLE — Landing Page Miranda's Odontologia

Crie uma landing page profissional de alta conversão em **React + TypeScript + Tailwind CSS**, mobile-first, para a clínica odontológica **Miranda's Odontologia**, com objetivo principal de **gerar agendamentos via WhatsApp**.

## 1. Dados confirmados da clínica (única fonte de verdade — não alterar nem inventar)

- Nome: Miranda's Odontologia
- Categoria: Clínica / Consultório Odontológico
- Endereço: Rua Bento Barbosa, 230, São Paulo - SP, 04716-020 (bairro Chácara Santo Antônio, Zona Sul de São Paulo)
- Telefone: (11) 5181-3460
- Site institucional: https://www.mirandasodontologia.com.br/
- Instagram: https://www.instagram.com/mirandas.odontologia/ (@mirandas.odontologia)
- Facebook: https://www.facebook.com/mirandas.odontologia/

**Nota de pesquisa importante para o Lovable:** existem diversas outras clínicas no Brasil com nomes muito parecidos ("Miranda Odontologia", "Miranda Odontologia 24h", "Clínica Miranda de Odontologia", "Miranda Odonto", "Miranda Santos Odontologia" etc.), localizadas em outras cidades e bairros (Vila Guilherme, Santo Amaro, São José/SC, Águas Claras/DF, entre outras), com profissionais, CROs, tratamentos e slogans próprios que **não pertencem a esta clínica**. Nenhuma informação dessas outras clínicas deve ser usada nesta landing page. Use exclusivamente os dados confirmados acima e os campos editáveis descritos neste prompt.

## 2. Informações que NÃO foram confirmadas e não devem ser inventadas

Não existe confirmação pública e específica de:
- horário de funcionamento;
- número de WhatsApp (pode ser igual ao telefone informado, mas isso não foi confirmado — trate como campo editável separado);
- nomes de dentistas, especialidades, CROs, formação ou fotos da equipe;
- lista de tratamentos oferecidos;
- nota média e número de avaliações no Google;
- depoimentos de pacientes;
- ano de fundação, missão, visão, valores, prêmios ou certificações;
- fotos reais da clínica, do ambiente ou de procedimentos;
- presença confirmada em Doctoralia, YouTube, TikTok ou LinkedIn.

Para cada um desses itens, crie campos estruturados, claramente editáveis (constantes centralizadas, nunca espalhadas pelo código), com valores de placeholder neutros (ex.: "Horário a confirmar", "Tratamento a definir") — nunca com dados inventados que pareçam reais. Não exiba nota do Google, número de avaliações, depoimentos ou nomes de profissionais enquanto esses campos estiverem vazios; oculte essas seções ou mostre-as em modo "placeholder" evidente até serem preenchidas.

## 3. Objetivo da página

Gerar agendamentos de consulta, com o WhatsApp como principal canal de conversão. CTA principal em todo o site: **"Agendar pelo WhatsApp"**. CTA secundário: **"Agendar consulta"** (leva ao formulário de contato) ou **"Conhecer tratamentos"**.

Fluxo de conversão:

Visitante → Hero → Tratamentos / Diferenciais / Prova social → **Agendar consulta** → WhatsApp

A página deve ser objetiva, sem excesso de distrações, conduzindo naturalmente ao agendamento.

## 4. WhatsApp

- Centralizar o número de WhatsApp em uma única configuração editável (ex.: `contato.whatsapp` em um arquivo de dados), inicialmente preenchida com o telefone confirmado (11) 5181-3460, sinalizada como "confirmar se este é o número de WhatsApp".
- Botão flutuante de WhatsApp visível em todas as páginas/seções, especialmente no mobile.
- Botão "Agendar pelo WhatsApp" no header, no Hero e no CTA final.
- Mensagens pré-preenchidas contextuais, por exemplo:
  - Genérica: "Olá! Gostaria de agendar uma consulta na Miranda's Odontologia."
  - A partir de um tratamento específico: "Olá! Gostaria de saber mais sobre [TRATAMENTO] e gostaria de agendar uma avaliação." (usar o nome do tratamento clicado)

## 5. Redes sociais

- Seção/botão "Conheça nosso Instagram" linkando para https://www.instagram.com/mirandas.odontologia/, abrindo em nova aba.
- Seção/botão "Acesse nosso Facebook" linkando para https://www.facebook.com/mirandas.odontologia/, abrindo em nova aba.
- Não incorporar feeds ao vivo (pode prejudicar performance); usar apenas os links diretos.

## 6. Arquitetura da página

Página única (one-page) com âncoras, seguindo esta ordem:

1. Header fixo
2. Hero
3. Sobre a clínica
4. Tratamentos
5. Equipe (condicional — só publicar se/quando houver dados confirmados)
6. Diferenciais
7. Prova social (condicional — só publicar se/quando houver dados confirmados)
8. Galeria (condicional — só publicar se/quando houver imagens reais)
9. Localização
10. Contato / Formulário de agendamento
11. CTA final
12. Footer

### Header

- Desktop: logo/nome, menu (Início, Clínica, Tratamentos, Equipe, Diferenciais, Depoimentos, Localização, Contato — ocultar itens de seções que ainda não têm conteúdo confirmado), CTA "Agendar consulta".
- Mobile: logo/nome, menu hamburger, CTA de WhatsApp em destaque.

## 7. Hero

Deve comunicar rapidamente: quem é a clínica, onde fica e como agendar.

- Headline objetiva e sóbria (ex.: algo como "Cuidado odontológico completo na Chácara Santo Antônio" — ajustar tom conforme identidade visual escolhida, sem frases genéricas de efeito como "Transforme seu sorriso hoje!").
- Subheadline curta mencionando apenas o que está confirmado: localização na Chácara Santo Antônio, São Paulo, atendimento odontológico.
- CTA principal: "Agendar pelo WhatsApp".
- CTA secundário: "Conhecer tratamentos".
- Elementos de confiança: incluir **somente** os que estiverem confirmados no arquivo de dados (ex.: anos de atuação, nota do Google, número de pacientes). Como nenhum desses números foi confirmado nesta pesquisa, não exibir estatísticas nesta versão inicial — deixar o componente pronto para receber esses dados no futuro.
- Usar foto real da clínica quando disponível; caso não haja, usar um placeholder visual discreto relacionado a odontologia, claramente substituível.

## 8. Sobre a clínica

Seção "Conheça a Miranda's Odontologia" usando apenas: nome, localização (Rua Bento Barbosa, 230, Chácara Santo Antônio, São Paulo), e a proposta de atendimento odontológico. Não incluir história, ano de fundação, missão/visão/valores ou números não confirmados — deixar como campos de texto editáveis para preenchimento futuro pela clínica.

## 9. Tratamentos

Seção "Encontre o cuidado ideal para o seu sorriso" com uma estrutura de dados centralizada (ex.: `tratamentos.ts`) do tipo:

```ts
interface Tratamento {
  id: string;
  nome: string;
  descricao?: string;
  icone?: string;
  destaque?: boolean;
}
```

Como nenhum tratamento específico da Miranda's Odontologia foi confirmado nesta pesquisa, popular o array inicialmente com 4 a 6 itens placeholder de categorias amplamente comuns em odontologia geral, claramente marcados como "exemplo — substituir pelos tratamentos reais da clínica" (ex.: "Clínica geral", "Ortodontia", "Estética dental", "Implantes", "Odontopediatria", "Prevenção"), deixando evidente na estrutura de dados (comentário no código) que são placeholders a validar com a clínica antes da publicação. Cada card: ícone, nome, descrição curta, CTA "Agendar avaliação" (leva ao WhatsApp com mensagem contextual do tratamento).

## 10. Equipe (seção condicional)

Não publicar nomes, fotos ou CROs de profissionais, pois nenhum foi confirmado nesta pesquisa. Construir o componente de forma que, ao preencher o array de profissionais (nome, especialidade, CRO, foto, breve descrição), a seção "Nossa equipe" apareça automaticamente; enquanto vazio, a seção não deve ser renderizada.

## 11. Diferenciais

Como nenhum diferencial específico foi confirmado publicamente, usar apenas diferenciais genéricos e defensáveis para qualquer clínica odontológica de bairro, sem superlativos não comprováveis (nunca usar "melhor clínica", "número 1" ou "referência"): localização na Chácara Santo Antônio, atendimento odontológico completo, agendamento facilitado pelo WhatsApp. Marcar no código como conteúdo a validar/expandir pela clínica.

## 12. Prova social (seção condicional)

Não inventar nota do Google, número de avaliações nem depoimentos. Estruturar o componente para receber, no futuro: nota média, número de avaliações e depoimentos reais. Enquanto esses dados não existirem, a seção não deve ser exibida.

## 13. Galeria (seção condicional)

Preparar um componente de galeria (clínica, ambiente, equipe) que só é renderizado quando houver imagens reais cadastradas. Sem imagens confirmadas, não exibir a seção nem usar fotos de banco de imagens fingindo ser da clínica.

## 14. Localização

Seção "Venha nos visitar":
- Endereço: Rua Bento Barbosa, 230, São Paulo - SP, 04716-020 (Chácara Santo Antônio).
- Mapa incorporado (Google Maps) apontando para esse endereço.
- Botão "Como chegar" linkando para o Google Maps com o endereço.
- Não exibir horário de funcionamento até que seja confirmado; se necessário para o layout, usar "Horário: consulte pelo WhatsApp".

## 15. Contato / Formulário de agendamento

Seção "Agende sua consulta" com formulário:
- Nome
- WhatsApp
- E-mail
- Interesse (select populado dinamicamente a partir do array de tratamentos)
- Mensagem

CTA do formulário: "Agendar consulta". O formulário pode montar automaticamente um link de WhatsApp com os dados preenchidos, ou ficar preparado para integração futura com backend/CRM.

Não solicitar dados de saúde sensíveis no formulário. Incluir um aviso curto de privacidade e deixar a estrutura preparada para conformidade com a LGPD (ex.: checkbox de consentimento antes do envio).

## 16. CTA final

Seção de encerramento: frase curta convidando ao agendamento (ex.: "Seu próximo sorriso começa com uma conversa."), CTA principal "Agendar pelo WhatsApp" e CTA secundário "Conhecer o Instagram".

## 17. Footer

Incluir: logo, nome da clínica, endereço confirmado, telefone confirmado, link do WhatsApp, Instagram, Facebook, links rápidos de navegação, e um espaço reservado (vazio até confirmação) para horário e para responsável técnico/CRO. Incluir link para uma página/seção de política de privacidade.

## 18. Design

Visual sofisticado, clean, moderno, profissional e acolhedor, adequado a saúde/odontologia, evitando:
- estética hospitalar fria;
- azul genérico excessivo;
- excesso de branco sem hierarquia;
- aparência de template genérico.

Usar imagens reais sempre que fornecidas; na ausência delas, usar placeholders visuais discretos e claramente substituíveis (nunca fotos de banco simulando ser da clínica real, equipe ou pacientes).

## 19. Mobile-first

- Botão fixo de WhatsApp sempre visível.
- CTAs grandes e fáceis de tocar.
- Menu simples (hamburger).
- Cards empilhados verticalmente.
- Imagens otimizadas e com lazy loading.
- Textos curtos, formulário simples de preencher em poucos toques.
- O usuário deve conseguir chegar ao agendamento via WhatsApp em poucos toques a partir de qualquer ponto da página.

## 20. Estrutura de dados centralizada

Centralizar todo o conteúdo editável (nunca espalhar pelo código):

```ts
interface ClinicaConfig {
  nome: string;
  endereco: string;
  telefone: string;
  whatsapp: string; // confirmar se é igual ao telefone
  instagramUrl: string;
  facebookUrl: string;
  siteUrl: string;
  horarioFuncionamento?: string; // vazio até confirmação
}

interface Tratamento {
  id: string;
  nome: string;
  descricao?: string;
  icone?: string;
  destaque?: boolean;
}

interface Profissional {
  id: string;
  nome: string;
  especialidade?: string;
  cro?: string;
  foto?: string;
  descricao?: string;
}

interface Depoimento {
  id: string;
  autor: string;
  texto: string;
  nota?: number;
}
```

Isso permite atualizar facilmente, no futuro: horário, WhatsApp, tratamentos, equipe, avaliações, fotos e diferenciais, sem alterar a estrutura do site.

## 21. SEO local

Otimizar para termos como: "Miranda's Odontologia", "dentista Chácara Santo Antônio", "dentista Rua Bento Barbosa", "clínica odontológica Chácara Santo Antônio", "dentista zona sul São Paulo", "odontologia São Paulo". Implementar title, meta description, Open Graph e dados estruturados Schema.org do tipo Dentist/MedicalClinic/LocalBusiness com os dados confirmados (nome, endereço, telefone). Não fazer keyword stuffing e não incluir no Schema.org dados não confirmados (horário, avaliações, avaliação média).

## 22. Performance e acessibilidade

- Carregamento rápido, lazy loading de imagens, mínimo de dependências, animações discretas (fade-in, hover, transições suaves) sem prejudicar velocidade.
- Boa pontuação de Core Web Vitals.
- Contraste adequado, textos legíveis, alt text em todas as imagens, navegação por teclado, foco visual, labels em todos os campos do formulário, sem depender só de cor para transmitir informação.

## 23. Tom de voz

Português brasileiro. Tom acolhedor, profissional, humano, seguro, sofisculado (sofisticado) e acessível. Evitar exageros, promessas de resultado, "resultado garantido", "o melhor tratamento", "a clínica número 1" ou qualquer linguagem agressiva de vendas. A comunicação deve soar como profissionais de saúde falando com o paciente, não como uma página de vendas.

## 24. Regras finais — não inventar

Nunca adicionar ao site: horário de funcionamento, nomes/CROs/formação de profissionais, tratamentos específicos, nota do Google e número de avaliações, depoimentos, ano de fundação, missão/visão/valores, prêmios, número de pacientes atendidos, tecnologias específicas, ou qualquer dado de outras clínicas chamadas "Miranda Odontologia" encontradas em outras cidades/bairros. Onde essas informações forem necessárias para o layout, usar campos vazios, placeholders neutros ou ocultar a seção até que a clínica forneça os dados reais.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/56954fb7-7b89-4281-b898-b3c6909f298d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
