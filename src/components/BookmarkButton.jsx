import { useBookmarkContext } from '../context/BookmarkContext';
import { BookmarkIcon } from './Icons';

export default function BookmarkButton({ eventId, judul, withLabel = false, className = '' }) {
  const { isBookmarked, toggleBookmark } = useBookmarkContext();
  const saved = isBookmarked(eventId);

  return (
    <button
      type="button"
      onClick={() => toggleBookmark(eventId)}
      aria-pressed={saved}
      aria-label={saved ? `Hapus bookmark ${judul}` : `Simpan ${judul}`}
      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors hover:bg-line/60 ${
        saved ? 'text-brand' : 'text-muted'
      } ${className}`}
    >
      <BookmarkIcon filled={saved} />
      {withLabel && <span>{saved ? 'Tersimpan' : 'Simpan'}</span>}
    </button>
  );
}
