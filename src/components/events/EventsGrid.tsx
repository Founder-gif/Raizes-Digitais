
import React from 'react';
import { Event } from '@/types';
import EventCard from './EventCard';

interface EventsGridProps {
  events: Event[];
}

const EventsGrid: React.FC<EventsGridProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      {events.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">Nenhum evento encontrado.</p>
        </div>
      )}
    </div>
  );
};

export default EventsGrid;
