import { WEEKDAYS_SHORT, formatLong, monthName } from '../utils/date';
import { CATEGORY_META } from '../utils/category';
import { ChevronIcon } from './Icons';

// Presenter: grid bulanan. State bulan dan tanggal terpilih dikelola CalendarContainer.
export default function CalendarView({ year, month, cells, todayISO, eventsByDate, selectedDate, onSelect, onPrev, onNext, onToday }) {
  return (
    <section aria-label="Kalender event" className="rounded-xl border border-line bg-surface p-4">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-xl font-bold">
          {monthName(month)} {year}
        </h2>
        <div className="flex items-center gap-1">
          <button type="button" onClick={onToday} className="btn-outline px-3 py-1.5">
            Hari ini
          </button>
          <button type="button" onClick={onPrev} aria-label="Bulan sebelumnya" className="btn-outline px-2 py-1.5">
            <ChevronIcon direction="left" />
          </button>
          <button type="button" onClick={onNext} aria-label="Bulan berikutnya" className="btn-outline px-2 py-1.5">
            <ChevronIcon />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted">
        {WEEKDAYS_SHORT.map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((cell, index) => {
          if (!cell) return <div key={`kosong-${index}`} />;

          const events = eventsByDate[cell.iso] ?? [];
          const isSelected = selectedDate === cell.iso;
          const isToday = todayISO === cell.iso;
          const label = `${formatLong(cell.iso)}, ${events.length > 0 ? `${events.length} event` : 'tidak ada event'}`;

          return (
            <button
              key={cell.iso}
              type="button"
              onClick={() => onSelect(cell.iso)}
              aria-label={label}
              aria-pressed={isSelected}
              className={`flex aspect-square flex-col items-center justify-between rounded-lg border p-1 text-sm transition-colors sm:p-2 ${
                isSelected
                  ? 'border-brand bg-brand text-brand-ink'
                  : isToday
                    ? 'border-brand text-ink hover:bg-line/60'
                    : 'border-transparent text-ink hover:bg-line/60'
              }`}
            >
              <span className="font-semibold">{cell.day}</span>
              <span className="flex h-2 items-center gap-0.5" aria-hidden="true">
                {events.slice(0, 3).map((event) => (
                  <span key={event.id} className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-brand-ink' : CATEGORY_META[event.kategori].dot}`} />
                ))}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted" aria-label="Keterangan warna">
        {Object.values(CATEGORY_META).map((meta) => (
          <li key={meta.label} className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${meta.dot}`} aria-hidden="true" />
            {meta.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
