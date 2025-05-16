
import React, { useState } from 'react';
import { events } from '@/data/mock-data';
import EventsGrid from '@/components/events/EventsGrid';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  
  // Get unique locations (states)
  const locations = Array.from(new Set(events.map(event => event.location.state)));
  
  // Filter events based on search term and location
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'all' || event.location.state === locationFilter;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Eventos</h1>
            <p className="text-muted-foreground mt-2">
              Feiras e exposições para conhecer os artesãos pessoalmente
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-64">
              <Input
                type="search"
                placeholder="Buscar eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os estados</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {searchTerm || locationFilter !== 'all' ? (
          <div className="mb-6 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'evento encontrado' : 'eventos encontrados'}
            </p>
            {(searchTerm || locationFilter !== 'all') && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('all');
                }}
              >
                Limpar filtros
              </Button>
            )}
          </div>
        ) : null}

        <EventsGrid events={filteredEvents} />
      </div>
    </div>
  );
};

export default EventsPage;
