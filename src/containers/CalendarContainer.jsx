import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCalendar } from '../hooks/useCalendar';
import { useEvents } from '../hooks/useEvents';
import { formatLong } from '../utils/date';
import CalendarView from '../components/CalendarView';
import EventGrid from '../components/EventGrid';

export default function CalendarContainer() {
  const calendar = useCalendar();
  const { events } = useEvents();
  const [selectedDate, setSelectedDate] = useState(null);

  const eventsByDate = useMemo(() => {
    const map = {};
    events.forEach((event) => {
      (map[event.tanggal] ??= []).push(event);
    });
    return map;
  }, [events]);

  const selectedEvents = selectedDate ? (eventsByDate[selectedDate] ?? []) : [];

  return (
    <div className="space-y-8">
      <CalendarView
        {...calendar}
        eventsByDate={eventsByDate}
        selectedDate={selectedDate}
        onSelect={setSelectedDate}
        onPrev={calendar.goPrev}
        onNext={calendar.goNext}
        onToday={calendar.goToday}
      />

      <section aria-live="polite">
        {selectedDate ? (
          <>
            <h2 className="mb-4 text-xl font-bold">Event pada {formatLong(selectedDate)}</h2>
            <EventGrid
              events={selectedEvents}
              emptyTitle="Belum ada event di tanggal ini"
              emptyText="Pilih tanggal lain yang bertanda titik berwarna, atau lihat semua event di katalog."
              emptyAction={
                <Link to="/" className="btn-outline">
                  Buka katalog
                </Link>
              }
            />
          </>
        ) : (
          <p className="text-sm text-muted">Pilih tanggal untuk melihat event yang berlangsung pada hari itu.</p>
        )}
      </section>
    </div>
  );
}
