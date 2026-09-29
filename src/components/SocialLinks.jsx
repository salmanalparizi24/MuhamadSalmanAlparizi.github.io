import { Github, Linkedin, Mail } from 'lucide-react'

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

/**
 * Ikon sosial media. Semua ikon bersifat dekoratif, jadi diberi
 * aria-hidden dan nama yang dapat diakses datang dari <a>.
 */
export default function SocialLinks({ items, size = 18, className = '' }) {
  if (!items?.length) return null

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map((item) => {
        const Icon = ICONS[item.icon] ?? Mail
        return (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={item.label}
              translate="no"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-200 transition-[transform,background-color,border-color,color] duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/15 hover:text-white"
            >
              <Icon size={size} aria-hidden="true" strokeWidth={1.75} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
