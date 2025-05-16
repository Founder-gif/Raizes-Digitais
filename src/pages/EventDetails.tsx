
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { events, artisans } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, ArrowLeft } from 'lucide-react';
import ArtisansGrid from '@/components/artisans/ArtisansGrid';

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const event = events.find(event => event.id === id);
  
  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Evento não encontrado</h2>
          <Button asChild className="mt-4">
            <Link to="/eventos">Voltar para eventos</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  // Get participating artisans
  const participatingArtisans = artisans.filter(artisan => 
    event.artisanIds.includes(artisan.id)
  );

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Link to="/eventos" className="text-muted-foreground hover:text-amazon-green flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar para eventos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Image */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/2] overflow-hidden rounded-lg">
              <img 
                src={event.image || "/placeholder.svg"} 
                alt={event.title} 
                className="object-cover w-full h-full"
              />
            </div>
            
            <Card className="mt-6 p-6">
              <h3 className="font-medium mb-4">Informações do evento:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-amazon-green flex-shrink-0" />
                  <div>
                    <p className="font-medium">Data</p>
                    <p className="text-muted-foreground">
                      {formatDate(event.startDate)}
                      {event.startDate !== event.endDate && ` até ${formatDate(event.endDate)}`}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-amazon-clay flex-shrink-0" />
                  <div>
                    <p className="font-medium">Local</p>
                    <p className="text-muted-foreground">{event.location.name}</p>
                    <p className="text-muted-foreground">{event.location.city}, {event.location.state}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-5 w-5 mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-amazon-sunshine font-bold">⚑</span>
                  </div>
                  <div>
                    <p className="font-medium">Organização</p>
                    <p className="text-muted-foreground">{event.organizer}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">
                  Mais informações
                </Button>
              </div>
            </Card>
          </div>

          {/* Event Info and Artisans */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-foreground mb-4">{event.title}</h1>
            
            <div className="prose max-w-none mb-8">
              <p className="text-muted-foreground">{event.description}</p>
            </div>

            {participatingArtisans.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-4">Artesãos Participantes</h2>
                <ArtisansGrid artisans={participatingArtisans} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
