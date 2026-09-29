/**
 * Latar dekoratif: grid Bergerak + glow. Sepenuhnya aria-hidden
 * supaya tidak mengganggu pembaca layar.
 */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid halus */}
      <div
        className="animate-grid-pan absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow ungu-cyan di pojok atas */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/12 blur-[120px]" />
      <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-indigo-500/12 blur-[120px]" />

      {/* Vignette agar konten tetap kontras */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,11,20,0.85)_100%)]" />
    </div>
  )
}
