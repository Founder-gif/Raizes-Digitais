
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { artisans, products, events } from '@/data/mock-data';
import ProductCard from '@/components/products/ProductCard';
import ArtisanCard from '@/components/artisans/ArtisanCard';
import EventCard from '@/components/events/EventCard';

const Home = () => {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  const featuredArtisans = artisans.slice(0, 4);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Conectando a Amazônia ao Mundo Digital
            </h1>
            <p className="text-xl md:text-2xl text-white/85 mb-8">
              Uma plataforma para valorizar e comercializar o artesanato amazônico, 
              preservando histórias e tradições.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-amazon-sunshine hover:bg-amazon-sunshine/90 text-amazon-green font-bold text-lg"
              >
                <Link to="/produtos">
                  Ver Produtos
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/artesaos">
                  Conhecer Artesãos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Por que escolher o Raízes Digitais?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Valorizamos o trabalho artesanal e as tradições amazônicas, criando uma ponte entre artesãos e consumidores conscientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
              <div className="h-16 w-16 rounded-full bg-amazon-clay/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-amazon-clay" />
              </div>
              <h3 className="text-xl font-bold mb-2">Artesãos Verificados</h3>
              <p className="text-muted-foreground">
                Todos os artesãos e produtos são verificados para garantir autenticidade e qualidade.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
              <div className="h-16 w-16 rounded-full bg-amazon-green/20 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-amazon-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Origem Garantida</h3>
              <p className="text-muted-foreground">
                Conheça a história e a localização exata de onde cada peça é produzida.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
              <div className="h-16 w-16 rounded-full bg-amazon-sunshine/20 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-amazon-sunshine" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impacto Direto</h3>
              <p className="text-muted-foreground">
                Sua compra beneficia diretamente comunidades locais e preserva tradições culturais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Produtos em Destaque</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Descubra peças únicas e cheias de histórias
              </p>
            </div>
            <Link 
              to="/produtos" 
              className="text-amazon-green font-medium flex items-center hover:underline"
            >
              Ver todos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Artesãos em Destaque</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Conheça os talentos por trás de cada criação
              </p>
            </div>
            <Link 
              to="/artesaos" 
              className="text-amazon-green font-medium flex items-center hover:underline"
            >
              Ver todos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredArtisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Próximos Eventos</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Feiras e exposições para conhecer os artesãos pessoalmente
              </p>
            </div>
            <Link 
              to="/eventos" 
              className="text-amazon-green font-medium flex items-center hover:underline"
            >
              Ver todos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white border-t pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Impacto Social e Cultural</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ao comprar no Raízes Digitais, você contribui diretamente para:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="mr-4 h-10 w-10 rounded-full bg-amazon-green/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-amazon-green font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Renda para Comunidades</h3>
                  <p className="text-muted-foreground">
                    Geração de renda direta para famílias e comunidades tradicionais da Amazônia.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 h-10 w-10 rounded-full bg-amazon-green/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-amazon-green font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Preservação Cultural</h3>
                  <p className="text-muted-foreground">
                    Valorização e preservação de técnicas ancestrais e conhecimentos tradicionais.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 h-10 w-10 rounded-full bg-amazon-green/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-amazon-green font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Inclusão Digital</h3>
                  <p className="text-muted-foreground">
                    Acesso ao mercado digital para comunidades historicamente isoladas.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 h-10 w-10 rounded-full bg-amazon-green/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-amazon-green font-bold">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
                  <p className="text-muted-foreground">
                    Promoção de práticas sustentáveis de extração e produção de matérias-primas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amazon-clay py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Junte-se ao Movimento</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Seja como artesão ou consumidor, você pode fazer parte dessa transformação social e cultural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-amazon-clay font-bold"
              >
                <Link to="/cadastro">
                  Cadastre-se como Artesão
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/produtos">
                  Explorar Produtos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
