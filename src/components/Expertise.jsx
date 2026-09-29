import { motion } from 'framer-motion'
import { Database, Layout, Rocket, Server } from 'lucide-react'
import { about } from '../data/portfolio.js'
import Section from './Section.jsx'

const ICONS = {
  server: Server,
  layout: Layout,
  database: Database,
  rocket: Rocket,
}

export default function Expertise() {
  return (
    <Section
      id="expertise"
      index="02"
      eyebrow="Keahlian"
      title="Engineering Pillars"
      lead="Empat bidang yang paling sering aku kerjakan — dari server sampai layer antarmuka."
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {about.pillars.map((pillar, index) => {
          const Icon = ICONS[pillar.icon] ?? Server
          return (
            <motion.li
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
              className="glass card-hover hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_12px_40px_rgba(34,211,238,0.12)] group rounded-2xl p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-indigo-500/15 text-cyan-300 ring-1 ring-cyan-400/20 transition-transform duration-300 group-hover:scale-105"
              >
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-pretty text-slate-400">{pillar.desc}</p>
            </motion.li>
          )
        })}
      </ul>
    </Section>
  )
}
