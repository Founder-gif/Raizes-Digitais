
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { artisans } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Star, ArrowLeft } from 'lucide-react';
import ProductsGrid from '@/components/products/ProductsGrid';

const ArtisanDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const artisan = artisans.find(artisan => artisan.id === id);
  
  if (!artisan) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Artesão não encontrado</h2>
          <Button asChild className="mt-4">
            <Link to="/artesaos">Voltar para artesãos</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Link to="/artesaos" className="text-muted-foreground hover:text-amazon-green flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar para artesãos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Artisan Info */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={artisan.image || "/placeholder.svg"} 
                  alt={artisan.name} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold text-foreground">{artisan.name}</h1>
                
                <div className="flex items-center mt-2 text-sm">
                  <MapPin className="h-4 w-4 mr-1 text-amazon-clay" />
                  <span>{artisan.location.city}, {artisan.location.state}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-amazon-sunshine" />
                    {artisan.rating}
                  </span>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Especialidades:</h3>
                  <div className="flex flex-wrap gap-2">
                    {artisan.specialty.map((spec, index) => (
                      <span 
                        key={index}
                        className="inline-block px-2 py-1 text-sm bg-amazon-green/10 text-amazon-green rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">
                    Entrar em Contato
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Bio and Products */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Sobre o Artesão</h2>
            <div className="prose max-w-none mb-8">
              <p className="text-muted-foreground">{artisan.bio}</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Produtos deste Artesão</h2>
            {artisan.products.length > 0 ? (
              <ProductsGrid products={artisan.products} />
            ) : (
              <p className="text-muted-foreground">Este artesão ainda não tem produtos cadastrados.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDetails;
