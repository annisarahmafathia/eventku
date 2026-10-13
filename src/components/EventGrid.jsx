import EventCard from './EventCard';
import EmptyState from './EmptyState';

export default function EventGrid({ events, emptyTitle, emptyText, emptyAction }) {
  if (events.length === 0) {
    return (
      <EmptyState title={emptyTitle} action={emptyAction}>
        {emptyText}
      </EmptyState>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
