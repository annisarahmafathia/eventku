import { Link } from 'react-router-dom';
import { useBookmarkContext } from '../context/BookmarkContext';
import { useEventsByIds } from '../hooks/useEvents';
import EventGrid from '../components/EventGrid';

export default function BookmarkListContainer() {
  const { bookmarkIds } = useBookmarkContext();
  const events = useEventsByIds(bookmarkIds);

  return (
    <EventGrid
      events={events}
      emptyTitle="Belum ada event tersimpan"
      emptyText="Tekan ikon bookmark pada kartu event untuk menyimpannya di sini."
      emptyAction={
        <Link to="/" className="btn-primary">
          Jelajahi katalog
        </Link>
      }
    />
  );
}
