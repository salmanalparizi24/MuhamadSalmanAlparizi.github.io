import { motion } from 'framer-motion'
import { about, profile } from '../data/portfolio.js'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="Tentang Saya" title={about.heading} lead={about.lead}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="space-y-5">
          {about.paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="text-base leading-relaxed text-pretty text-slate-400"
            >
              {text}
            </motion.p>
          ))}

          {/* Kartu bio singkat */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="glass card-hover hover:border-cyan-300/30 mt-8 rounded-2xl p-5 sm:p-6"
          >
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-300/70 uppercase">Motto</p>
            <p className="mt-3 text-base leading-relaxed text-pretty text-slate-300 italic">
              “{profile.bio}”
            </p>
          </motion.div>
        </div>

        {/* Kartu ringkasan */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass h-fit rounded-2xl p-6"
        >
          <h3 className="font-mono text-xs tracking-[0.2em] text-cyan-300/70 uppercase">
            Ringkasan
          </h3>
          <dl className="mt-5 space-y-4 text-sm">
            {[
              { term: 'Nama', desc: profile.name },
              { term: 'Peran', desc: profile.role },
              { term: 'Lokasi', desc: profile.location },
              { term: 'Domain', desc: profile.domain },
              {
                term: 'Status',
                desc: profile.availableForWork ? 'Terbuka untuk peluang' : 'Sedang sibuk',
              },
            ].map((row) => (
              <div
                key={row.term}
                className="flex items-start justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0"
              >
                <dt className="shrink-0 text-slate-500">{row.term}</dt>
                <dd className="min-w-0 text-right text-pretty text-slate-200">{row.desc}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </Section>
  )
}
