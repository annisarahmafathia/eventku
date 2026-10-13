import { useState } from 'react';
import { EMPTY_FILTERS, useEvents } from '../hooks/useEvents';
import FilterBar from '../components/FilterBar';
import EventGrid from '../components/EventGrid';

// Container: mengelola state filter dan data, lalu menyerahkannya ke komponen presenter.
export default function EventListContainer() {
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const { events, total } = useEvents(filters);

  const updateFilters = (patch) => setFilters((prev) => ({ ...prev, ...patch }));
  const resetFilters = () => setFilters(EMPTY_FILTERS);
  const isFiltering = JSON.stringify(filters) !== JSON.stringify(EMPTY_FILTERS);

  return (
    <div className="space-y-6">
      <FilterBar filters={filters} onChange={updateFilters} onReset={resetFilters} isFiltering={isFiltering} />
      <p className="text-sm text-muted" role="status">
        Menampilkan {events.length} dari {total} event
      </p>
      <EventGrid
        events={events}
        emptyTitle="Tidak ada event yang cocok"
        emptyText="Coba ganti kata kunci, pilih kategori lain, atau perluas rentang tanggal."
        emptyAction={
          <button type="button" onClick={resetFilters} className="btn-outline">
            Reset filter
          </button>
        }
      />
    </div>
  );
}
