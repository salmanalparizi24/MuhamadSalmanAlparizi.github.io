import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { contact, profile, socials } from '../data/portfolio.js'
import Section from './Section.jsx'
import SocialLinks from './SocialLinks.jsx'

export default function Contact() {
  return (
    <Section id="contact" index="05" eyebrow="Kontak" title={contact.heading} lead={contact.lead}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Kartu utama */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass glow-ring relative overflow-hidden rounded-2xl p-7 sm:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
          />

          <h3 className="font-display text-xl font-semibold text-white">Ada yang bisa dibantu?</h3>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-slate-400">
            Balasan biasanya dalam 1–2 hari kerja. Kalau menyangkut detail teknis, kirim saja
            ringkasannya.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-[#04121a] shadow-[0_0_28px_rgba(34,211,238,0.28)] transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] hover:brightness-110"
            >
              <Mail size={16} aria-hidden="true" />
              {contact.primaryCta}
            </a>
            <a
              href={socials.find((s) => s.icon === 'github')?.href ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              translate="no"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/5 px-5 py-3 text-sm font-medium text-cyan-100 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/12"
            >
              GitHub
            </a>
          </div>

          <p className="mt-7 flex items-center gap-2 break-all text-sm text-slate-400">
            <Mail size={15} aria-hidden="true" className="shrink-0 text-cyan-400/70" />
            <a
              href={`mailto:${profile.email}`}
              translate="no"
              className="min-w-0 break-all transition-colors duration-200 hover:text-cyan-300"
            >
              {profile.email}
            </a>
          </p>
        </motion.div>

        {/* Kartu lokasi + sosmed */}
        <motion.aside
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass flex flex-col gap-6 rounded-2xl p-7 sm:p-9"
        >
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-cyan-300/70 uppercase">
              Lokasi
            </h3>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-300">
              <MapPin size={15} aria-hidden="true" className="shrink-0 text-cyan-400/70" />
              {profile.location}
            </p>
          </div>

          <div className="border-t border-white/6 pt-6">
            <h3 className="font-mono text-xs tracking-[0.2em] text-cyan-300/70 uppercase">
              Temukan Aku
            </h3>
            <SocialLinks items={socials} className="mt-4" />
          </div>

          <div className="mt-auto border-t border-white/6 pt-6">
            <p className="text-sm leading-relaxed text-pretty text-slate-500">
              Kolaborasi terbuka untuk proyek open-source, freelance, maupun sekadar mau
              berbagi ide.
            </p>
          </div>
        </motion.aside>
      </div>
    </Section>
  )
}
