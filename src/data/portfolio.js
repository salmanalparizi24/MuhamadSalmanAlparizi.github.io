/**
 * ============================================================
 *  KONFIGURASI PORTFOLIO — edit file ini untuk mengubah konten
 * ============================================================
 *  Semua teks, tautan, skill, dan proyek di halaman ini
 *  diambil dari file ini. Tidak perlu menyentuh komponen.
 * ============================================================
 */

export const profile = {
  name: 'Muhamad Salman Alparizi',
  shortName: 'Salman Alparizi',
  initials: 'SA',
  role: 'Software Engineer',
  tagline: 'Membangun produk digital yang cepat, rapi, dan berguna untuk banyak orang.',
  bio: 'Halo, aku Salman. Aku suka mengubah ide menjadi sesuatu yang benar-benar jalan — dari database sampai antarmuka. Fokusku menulis kode yang enak dibaca, sudah diuji, dan tetap rapi ketika problemnya makin rumit.',
  location: 'Indonesia',
  email: 'salmanalparizi24@gmail.com',
  domain: 'alparizi.me',
  availableForWork: true,
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/salmanalparizi24', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/salmanalparizi24', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:salmanalparizi24@gmail.com', icon: 'mail' },
  // Tambah sosmed lain sesuai kebutuhan:
  // { label: 'Instagram', href: 'https://instagram.com/username', icon: 'instagram' },
]

export const navLinks = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'expertise', label: 'Keahlian' },
  { id: 'stack', label: 'Teknologi' },
  { id: 'projects', label: 'Proyek' },
  { id: 'contact', label: 'Kontak' },
]

/** Hero — baris terminal statis di bawah tombol utama. */
export const terminal = {
  lines: [
    { prompt: '$ whoami', output: 'salman — software engineer' },
    { prompt: '$ location', output: 'Indonesia · remote friendly' },
    { prompt: '$ stack', output: 'javascript · typescript · react · node · python' },
  ],
  progressLabel: 'status',
  progressText: 'building things that matter',
}

export const stats = [
  { value: '1+', label: 'Public Repository' },
  { value: '5+', label: 'Tahun Ngoding' },
  { value: '20+', label: 'Teknologi' },
  { value: '4', label: 'Fokus Area' },
]

/** Kartu di section "Tentang". */
export const about = {
  heading: 'Siapa Aku?',
  lead:
    'Aku adalah software engineer yang percaya kode yang bagus harus menyelesaikan masalah, bukan cuma kelihatan keren. Mulai dari merancang skema data, menulis API, sampai merapikan layer antarmuka yang enak dipakai.',
  paragraphs: [
    'Aku belajar dengan cara membangun. Setiap proyek kecil adalah laboratorium: cari masalah nyata, buat solusinya, lalu perbaiki sampai rapi. Pengalaman itu yang bikin aku nyaman bekerja dari requirement yang masih kabur sampai sistem yang harus jalan terus.',
    'Di luar kode, aku suka membaca dokumentasi sampai tuntas, ngulik tools baru, dan berbagi apa yang aku pelajari. Kalau ada masalah yang menarik, kirim saja — aku selalu senang punya proyek sampingan baru.',
  ],
  pillars: [
    {
      icon: 'server',
      title: 'Backend & API',
      desc: 'Membangun REST API yang rapi, scalable, dan mudah dirawat dengan Node.js, Express, dan Python.',
    },
    {
      icon: 'layout',
      title: 'Frontend Modern',
      desc: 'Antarmuka responsif dengan React dan Tailwind — cepat, aksesibel, dan enak dipandang.',
    },
    {
      icon: 'database',
      title: 'Data & Database',
      desc: 'Merancang skema yang rapi, query yang efisien, dan migrasi yang tidak bikin deg-degan.',
    },
    {
      icon: 'rocket',
      title: 'Automasi & Deploy',
      desc: 'CI/CD, Docker, dan tooling supaya deploy jadi bosan sekali klik, bukan ritual mingguan.',
    },
  ],
}

export const stack = [
  {
    group: 'Bahasa Pemrograman',
    items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'CSS'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Vue', 'Tailwind CSS', 'Vite', 'Responsive UI'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'REST API', 'Laravel', 'CodeIgniter'],
  },
  {
    group: 'Database',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Redis'],
  },
  {
    group: 'Tools & DevOps',
    items: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Nginx', 'Postman'],
  },
]

/**
 * Proyek — ganti dengan repo asli kamu.
 * fields: title, description, language, stars, tags[], href, featured
 */
export const projects = [
  {
    title: 'MuhamadSalmanAlparizi.github.io',
    description:
      'Landing page portofolio pribadi yang di-deploy otomatis ke GitHub Pages dengan React, Vite, dan Tailwind CSS.',
    language: 'JavaScript',
    stars: 0,
    tags: ['React', 'Vite', 'Tailwind', 'GitHub Pages'],
    href: 'https://github.com/salmanalparizi24/MuhamadSalmanAlparizi.github.io',
    featured: true,
  },
  {
    title: 'Slot Proyek — coming soon',
    description:
      'Tambahkan repo baru kamu di src/data/portfolio.js dan proyeknya langsung tampil di halaman ini.',
    language: 'TypeScript',
    stars: 0,
    tags: ['Node.js', 'REST API'],
    href: 'https://github.com/salmanalparizi24',
    featured: false,
  },
  {
    title: 'Slot Proyek — coming soon',
    description:
      'Tempat untuk menaruh utility, bot, atau eksperimen kecil yang pernah dibuat.',
    language: 'Python',
    stars: 0,
    tags: ['Python', 'Automation'],
    href: 'https://github.com/salmanalparizi24',
    featured: false,
  },
]

export const contact = {
  heading: 'Mari Bangun Something',
  lead:
    'Punya ide, butuh bantuan, atau sekadar mau ngobrol soal kode? Aku terbuka untuk kolaborasi dan proyek freelance.',
  primaryCta: 'Kirim Email',
}

export const footer = {
  note: 'Dibangun dengan React, Vite, dan Tailwind CSS.',
  backToTop: 'Kembali ke Atas',
}
