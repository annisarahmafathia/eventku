import { CATEGORY_LIST, CATEGORY_META } from '../utils/category';
import { SearchIcon } from './Icons';

// Presenter: semua nilai filter dan handler datang dari EventListContainer.
export default function FilterBar({ filters, onChange, onReset, isFiltering }) {
  const set = (name) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    onChange({ [name]: value });
  };

  return (
    <section aria-label="Cari dan filter event" className="space-y-4 rounded-xl border border-line bg-surface p-4">
      <div className="relative">
        <label htmlFor="cari-event" className="sr-only">
          Cari event
        </label>
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input
          id="cari-event"
          type="search"
          value={filters.query}
          onChange={set('query')}
          placeholder="Cari judul, penyelenggara, atau lokasi"
          className="field pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Kategori event">
        {['semua', ...CATEGORY_LIST].map((key) => {
          const active = filters.kategori === key;
          const label = key === 'semua' ? 'Semua' : CATEGORY_META[key].label;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => onChange({ kategori: key })}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                active
                  ? 'border-brand bg-brand text-brand-ink'
                  : 'border-line bg-surface text-ink hover:border-brand'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label htmlFor="tanggal-dari" className="mb-1 block text-xs font-semibold text-muted">
            Dari tanggal
          </label>
          <input id="tanggal-dari" type="date" value={filters.dari} max={filters.sampai || undefined} onChange={set('dari')} className="field" />
        </div>
        <div>
          <label htmlFor="tanggal-sampai" className="mb-1 block text-xs font-semibold text-muted">
            Sampai tanggal
          </label>
          <input id="tanggal-sampai" type="date" value={filters.sampai} min={filters.dari || undefined} onChange={set('sampai')} className="field" />
        </div>
        <label className="flex items-center gap-2 pb-2 text-sm">
          <input type="checkbox" checked={filters.hanyaDibuka} onChange={set('hanyaDibuka')} className="h-4 w-4 accent-[rgb(var(--brand))]" />
          Pendaftaran masih dibuka
        </label>
        {isFiltering && (
          <button type="button" onClick={onReset} className="pb-2 text-sm font-semibold text-brand underline-offset-2 hover:underline">
            Reset filter
          </button>
        )}
      </div>
    </section>
  );
}
