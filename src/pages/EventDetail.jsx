import { useParams } from 'react-router-dom';
import EventDetailContainer from '../containers/EventDetailContainer';

export default function EventDetail() {
  const { id } = useParams();
  return <EventDetailContainer eventId={id} />;
}
