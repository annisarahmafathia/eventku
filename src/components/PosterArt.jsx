// Bentuk geometris sederhana sebagai pengganti gambar poster (tiap kategori punya bentuk sendiri).
export default function PosterArt({ kategori }) {
  const shapes = {
    lomba: (
      <>
        <polygon points="200,10 290,150 110,150" fill="#fff" opacity="0.16" />
        <polygon points="260,60 330,170 190,170" fill="none" stroke="#fff" strokeWidth="3" opacity="0.3" />
      </>
    ),
    seminar: (
      <>
        <circle cx="250" cy="70" r="70" fill="#fff" opacity="0.14" />
        <circle cx="250" cy="70" r="42" fill="none" stroke="#fff" strokeWidth="3" opacity="0.3" />
      </>
    ),
    workshop: (
      <>
        <rect x="190" y="20" width="110" height="110" rx="14" fill="#fff" opacity="0.14" transform="rotate(14 245 75)" />
        <rect x="215" y="45" width="60" height="60" rx="8" fill="none" stroke="#fff" strokeWidth="3" opacity="0.3" transform="rotate(14 245 75)" />
      </>
    ),
    kepanitiaan: (
      <>
        <circle cx="215" cy="75" r="46" fill="#fff" opacity="0.14" />
        <circle cx="270" cy="75" r="46" fill="none" stroke="#fff" strokeWidth="3" opacity="0.3" />
      </>
    ),
  };

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 320 160"
      preserveAspectRatio="xMaxYMin slice"
      aria-hidden="true"
    >
      {shapes[kategori]}
    </svg>
  );
}
