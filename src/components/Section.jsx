/**
 * Pembungkus section dengan judul bernomor, subjudul, dan garis aksen.
 * `id` dipakai untuk navigasi anchor dari header.
 */
export default function Section({ id, index, eyebrow, title, lead, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4">
            {index ? (
              <span className="font-mono text-sm tracking-widest text-cyan-400/80 tabular-nums">
                {index}
              </span>
            ) : null}
            <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
          </div>

          <h2
            id={`${id}-heading`}
            className="mt-5 font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl"
          >
            {title}
          </h2>

          {eyebrow ? (
            <p className="mt-2 font-mono text-xs tracking-[0.2em] text-cyan-300/70 uppercase">
              {eyebrow}
            </p>
          ) : null}

          {lead ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-slate-400">{lead}</p>
          ) : null}
        </header>

        {children}
      </div>
    </section>
  )
}
