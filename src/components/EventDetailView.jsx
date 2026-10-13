import { CATEGORY_META } from '../utils/category';
import { dayNumber, monthYearShort } from '../utils/date';
import BookmarkButton from './BookmarkButton';
import CategoryBadge from './CategoryBadge';
import EventInfoList from './EventInfoList';
import PosterArt from './PosterArt';
import RegisteredToggle from './RegisteredToggle';

// Presenter: tampilan detail event. Status dihitung oleh EventDetailContainer.
export default function EventDetailView({ event, status }) {
  const meta = CATEGORY_META[event.kategori];
  const canRegister = status.state === 'dibuka';

  return (
    <article>
      <div className={`relative overflow-hidden rounded-xl p-6 text-white sm:p-8 ${meta.bg}`}>
        <PosterArt kategori={event.kategori} />
        <div className="relative flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <CategoryBadge kategori={event.kategori} onPoster />
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{event.judul}</h1>
            <p className="mt-2 text-white/90">{event.penyelenggara}</p>
          </div>
          <div className="flex items-end gap-2">
            <span className="font-display text-7xl font-bold leading-none">{dayNumber(event.tanggal)}</span>
            <span className="pb-1.5 font-semibold">{monthYearShort(event.tanggal)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div>
          <h2 className="text-xl font-bold">Tentang event</h2>
          <div className="mt-3 max-w-prose space-y-3 leading-relaxed">
            {event.deskripsi.split('\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {canRegister ? (
              <a href={event.linkDaftar} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Daftar di situs penyelenggara
                <span className="sr-only"> (membuka tab baru)</span>
              </a>
            ) : (
              <button type="button" disabled className="btn border border-line bg-line/40 text-muted">
                {status.label}
              </button>
            )}
            <RegisteredToggle eventId={event.id} judul={event.judul} />
            <BookmarkButton eventId={event.id} judul={event.judul} withLabel className="border border-line bg-surface" />
          </div>
          <p className="mt-3 max-w-prose text-sm text-muted">
            Pendaftaran dilakukan di situs penyelenggara. Tombol &quot;Tandai sudah daftar&quot; hanya catatan pribadimu di EventKu, supaya event muncul di halaman Pendaftaran.
          </p>
        </div>
        <EventInfoList event={event} sisaKuota={status.sisa} />
      </div>
    </article>
  );
}
