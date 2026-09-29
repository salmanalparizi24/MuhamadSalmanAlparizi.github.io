import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Star } from 'lucide-react'
import { projects } from '../data/portfolio.js'
import Section from './Section.jsx'

export default function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Proyek"
      title="Selected Work"
      lead="Beberapa proyek yang pernah aku kerjakan. Tambah repo baru kamu di src/data/portfolio.js."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              translate="no"
              className="glass card-hover hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_16px_48px_rgba(34,211,238,0.13)] group flex h-full flex-col rounded-2xl p-6"
            >
              {/* Baris atas: bahasa + tombol panah */}
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-md bg-indigo-500/12 px-2.5 py-1 font-mono text-[11px] tracking-wide text-indigo-300 ring-1 ring-indigo-400/20">
                  {project.language}
                </span>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-slate-600 transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                />
              </div>

              <h3 className="mt-5 font-display text-lg leading-snug font-semibold break-words text-white">
                {project.title}
              </h3>

              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-pretty text-slate-400">
                {project.description}
              </p>

              {/* Tag */}
              {project.tags?.length ? (
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-white/8 bg-white/4 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Meta */}
              <div className="mt-5 flex items-center gap-4 border-t border-white/6 pt-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Star size={13} aria-hidden="true" className="text-amber-400/80" />
                  <span className="tabular-nums">{project.stars}</span>
                  <span aria-hidden="true">bintang</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GitBranch size={13} aria-hidden="true" className="text-cyan-400/70" />
                  Repository
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
