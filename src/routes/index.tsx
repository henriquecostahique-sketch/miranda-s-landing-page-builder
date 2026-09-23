import { createFileRoute } from "@tanstack/react-router";
import { Menu, MessageCircle, MapPin, Phone, Send, X } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

import heroImage from "@/assets/mirandas-hero-illustration.jpg";
import { Button } from "@/components/ui/button";
import {
  clinica,
  depoimentos,
  diferenciais,
  galeria,
  politicaPrivacidade,
  profissionais,
  tratamentos,
} from "@/data/mirandas";

type FormState = {
  nome: string;
  whatsapp: string;
  email: string;
  interesse: string;
  mensagem: string;
  consentimento: boolean;
};

const defaultMessage = "Olá! Gostaria de agendar uma consulta na Miranda's Odontologia.";
const mapQuery = encodeURIComponent(`${clinica.enderecoCurto}, ${clinica.cidadeEstado}, ${clinica.cep}`);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function whatsappLink(message: string) {
  const phone = onlyDigits(clinica.whatsapp);
  const params = new URLSearchParams({ phone: `55${phone}`, text: message });
  return `https://api.whatsapp.com/send?${params.toString()}`;
}

function treatmentMessage(nome: string) {
  return `Olá! Gostaria de saber mais sobre ${nome} e gostaria de agendar uma avaliação.`;
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Miranda's Odontologia | Dentista na Chácara Santo Antônio, São Paulo",
      },
      {
        name: "description",
        content:
          "Agende pelo WhatsApp na Miranda's Odontologia, clínica odontológica na Rua Bento Barbosa, Chácara Santo Antônio, Zona Sul de São Paulo.",
      },
      {
        property: "og:title",
        content: "Miranda's Odontologia | Dentista na Chácara Santo Antônio",
      },
      {
        property: "og:description",
        content:
          "Atendimento odontológico na Rua Bento Barbosa, 230, Chácara Santo Antônio. Agende sua consulta pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Miranda's Odontologia | Dentista na Chácara Santo Antônio",
      },
      {
        name: "twitter:description",
        content:
          "Clínica odontológica na Rua Bento Barbosa, Chácara Santo Antônio, São Paulo. Agende pelo WhatsApp.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    nome: "",
    whatsapp: "",
    email: "",
    interesse: tratamentos[0]?.nome ?? "Tratamento a definir",
    mensagem: "",
    consentimento: false,
  });

  const navItems = useMemo(
    () => [
      { label: "Início", href: "#inicio", show: true },
      { label: "Clínica", href: "#sobre", show: true },
      { label: "Tratamentos", href: "#tratamentos", show: tratamentos.length > 0 },
      { label: "Equipe", href: "#equipe", show: profissionais.length > 0 },
      { label: "Diferenciais", href: "#diferenciais", show: diferenciais.length > 0 },
      { label: "Depoimentos", href: "#depoimentos", show: depoimentos.length > 0 },
      { label: "Localização", href: "#localizacao", show: true },
      { label: "Contato", href: "#contato", show: true },
    ],
    [],
  );

  const formMessage = useMemo(() => {
    const parts = [
      defaultMessage,
      form.nome ? `Nome: ${form.nome}` : "",
      form.whatsapp ? `WhatsApp para retorno: ${form.whatsapp}` : "",
      form.email ? `E-mail: ${form.email}` : "",
      form.interesse ? `Interesse: ${form.interesse}` : "",
      form.mensagem ? `Mensagem: ${form.mensagem}` : "",
    ].filter(Boolean);

    return parts.join("\n");
  }, [form]);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.consentimento) {
      return;
    }

    window.open(whatsappLink(formMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-clinic-glow text-clinic-ink antialiased">
      <Header
        menuOpen={menuOpen}
        navItems={navItems.filter((item) => item.show)}
        setMenuOpen={setMenuOpen}
      />

      <main className="mx-auto max-w-6xl px-4">
        <section
          id="inicio"
          className="grid items-center gap-8 pt-12 pb-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-glass px-3 py-1 text-[12px] font-medium text-brand backdrop-blur-xl">
              <MapPin aria-hidden="true" className="size-3.5" />
              {clinica.bairro} · Zona Sul de São Paulo
            </span>
            <h1 className="mt-5 max-w-[11ch] font-display text-[40px] font-medium leading-[1.05] tracking-normal text-balance sm:text-[54px]">
              Cuidado odontológico completo na Chácara Santo Antônio
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-clinic-ink-muted text-pretty">
              Atendimento odontológico acolhedor na {clinica.enderecoCurto}. Agende sua consulta
              de forma simples, pelo WhatsApp.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="clinic" size="lg">
                <a href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="#tratamentos">Conhecer tratamentos</a>
              </Button>
            </div>
          </div>
          <figure className="glass-panel overflow-hidden rounded-3xl">
            <img
              src={heroImage}
              alt="Ilustração substituível de recepção odontológica moderna em tons claros"
              width={1200}
              height={1000}
              className="aspect-[5/4] w-full object-cover"
            />
            <figcaption className="sr-only">
              Placeholder visual ilustrativo; substituir por foto real da clínica quando disponível.
            </figcaption>
          </figure>
        </section>

        <section id="sobre" className="pt-16 lg:pt-24">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
                Conheça a clínica
              </p>
              <h2 className="mt-3 font-display text-[30px] font-medium leading-tight tracking-normal text-balance sm:text-[38px]">
                Conheça a Miranda's Odontologia
              </h2>
            </div>
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <p className="text-[16px] leading-relaxed text-clinic-ink-muted text-pretty">
                A {clinica.nome} é uma clínica odontológica localizada na {clinica.enderecoCurto},
                no bairro {clinica.bairro}, em {clinica.cidadeEstado}. Esta página usa somente
                informações confirmadas e mantém campos editáveis para atualização futura pela clínica.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <InfoPill label="Endereço" value={`${clinica.enderecoCurto} · ${clinica.bairro}`} />
                <InfoPill label="Telefone" value={clinica.telefone} />
                <InfoPill label="Horário" value={clinica.horarioFuncionamento ?? "Consulte pelo WhatsApp"} />
                <InfoPill label="WhatsApp" value={clinica.whatsapp} />
              </div>
            </div>
          </div>
        </section>

        <section id="tratamentos" className="pt-16 lg:pt-24">
          <div className="mb-8 max-w-xl">
            <h2 className="font-display text-[28px] font-medium tracking-normal sm:text-[36px]">
              Encontre o cuidado ideal para o seu sorriso
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-clinic-ink-muted text-pretty">
              As opções abaixo são exemplos a validar com a clínica antes da publicação.
              Selecione um atendimento e fale diretamente pelo WhatsApp.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tratamentos.map((tratamento) => (
              <article key={tratamento.id} className="glass-panel rounded-2xl p-6">
                <div className="grid size-11 place-items-center rounded-xl bg-brand-soft text-[18px] text-brand">
                  {tratamento.icone}
                </div>
                <h3 className="mt-4 text-[18px] font-semibold">{tratamento.nome}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-clinic-ink-muted">
                  {tratamento.descricao}
                </p>
                <a
                  href={whatsappLink(treatmentMessage(tratamento.nome))}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center text-[13px] font-semibold text-brand underline-offset-4 transition hover:underline"
                >
                  Agendar avaliação →
                </a>
              </article>
            ))}
          </div>
        </section>

        {profissionais.length > 0 ? <EquipeSection /> : null}
        {depoimentos.length > 0 ? <DepoimentosSection /> : null}
        {galeria.length > 0 ? <GaleriaSection /> : null}

        <section id="diferenciais" className="pt-16 lg:pt-24">
          <div className="glass-panel rounded-3xl p-6 sm:p-9">
            <div className="max-w-2xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
                Diferenciais
              </p>
              <h2 className="mt-3 font-display text-[28px] font-medium tracking-normal sm:text-[36px]">
                Uma experiência simples para começar o cuidado
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-clinic-ink-muted">
                Conteúdo genérico a validar e expandir com a clínica, sem promessas ou superlativos.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {diferenciais.map((item) => (
                <article key={item.id} className="rounded-2xl border border-border bg-brand-glass p-5 backdrop-blur-xl">
                  <h3 className="text-[16px] font-semibold">{item.titulo}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-clinic-ink-muted">
                    {item.descricao}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="localizacao" className="pt-16 lg:pt-24">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <h2 className="font-display text-[28px] font-medium tracking-normal sm:text-[36px]">
                Venha nos visitar
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-clinic-ink-muted">
                {clinica.enderecoCurto} — {clinica.bairro}, {clinica.cidadeEstado}, {clinica.cep}.
              </p>
              <p className="mt-2 text-[14px] text-clinic-ink-muted">
                Horário: {clinica.horarioFuncionamento ?? "consulte pelo WhatsApp"}.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="clinic" size="lg">
                  <a href={mapsUrl} target="_blank" rel="noreferrer">
                    <MapPin aria-hidden="true" />
                    Como chegar
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer">
                    <Phone aria-hidden="true" />
                    {clinica.telefone}
                  </a>
                </Button>
              </div>
            </div>
            <div className="glass-panel min-h-[320px] overflow-hidden rounded-3xl">
              <iframe
                title="Mapa para Miranda's Odontologia"
                src={mapEmbedUrl}
                className="h-[320px] w-full border-0 sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="contato" className="pt-16 lg:pt-24">
          <div className="grid gap-6 rounded-3xl border border-border bg-brand-glass p-6 shadow-glass backdrop-blur-xl sm:p-9 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-[26px] font-medium tracking-normal sm:text-[32px]">
                Agende sua consulta
              </h2>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-clinic-ink-muted">
                Preencha seus dados e envie direto pelo WhatsApp. Não solicitamos informações
                sensíveis de saúde por este formulário.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-brand-glass p-4 backdrop-blur-xl">
                <p className="text-[13px] font-semibold text-brand">{clinica.nome}</p>
                <p className="mt-1 text-[14px] text-clinic-ink-muted">
                  {clinica.enderecoCurto} · {clinica.bairro} · {clinica.cidadeEstado}
                </p>
                <p className="mt-1 text-[14px] text-clinic-ink-muted">
                  Horário: {clinica.horarioFuncionamento ?? "consulte pelo WhatsApp"}
                </p>
              </div>
            </div>
            <form className="grid gap-3" onSubmit={handleFormSubmit}>
              <label className="text-[13px] font-medium text-clinic-ink-muted">
                Nome
                <input
                  value={form.nome}
                  onChange={(event) => setForm({ ...form, nome: event.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-brand-glass px-4 py-3 text-[14px] text-clinic-ink outline-none transition focus:border-brand focus:bg-background"
                  placeholder="Como podemos te chamar"
                  autoComplete="name"
                />
              </label>
              <label className="text-[13px] font-medium text-clinic-ink-muted">
                WhatsApp
                <input
                  value={form.whatsapp}
                  onChange={(event) => setForm({ ...form, whatsapp: event.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-brand-glass px-4 py-3 text-[14px] text-clinic-ink outline-none transition focus:border-brand focus:bg-background"
                  placeholder="(11) 90000-0000"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>
              <label className="text-[13px] font-medium text-clinic-ink-muted">
                E-mail
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-brand-glass px-4 py-3 text-[14px] text-clinic-ink outline-none transition focus:border-brand focus:bg-background"
                  placeholder="voce@email.com"
                  autoComplete="email"
                />
              </label>
              <label className="text-[13px] font-medium text-clinic-ink-muted">
                Interesse
                <select
                  value={form.interesse}
                  onChange={(event) => setForm({ ...form, interesse: event.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-brand-glass px-4 py-3 text-[14px] text-clinic-ink outline-none transition focus:border-brand focus:bg-background"
                >
                  {tratamentos.map((tratamento) => (
                    <option key={tratamento.id}>{tratamento.nome}</option>
                  ))}
                  <option>Tratamento a definir</option>
                </select>
              </label>
              <label className="text-[13px] font-medium text-clinic-ink-muted">
                Mensagem
                <textarea
                  value={form.mensagem}
                  onChange={(event) => setForm({ ...form, mensagem: event.target.value })}
                  rows={3}
                  className="mt-1 w-full resize-none rounded-xl border border-border bg-brand-glass px-4 py-3 text-[14px] text-clinic-ink outline-none transition focus:border-brand focus:bg-background"
                  placeholder="Conte o que você precisa"
                />
              </label>
              <label className="flex items-start gap-2 text-[12px] text-clinic-ink-muted">
                <input
                  type="checkbox"
                  checked={form.consentimento}
                  onChange={(event) => setForm({ ...form, consentimento: event.target.checked })}
                  className="mt-0.5 size-4 accent-brand"
                />
                <span>{politicaPrivacidade.resumo} Autorizo o contato conforme a Política de Privacidade.</span>
              </label>
              <Button type="submit" variant="clinic" size="lg" disabled={!form.consentimento} className="mt-1">
                <Send aria-hidden="true" />
                Agendar consulta
              </Button>
            </form>
          </div>
        </section>

        <section className="my-16 lg:my-20">
          <div className="overflow-hidden rounded-3xl border border-border bg-brand-glass shadow-glass backdrop-blur-xl">
            <div className="grid items-center gap-6 p-8 lg:grid-cols-[1fr_auto] lg:p-12">
              <div>
                <h2 className="font-display text-[26px] font-medium tracking-normal sm:text-[34px]">
                  Seu próximo sorriso começa com uma conversa.
                </h2>
                <p className="mt-3 max-w-md text-[15px] text-clinic-ink-muted">
                  Fale com a Miranda's Odontologia e agende sua avaliação.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="clinic" size="lg">
                  <a href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" />
                    Agendar pelo WhatsApp
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href={clinica.instagramUrl} target="_blank" rel="noreferrer">
                    Conhecer o Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer navItems={navItems.filter((item) => item.show)} />
      <FloatingWhatsApp />
    </div>
  );
}

function Header({
  menuOpen,
  navItems,
  setMenuOpen,
}: {
  menuOpen: boolean;
  navItems: Array<{ label: string; href: string }>;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4">
      <div className="flex items-center justify-between rounded-2xl border border-border bg-brand-glass px-4 py-3 shadow-glass backdrop-blur-xl sm:px-5">
        <a href="#inicio" className="flex shrink-0 items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-brand text-sm font-semibold text-brand-foreground">
            M
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold">Miranda's</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Odontologia
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-[14px] font-medium text-clinic-ink lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-brand" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="clinic" size="clinic" className="hidden sm:inline-flex">
            <a href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
          </Button>
          <Button
            type="button"
            variant="glass"
            size="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {menuOpen ? (
        <nav className="mt-2 rounded-2xl border border-border bg-brand-glass p-3 shadow-glass backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3 py-3 text-[15px] font-medium text-clinic-ink transition hover:bg-background/70 hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="clinic" size="lg" className="mt-2 w-full">
            <a href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-brand-glass p-4 backdrop-blur-xl">
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand">{label}</p>
      <p className="mt-1 text-[14px] leading-relaxed text-clinic-ink-muted">{value}</p>
    </div>
  );
}

function EquipeSection() {
  return (
    <section id="equipe" className="pt-16 lg:pt-24">
      <div className="glass-panel rounded-3xl p-6 sm:p-8">
        <h2 className="font-display text-[28px] font-medium tracking-normal sm:text-[36px]">
          Nossa equipe
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {profissionais.map((profissional) => (
            <article key={profissional.id} className="rounded-2xl border border-border bg-brand-glass p-5">
              <h3 className="font-semibold">{profissional.nome}</h3>
              {profissional.especialidade ? <p>{profissional.especialidade}</p> : null}
              {profissional.cro ? <p>{profissional.cro}</p> : null}
              {profissional.descricao ? <p>{profissional.descricao}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DepoimentosSection() {
  return (
    <section id="depoimentos" className="pt-16 lg:pt-24">
      <div className="glass-panel rounded-3xl p-6 sm:p-8">
        <h2 className="font-display text-[28px] font-medium tracking-normal sm:text-[36px]">
          Depoimentos
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <article key={depoimento.id} className="rounded-2xl border border-border bg-brand-glass p-5">
              <p className="text-[14px] leading-relaxed text-clinic-ink-muted">{depoimento.texto}</p>
              <p className="mt-3 font-semibold">{depoimento.autor}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GaleriaSection() {
  return (
    <section id="galeria" className="pt-16 lg:pt-24">
      <div className="grid gap-4 md:grid-cols-3">
        {galeria.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="aspect-[4/3] rounded-2xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}

function Footer({ navItems }: { navItems: Array<{ label: string; href: string }> }) {
  return (
    <footer className="border-t border-border bg-brand-glass backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-[13px] text-clinic-ink-muted md:grid-cols-[1.25fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-clinic-ink">
            <span className="grid size-9 place-items-center rounded-xl bg-brand text-sm font-semibold text-brand-foreground">
              M
            </span>
            <span className="font-semibold">{clinica.nome}</span>
          </div>
          <p className="mt-3 leading-relaxed">
            {clinica.endereco}. Tel.: {clinica.telefone}.
          </p>
          <p className="mt-2 leading-relaxed">
            Horário: {clinica.horarioFuncionamento ?? "a confirmar"} · Responsável técnico/CRO:{" "}
            {clinica.responsavelTecnico ?? "a confirmar"}
          </p>
        </div>
        <div>
          <p className="font-semibold text-clinic-ink">Links rápidos</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-brand">
                {item.label}
              </a>
            ))}
            <a href="#privacidade" className="transition hover:text-brand">
              Privacidade
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-clinic-ink">Contato</p>
          <div className="mt-3 flex flex-col gap-2">
            <a href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer" className="transition hover:text-brand">
              WhatsApp
            </a>
            <a href={clinica.instagramUrl} target="_blank" rel="noreferrer" className="transition hover:text-brand">
              Instagram
            </a>
            <a href={clinica.facebookUrl} target="_blank" rel="noreferrer" className="transition hover:text-brand">
              Facebook
            </a>
            <a href={clinica.siteUrl} target="_blank" rel="noreferrer" className="transition hover:text-brand">
              Site institucional
            </a>
          </div>
        </div>
      </div>
      <div id="privacidade" className="mx-auto max-w-6xl px-4 pb-10 text-[12px] leading-relaxed text-clinic-ink-muted">
        Política de privacidade: {politicaPrivacidade.resumo}
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(defaultMessage)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-[15px] font-semibold text-brand-foreground shadow-brand transition hover:scale-[1.03]"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}