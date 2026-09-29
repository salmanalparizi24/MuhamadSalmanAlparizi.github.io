import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { profile, socials, stats, terminal } from '../data/portfolio.js'
import SocialLinks from './SocialLinks.jsx'

const ease = [0.22, 1, 0.36, 1]

// Handle GitHub diambil dari URL profil agar tidak menulis ulang manual.
const githubUrl = socials.find((s) => s.icon === 'github')?.href ?? ''
const githubHandle = githubUrl
  ? `@${githubUrl.replace(/^https?:\/\/github\.com\//, '').replace(/\/$/, '')}`
  : ''

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Kolom kiri — teks utama */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-cyan-200">
                <span
                  aria-hidden="true"
                  className="relative flex h-1.5 w-1.5"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                {profile.availableForWork ? 'Terbuka untuk peluang baru' : 'Sedang sibuk'}
              </span>
            </motion.div>

            <motion.h1
              id="home-heading"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.08}
              className="mt-7 font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
            >
              <span className="block text-slate-300">{profile.role}</span>
              <span className="text-gradient mt-1 block">Muhamad Salman</span>
              <span className="text-gradient block">Alparizi</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.16}
              className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-slate-400 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.24}
              className="mt-7 flex items-center gap-2 text-sm text-slate-500"
            >
              <MapPin size={15} aria-hidden="true" className="text-cyan-400/70" />
              <span>{profile.location}</span>
              <span aria-hidden="true" className="text-slate-700">
                /
              </span>
              <a
                href={socials.find((s) => s.icon === 'github')?.href ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                translate="no"
                className="transition-colors duration-200 hover:text-cyan-300"
              >
                {githubHandle}
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.32}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-[#04121a] shadow-[0_0_28px_rgba(34,211,238,0.28)] transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] hover:brightness-110"
              >
                Lihat Proyek
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/5 px-5 py-3 text-sm font-medium text-cyan-100 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/12"
              >
                <Mail size={16} aria-hidden="true" />
                Hubungi Saya
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="mt-8"
            >
              <SocialLinks items={socials} />
            </motion.div>
          </div>

          {/* Kolom kanan — kartu terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/12 via-transparent to-indigo-500/12 blur-2xl"
            />

            <div className="glow-ring glass animate-float relative rounded-2xl p-1.5">
              <div className="rounded-[13px] bg-[#04121a]/90">
                {/* Bar judul terminal */}
                <div className="flex items-center gap-2 border-b border-cyan-400/10 px-4 py-3">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-2 font-mono text-xs text-slate-500">salman — zsh</span>
                </div>

                <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed">
                  {terminal.lines.map((line) => (
                    <p key={line.prompt} className="break-words">
                      <span className="text-cyan-400">{line.prompt}</span>{' '}
                      <span className="text-slate-300">{line.output}</span>
                    </p>
                  ))}

                  <div className="pt-3">
                    <p className="text-slate-500">
                      <span className="text-cyan-400">${terminal.progressLabel}</span>{' '}
                      {terminal.progressText}
                    </p>
                    <p className="mt-1.5 text-emerald-300" aria-hidden="true">
                      [████████████████████] 100%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistik */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cyan-400/12 bg-cyan-400/10 sm:mt-24 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#050b14]/85 px-5 py-6 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-bold text-gradient tabular-nums sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-xs tracking-wide text-slate-500 uppercase">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
