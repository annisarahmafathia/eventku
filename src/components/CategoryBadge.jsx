import { CATEGORY_META } from '../utils/category';

export default function CategoryBadge({ kategori, onPoster = false }) {
  const meta = CATEGORY_META[kategori];
  if (onPoster) {
    return (
      <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white">
        {meta.label}
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${meta.text}`}>
      <span className={`h-2 w-2 rounded-full ${meta.dot}`} aria-hidden="true" />
      {meta.label}
    </span>
  );
}
