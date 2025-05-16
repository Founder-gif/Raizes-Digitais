
import React from 'react';
import { Link } from 'react-router-dom';
import { Artisan } from '@/types';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from 'lucide-react';

interface ArtisanCardProps {
  artisan: Artisan;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan }) => {
  const { id, name, image, specialty, location, rating } = artisan;
  
  return (
    <Link to={`/artesaos/${id}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-foreground">{name}</h3>
          <div className="flex items-center mt-1 text-sm text-muted-foreground">
            <span className="flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              {location.city}, {location.state}
            </span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <Star className="h-3.5 w-3.5 mr-1 text-amazon-sunshine" />
              {rating}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {specialty.slice(0, 2).map((spec, index) => (
              <span 
                key={index}
                className="inline-block px-2 py-1 text-xs bg-amazon-green/10 text-amazon-green rounded-full"
              >
                {spec}
              </span>
            ))}
            {specialty.length > 2 && (
              <span className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                +{specialty.length - 2}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArtisanCard;
