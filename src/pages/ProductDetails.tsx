
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, artisans } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Star, ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductsGrid from '@/components/products/ProductsGrid';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const product = products.find(product => product.id === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Produto não encontrado</h2>
          <Button asChild className="mt-4">
            <Link to="/produtos">Voltar para produtos</Link>
          </Button>
        </div>
      </div>
    );
  }

  const artisan = artisans.find(artisan => artisan.id === product.artisanId);
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handlePIX = () => {
    alert("Em uma versão completa, aqui seria gerado um QR code PIX para pagamento.");
  };

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Link to="/produtos" className="text-muted-foreground hover:text-amazon-green flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar para produtos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4">
              <img 
                src={product.images[activeImageIndex] || "/placeholder.svg"} 
                alt={product.name} 
                className="object-cover w-full h-full"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${index === activeImageIndex ? 'border-amazon-green' : 'border-transparent'}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - imagem ${index + 1}`} 
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
            
            {artisan && (
              <Link to={`/artesaos/${artisan.id}`} className="mt-2 inline-flex items-center text-muted-foreground hover:text-amazon-green">
                Por {artisan.name}
                <span className="inline-flex items-center ml-3">
                  <Star className="h-4 w-4 mr-1 text-amazon-sunshine" />
                  {artisan.rating}
                </span>
              </Link>
            )}
            
            <div className="mt-4 flex items-center">
              <span className="text-3xl font-bold text-amazon-green">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            
            <div className="mt-6">
              <Button 
                size="lg" 
                className="w-full bg-amazon-sunshine hover:bg-amazon-sunshine/90 text-amazon-green font-bold"
                onClick={handlePIX}
              >
                Comprar via PIX
              </Button>
            </div>

            <Card className="mt-6 p-4 border-amazon-earth/20">
              <h3 className="font-medium">Informações do produto:</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li><span className="font-medium">Categoria:</span> {product.category}</li>
                <li>
                  <span className="font-medium">Tags:</span>{" "}
                  {product.tags.map((tag, i) => (
                    <span key={i}>{tag}{i < product.tags.length - 1 ? ', ' : ''}</span>
                  ))}
                </li>
                {artisan && (
                  <li className="flex items-start">
                    <span className="font-medium mr-1">Origem:</span> 
                    <span className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-amazon-clay" />
                      {artisan.location.city}, {artisan.location.state}
                    </span>
                  </li>
                )}
              </ul>
            </Card>

            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="description">Descrição</TabsTrigger>
                <TabsTrigger value="story">História do Produto</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-4 text-muted-foreground">
                <p>{product.description}</p>
              </TabsContent>
              <TabsContent value="story" className="p-4 text-muted-foreground">
                <p>{product.story}</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
            <ProductsGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
