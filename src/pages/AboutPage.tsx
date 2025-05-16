
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Sobre o Raízes Digitais
            </h1>
            <p className="text-xl text-white/85 mb-4">
              Uma ponte entre artesãos amazônicos e o mercado digital
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground mb-4">
                O Raízes Digitais nasceu com o objetivo de criar um canal direto entre 
                artesãos e pequenos produtores da região amazônica e consumidores conscientes 
                que valorizam a cultura, a arte e a sustentabilidade.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Somos uma plataforma que conecta dois mundos: o da tradição ancestral amazônica 
                e o do mercado digital contemporâneo, gerando valorização cultural e renda 
                para comunidades historicamente isoladas.
              </p>
              <p className="text-lg text-muted-foreground">
                Acreditamos que a tecnologia pode ser uma poderosa aliada na preservação 
                de saberes tradicionais e na geração de oportunidades econômicas sustentáveis.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Impacto Social</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 border-l-4 border-amazon-green pl-3">
                    85% dos artesãos não vendem online
                  </h3>
                  <p className="text-muted-foreground">
                    A grande maioria dos artesãos brasileiros não possui acesso ao mercado digital, 
                    limitando seu potencial de alcance e geração de renda.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 border-l-4 border-amazon-clay pl-3">
                    Comunidades Isoladas
                  </h3>
                  <p className="text-muted-foreground">
                    Muitas comunidades artesãs vivem em regiões de difícil acesso, 
                    sem infraestrutura tecnológica ou conhecimento para acessar o mercado digital.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 border-l-4 border-amazon-sunshine pl-3">
                    Valorização Cultural
                  </h3>
                  <p className="text-muted-foreground">
                    Ao dar visibilidade aos artesãos e suas histórias, contribuímos para a 
                    preservação e valorização das tradições culturais amazônicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Como Funcionamos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 rounded-full bg-amazon-green/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-amazon-green font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Cadastro Verificado</h3>
                <p className="text-muted-foreground">
                  Artesãos passam por um processo de verificação para garantir a 
                  autenticidade dos produtos e práticas sustentáveis.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-20 w-20 rounded-full bg-amazon-clay/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-amazon-clay font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Vitrine Cultural</h3>
                <p className="text-muted-foreground">
                  Cada produto vem acompanhado da história de sua origem e do 
                  significado cultural por trás de sua produção.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-20 w-20 rounded-full bg-amazon-sunshine/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-amazon-sunshine font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Venda Direta</h3>
                <p className="text-muted-foreground">
                  Transações simplificadas via PIX garantem que o valor chegue 
                  diretamente ao artesão, com apenas 3% de comissão para manter a plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-32 w-32 rounded-full bg-amazon-green mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-3xl">RH</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Ryeffer Harlan</h3>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-32 w-32 rounded-full bg-amazon-clay mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-3xl">JP</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">João Paulo Pereira</h3>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-32 w-32 rounded-full bg-amazon-sunshine mx-auto mb-4 flex items-center justify-center">
                <span className="text-amazon-green font-bold text-3xl">GV</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Gabrielly Viana</h3>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-32 w-32 rounded-full bg-amazon-green mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-3xl">BV</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Bruna Vitória</h3>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-32 w-32 rounded-full bg-amazon-clay mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-3xl">KH</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Kethellen Hiroiaque</h3>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-32 w-32 rounded-full bg-amazon-sunshine mx-auto mb-4 flex items-center justify-center">
                <span className="text-amazon-green font-bold text-3xl">WH</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Wesley Horquen</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Junte-se a Nós</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Seja como artesão, consumidor ou parceiro, você pode fazer parte desse movimento por uma Amazônia mais conectada e sustentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amazon-green">
              <Link to="/cadastro">Cadastre-se como Artesão</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
