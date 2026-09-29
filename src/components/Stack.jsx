import { motion } from 'framer-motion'
import { stack } from '../data/portfolio.js'
import Section from './Section.jsx'

/**
 * Baris marquee yang berjalan tanpa henti.
 *
 * Animasi `marquee` menggeser track -50%, jadi isi track harus
 * persis dua kali duplikat agar loop-nya seamless. Salinan kedua
 * disembunyikan dari pembaca layar supaya tech stack tidak diumumkan dua kali.
 */
function MarqueeRow({ items, reverse = false }) {
  const repeated = [...items, ...items]

  return (
    <div className="group relative overflow-hidden">
      {/* Masking tepi agar chip terpotong halus di kedua sisi */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050b14] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050b14] to-transparent"
      />

      <div
        className="flex w-max animate-marquee items-center gap-3 py-1 group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index >= items.length ? 'true' : undefined}
            className="glass whitespace-nowrap rounded-full px-4 py-2 text-sm text-slate-300 transition-colors duration-300 group-hover:border-cyan-300/30 group-hover:text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Stack() {
  return (
    <Section
      id="stack"
      index="03"
      eyebrow="Teknologi"
      title="Tools of the Trade"
      lead="Bahasa, framework, dan alat yang aku pakai sehari-hari untuk mengubah ide menjadi produk yang benar-benar jalan."
    >
      <div className="space-y-9">
        {stack.map((row, index) => (
          <motion.div
            key={row.group}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="space-y-3"
          >
            <h3 className="font-mono text-xs tracking-[0.2em] text-cyan-300/70 uppercase">
              {row.group}
            </h3>
            <MarqueeRow items={row.items} reverse={index % 2 === 1} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
