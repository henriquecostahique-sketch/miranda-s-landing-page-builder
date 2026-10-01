import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { casosAntesDepois, type CasoAntesDepois } from "@/data/mirandas";

function Label({ children }: { children: string }) {
  return (
    <span className="absolute left-2 top-2 rounded-full bg-brand-glass px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-clinic-ink backdrop-blur">
      {children}
    </span>
  );
}

function CompareSlider({ caso }: { caso: CasoAntesDepois }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl select-none">
      <img src={caso.depoisUrl} alt="Depois" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={caso.antesUrl} alt="Antes" className="h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary-foreground shadow-brand" style={{ left: `${pos}%` }} />
      <Label>Antes</Label>
      <span className="absolute right-2 top-2 rounded-full bg-brand-glass px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-clinic-ink backdrop-blur">Depois</span>
      <input
        type="range" min={0} max={100} value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparar antes e depois"
        className="absolute inset-x-4 bottom-4 accent-[var(--brand)]"
      />
    </div>
  );
}

export function AntesDepoisSection({ ctaHref }: { ctaHref: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [aberto, setAberto] = useState<CasoAntesDepois | null>(null);
  const total = casosAntesDepois.length;

  const scrollTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };
  const onScroll = () => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;
    const w = (el.firstElementChild as HTMLElement).offsetWidth + 16;
    setIndex(Math.min(total - 1, Math.round(el.scrollLeft / w)));
  };

  return (
    <section id="antes-depois" className="pt-16 lg:pt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">Casos</p>
          <h2 className="mt-2 font-display text-3xl text-clinic-ink sm:text-4xl">Antes e Depois</h2>
        </div>
        {total > 1 ? (
          <div className="hidden gap-2 md:flex">
            <Button variant="glass" size="icon" aria-label="Caso anterior" onClick={() => scrollTo(Math.max(0, index - 1))}><ChevronLeft /></Button>
            <Button variant="glass" size="icon" aria-label="Próximo caso" onClick={() => scrollTo(Math.min(total - 1, index + 1))}><ChevronRight /></Button>
          </div>
        ) : null}
      </div>

      <div ref={trackRef} onScroll={onScroll} className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none]">
        {casosAntesDepois.map((caso) => (
          <button
            key={caso.id}
            type="button"
            onClick={() => setAberto(caso)}
            className="glass-panel w-[88%] shrink-0 snap-start rounded-3xl p-3 text-left transition hover:-translate-y-0.5 sm:w-[70%] lg:w-[48%]"
            aria-label="Ampliar caso antes e depois"
          >
            <div className="grid grid-cols-2 gap-2">
              {([["Antes", caso.antesUrl], ["Depois", caso.depoisUrl]] as const).map(([rot, src]) => (
                <div key={rot} className="relative overflow-hidden rounded-2xl">
                  <img src={src} alt={`${rot} do tratamento`} loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover" />
                  <Label>{rot}</Label>
                </div>
              ))}
            </div>
            {caso.legenda ? <p className="mt-3 px-1 text-sm text-clinic-ink-muted">{caso.legenda}</p> : null}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="flex gap-1.5">
          {casosAntesDepois.map((c, i) => (
            <button key={c.id} type="button" aria-label={`Ir para caso ${i + 1}`} onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-brand" : "w-2 bg-clinic-ink-muted/40"}`} />
          ))}
        </div>
        <span className="text-xs text-clinic-ink-muted">{index + 1}/{total}</span>
      </div>

      <div className="mt-6 flex justify-center">
        <Button asChild variant="whatsapp" size="clinic">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">Agendar avaliação</a>
        </Button>
      </div>

      <Dialog open={!!aberto} onOpenChange={(o) => !o && setAberto(null)}>
        <DialogContent className="max-w-3xl">
          <DialogTitle className="font-display text-clinic-ink">Antes e Depois</DialogTitle>
          {aberto ? <CompareSlider caso={aberto} /> : null}
          {aberto?.legenda ? <p className="text-sm text-clinic-ink-muted">{aberto.legenda}</p> : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
