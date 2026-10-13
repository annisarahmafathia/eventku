import { Link } from 'react-router-dom';
import { useRegistrationContext } from '../context/RegistrationContext';
import { useEventsByIds } from '../hooks/useEvents';
import EventGrid from '../components/EventGrid';

export default function RegistrationListContainer() {
  const { registeredIds } = useRegistrationContext();
  const events = useEventsByIds(registeredIds);

  return (
    <EventGrid
      events={events}
      emptyTitle="Belum ada event yang ditandai"
      emptyText="Setelah mendaftar di situs penyelenggara, buka halaman event lalu tekan Tandai sudah daftar agar tercatat di sini."
      emptyAction={
        <Link to="/" className="btn-primary">
          Cari event
        </Link>
      }
    />
  );
}
