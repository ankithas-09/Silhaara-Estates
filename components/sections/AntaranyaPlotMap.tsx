"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

/* ════════════════════════════════════════════════════════════
   TYPES
════════════════════════════════════════════════════════════ */
type Status   = "Available" | "Reserved" | "Sold";
type VillaType = "NILA" | "VANYA" | "ARANYAKA";

interface Plot {
  id:     number;
  label:  string;
  villa:  VillaType;
  status: Status;
  size:   string;
  points: string; // SVG polygon points string
  cx:     number; // label centre x
  cy:     number; // label centre y
}

interface Amenity {
  id:   string;
  name: string;
  x:    number;
  y:    number;
}

/* ════════════════════════════════════════════════════════════
   PLOT DATA  ·  26 plots · 3 villa types
════════════════════════════════════════════════════════════ */
const plots: Plot[] = [
  // ── NILA (1–10) · west zone ─────────────────────────────
  { id:1,  label:"N·01", villa:"NILA", status:"Available", size:"15,000 sqft", points:"42,298 116,298 116,360 42,360",    cx:79,  cy:329 },
  { id:2,  label:"N·02", villa:"NILA", status:"Available", size:"15,000 sqft", points:"126,298 200,298 200,360 126,360",  cx:163, cy:329 },
  { id:3,  label:"N·03", villa:"NILA", status:"Reserved",  size:"15,000 sqft", points:"42,370 116,370 116,432 42,432",    cx:79,  cy:401 },
  { id:4,  label:"N·04", villa:"NILA", status:"Available", size:"15,000 sqft", points:"126,370 200,370 200,432 126,432",  cx:163, cy:401 },
  { id:5,  label:"N·05", villa:"NILA", status:"Available", size:"15,000 sqft", points:"42,442 116,442 116,504 42,504",    cx:79,  cy:473 },
  { id:6,  label:"N·06", villa:"NILA", status:"Sold",      size:"15,000 sqft", points:"126,442 200,442 200,504 126,504",  cx:163, cy:473 },
  { id:7,  label:"N·07", villa:"NILA", status:"Available", size:"15,000 sqft", points:"42,514 116,514 116,576 42,576",    cx:79,  cy:545 },
  { id:8,  label:"N·08", villa:"NILA", status:"Reserved",  size:"15,000 sqft", points:"126,514 200,514 200,576 126,576",  cx:163, cy:545 },
  { id:9,  label:"N·09", villa:"NILA", status:"Available", size:"15,000 sqft", points:"42,586 116,586 116,648 42,648",    cx:79,  cy:617 },
  { id:10, label:"N·10", villa:"NILA", status:"Sold",      size:"15,000 sqft", points:"126,586 200,586 200,648 126,648",  cx:163, cy:617 },

  // ── VANYA (11–20) · east zone ────────────────────────────
  { id:11, label:"V·11", villa:"VANYA", status:"Available", size:"20,000 sqft", points:"678,298 762,298 762,360 678,360",  cx:720, cy:329 },
  { id:12, label:"V·12", villa:"VANYA", status:"Available", size:"20,000 sqft", points:"772,298 856,298 856,360 772,360",  cx:814, cy:329 },
  { id:13, label:"V·13", villa:"VANYA", status:"Available", size:"20,000 sqft", points:"678,370 762,370 762,432 678,432",  cx:720, cy:401 },
  { id:14, label:"V·14", villa:"VANYA", status:"Reserved",  size:"20,000 sqft", points:"772,370 856,370 856,432 772,432",  cx:814, cy:401 },
  { id:15, label:"V·15", villa:"VANYA", status:"Available", size:"20,000 sqft", points:"678,442 762,442 762,504 678,504",  cx:720, cy:473 },
  { id:16, label:"V·16", villa:"VANYA", status:"Sold",      size:"20,000 sqft", points:"772,442 856,442 856,504 772,504",  cx:814, cy:473 },
  { id:17, label:"V·17", villa:"VANYA", status:"Available", size:"20,000 sqft", points:"678,514 762,514 762,576 678,576",  cx:720, cy:545 },
  { id:18, label:"V·18", villa:"VANYA", status:"Reserved",  size:"20,000 sqft", points:"772,514 856,514 856,576 772,576",  cx:814, cy:545 },
  { id:19, label:"V·19", villa:"VANYA", status:"Available", size:"20,000 sqft", points:"678,586 762,586 762,648 678,648",  cx:720, cy:617 },
  { id:20, label:"V·20", villa:"VANYA", status:"Sold",      size:"20,000 sqft", points:"772,586 856,586 856,648 772,648",  cx:814, cy:617 },

  // ── ARANYAKA (21–26) · north estates ─────────────────────
  { id:21, label:"A·21", villa:"ARANYAKA", status:"Available", size:"43,560 sqft", points:"42,82 200,82 200,168 42,168",     cx:121, cy:125 },
  { id:22, label:"A·22", villa:"ARANYAKA", status:"Reserved",  size:"43,560 sqft", points:"42,178 200,178 200,264 42,264",   cx:121, cy:221 },
  { id:23, label:"A·23", villa:"ARANYAKA", status:"Available", size:"43,560 sqft", points:"282,68 420,68 420,175 282,175",   cx:351, cy:121 },
  { id:24, label:"A·24", villa:"ARANYAKA", status:"Available", size:"43,560 sqft", points:"462,68 600,68 600,175 462,175",   cx:531, cy:121 },
  { id:25, label:"A·25", villa:"ARANYAKA", status:"Available", size:"43,560 sqft", points:"678,82 856,82 856,168 678,168",   cx:767, cy:125 },
  { id:26, label:"A·26", villa:"ARANYAKA", status:"Sold",      size:"43,560 sqft", points:"678,178 856,178 856,264 678,264", cx:767, cy:221 },
];

const amenities: Amenity[] = [
  { id:"gym",   name:"Gym",             x:314, y:336 },
  { id:"pool",  name:"Swimming Pool",   x:562, y:368 },
  { id:"padel", name:"Padel Court",     x:560, y:468 },
  { id:"yoga",  name:"Yoga Deck",       x:312, y:460 },
  { id:"play",  name:"Children's Play", x:440, y:554 },
  { id:"pod1",  name:"WFN Pod",         x:364, y:508 },
  { id:"pod2",  name:"WFN Pod",         x:516, y:508 },
  { id:"pod3",  name:"WFN Pod",         x:440, y:316 },
  { id:"farm",  name:"Organic Farm",    x:558, y:544 },
  { id:"star",  name:"Stargazing Deck", x:440, y:42  },
];

/* ════════════════════════════════════════════════════════════
   STYLE HELPERS
════════════════════════════════════════════════════════════ */
const VILLA_HEX: Record<VillaType, string> = {
  NILA:     "#3d6b52",
  VANYA:    "#6b5230",
  ARANYAKA: "#2e5b68",
};

const STATUS_BADGE: Record<Status, string> = {
  Available: "bg-[#daeadf] text-[#2e5e44]",
  Reserved:  "bg-[#f0e6d0] text-[#7a5a28]",
  Sold:      "bg-[#dddbd6] text-[#555248]",
};

const STATUS_DOT: Record<Status, string> = {
  Available: "#5a9a72",
  Reserved:  "#c4a060",
  Sold:      "#909088",
};

function plotFill(p: Plot, active: boolean, lit: boolean): string {
  if (!active) return "rgba(195,192,180,0.07)";
  if (lit)     return "rgba(230,197,148,0.32)";
  const byVilla: Record<VillaType, string> = {
    NILA:     "rgba(156,200,170,0.24)",
    VANYA:    "rgba(195,200,162,0.22)",
    ARANYAKA: "rgba(146,192,188,0.24)",
  };
  if (p.status === "Available") return byVilla[p.villa];
  if (p.status === "Reserved")  return "rgba(222,188,130,0.20)";
  return "rgba(144,140,130,0.14)";
}

function plotStroke(p: Plot, active: boolean, lit: boolean): string {
  if (!active) return "rgba(175,170,158,0.20)";
  if (lit)     return "rgba(230,197,148,0.95)";
  if (p.status === "Available") return "rgba(32,58,54,0.38)";
  if (p.status === "Reserved")  return "rgba(198,162,86,0.70)";
  return "rgba(112,108,100,0.44)";
}

/* ════════════════════════════════════════════════════════════
   ESTATE BOUNDARY PATH  (shared between fill + stroke layers)
════════════════════════════════════════════════════════════ */
const BOUNDARY =
  "M440,665 Q560,663 670,658 Q760,654 840,640 Q875,622 878,578 " +
  "L878,400 Q878,280 870,200 Q860,138 832,98 Q796,60 738,46 " +
  "Q680,34 620,34 Q560,34 500,40 Q480,42 462,56 Q452,60 440,58 " +
  "Q428,60 418,56 Q400,42 380,40 Q320,34 260,34 Q200,34 158,46 " +
  "Q100,60 62,98 Q34,138 24,200 Q16,280 22,400 " +
  "L22,578 Q24,622 56,640 Q136,654 220,658 Q330,663 440,665 Z";

/* ════════════════════════════════════════════════════════════
   COMPONENT
════════════════════════════════════════════════════════════ */
export default function AntaranyaPlotMap() {
  const [hoveredId,    setHoveredId]    = useState<number | null>(null);
  const [selectedId,   setSelectedId]   = useState<number | null>(null);
  const [searchQuery,  setSearchQuery]  = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | Status>("All");

  /* ids that pass current filter — drives both list + map dim state */
  const activeIds = useMemo<Set<number>>(() => {
    const q = searchQuery.trim().toLowerCase();
    return new Set(
      plots
        .filter(p => {
          const matchSearch =
            !q ||
            String(p.id).includes(q) ||
            p.villa.toLowerCase().includes(q) ||
            p.status.toLowerCase().includes(q) ||
            p.label.toLowerCase().replace("·", "").includes(q);
          const matchStatus = statusFilter === "All" || p.status === statusFilter;
          return matchSearch && matchStatus;
        })
        .map(p => p.id)
    );
  }, [searchQuery, statusFilter]);

  const listPlots   = plots.filter(p => activeIds.has(p.id));
  const selectedPlot = plots.find(p => p.id === selectedId) ?? null;

  const availCount   = plots.filter(p => p.status === "Available").length;
  const reserveCount = plots.filter(p => p.status === "Reserved").length;
  const soldCount    = plots.filter(p => p.status === "Sold").length;

  const onMapHover  = (id: number | null) => setHoveredId(id);
  const onMapClick  = (id: number) => setSelectedId(prev => prev === id ? null : id);

  return (
    <section id="masterplan" className="bg-[#f5f2eb] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* ── Header ─────────────────────────────────────────────── */}
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-green/35 mb-6">
            Masterplan
          </p>
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-[3.1rem] text-green leading-[1.18] tracking-[0.01em] mb-6 max-w-xl">
            The Estate Layout
          </h2>
          <div className="w-10 h-px bg-gold/45 mb-6" />
        </FadeIn>

        {/* ── Stats strip ─────────────────────────────────────────── */}
        <FadeIn delay={80}>
          <div className="flex flex-wrap gap-10 mb-14 border-t border-b border-green/8 py-8">
            {[
              { label: "Total Plots",    value: "26"               },
              { label: "Available",      value: String(availCount)  },
              { label: "Reserved",       value: String(reserveCount)},
              { label: "Sold",           value: String(soldCount)   },
              { label: "Total Acreage",  value: "20 Acres"          },
              { label: "Villa Types",    value: "3"                 },
            ].map(s => (
              <div key={s.label}>
                <p className="font-serif font-light text-2xl md:text-3xl text-green leading-none">
                  {s.value}
                </p>
                <p className="text-[9px] tracking-[0.42em] uppercase text-green/38 mt-1.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Main two-column layout ───────────────────────────────── */}
        <FadeIn delay={160}>
          <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                LEFT  ·  Search + Plot List
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0 flex flex-col gap-3">

              {/* Search input */}
              <div className="relative">
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-32 pointer-events-none"
                  width="13" height="13" viewBox="0 0 20 20" fill="none"
                >
                  <circle cx="8" cy="8" r="6" stroke="#203a36" strokeWidth="1.8" />
                  <path d="M13 13 L18 18" stroke="#203a36" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Plot number, NILA, available…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="
                    w-full pl-9 pr-4 py-3
                    bg-white/50 border border-green/10 rounded-xl
                    text-[13px] text-green placeholder:text-green/28
                    focus:outline-none focus:border-gold/40 focus:bg-white/75
                    transition-colors duration-300
                  "
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-green/30 hover:text-green/55 transition-colors"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Status filter chips */}
              <div className="flex gap-2 flex-wrap">
                {(["All", "Available", "Reserved", "Sold"] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => setStatusFilter(f)}
                    className={`
                      px-3.5 py-1.5 rounded-full
                      text-[10px] tracking-[0.28em] uppercase border
                      transition-all duration-300
                      ${statusFilter === f
                        ? "bg-green text-ivory border-green shadow-sm"
                        : "bg-transparent border-green/15 text-green/50 hover:border-green/30 hover:text-green/70"
                      }
                    `}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Result count */}
              <p className="text-[10px] text-green/32 tracking-[0.3em] uppercase">
                {listPlots.length} {listPlots.length === 1 ? "plot" : "plots"}
                {(searchQuery || statusFilter !== "All") ? " found" : ""}
              </p>

              {/* Plot cards */}
              <div
                className="flex flex-col gap-2 overflow-y-auto max-h-[560px] lg:max-h-[600px] pr-1"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(32,58,54,0.15) transparent" }}
              >
                <AnimatePresence initial={false}>
                  {listPlots.map(plot => {
                    const isLit = hoveredId === plot.id || selectedId === plot.id;
                    return (
                      <motion.div
                        key={plot.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        onMouseEnter={() => setHoveredId(plot.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => onMapClick(plot.id)}
                        className={`
                          relative cursor-pointer
                          border rounded-xl px-4 py-3.5
                          transition-all duration-300
                          ${isLit
                            ? "border-gold/40 bg-white/80 shadow-[0_4px_22px_rgba(230,197,148,0.13)]"
                            : "border-green/8 bg-white/30 hover:bg-white/55 hover:border-green/15"
                          }
                        `}
                      >
                        {/* Villa type + status badge */}
                        <div className="flex items-center justify-between mb-1.5">
                          <p
                            className="text-[9px] tracking-[0.42em] uppercase font-medium"
                            style={{ color: VILLA_HEX[plot.villa] }}
                          >
                            {plot.villa}
                          </p>
                          <span className={`text-[9px] tracking-[0.25em] uppercase px-2 py-0.5 rounded-full ${STATUS_BADGE[plot.status]}`}>
                            {plot.status}
                          </span>
                        </div>

                        {/* Plot label + size */}
                        <div className="flex items-baseline gap-3">
                          <p className="font-serif font-light text-lg text-green tracking-wide">
                            {plot.label}
                          </p>
                          <p className="text-[11px] text-green/38 font-light">{plot.size}</p>
                        </div>

                        {/* Gold accent line on active */}
                        <div
                          className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-all duration-300"
                          style={{ backgroundColor: isLit ? "rgba(230,197,148,0.7)" : "transparent" }}
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {listPlots.length === 0 && (
                  <div className="py-12 text-center">
                    <p className="text-[11px] tracking-[0.35em] uppercase text-green/28">
                      No plots match
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                RIGHT  ·  SVG Masterplan Map
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="relative flex-1 min-w-0">

              {/* Map container */}
              <div className="
                relative overflow-hidden
                rounded-2xl md:rounded-3xl
                border border-green/8
                shadow-[0_24px_64px_rgba(32,58,54,0.09)]
              ">

                {/* Selected plot tooltip overlay */}
                <AnimatePresence>
                  {selectedPlot && (
                    <motion.div
                      key={selectedPlot.id}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28 }}
                      className="
                        absolute top-4 right-4 z-20
                        bg-[#f5f2eb]/96 backdrop-blur-sm
                        border border-green/10 rounded-2xl
                        p-5 min-w-[195px]
                        shadow-[0_8px_32px_rgba(0,0,0,0.09)]
                      "
                    >
                      <p
                        className="text-[9px] tracking-[0.45em] uppercase mb-1"
                        style={{ color: VILLA_HEX[selectedPlot.villa] }}
                      >
                        {selectedPlot.villa}
                      </p>
                      <p className="font-serif font-light text-xl text-green tracking-wide">
                        {selectedPlot.label}
                      </p>
                      <div className="w-5 h-px bg-gold/45 my-3" />
                      <div className="space-y-2.5">
                        <div className="flex justify-between gap-8">
                          <span className="text-[11px] text-green/42">Plot Area</span>
                          <span className="text-[11px] text-green">{selectedPlot.size}</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-[11px] text-green/42">Status</span>
                          <span className={`text-[9px] tracking-[0.25em] uppercase px-2 py-0.5 rounded-full ${STATUS_BADGE[selectedPlot.status]}`}>
                            {selectedPlot.status}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedId(null)}
                        className="mt-4 text-[9px] tracking-[0.38em] uppercase text-green/26 hover:text-green/50 transition-colors duration-200"
                      >
                        Dismiss
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ─────────────────────────────────────────────────
                    SVG MASTERPLAN
                ───────────────────────────────────────────────── */}
                <svg
                  viewBox="0 0 900 680"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto block"
                  aria-label="ANTARANYA estate masterplan"
                >
                  <defs>
                    <filter id="plotGlow" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                      <feColorMatrix
                        in="blur" type="matrix"
                        values="1.1 0.4 0 0 0.14  0.5 0.9 0 0 0.04  0 0.1 0.6 0 0  0 0 0 0.50 0"
                        result="goldBlur"
                      />
                      <feMerge>
                        <feMergeNode in="goldBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <radialGradient id="terrainGrad" cx="50%" cy="38%" r="58%">
                      <stop offset="0%"   stopColor="#f2f6ea" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#c4d4bc" stopOpacity="0.12" />
                    </radialGradient>

                    <pattern id="hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(100,130,90,0.08)" strokeWidth="1" />
                    </pattern>
                  </defs>

                  {/* ── Layer 0: outer context ────────────── */}
                  <rect width="900" height="680" fill="#d4d0c6" />

                  {/* ── Layer 1: estate interior fill ─────── */}
                  <path d={BOUNDARY} fill="#e8ece0" />
                  <path d={BOUNDARY} fill="url(#terrainGrad)" />
                  <path d={BOUNDARY} fill="url(#hatch)" />

                  {/* ── Layer 2: north forest zone bg ─────── */}
                  <rect x="28" y="58" width="844" height="226" rx="6" fill="#d4e0cc" opacity="0.50" />

                  {/* ── Layer 3: central garden zone ──────── */}
                  <rect x="216" y="282" width="448" height="382" rx="3" fill="#d8e8d0" opacity="0.44" />

                  {/* ── Layer 4: decorative tree clusters ─── */}
                  <g fill="#5e8860" opacity="0.26">
                    {/* above ARANYAKA N-centre */}
                    <circle cx="345" cy="34" r="9" /><circle cx="358" cy="28" r="6" /><circle cx="338" cy="27" r="5" /><circle cx="354" cy="44" r="8" />
                    <circle cx="535" cy="34" r="9" /><circle cx="548" cy="28" r="6" /><circle cx="528" cy="27" r="5" /><circle cx="544" cy="44" r="8" />
                    {/* NW / NE edges */}
                    <circle cx="30" cy="310" r="10" /><circle cx="22" cy="326" r="7" /><circle cx="36" cy="330" r="8" />
                    <circle cx="30" cy="460" r="10" /><circle cx="22" cy="476" r="7" /><circle cx="36" cy="480" r="8" />
                    <circle cx="870" cy="310" r="10" /><circle cx="878" cy="326" r="7" /><circle cx="864" cy="330" r="8" />
                    <circle cx="870" cy="460" r="10" /><circle cx="878" cy="476" r="7" /><circle cx="864" cy="480" r="8" />
                    {/* south corners */}
                    <circle cx="38" cy="620" r="9" /><circle cx="28" cy="608" r="6" />
                    <circle cx="862" cy="620" r="9" /><circle cx="872" cy="608" r="6" />
                  </g>
                  {/* small internal accent trees */}
                  <g fill="#6a9060" opacity="0.16">
                    <circle cx="392" cy="428" r="5.5" /><circle cx="403" cy="422" r="3.5" />
                    <circle cx="488" cy="428" r="5.5" /><circle cx="477" cy="422" r="3.5" />
                    <circle cx="440" cy="488" r="5" />
                  </g>

                  {/* ── Layer 5: road network ─────────────── */}
                  {/* main E-W road */}
                  <line x1="26" y1="278" x2="874" y2="278" stroke="#ccc8b6" strokeWidth="14" strokeLinecap="round" />
                  {/* entry boulevard (central spine) */}
                  <line x1="440" y1="668" x2="440" y2="278" stroke="#ccc8b6" strokeWidth="16" strokeLinecap="round" />
                  {/* left vertical (NILA / ARANYAKA-NW access) */}
                  <line x1="238" y1="278" x2="238" y2="76" stroke="#c6c2b2" strokeWidth="10" strokeLinecap="round" />
                  {/* right vertical (VANYA / ARANYAKA-NE access) */}
                  <line x1="664" y1="278" x2="664" y2="76" stroke="#c6c2b2" strokeWidth="10" strokeLinecap="round" />
                  {/* north cross */}
                  <line x1="238" y1="76" x2="664" y2="76" stroke="#c6c2b2" strokeWidth="8"  strokeLinecap="round" />

                  {/* road centre lines (aesthetic) */}
                  <g stroke="rgba(245,242,235,0.38)" strokeDasharray="12,10" strokeLinecap="round" fill="none">
                    <line x1="26" y1="278" x2="874" y2="278" strokeWidth="1" />
                    <line x1="440" y1="668" x2="440" y2="284" strokeWidth="1" />
                  </g>

                  {/* ── Layer 6: walking paths (dashed) ───── */}
                  <g stroke="#b6b2a2" strokeDasharray="5,8" strokeLinecap="round" fill="none" opacity="0.60">
                    <line x1="214" y1="288" x2="214" y2="656" strokeWidth="2.2" />
                    <line x1="668" y1="288" x2="668" y2="656" strokeWidth="2.2" />
                    <line x1="440" y1="88" x2="440" y2="268" strokeWidth="2.2" />
                    <line x1="222" y1="420" x2="434" y2="420" strokeWidth="1.8" />
                    <line x1="446" y1="420" x2="658" y2="420" strokeWidth="1.8" />
                    <line x1="222" y1="520" x2="434" y2="520" strokeWidth="1.8" />
                    <line x1="446" y1="520" x2="658" y2="520" strokeWidth="1.8" />
                  </g>

                  {/* ── Layer 7: water feature ────────────── */}
                  <ellipse cx="440" cy="432" rx="21" ry="14" fill="#b6ccda" opacity="0.60" />
                  <ellipse cx="440" cy="432" rx="21" ry="14" fill="none" stroke="#9ab4c8" strokeWidth="0.8" opacity="0.45" />
                  <text x="440" y="449" textAnchor="middle" fontSize="4.8" fill="#688898" opacity="0.65"
                    fontFamily="Georgia, 'Times New Roman', serif" letterSpacing="1">
                    pond
                  </text>

                  {/* ── Layer 8: plot polygons ────────────── */}
                  {plots.map(plot => {
                    const active = activeIds.has(plot.id);
                    const lit    = (hoveredId === plot.id || selectedId === plot.id) && active;
                    return (
                      <polygon
                        key={plot.id}
                        points={plot.points}
                        fill={plotFill(plot, active, lit)}
                        stroke={plotStroke(plot, active, lit)}
                        strokeWidth={lit ? 1.4 : 0.85}
                        style={{
                          cursor: active ? "pointer" : "default",
                          transition: "fill 0.32s ease, stroke 0.32s ease, stroke-width 0.18s ease",
                          filter: lit ? "url(#plotGlow)" : "none",
                        }}
                        onMouseEnter={() => active && onMapHover(plot.id)}
                        onMouseLeave={() => onMapHover(null)}
                        onClick={() => active && onMapClick(plot.id)}
                      />
                    );
                  })}

                  {/* ── Layer 9: plot labels ──────────────── */}
                  {plots.map(plot => {
                    const active = activeIds.has(plot.id);
                    const lit    = hoveredId === plot.id || selectedId === plot.id;
                    const large  = plot.villa === "ARANYAKA";
                    return (
                      <text
                        key={`lbl-${plot.id}`}
                        x={plot.cx} y={plot.cy + 2}
                        textAnchor="middle"
                        fontSize={large ? "7.5" : "6"}
                        letterSpacing="1.4"
                        fontFamily="Georgia, 'Times New Roman', serif"
                        fill={
                          !active ? "rgba(155,150,138,0.32)"
                          : lit    ? "rgba(175,138,68,0.95)"
                          :          "rgba(32,58,54,0.55)"
                        }
                        style={{
                          pointerEvents: "none",
                          userSelect: "none",
                          transition: "fill 0.3s ease",
                        }}
                      >
                        {plot.label}
                      </text>
                    );
                  })}

                  {/* ── Layer 10: status dot per plot ─────── */}
                  {plots.map(plot => {
                    const active = activeIds.has(plot.id);
                    if (!active) return null;
                    return (
                      <circle
                        key={`dot-${plot.id}`}
                        cx={plot.cx}
                        cy={plot.cy + 9}
                        r="2"
                        fill={STATUS_DOT[plot.status]}
                        opacity="0.65"
                        style={{ pointerEvents: "none" }}
                      />
                    );
                  })}

                  {/* ── Layer 11: amenity markers ─────────── */}
                  {amenities.map(a => (
                    <g key={a.id}>
                      <circle cx={a.x} cy={a.y} r="6"
                        fill="rgba(230,197,148,0.16)" stroke="rgba(200,165,90,0.52)" strokeWidth="0.8"
                      />
                      <circle cx={a.x} cy={a.y} r="2" fill="rgba(195,158,80,0.75)" />
                      <text
                        x={a.x} y={a.y + 14}
                        textAnchor="middle" fontSize="4.6"
                        fill="rgba(100,86,54,0.68)" letterSpacing="0.6"
                        fontFamily="Georgia, 'Times New Roman', serif"
                        style={{ pointerEvents: "none", userSelect: "none" }}
                      >
                        {a.name}
                      </text>
                    </g>
                  ))}

                  {/* ── Layer 12: zone type labels ────────── */}
                  <g fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" style={{ pointerEvents: "none", userSelect: "none" }}>
                    <text x="121" y="72"  textAnchor="middle" fontSize="5.2" fill="rgba(46,91,104,0.50)" letterSpacing="2">ARANYAKA</text>
                    <text x="351" y="59"  textAnchor="middle" fontSize="5.2" fill="rgba(46,91,104,0.50)" letterSpacing="2">ARANYAKA</text>
                    <text x="531" y="59"  textAnchor="middle" fontSize="5.2" fill="rgba(46,91,104,0.50)" letterSpacing="2">ARANYAKA</text>
                    <text x="767" y="72"  textAnchor="middle" fontSize="5.2" fill="rgba(46,91,104,0.50)" letterSpacing="2">ARANYAKA</text>
                    <text x="121" y="288" textAnchor="middle" fontSize="4.8" fill="rgba(61,107,82,0.45)"  letterSpacing="2">NILA</text>
                    <text x="163" y="288" textAnchor="middle" fontSize="4.8" fill="rgba(61,107,82,0.45)"  letterSpacing="2">NILA</text>
                    <text x="720" y="288" textAnchor="middle" fontSize="4.8" fill="rgba(107,82,48,0.45)"  letterSpacing="2">VANYA</text>
                    <text x="814" y="288" textAnchor="middle" fontSize="4.8" fill="rgba(107,82,48,0.45)"  letterSpacing="2">VANYA</text>
                  </g>

                  {/* Estate watermark */}
                  <text
                    x="440" y="302" textAnchor="middle" fontSize="5.8"
                    fill="rgba(32,58,54,0.07)" letterSpacing="10"
                    fontFamily="Georgia, 'Times New Roman', serif" fontWeight="300"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    ANTARANYA
                  </text>

                  {/* ── Layer 13: entry gate ──────────────── */}
                  <g opacity="0.70">
                    <line x1="428" y1="666" x2="428" y2="654" stroke="#9a9480" strokeWidth="1.4" />
                    <line x1="452" y1="666" x2="452" y2="654" stroke="#9a9480" strokeWidth="1.4" />
                    <path d="M 428,654 Q 440,647 452,654" stroke="#9a9480" strokeWidth="1.1" fill="none" />
                    <text x="440" y="675" textAnchor="middle" fontSize="4.8" fill="#8a8470"
                      letterSpacing="2.5" fontFamily="Georgia, 'Times New Roman', serif"
                      style={{ userSelect: "none" }}
                    >
                      ENTRY
                    </text>
                  </g>

                  {/* ── Layer 14: north arrow ─────────────── */}
                  <g transform="translate(852, 316)" opacity="0.70">
                    <line x1="0" y1="20" x2="0" y2="-20" stroke="rgba(32,58,54,0.40)" strokeWidth="0.9" />
                    <polygon points="0,-24 -4,-14 0,-17 4,-14" fill="rgba(32,58,54,0.55)" />
                    <text x="0" y="30" textAnchor="middle" fontSize="5.5" fill="rgba(32,58,54,0.42)"
                      letterSpacing="0.5" fontFamily="Georgia, 'Times New Roman', serif"
                    >
                      N
                    </text>
                  </g>

                  {/* ── Layer 15: scale bar ───────────────── */}
                  <g transform="translate(32, 658)" opacity="0.60">
                    <line x1="0" y1="0" x2="64" y2="0" stroke="#706a58" strokeWidth="1.3" />
                    <line x1="0" y1="-3.5" x2="0" y2="3.5" stroke="#706a58" strokeWidth="1.3" />
                    <line x1="64" y1="-3.5" x2="64" y2="3.5" stroke="#706a58" strokeWidth="1.3" />
                    <text x="32" y="-6" textAnchor="middle" fontSize="4.6" fill="#706a58"
                      letterSpacing="0.5" fontFamily="Georgia, 'Times New Roman', serif"
                    >
                      100 m
                    </text>
                  </g>

                  {/* ── Layer 16: estate boundary outline ─── */}
                  <path
                    d={BOUNDARY}
                    fill="none"
                    stroke="rgba(130,126,112,0.32)"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>

              {/* ── Map legend ──────────────────────────────── */}
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 px-1">
                <p className="text-[9px] tracking-[0.45em] uppercase text-green/28 mr-1">Legend</p>
                {(["Available", "Reserved", "Sold"] as Status[]).map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: STATUS_DOT[s] }}
                    />
                    <span className="text-[11px] text-green/50 tracking-wide">{s}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <span className="w-5 h-px" style={{ background: "#ccc8b6" }} />
                  <span className="text-[11px] text-green/45 tracking-wide">Road</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="4"><line x1="0" y1="2" x2="18" y2="2" stroke="#b6b2a2" strokeDasharray="4,5" strokeWidth="1.5" /></svg>
                  <span className="text-[11px] text-green/45 tracking-wide">Walking path</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full border flex-shrink-0"
                    style={{ borderColor: "rgba(200,165,90,0.55)", backgroundColor: "rgba(230,197,148,0.16)" }}
                  />
                  <span className="text-[11px] text-green/45 tracking-wide">Amenity</span>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
