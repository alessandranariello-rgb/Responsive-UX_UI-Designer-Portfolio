import { useState, useEffect } from 'react'
import cvFoto from '@/imports/cv_foto.JPG'
import DiaryScreen from '@/imports/Diary'
import ModEmergenzaScreen from '@/imports/ModEmergenza'
import tearsHeroBg from '@/imports/Landingpage1/dc313f565e9b3f2ede996fde28af912a0a09f6df.png'
// Materiali originali del progetto
import imgPersonaLuca from '@/imports/persona-luca-ferri.png'
import imgPersonaGiulia from '@/imports/persona-giulia-conti.png'
import imgPersonaChiara from '@/imports/persona-chiara-benedetti.png'
import imgPersonaElisa from '@/imports/persona-elisa-martini.png'
import imgIaMPD from '@/imports/image-5.png'
import imgIaTOD from '@/imports/image-4.png'
import imgInterviewMPD from '@/imports/Screenshot_2026-08-29_093600.png'
import imgInterviewTOD from '@/imports/Screenshot_2026-08-29_093607.png'
import imgWireframeTOD from '@/imports/image-1.png'
import imgCompetitor1 from '@/imports/Screenshot_2026-08-29_094318.png'
import imgCompetitor2 from '@/imports/Screenshot_2026-08-29_094339.png'
// Wireframe My Pet's Days
import imgWfHome from '@/imports/Screenshot_2026-09-08_195351.png'
import imgWfDiario from '@/imports/Screenshot_2026-09-08_195449.png'
import imgWfSOS from '@/imports/Screenshot_2026-09-08_195508.png'
import imgWfLibrettoDati from '@/imports/Screenshot_2026-09-08_195537.png'
import imgWfLibrettoVaccini from '@/imports/Screenshot_2026-09-08_195600.png'
import imgWfEvento from '@/imports/Screenshot_2026-09-08_195627.png'
// Schermate finali My Pet's Days
import imgHifiHome from '@/imports/image-3.png'
import imgHifiLibrettoDati from '@/imports/Screenshot_2026-09-08_201533.png'
import imgHifiLibrettoVaccini from '@/imports/Screenshot_2026-09-08_201711.png'

type Page = 'home' | 'case-mypetsdays' | 'case-tearsofdown'

const CV_URL =
  'https://drive.google.com/file/d/1yKiOuxLd4HG9WMoU4sZaroEW2gXEW0hU/view?usp=sharing'

// ─── UTILITY COMPONENTS ──────────────────────────────────────────────────────

function DocImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="space-y-3">
      <div className="rounded-xl overflow-hidden border border-[#E0DAD4]">
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption className="text-xs text-[#8A7F78] text-center italic">{caption}</figcaption>
      )}
    </figure>
  )
}

type PersonaData = {
  name: string
  age: number
  city: string
  gender: string
  education: string
  role?: string
  bio: string
  motivations: string[]
  goals: string[]
  frustrations: string[]
}

function PersonaCard({ p }: { p: PersonaData }) {
  return (
    <div className="bg-[#F2EDE7] rounded-2xl overflow-hidden border border-[#E0DAD4]">
      <div className="px-7 pt-7 pb-5 border-b border-[#E0DAD4]">
        <h4 className="font-serif text-2xl text-[#1C1614] mb-1">{p.name}</h4>
        <p className="text-xs text-[#8A7F78]">
          {p.age} anni · {p.city} · {p.gender}
        </p>
        <p className="text-xs text-[#7A3B5C] mt-1">{p.education}</p>
      </div>
      <div className="p-7 space-y-6">
        <p className="text-[15px] text-[#6E6661] leading-relaxed">{p.bio}</p>
        <div>
          <p className="text-[10px] font-medium text-[#7A3B5C] uppercase tracking-widest mb-3">
            Motivazioni
          </p>
          <ul className="space-y-1.5">
            {p.motivations.map((m) => (
              <li key={m} className="flex items-start gap-2 text-[15px] text-[#1C1614]">
                <span className="text-[#7A3B5C] shrink-0 mt-1">·</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-medium text-[#7A3B5C] uppercase tracking-widest mb-3">
            Obiettivi
          </p>
          <ul className="space-y-1.5">
            {p.goals.map((g) => (
              <li key={g} className="flex items-start gap-2 text-[15px] text-[#1C1614]">
                <span className="text-[#7A3B5C] shrink-0 mt-1">·</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-medium text-[#7A3B5C] uppercase tracking-widest mb-3">
            Frustrazioni
          </p>
          <ul className="space-y-1.5">
            {p.frustrations.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[15px] text-[#6E6661]">
                <span className="text-[#8A7F78] shrink-0 mt-1">·</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function CsSection({ children }: { children: React.ReactNode }) {
  return <div className="border-t border-[#E0DAD4] pt-16 mb-20">{children}</div>
}

function CsH2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-3xl text-[#1C1614] mb-6">{children}</h2>
}

function CsLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#6E6661] text-[16px] leading-relaxed mb-8 max-w-2xl">{children}</p>
  )
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { label: 'Progetti', href: '#progetti' },
    { label: 'Chi sono', href: '#chi-sono' },
    { label: 'Competenze', href: '#competenze' },
    { label: 'Contatti', href: '#contatti' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F4EF]/96 backdrop-blur-md border-b border-[#E0DAD4]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {onBack ? (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-[#6E6661] hover:text-[#1C1614] transition-colors"
          >
            ← Portfolio
          </button>
        ) : (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif italic text-[#1C1614] text-xl hover:text-[#7A3B5C] transition-colors"
          >
            A.
          </button>
        )}

        <nav className="hidden md:flex items-center gap-8">
          {!onBack &&
            links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-[#6E6661] hover:text-[#1C1614] transition-colors tracking-wide"
              >
                {l.label}
              </button>
            ))}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[#7A3B5C] text-white px-5 py-2.5 rounded-full hover:bg-[#6A2D4C] transition-colors tracking-wide"
          >
            Scarica il CV
          </a>
        </nav>

        {!onBack && (
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-px bg-[#1C1614] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-[#1C1614] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-[#1C1614] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
            />
          </button>
        )}
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F7F4EF] border-t border-[#E0DAD4] px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-[#1C1614] py-2 border-b border-[#E0DAD4] last:border-0 text-base"
            >
              {l.label}
            </button>
          ))}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7A3B5C] text-white py-3 rounded-full text-sm"
          >
            Scarica il CV
          </a>
        </div>
      )}
    </header>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 md:gap-16 items-center">
          <div>
            <p className="text-[#8A7F78] text-xs tracking-[0.18em] uppercase mb-8">
              Junior UX/UI Designer
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[72px] text-[#1C1614] leading-[1.05] mb-6">
              Ciao, sono
              <br />
              <em className="text-[#7A3B5C] not-italic">Alessandra</em>
            </h1>
            <p className="text-[#1C1614] text-lg md:text-xl font-light leading-relaxed mb-3 max-w-lg">
              Designer di esperienze digitali con l'anima di un'artigiana.
            </p>
            <p className="text-[#6E6661] text-base leading-relaxed mb-8 max-w-md">
              Per anni ho lavorato i metalli preziosi con le mani. Oggi progetto interfacce digitali
              con la stessa cura, attenzione ai dettagli e curiosità verso ciò che funziona davvero.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('#progetti')}
                className="bg-[#1C1614] text-[#F7F4EF] px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-[#7A3B5C] transition-colors duration-200"
              >
                Scopri i miei progetti
              </button>
              <button
                onClick={() => scrollTo('#chi-sono')}
                className="border border-[#E0DAD4] text-[#1C1614] px-7 py-3.5 rounded-full text-sm tracking-wide hover:border-[#7A3B5C] hover:text-[#7A3B5C] transition-colors duration-200"
              >
                Conosciamoci
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-5 border border-[#E0DAD4] rounded-2xl pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-14 h-14 border border-[#7A3B5C]/25 rounded-full pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#7A3B5C]/10 rounded-full pointer-events-none" />
              <div className="w-[240px] h-[300px] md:w-[280px] md:h-[350px] overflow-hidden rounded-xl bg-[#E8E0D8]">
                <img
                  src={cvFoto}
                  alt="Alessandra — Junior UX/UI Designer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -left-6 bg-[#F7F4EF] border border-[#E0DAD4] px-4 py-2 rounded-full text-xs text-[#7A3B5C] shadow-sm whitespace-nowrap">
                Oreficeria → UX/UI Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PHONE MOCKUP ────────────────────────────────────────────────────────────

function PhoneMockup({ screen = 'diary', size = 'md' }: { screen?: 'diary' | 'sos'; size?: 'sm' | 'md' }) {
  const Screen = screen === 'sos' ? ModEmergenzaScreen : DiaryScreen
  const w = size === 'sm' ? 168 : 200
  const scale = w / 393
  const h = Math.round(852 * scale)

  return (
    <div
      className="relative bg-[#111010] rounded-[38px] shadow-2xl shadow-black/30"
      style={{ width: w + 16, padding: 8 }}
    >
      <div className="overflow-hidden rounded-[30px]" style={{ width: w, height: h }}>
        <div
          style={{
            width: 393,
            height: 852,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: 393, height: 852, position: 'relative' }}>
            <Screen />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

function Projects({ onReadCase }: { onReadCase: (id: Page) => void }) {
  return (
    <section id="progetti" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#E0DAD4] pb-8 gap-4">
          <div>
            <p className="text-[10px] text-[#8A7F78] tracking-[0.2em] uppercase mb-3">
              01 — Progetti selezionati
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1614]">Il mio lavoro</h2>
          </div>
          <p className="text-[15px] text-[#6E6661] max-w-xs md:text-right leading-relaxed">
            Due progetti che raccontano il mio processo, dalla definizione iniziale allo sviluppo dell'interfaccia.
          </p>
        </div>

        {/* Project 1 */}
        <article className="mb-8 bg-[#F2EDE7] rounded-2xl overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px]">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-[10px] text-[#7A3B5C] tracking-[0.2em] uppercase mb-5 block">
                UX/UI Design · Mobile app concept
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1C1614] mb-5">
                My Pet's Days
              </h3>
              <p className="text-[#6E6661] text-[16px] leading-relaxed mb-8 max-w-[480px]">
                Un'applicazione pensata per aiutare le persone a organizzare appuntamenti,
                vaccinazioni, informazioni sanitarie, promemoria e ricordi dei propri animali
                domestici.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Analisi dei competitor', 'Personas', 'Architettura dell\'informazione', 'Wireframing', 'UI Design', 'Prototipazione'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-[11px] border border-[#D8D0C8] px-3 py-1.5 rounded-full text-[#6E6661]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <button
                onClick={() => onReadCase('case-mypetsdays')}
                className="self-start flex items-center gap-2 text-sm text-[#7A3B5C] font-medium group/btn"
              >
                <span className="border-b border-transparent group-hover/btn:border-[#7A3B5C] transition-all pb-px">
                  Leggi il case study
                </span>
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
            <div className="bg-[#FFF8E7] flex items-end justify-center pt-10 px-6">
              <PhoneMockup screen="diary" size="md" />
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="relative bg-[#0E0C0F] rounded-2xl overflow-hidden min-h-[440px] group">
          <div className="absolute inset-0">
            <img
              src={tearsHeroBg}
              alt="Tears of Dawn — atmosfera fantasy"
              className="w-full h-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0F] via-[#0E0C0F]/75 to-transparent" />
          </div>
          <div className="relative p-8 md:p-12 flex flex-col justify-center min-h-[440px] max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] text-[#C4A8B8] tracking-[0.2em] uppercase">
                UX/UI Design
              </span>
              <span className="text-[10px] text-[#7A3B5C] bg-[#7A3B5C]/20 border border-[#7A3B5C]/30 px-2.5 py-1 rounded-full tracking-wide">
                Progetto in corso
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-5">Tears of Dawn</h3>
            <p className="text-white/65 text-[16px] leading-relaxed mb-8 max-w-[520px]">
              Progetto UX/UI in corso per la landing page di un videogioco fantasy. Dalla
              definizione iniziale e dall'architettura dei contenuti fino al wireframe e allo
              sviluppo dell'interfaccia.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Definizione del progetto', 'Proto-persona', "Architettura dell'informazione", 'Wireframing', 'UI Design in corso'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[11px] border border-white/15 px-3 py-1.5 rounded-full text-white/50"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <button
              onClick={() => onReadCase('case-tearsofdown')}
              className="self-start flex items-center gap-2 text-sm text-[#C4A8B8] font-medium group/btn"
            >
              <span className="border-b border-transparent group-hover/btn:border-[#C4A8B8] transition-all pb-px">
                Scopri il processo
              </span>
              <span className="transition-transform group-hover/btn:translate-x-1">→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="chi-sono" className="py-24 md:py-36 bg-[#F2EDE7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <p className="text-[10px] text-[#8A7F78] tracking-[0.2em] uppercase mb-6">
              02 — Chi sono
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1614] leading-tight mb-10">
              Dal metallo prezioso
              <br />
              <em className="text-[#7A3B5C] not-italic">alle interfacce digitali</em>
            </h2>
            <div className="space-y-5 text-[#6E6661] leading-relaxed text-[17px]">
              <p>
                Ho iniziato il mio percorso professionale nell'oreficeria, lavorando con materiali
                preziosi e prestando attenzione a proporzioni, superfici e dettagli. È
                un'esperienza che mi ha insegnato precisione, pazienza e capacità di affrontare
                vincoli tecnici.
              </p>
              <p>
                Nel design digitale ho ritrovato lo stesso equilibrio tra estetica e funzione:
                comprendere un problema, esplorare diverse soluzioni e trasformarle in
                un'esperienza chiara e coerente.
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-2">
            {[
              {
                label: 'Precisione',
                desc: "L'oreficeria insegna che ogni dettaglio conta. Nel design digitale, questo si traduce in coerenza visiva, spaziatura rigorosa e cura per ogni singolo elemento.",
              },
              {
                label: 'Pazienza',
                desc: 'Creare qualcosa di bello richiede tempo. Sono abituata a rifare, rifinire, ricominciare — finché non è giusto.',
              },
              {
                label: 'Problem solving',
                desc: "Ogni pezzo di gioielleria inizia con un vincolo tecnico da superare. Nel design, ogni progetto inizia con un problema da comprendere.",
              },
              {
                label: 'Sensibilità visiva',
                desc: "Anni a studiare forme, proporzioni e materiali mi hanno dato un'intuizione estetica che applico alle scelte tipografiche, cromatiche e compositive.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="border-l-2 border-[#7A3B5C] pl-5">
                <h4 className="font-medium text-[#1C1614] text-base mb-1.5">{label}</h4>
                <p className="text-[15px] text-[#6E6661] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────

function Skills() {
  const groups = [
    {
      cat: 'UX',
      items: ['Personas', 'Analisi dei competitor', "Architettura dell'informazione", 'Flussi utente', 'Wireframing'],
    },
    {
      cat: 'UI',
      items: ['Gerarchia visiva', 'Tipografia', 'Colore', 'Componenti', 'Progettazione responsive', 'Prototipazione'],
    },
    { cat: 'Strumenti', items: ['Figma', 'Miro'] },
  ]

  return (
    <section id="competenze" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#E0DAD4] pb-8 gap-4">
          <div>
            <p className="text-[10px] text-[#8A7F78] tracking-[0.2em] uppercase mb-3">
              03 — Competenze
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1614]">Cosa so fare</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map(({ cat, items }) => (
            <div key={cat} className="bg-[#F2EDE7] rounded-2xl p-8">
              <span className="text-[10px] text-[#7A3B5C] tracking-[0.2em] uppercase block mb-7">
                {cat}
              </span>
              <ul className="space-y-3.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#1C1614]">
                    <span className="w-1 h-1 rounded-full bg-[#7A3B5C] shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROCESS ─────────────────────────────────────────────────────────────────

function Process() {
  const steps = [
    {
      n: '01',
      label: 'Comprendere',
      desc: "Ascolto, ricerca e domande. Prima di disegnare qualsiasi cosa cerco di capire il problema nel suo contesto: chi sono gli utenti, cosa fanno, cosa li frustra.",
    },
    {
      n: '02',
      label: 'Definire',
      desc: "Organizzo ciò che ho scoperto in pattern, obiettivi e requisiti. Questo è il momento in cui il problema vago diventa un problema da risolvere.",
    },
    {
      n: '03',
      label: 'Progettare',
      desc: "Wireframe, architettura, interfacce e prototipi. Esploro più soluzioni, le confronto e scelgo quella che serve meglio utente e prodotto.",
    },
    {
      n: '04',
      label: 'Valutare e migliorare',
      desc: "Condivido il lavoro, raccolgo feedback e itero. Il design non finisce alla prima versione — migliora con ogni conversazione.",
    },
  ]

  return (
    <section className="py-24 md:py-36 bg-[#1C1614]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="text-[10px] text-[#9A8D86] tracking-[0.2em] uppercase mb-3">
            04 — Il processo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F2EDE7]">Come lavoro</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2C2422]">
          {steps.map(({ n, label, desc }) => (
            <div key={n} className="bg-[#1C1614] p-8 hover:bg-[#231B19] transition-colors duration-200">
              <span className="font-serif text-5xl text-[#7A3B5C]/50 block mb-7">{n}</span>
              <h3 className="font-serif text-xl text-[#F2EDE7] mb-4">{label}</h3>
              <p className="text-[15px] text-[#A89B94] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contatti" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-[10px] text-[#8A7F78] tracking-[0.2em] uppercase mb-6">
            05 — Contatti
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1614] leading-[1.1] mb-6">
            Costruiamo qualcosa
            <br />
            <em className="text-[#7A3B5C] not-italic">insieme</em>
          </h2>
          <p className="text-[#6E6661] text-[16px] leading-relaxed mb-12 max-w-md">
            Sono aperta a nuove opportunità, collaborazioni e conversazioni interessanti. Che tu
            stia cercando una junior designer o voglia semplicemente parlare di design, scrivimi.
          </p>
          <div className="space-y-3">
            <a
              href="mailto:alessandranariello@gmail.com"
              className="flex items-center gap-5 group border border-[#E0DAD4] px-6 py-4 rounded-xl hover:border-[#7A3B5C] transition-colors duration-200"
            >
              <span className="text-[#7A3B5C] w-5 text-center select-none">✉</span>
              <div>
                <p className="text-[10px] text-[#8A7F78] uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-[15px] text-[#1C1614] group-hover:text-[#7A3B5C] transition-colors">
                  alessandranariello@gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/alessandranariello"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group border border-[#E0DAD4] px-6 py-4 rounded-xl hover:border-[#7A3B5C] transition-colors duration-200"
            >
              <span className="text-[#7A3B5C] w-5 text-center font-semibold text-xs select-none">
                in
              </span>
              <div>
                <p className="text-[10px] text-[#8A7F78] uppercase tracking-wider mb-0.5">
                  LinkedIn
                </p>
                <p className="text-[15px] text-[#1C1614] group-hover:text-[#7A3B5C] transition-colors">
                  www.linkedin.com/in/alessandranariello
                </p>
              </div>
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 w-full text-left group border border-[#E0DAD4] px-6 py-4 rounded-xl hover:border-[#7A3B5C] transition-colors duration-200"
            >
              <span className="text-[#7A3B5C] w-5 text-center select-none">↓</span>
              <div>
                <p className="text-[10px] text-[#8A7F78] uppercase tracking-wider mb-0.5">
                  Curriculum Vitae
                </p>
                <p className="text-[15px] text-[#1C1614] group-hover:text-[#7A3B5C] transition-colors">
                  Scarica il CV (PDF)
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[#E0DAD4] py-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif italic text-[#1C1614] text-lg">Alessandra</p>
        <p className="text-xs text-[#8A7F78]">Junior UX/UI Designer</p>
        <p className="text-xs text-[#8A7F78]">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

// ─── HOME ────────────────────────────────────────────────────────────────────

function Home({ onProject }: { onProject: (id: Page) => void }) {
  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <Nav />
      <Hero />
      <Projects onReadCase={onProject} />
      <About />
      <Skills />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

// ─── CASE STUDY NAV ──────────────────────────────────────────────────────────

function CaseStudyNav({ onBack, title }: { onBack: () => void; title: string }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F7F4EF]/96 backdrop-blur-md border-b border-[#E0DAD4]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-[#6E6661] hover:text-[#1C1614] transition-colors"
        >
          ← Portfolio
        </button>
        <p className="text-sm text-[#1C1614] hidden md:block font-medium">{title}</p>
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-[#7A3B5C] text-white px-5 py-2.5 rounded-full hover:bg-[#6A2D4C] transition-colors"
        >
          Scarica il CV
        </a>
      </div>
    </header>
  )
}

// ─── CASE STUDY: MY PET'S DAYS ───────────────────────────────────────────────

function CaseStudyMyPetsDays({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <CaseStudyNav onBack={onBack} title="My Pet's Days" />

      {/* Hero */}
      <div className="bg-[#FFF8E7] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <span className="text-[10px] text-[#7A3B5C] tracking-[0.2em] uppercase block mb-5">
            UX/UI Design · Mobile App
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C1614] mb-6">My Pet's Days</h1>
          <p className="text-[#6E6661] text-lg md:text-xl max-w-2xl leading-relaxed">
            Un'applicazione mobile per aiutare i proprietari di animali domestici a gestire
            appuntamenti, vaccinazioni, informazioni sanitarie, promemoria e ricordi — anche con
            più animali contemporaneamente.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16">
        {/* Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-[#E0DAD4] pb-16 mb-16">
          {[
            { label: 'Ruolo', value: 'UX/UI Designer · Progetto personale' },
            { label: 'Durata', value: 'Circa 3 mesi' },
            { label: 'Strumenti', value: 'Figma · Miro' },
            { label: 'Tipo', value: 'Mobile App (iOS)' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] text-[#8A7F78] uppercase tracking-wider mb-1.5">{label}</p>
              <p className="text-[15px] text-[#1C1614]">{value}</p>
            </div>
          ))}
        </div>

        {/* Sfida */}
        <CsSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
            <div>
              <CsH2>La sfida</CsH2>
              <p className="text-[#6E6661] text-[16px] leading-relaxed mb-4">
                Chi ha più animali domestici si trova spesso a gestire informazioni sparse:
                promemoria sul telefono, fogli veterinari cartacei, messaggi nei gruppi di
                famiglia. Nessuna app esistente unisce in modo soddisfacente la gestione
                sanitaria, i promemoria quotidiani e la dimensione affettiva — i ricordi, le
                foto, i momenti speciali.
              </p>
              <p className="text-[#6E6661] text-[16px] leading-relaxed">
                My Pet's Days nasce dalla necessità di avere tutto in un unico posto: utile
                nell'urgenza (modalità SOS, contatti veterinario) e piacevole nella vita
                quotidiana (diario, ricordi, calendario).
              </p>
            </div>
            <div className="bg-[#F0E8ED] rounded-2xl p-7 border-l-2 border-[#7A3B5C] h-fit">
              <h3 className="font-medium text-[#7A3B5C] mb-4 text-xs uppercase tracking-widest">
                Obiettivi del progetto
              </h3>
              <ul className="space-y-2.5">
                {[
                  'Centralizzare le informazioni sanitarie per ogni animale',
                  'Semplificare la gestione dei promemoria quotidiani',
                  'Creare uno spazio per i ricordi e il diario',
                  'Accesso rapido ai contatti in caso di emergenza',
                  'Supportare più animali nella stessa interfaccia',
                  'Permettere la condivisione con pet-sitter e partner',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-[#1C1614]">
                    <span className="text-[#7A3B5C] mt-0.5 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CsSection>

        {/* Ricerca qualitativa — interviste */}
        <CsSection>
          <CsH2>Ricerca qualitativa</CsH2>
          <CsLead>
            Per comprendere le abitudini e le difficoltà quotidiane dei proprietari di animali, ho
            strutturato un'intervista qualitativa in 15 domande, esplorando la gestione della
            routine, la cura sanitaria, l'uso del pet-sitter e la gestione dei ricordi.
          </CsLead>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <DocImage
              src={imgInterviewMPD}
              alt="Guida alle interviste qualitative — My Pet's Days"
              caption="Guida alle interviste qualitative — 15 domande"
            />
            <div>
              <p className="text-xs text-[#7A3B5C] uppercase tracking-widest mb-4 font-medium">
                Aree esplorate
              </p>
              <ul className="space-y-3">
                {[
                  { area: 'Routine quotidiana', desc: 'Come gestiscono il cibo, le pulizie e le attività giornaliere del pet' },
                  { area: 'Gestione sanitaria', desc: 'Appuntamenti vet, farmaci, vaccinazioni e come li ricordano' },
                  { area: 'Multi-pet', desc: 'Difficoltà specifiche di chi ha più animali da gestire' },
                  { area: 'Pet-sitter', desc: 'Come condividono le informazioni con chi si prende cura del pet in loro assenza' },
                  { area: 'Memoria e ricordi', desc: 'Come archiviano foto, note e momenti speciali legati al loro animale' },
                  { area: 'Emergenze', desc: 'Come gestirebbero una situazione urgente (es. colpo di calore)' },
                ].map(({ area, desc }) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="text-[#7A3B5C] shrink-0 mt-1 text-xs">→</span>
                    <div>
                      <span className="text-[15px] font-medium text-[#1C1614]">{area}</span>
                      <span className="text-[15px] text-[#6E6661]"> — {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CsSection>

        {/* Analisi dei competitor */}
        <CsSection>
          <CsH2>Analisi dei competitor</CsH2>
          <CsLead>
            Ho analizzato le app di pet care più diffuse sul mercato per identificare gap e
            opportunità. Il focus principale dell'analisi è stato su <strong>11pets</strong>, una
            delle app più complete e utilizzate nel settore.
          </CsLead>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <DocImage
              src={imgCompetitor1}
              alt="Analisi competitor 11pets — Brand e posizionamento"
              caption="11pets — Brand, logo e posizionamento"
            />
            <DocImage
              src={imgCompetitor2}
              alt="Analisi competitor 11pets — Funzionalità principali"
              caption="11pets — Funzionalità principali (con screenshot)"
            />
          </div>

          <div className="bg-[#F2EDE7] rounded-2xl p-8">
            <h3 className="font-medium text-[#1C1614] mb-6 text-base">
              Sintesi dell'analisi: 11pets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] text-[#7A3B5C] uppercase tracking-widest mb-3 font-medium">
                  Punti di forza
                </p>
                <ul className="space-y-2">
                  {[
                    'Brand chiaro e riconoscibile (nome + logo gatto stilizzato)',
                    'Gestione profili multipli per ogni animale',
                    'Registro completo di vaccinazioni, allergie, trattamenti',
                    'Promemoria programmati per cure e visite',
                    'Upload di referti e documenti con cronologia',
                    'Backup cloud e multi-device',
                    'Versione professionale per veterinari e sitter',
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[15px] text-[#1C1614]">
                      <span className="text-green-600 shrink-0 mt-0.5">+</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] text-[#7A3B5C] uppercase tracking-widest mb-3 font-medium">
                  Gap e opportunità
                </p>
                <ul className="space-y-2">
                  {[
                    'Profili multipli solo con abbonamento premium',
                    'Diario fotografico e note emotive solo in versione premium',
                    'Poca enfasi sulla dimensione affettiva del rapporto con l\'animale',
                    'Interfaccia poco personalizzabile e visivamente generica',
                    'Nessuna modalità SOS per le emergenze',
                    'Difficoltà nella condivisione con pet-sitter',
                  ].map((g) => (
                    <li key={g} className="flex items-start gap-2 text-[15px] text-[#6E6661]">
                      <span className="text-[#7A3B5C] shrink-0 mt-0.5">→</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CsSection>

        {/* Personas */}
        <CsSection>
          <CsH2>Le personas</CsH2>
          <CsLead>
            Per rappresentare due differenti tipologie di utenti e orientare le prime decisioni
            progettuali, ho sviluppato due personas a partire dai bisogni e dai comportamenti
            emersi durante la ricerca iniziale.
          </CsLead>

          <div className="space-y-10">
            <DocImage
              src={imgPersonaChiara}
              alt="Persona board di Chiara Benedetti"
              caption="Chiara Benedetti — Persona con un solo animale"
            />
            <DocImage
              src={imgPersonaElisa}
              alt="Persona board di Elisa Martini"
              caption="Elisa Martini — Persona multi-pet"
            />
          </div>
        </CsSection>

        {/* Architettura dell'informazione */}
        <CsSection>
          <CsH2>Architettura dell'informazione</CsH2>
          <CsLead>
            L'architettura organizza le diverse funzioni dell'app su più livelli. Calendario,
            Diario e SOS costituiscono la navigazione principale; l'Area personale e le
            impostazioni sono accessibili dal menu hamburger laterale. Il profilo del pet attivo
            è integrato nella Home e permette di visualizzare il calendario e le informazioni
            associate all'animale selezionato.
          </CsLead>

          <div className="mb-10">
            <DocImage
              src={imgIaMPD}
              alt="Architettura dell'informazione — My Pet's Days App (Miro)"
              caption="Architettura dell'informazione — diagramma originale realizzato su Miro"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: '🏠',
                title: 'Home + Calendario',
                note: 'Navigazione principale',
                items: [
                  'Profilo del pet attivo (switchabile)',
                  'Calendario con appuntamenti, farmaci, pulizie, promemoria',
                  'Note giornaliere e comportamentali',
                ],
              },
              {
                icon: '📸',
                title: 'Diario',
                note: 'Navigazione principale',
                items: ['Foto e video del pet', 'Diario scritto con descrizione'],
              },
              {
                icon: '🆘',
                title: 'SOS',
                note: 'Navigazione principale',
                items: [
                  'Libretto sanitario (dati animale, vaccini)',
                  'Numeri del veterinario',
                  'Accesso rapido in caso di emergenza',
                ],
              },
              {
                icon: '⚙️',
                title: 'Area Personale',
                note: 'Menu hamburger laterale',
                items: [
                  'Notifiche e impostazioni',
                  'Backup e sicurezza',
                  'Condivisione account',
                  'Abbonamento premium',
                ],
              },
            ].map(({ icon, title, note, items }) => (
              <div key={title} className="border border-[#E0DAD4] rounded-xl p-6">
                <p className="text-2xl mb-3">{icon}</p>
                <h4 className="font-medium text-[#1C1614] mb-1 text-base">{title}</h4>
                <p className="text-[11px] text-[#7A3B5C] uppercase tracking-wider mb-4">{note}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-[14px] text-[#6E6661] flex items-start gap-2">
                      <span className="w-1 h-1 bg-[#D8D0C8] rounded-full shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CsSection>

        {/* Wireframe */}
        <CsSection>
          <CsH2>Wireframe</CsH2>
          <CsLead>
            Dopo aver definito l'architettura dell'informazione, ho sviluppato i wireframe delle
            principali sezioni dell'app. Questa fase mi ha permesso di organizzare contenuti,
            gerarchie e percorsi di navigazione prima di lavorare sull'aspetto visivo
            dell'interfaccia.
          </CsLead>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { src: imgWfHome, alt: 'Wireframe — Home, profilo del pet e Calendario', caption: 'Home, profilo del pet e Calendario' },
              { src: imgWfEvento, alt: 'Wireframe — Creazione evento e promemoria', caption: 'Creazione evento' },
              { src: imgWfDiario, alt: 'Wireframe — Diario', caption: 'Diario' },
              { src: imgWfSOS, alt: 'Wireframe — Modalità SOS', caption: 'Modalità SOS' },
              { src: imgWfLibrettoDati, alt: 'Wireframe — Libretto sanitario, dati animale', caption: 'Libretto sanitario' },
              { src: imgWfLibrettoVaccini, alt: 'Wireframe — Libretto sanitario, vaccini', caption: 'Libretto sanitario — Vaccini' },
            ].map(({ src, alt, caption }) => (
              <figure key={caption} className="space-y-2">
                <div className="rounded-xl overflow-hidden border border-[#E0DAD4] bg-[#F2EDE7]">
                  <img src={src} alt={alt} className="w-full h-auto block" />
                </div>
                <figcaption className="text-xs text-[#8A7F78] text-center">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </CsSection>

        {/* Direzione visiva */}
        <CsSection>
          <CsH2>Direzione visiva</CsH2>
          <CsLead>
            La palette richiama il calore e la dolcezza della cura degli animali: toni crema e
            terra con accenti morbidi. La tipografia scelta (Urbanist) è arrotondata e accessibile.
            L'obiettivo era un'app che si sentisse accogliente, mai fredda o troppo medicale.
          </CsLead>
          <div className="flex flex-wrap gap-5 mb-8">
            {[
              { color: '#FFF8E7', label: 'Cosmic Latte' },
              { color: '#6F5447', label: 'Coffee' },
              { color: '#9F8170', label: 'Beaver' },
              { color: '#FFF4B0', label: 'Vanilla' },
              { color: '#FFB7C5', label: 'Cherry Blossom Pink' },
            ].map(({ color, label }) => (
              <div key={color} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-full border border-[#E0DAD4]"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-[#8A7F78]">{label}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#F2EDE7] rounded-2xl p-6 border border-[#E0DAD4]">
            <p className="text-[10px] text-[#7A3B5C] uppercase tracking-widest mb-2 font-medium">
              Tipografia
            </p>
            <p className="text-[16px] text-[#1C1614]">
              <strong>Urbanist</strong> — Regular, SemiBold, Bold
            </p>
            <p className="text-[15px] text-[#6E6661] mt-1">
              Font geometrico e arrotondato, scelto per la sua leggibilità e il carattere caldo
              e contemporaneo
            </p>
          </div>
        </CsSection>

        {/* Schermate finali */}
        <CsSection>
          <CsH2>Schermate finali</CsH2>
          <CsLead>
            Le schermate principali dell'applicazione, realizzate ad alta fedeltà in Figma.
          </CsLead>

          {/* Riga principale: Home, Diario, SOS */}
          <div className="flex flex-wrap gap-8 items-end mb-14">
            <figure className="flex flex-col items-center gap-3">
              <div className="rounded-[28px] overflow-hidden border border-[#E0DAD4] shadow-md" style={{ width: 184 }}>
                <img src={imgHifiHome} alt="Home, profilo del pet e Calendario" className="w-full h-auto block" />
              </div>
              <figcaption className="text-[13px] text-[#8A7F78] text-center max-w-[140px] leading-snug">
                Home, profilo del pet e Calendario
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-3">
              <PhoneMockup screen="diary" size="sm" />
              <figcaption className="text-[13px] text-[#8A7F78]">Diario</figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-3">
              <PhoneMockup screen="sos" size="sm" />
              <figcaption className="text-[13px] text-[#8A7F78]">Modalità SOS</figcaption>
            </figure>
          </div>

          {/* Libretto sanitario */}
          <div>
            <p className="text-[10px] text-[#7A3B5C] uppercase tracking-widest mb-5 font-medium">
              Libretto sanitario
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {[
                { src: imgHifiLibrettoDati, alt: 'Libretto sanitario — Dati dell\'animale', caption: 'Dati dell\'animale' },
                { src: imgHifiLibrettoVaccini, alt: 'Libretto sanitario — Vaccini', caption: 'Vaccini' },
              ].map(({ src, alt, caption }) => (
                <figure key={caption} className="flex flex-col items-center gap-3">
                  <div className="rounded-[28px] overflow-hidden border border-[#E0DAD4] shadow-md" style={{ width: 184 }}>
                    <img src={src} alt={alt} className="w-full h-auto block" />
                  </div>
                  <figcaption className="text-[13px] text-[#8A7F78] text-center">{caption}</figcaption>
                </figure>
              ))}
            </div>
            <p className="text-[13px] text-[#8A7F78] mt-4 italic">
              Le schermate mostrate rappresentano le sezioni principali del libretto sanitario.
            </p>
          </div>
        </CsSection>

        {/* Decisioni di design */}
        <CsSection>
          <CsH2>Decisioni di design chiave</CsH2>
          <div className="space-y-8">
            {[
              {
                title: 'Navigazione principale a 3 sezioni',
                desc: "Calendario, Diario e SOS sono accessibili dalla bottom navigation. L'Area personale e le impostazioni sono invece contenute nel menu hamburger laterale, riducendo l'affollamento della navigazione principale.",
              },
              {
                title: 'Modalità SOS dedicata',
                desc: "Sezione separata, visivamente riconoscibile e raggiungibile immediatamente. Contiene libretto sanitario, numeri del veterinario e cronologia medica — tutto ciò che serve in un'emergenza.",
              },
              {
                title: 'Profili multipli e switchabili',
                desc: "Ogni animale ha il proprio profilo, selezionabile con un singolo tap dalla home. Le informazioni del calendario sono legate al profilo attivo, evitando confusione tra animali diversi.",
              },
              {
                title: 'Condivisione delle informazioni',
                desc: "L'app prevede la possibilità di condividere le informazioni del pet con chi si occupa di lui in assenza del proprietario — un caso d'uso centrale per chi ha più animali o si affida a un pet-sitter.",
              },
              {
                title: 'Diario come spazio emotivo',
                desc: "Il diario non è solo un registro medico: supporta foto, testo libero e note comportamentali. L'app riconosce la dimensione affettiva del rapporto con l'animale.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10">
                <h4 className="font-medium text-[#1C1614] text-base">{title}</h4>
                <p className="text-[15px] text-[#6E6661] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </CsSection>

        {/* Lezioni */}
        <CsSection>
          <div className="bg-[#F2EDE7] rounded-2xl p-8 md:p-12">
            <CsH2>Risultati e lezioni apprese</CsH2>
            <p className="text-[#6E6661] text-[16px] leading-relaxed mb-8 max-w-2xl">
              Questo è stato il mio primo progetto UX/UI completo, dalla ricerca alle schermate ad
              alta fedeltà. Ho imparato quanto sia fondamentale definire il problema e costruire
              l'architettura prima di aprire Figma.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Definire l'architettura prima di wirefrare risparmia tempo e riduce i rework",
                "La coerenza visiva si ottiene con un sistema di componenti, non caso per caso",
                "L'utente non legge — scansiona. La gerarchia visiva è tutto",
                "Le interviste qualitative cambiano il punto di vista sul problema",
                "Un progetto personale richiede la stessa disciplina di un progetto cliente",
                "Il diario e i ricordi erano una delle funzioni più desiderate — non me lo aspettavo",
              ].map((lesson) => (
                <div key={lesson} className="flex items-start gap-3 text-[15px] text-[#1C1614]">
                  <span className="text-[#7A3B5C] mt-0.5 shrink-0">→</span>
                  {lesson}
                </div>
              ))}
            </div>
          </div>
        </CsSection>

        {/* Prossimi passi */}
        <CsSection>
          <CsH2>Prossimi passi</CsH2>
          <ul className="space-y-3">
            {[
              'Condurre test di usabilità con utenti reali per validare i flussi principali',
              'Validare e perfezionare il flusso Home–Calendario attraverso test di usabilità.',
              'Progettare il sistema di notifiche per promemoria ricorrenti',
              "Progettare l'onboarding per nuovi utenti",
              'Esplorare il flusso di condivisione con pet-sitter',
            ].map((step) => (
              <li key={step} className="flex items-start gap-3 text-[15px] text-[#6E6661]">
                <span className="text-[#7A3B5C] shrink-0 mt-0.5">·</span>
                {step}
              </li>
            ))}
          </ul>
        </CsSection>

        {/* Navigazione */}
        <div className="border-t border-[#E0DAD4] pt-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-[15px] text-[#6E6661] hover:text-[#1C1614] transition-colors"
          >
            ← Torna al portfolio
          </button>
          <button
            onClick={onNext}
            className="group flex items-center gap-3 hover:gap-5 transition-all"
          >
            <span className="font-serif text-2xl text-[#1C1614] group-hover:text-[#7A3B5C] transition-colors">
              Tears of Dawn →
            </span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// ─── CASE STUDY: TEARS OF DAWN ───────────────────────────────────────────────

function CaseStudyTearsOfDawn({ onBack, onPrev }: { onBack: () => void; onPrev: () => void }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <CaseStudyNav onBack={onBack} title="Tears of Dawn" />

      {/* Hero */}
      <div className="relative bg-[#0E0C0F] pt-32 pb-24 overflow-hidden flex items-end min-h-[420px]">
        <div className="absolute inset-0">
          <img
            src={tearsHeroBg}
            alt="Tears of Dawn — hero"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0F] via-[#0E0C0F]/60 to-[#0E0C0F]/10" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 w-full">
          <span className="text-[10px] text-[#C4A8B8] tracking-[0.2em] uppercase block mb-5">
            UX Design · Fantasy Game Landing Page
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Tears of Dawn</h1>
          <p className="text-white/55 text-lg md:text-xl max-w-2xl leading-relaxed">
            Progettazione dell'esperienza e della struttura di una landing page per un videogioco
            fantasy ambientato tra luce e oscurità. Il progetto comprende ricerca esplorativa,
            definizione delle proto-personas, architettura dell'informazione e wireframe.
          </p>
          <p className="text-white/45 text-sm max-w-2xl leading-relaxed mt-5">
            Le immagini utilizzate per esplorare l'atmosfera visiva del concept sono state generate
            con Adobe Firefly e Leonardo AI.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16">
        {/* Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-[#E0DAD4] pb-16 mb-20">
          {[
            { label: 'Ruolo', value: 'UX Designer · Progetto personale' },
            { label: 'Durata', value: 'Circa 6 settimane' },
            { label: 'Strumenti', value: 'Figma' },
            { label: 'Tipo', value: 'Landing page desktop' },
            { label: 'Stato del progetto:', value: 'fase UX completata · UI in sviluppo' },
            {
              label: 'Nota sul progetto',
              value:
                'Il nome Tears of Dawn e il logo sono stati ideati e progettati da me appositamente per questo progetto personale.',
            },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] text-[#8A7F78] uppercase tracking-wider mb-1.5">{label}</p>
              <p className="text-[15px] text-[#1C1614]">{value}</p>
            </div>
          ))}
        </div>

        {/* Sfida */}
        <CsSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            <div>
              <CsH2>La sfida</CsH2>
              <p className="text-[#6E6661] text-[16px] leading-relaxed mb-4">
                Definire la struttura di una landing page per un videogioco fantasy immaginario,
                capace di presentare in modo chiaro l'atmosfera, il mondo narrativo e i personaggi
                principali.
              </p>
              <p className="text-[#6E6661] text-[16px] leading-relaxed">
                La sfida consisteva nell'organizzare contenuti molto visivi all'interno di un
                percorso di navigazione coerente, stabilendo una gerarchia delle informazioni
                prima di sviluppare l'interfaccia ad alta fedeltà.
              </p>
            </div>
            <div className="bg-[#1C1614] rounded-2xl p-7 h-fit">
              <h3 className="font-medium text-[#C4A8B8] mb-4 text-xs uppercase tracking-widest">
                Obiettivi
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Comunicare l'atmosfera e il mondo narrativo del gioco",
                  'Presentare i personaggi principali',
                  'Organizzare i contenuti in una sequenza chiara',
                  'Definire una gerarchia efficace delle informazioni',
                  "Guidare l'utente verso la wishlist o il preorder",
                  'Strutturare il wireframe della landing page',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-white/65">
                    <span className="text-[#7A3B5C] shrink-0 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CsSection>

        {/* Ricerca esplorativa */}
        <CsSection>
          <CsH2>Ricerca esplorativa</CsH2>
          <CsLead>
            Per comprendere quali contenuti potrebbero influenzare l'interesse verso la landing page
            di un videogioco, ho preparato una traccia esplorativa di 14 domande. La traccia
            analizza abitudini di gioco, modalità di scoperta di nuovi titoli, contenuti considerati
            prioritari e possibili cause di abbandono della pagina.
          </CsLead>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <DocImage
              src={imgInterviewTOD}
              alt="Traccia esplorativa di 14 domande — Tears of Dawn"
              caption="Traccia esplorativa — 14 domande"
            />
            <div>
              <p className="text-xs text-[#7A3B5C] uppercase tracking-widest mb-4 font-medium">
                Temi esplorati
              </p>
              <ul className="space-y-3">
                {[
                  { area: 'Abitudini di gioco', desc: 'Piattaforme preferite, generi e frequenza di gioco' },
                  { area: 'Discovery', desc: 'Come scoprono nuovi giochi (YouTube, social, amici)' },
                  { area: 'Landing page', desc: 'Cosa guardano per primo, cosa li spinge a restare' },
                  { area: 'Contenuto prioritario', desc: 'Storia, gameplay o personaggi: cosa pesa di più' },
                  { area: 'Comportamento mobile vs desktop', desc: 'Come cambiano le aspettative di navigazione' },
                  { area: 'Trigger di abbandono', desc: 'Cosa farebbe chiudere subito una pagina' },
                ].map(({ area, desc }) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="text-[#7A3B5C] shrink-0 mt-1 text-xs">→</span>
                    <div>
                      <span className="text-[15px] font-medium text-[#1C1614]">{area}</span>
                      <span className="text-[15px] text-[#6E6661]"> — {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CsSection>

        {/* Proto-personas */}
        <CsSection>
          <CsH2>Le proto-personas</CsH2>
          <CsLead>
            Per orientare le prime decisioni progettuali, ho definito due proto-personas basate su
            ipotesi iniziali relative al pubblico di una landing page per videogiochi fantasy.
            Questi profili dovranno essere validati attraverso future interviste con utenti reali.
          </CsLead>

          <div className="space-y-10">
            <DocImage
              src={imgPersonaLuca}
              alt="Proto-persona board di Luca Ferri"
              caption="Luca Ferri — Proto-persona primaria"
            />
            <DocImage
              src={imgPersonaGiulia}
              alt="Proto-persona board di Giulia Conti"
              caption="Giulia Conti — Proto-persona secondaria"
            />
          </div>
        </CsSection>

        {/* Architettura dell'informazione */}
        <CsSection>
          <CsH2>Architettura dell'informazione</CsH2>
          <CsLead>
            Ho mappato la struttura della landing page in un diagramma su Figma, organizzando i
            contenuti in sette sezioni narrative con obiettivi distinti.
          </CsLead>

          <div className="mb-10">
            <DocImage
              src={imgIaTOD}
              alt="Architettura dell'informazione — Tears of Dawn Landing Page"
              caption="Architettura dell'informazione — diagramma originale del progetto"
            />
          </div>

          <div className="space-y-2">
            {[
              {
                n: '01',
                title: 'Hero Section',
                desc: 'Logo + titolo del gioco, sottotitolo evocativo, CTA social (Instagram, Facebook, YouTube), CTA secondaria "Aggiungi alla Wishlist"',
              },
              {
                n: '02',
                title: 'Story Section — La leggenda dell\'Alba Perduta',
                desc: 'Testo descrittivo (3-4 righe), ritratto dell\'eroina Auriel, micro CTA "Scopri la sua storia"',
              },
              {
                n: '03',
                title: 'World Section — Un mondo sospeso tra luce e ombra',
                desc: '3 card ambientazioni: Rovine celesti, Tempio della Luce, Valle delle Ombre. CTA "Esplora il mondo"',
              },
              {
                n: '04',
                title: 'Characters Section — I protagonisti',
                desc: 'Card per Auriel, Elyon e Nocthar con nome, descrizione breve e citazione. CTA "Scopri i personaggi"',
              },
              {
                n: '05',
                title: 'Gameplay',
                desc: '3 meccaniche chiave con icone: Combattimento dinamico, Scelte morali, Grafica cinematografica',
              },
              {
                n: '06',
                title: 'Call To Action finale',
                desc: 'CTA principale Wishlist su Steam / Preordina ora, background con raggi di luce nel tempio',
              },
              {
                n: '07',
                title: 'Footer',
                desc: 'Loghi social (Discord, Instagram, Steam), contatti dello studio, Privacy, Termini, Copyright © Tears of Dawn 2025',
              },
            ].map(({ n, title, desc }) => (
              <div
                key={n}
                className="flex items-start gap-5 py-4 border-b border-[#E0DAD4] last:border-0"
              >
                <span className="text-xs text-[#7A3B5C] font-mono w-5 shrink-0 mt-0.5">{n}</span>
                <div>
                  <span className="text-base font-medium text-[#1C1614]">{title}</span>
                  <span className="text-[15px] text-[#6E6661]"> — {desc}</span>
                </div>
              </div>
            ))}
          </div>
        </CsSection>

        {/* Wireframe */}
        <CsSection>
          <CsH2>Wireframe</CsH2>
          <CsLead>
            Ho realizzato un wireframe a bassa fedeltà dell'intera landing page per validare
            la struttura, il ritmo verticale e la gerarchia delle informazioni prima di passare
            alla fase di UI.
          </CsLead>
          <DocImage
            src={imgWireframeTOD}
            alt="Wireframe — Tears of Dawn Landing Page"
            caption="Wireframe a bassa fedeltà dell'intera landing page"
          />
        </CsSection>

        {/* Lezioni */}
        <CsSection>
          <div className="bg-[#F2EDE7] rounded-2xl p-8 md:p-12">
            <CsH2>Lezioni apprese</CsH2>
            <p className="text-[#6E6661] text-[16px] leading-relaxed mb-8 max-w-2xl">
              Questa prima fase del progetto mi ha permesso di concentrarmi sulla struttura e
              sulla gerarchia dei contenuti prima di affrontare il visual design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Preparare una traccia esplorativa aiuta a chiarire quali aspetti approfondire con utenti reali',
                'Le proto-personas permettono di esplicitare ipotesi iniziali da validare',
                "L'architettura dell'informazione rende più chiaro il percorso narrativo della pagina",
                'Il wireframe consente di verificare struttura, ritmo verticale e gerarchia prima della UI',
                'Separare la fase UX dal visual design aiuta a evitare soluzioni premature',
              ].map((lesson) => (
                <div key={lesson} className="flex items-start gap-3 text-[15px] text-[#1C1614]">
                  <span className="text-[#7A3B5C] mt-0.5 shrink-0">→</span>
                  {lesson}
                </div>
              ))}
            </div>
          </div>
        </CsSection>

        {/* Prossimi passi */}
        <CsSection>
          <CsH2>Prossimi passi</CsH2>
          <ul className="space-y-3">
            {[
              'Sviluppare la direzione visiva e la palette definitiva',
              "Progettare l'interfaccia ad alta fedeltà della landing page",
              'Creare un sistema coerente di componenti e stili',
              'Validare la gerarchia e la leggibilità con utenti reali',
              'Progettare successivamente la versione mobile',
            ].map((step) => (
              <li key={step} className="flex items-start gap-3 text-[15px] text-[#6E6661]">
                <span className="text-[#7A3B5C] shrink-0 mt-0.5">·</span>
                {step}
              </li>
            ))}
          </ul>
        </CsSection>

        {/* Navigazione */}
        <div className="border-t border-[#E0DAD4] pt-16 flex items-center justify-between">
          <button
            onClick={onPrev}
            className="group flex items-center gap-3 hover:gap-5 transition-all"
          >
            <span className="font-serif text-2xl text-[#1C1614] group-hover:text-[#7A3B5C] transition-colors">
              ← My Pet's Days
            </span>
          </button>
          <button
            onClick={onBack}
            className="text-[15px] text-[#6E6661] hover:text-[#1C1614] transition-colors"
          >
            Torna al portfolio →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// ─── ROOT ────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>('home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  if (page === 'case-mypetsdays') {
    return (
      <CaseStudyMyPetsDays
        onBack={() => setPage('home')}
        onNext={() => setPage('case-tearsofdown')}
      />
    )
  }

  if (page === 'case-tearsofdown') {
    return (
      <CaseStudyTearsOfDawn
        onBack={() => setPage('home')}
        onPrev={() => setPage('case-mypetsdays')}
      />
    )
  }

  return <Home onProject={(id) => setPage(id as Page)} />
}
