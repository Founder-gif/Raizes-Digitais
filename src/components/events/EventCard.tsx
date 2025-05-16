
import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '@/types';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { id, title, image, startDate, endDate, location } = event;
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };
  
  return (
    <Link to={`/eventos/${id}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-foreground">{title}</h3>
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>
              {formatDate(startDate)}
              {startDate !== endDate && ` - ${formatDate(endDate)}`}
            </span>
          </div>
          <div className="flex items-center mt-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{location.city}, {location.state}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
