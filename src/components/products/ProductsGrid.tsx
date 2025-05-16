
import React from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} featured={product.featured} />
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">Nenhum produto encontrado.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
