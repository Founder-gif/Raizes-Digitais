
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { artisans, events } from '@/data/mock-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, User } from 'lucide-react';

const MapPage = () => {
  const [activeTab, setActiveTab] = useState('artisans');
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  
  // In a real application, this would be an actual map using libraries like
  // Google Maps, Mapbox, or Leaflet. For this prototype, we'll simulate a map view.
  
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Mapa</h1>
          <p className="text-muted-foreground mt-2">
            Localize artesãos e eventos na região amazônica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="artisans">
                  <User className="h-4 w-4 mr-2" />
                  Artesãos
                </TabsTrigger>
                <TabsTrigger value="events">
                  <Calendar className="h-4 w-4 mr-2" />
                  Eventos
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="artisans" className="mt-4 space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {artisans.map((artisan) => (
                  <Card 
                    key={artisan.id}
                    className={`p-4 cursor-pointer transition-colors ${
                      selectedMarker === artisan.id ? 'border-amazon-green bg-amazon-green/5' : ''
                    }`}
                    onClick={() => setSelectedMarker(artisan.id)}
                  >
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-muted mr-4 flex-shrink-0">
                        <img 
                          src={artisan.image} 
                          alt={artisan.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{artisan.name}</h3>
                        <p className="text-sm text-muted-foreground">{artisan.specialty.join(', ')}</p>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {artisan.location.city}, {artisan.location.state}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-right">
                      <Link 
                        to={`/artesaos/${artisan.id}`}
                        className="text-sm text-amazon-green font-medium hover:underline"
                      >
                        Ver perfil
                      </Link>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="events" className="mt-4 space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {events.map((event) => (
                  <Card 
                    key={event.id}
                    className={`p-4 cursor-pointer transition-colors ${
                      selectedMarker === event.id ? 'border-amazon-sunshine bg-amazon-sunshine/5' : ''
                    }`}
                    onClick={() => setSelectedMarker(event.id)}
                  >
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-lg overflow-hidden bg-muted mr-4 flex-shrink-0">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {new Date(event.startDate).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {event.location.city}, {event.location.state}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-right">
                      <Link 
                        to={`/eventos/${event.id}`}
                        className="text-sm text-amazon-sunshine font-medium hover:underline"
                      >
                        Ver evento
                      </Link>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Map View */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden bg-muted h-[600px]">
            <div className="h-full w-full flex items-center justify-center border border-dashed border-muted-foreground">
              <div className="text-center p-6">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-amazon-green opacity-50" />
                <h3 className="text-lg font-medium mb-2">Mapa interativo</h3>
                <p className="text-muted-foreground">
                  Em uma implementação completa, esta área exibiria um mapa interativo com os locais dos artesãos e eventos.
                </p>
                <p className="text-muted-foreground mt-2">
                  Utilizaria APIs como Google Maps, Mapbox ou Leaflet para criar uma experiência completa de geolocalização.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
