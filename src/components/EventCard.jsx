import { Link } from 'react-router-dom';
import { useRegistrationContext } from '../context/RegistrationContext';
import { getEventStatus } from '../utils/status';
import { dayNumber, monthYearShort } from '../utils/date';
import { formatBiaya } from '../utils/format';
import { CATEGORY_META } from '../utils/category';
import BookmarkButton from './BookmarkButton';
import CategoryBadge from './CategoryBadge';
import PosterArt from './PosterArt';
import StatusText from './StatusText';
import { PinIcon, WalletIcon } from './Icons';

// Presenter: hanya menampilkan data event yang diterima lewat props.
export default function EventCard({ event }) {
  const { isRegistered } = useRegistrationContext();
  const status = getEventStatus(event);
  const registered = isRegistered(event.id);
  const meta = CATEGORY_META[event.kategori];
  const dimmed = status.state === 'selesai';

  return (
    <article className={`flex flex-col overflow-hidden rounded-xl border border-line bg-surface ${dimmed ? 'opacity-75' : ''}`}>
      <Link to={`/event/${event.id}`} className="block">
        <div className={`relative flex h-36 flex-col justify-between overflow-hidden p-4 text-white ${meta.bg}`}>
          <PosterArt kategori={event.kategori} />
          <div className="relative">
            <CategoryBadge kategori={event.kategori} onPoster />
          </div>
          <div className="relative flex items-end gap-2">
            <span className="font-display text-6xl font-bold leading-none">{dayNumber(event.tanggal)}</span>
            <span className="pb-1 text-sm font-semibold">{monthYearShort(event.tanggal)}</span>
          </div>
        </div>
        <div className="p-4 pb-2">
          <h3 className="text-lg font-bold leading-snug">{event.judul}</h3>
          <p className="mt-1 text-sm text-muted">{event.penyelenggara}</p>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            <li className="flex items-center gap-2">
              <PinIcon width={15} height={15} />
              <span>{event.lokasi}</span>
            </li>
            <li className="flex items-center gap-2">
              <WalletIcon width={15} height={15} />
              <span>{formatBiaya(event.biaya)}</span>
            </li>
          </ul>
        </div>
      </Link>
      <div className="mt-auto flex items-center justify-between gap-2 px-4 pb-3 pt-1">
        <div className="flex flex-col">
          <StatusText status={status} />
          {registered && <span className="text-xs font-semibold text-brand">Sudah kamu daftar</span>}
        </div>
        <BookmarkButton eventId={event.id} judul={event.judul} />
      </div>
    </article>
  );
}
