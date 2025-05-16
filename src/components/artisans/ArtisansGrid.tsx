
import React from 'react';
import { Artisan } from '@/types';
import ArtisanCard from './ArtisanCard';

interface ArtisansGridProps {
  artisans: Artisan[];
}

const ArtisansGrid: React.FC<ArtisansGridProps> = ({ artisans }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {artisans.map((artisan) => (
        <ArtisanCard key={artisan.id} artisan={artisan} />
      ))}
      {artisans.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">Nenhum artesão encontrado.</p>
        </div>
      )}
    </div>
  );
};

export default ArtisansGrid;
