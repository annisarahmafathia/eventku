import { Link } from 'react-router-dom';
import { useEvent } from '../hooks/useEvents';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { getEventStatus } from '../utils/status';
import EventDetailView from '../components/EventDetailView';
import EmptyState from '../components/EmptyState';

export default function EventDetailContainer({ eventId }) {
  const event = useEvent(eventId);
  useDocumentTitle(event?.judul ?? 'Event tidak ditemukan');

  if (!event) {
    return (
      <EmptyState
        title="Event tidak ditemukan"
        action={
          <Link to="/" className="btn-primary">
            Kembali ke katalog
          </Link>
        }
      >
        Event ini mungkin sudah dihapus atau alamatnya salah.
      </EmptyState>
    );
  }

  const status = getEventStatus(event);

  return (
    <div>
      <Link to="/" className="mb-4 inline-block text-sm font-semibold text-brand hover:underline">
        Kembali ke katalog
      </Link>
      <EventDetailView event={event} status={status} />
    </div>
  );
}
