
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-amazon-earth/20 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/c0feed30-6d58-46d7-b054-79308d935bde.png" 
                alt="Raízes Digitais Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-amazon-green">Raízes Digitais</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/produtos" className="text-foreground hover:text-amazon-green transition-colors">
              Produtos
            </Link>
            <Link to="/artesaos" className="text-foreground hover:text-amazon-green transition-colors">
              Artesãos
            </Link>
            <Link to="/eventos" className="text-foreground hover:text-amazon-green transition-colors">
              Eventos
            </Link>
            <Link to="/mapa" className="text-foreground hover:text-amazon-green transition-colors">
              Mapa
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-amazon-green transition-colors">
              Sobre
            </Link>
          </nav>

          {/* User and cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-amazon-green">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-amazon-green">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-4 py-2 space-y-2">
            <Link 
              to="/produtos" 
              className="block py-2 text-foreground hover:text-amazon-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link 
              to="/artesaos" 
              className="block py-2 text-foreground hover:text-amazon-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Artesãos
            </Link>
            <Link 
              to="/eventos" 
              className="block py-2 text-foreground hover:text-amazon-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link 
              to="/mapa" 
              className="block py-2 text-foreground hover:text-amazon-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Mapa
            </Link>
            <Link 
              to="/sobre" 
              className="block py-2 text-foreground hover:text-amazon-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <div className="flex space-x-4 pt-2 border-t">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground hover:text-amazon-green"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground hover:text-amazon-green"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
