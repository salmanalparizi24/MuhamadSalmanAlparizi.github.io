import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')

  // Tambah bayangan/background saat halaman di-scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy: tandai section yang sedang terlihat.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Tutup menu mobile saat pindah section atau resize ke desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Kunci scroll body saat menu mobile terbuka.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Escape menutup menu.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? 'border-b border-cyan-400/15 bg-[#050b14]/85 shadow-lg shadow-black/40 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Navigasi utama" className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-display text-sm font-bold tracking-tight"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-xs text-cyan-200 ring-1 ring-cyan-400/30 transition-transform duration-300 group-hover:scale-105"
            >
              {profile.initials}
            </span>
            <span className="text-white">
              {profile.shortName}
              <span className="animate-cursor ml-0.5 text-cyan-400" aria-hidden="true">
                _
              </span>
            </span>
          </a>

          {/* Navigasi desktop */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-[background-color,border-color,color] duration-200 hover:border-cyan-300/60 hover:bg-cyan-400/20 hover:text-white md:inline-block"
          >
            Hubungi Saya
          </a>

          {/* Tombol menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 text-cyan-200 transition-colors duration-200 hover:bg-cyan-400/10 md:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Panel navigasi mobile */}
      {open ? (
        <div
          id="mobile-nav"
          className="overscroll-contain border-t border-cyan-400/15 bg-[#050b14]/95 backdrop-blur-xl md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={`block rounded-lg px-3 py-3 text-sm transition-colors duration-200 ${
                    activeId === link.id
                      ? 'bg-cyan-400/10 text-cyan-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-white/5 pt-2 pb-1">
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-cyan-400/10 px-3 py-3 text-center text-sm font-medium text-cyan-200 transition-colors duration-200 hover:bg-cyan-400/20"
              >
                Hubungi Saya
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
