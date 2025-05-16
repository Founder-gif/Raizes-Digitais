
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { id, name, price, images, artisanId, category } = product;
  
  return (
    <Link to={`/produtos/${id}`}>
      <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-md ${featured ? 'border-amazon-sunshine border-2' : ''}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          {featured && (
            <div className="absolute top-2 right-2 bg-amazon-sunshine text-amazon-green text-xs font-bold px-2 py-1 rounded-full">
              Destaque
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-foreground line-clamp-1">{name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-muted-foreground">{category}</span>
            <span className="font-bold text-amazon-green">
              R$ {price.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
