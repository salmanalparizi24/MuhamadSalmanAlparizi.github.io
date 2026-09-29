import { ArrowUp } from 'lucide-react'
import { footer, profile, socials } from '../data/portfolio.js'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-8 border-t border-cyan-400/12 bg-[#04101a]/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Nama + deskripsi */}
          <div className="max-w-sm">
            <p className="font-display text-lg font-bold text-white">{profile.shortName}</p>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-slate-500">
              {profile.tagline}
            </p>
            <SocialLinks items={socials} className="mt-5" />
          </div>

          {/* Navigasi footer */}
          <nav aria-label="Navigasi footer">
            <h2 className="font-mono text-xs tracking-[0.2em] text-cyan-300/70 uppercase">
              Navigasi
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm sm:grid-cols-1">
              {[
                { id: 'home', label: 'Beranda' },
                { id: 'about', label: 'Tentang' },
                { id: 'expertise', label: 'Keahlian' },
                { id: 'stack', label: 'Teknologi' },
                { id: 'projects', label: 'Proyek' },
                { id: 'contact', label: 'Kontak' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-slate-400 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Baris bawah */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © <span className="tabular-nums">{year}</span> {profile.name}. {footer.note}
          </p>

          <a
            href="#home"
            className="group inline-flex w-fit items-center gap-2 rounded-lg border border-cyan-400/20 px-3.5 py-2 text-xs text-slate-400 transition-[color,border-color,background-color] duration-200 hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-200"
          >
            {footer.backToTop}
            <ArrowUp
              size={13}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
