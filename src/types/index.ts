
export interface Artisan {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    }
  };
  bio: string;
  image: string;
  specialty: string[];
  rating: number;
  products: Product[];
}

export interface Product {
  id: string;
  artisanId: string;
  name: string;
  description: string;
  story: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  featured?: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    name: string;
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    }
  };
  image: string;
  organizer: string;
  artisanIds: string[];
}

export type Category = 
  | "Cerâmica"
  | "Tecelagem" 
  | "Cestaria" 
  | "Joalheria" 
  | "Pintura" 
  | "Escultura" 
  | "Instrumentos" 
  | "Alimentos" 
  | "Medicinal" 
  | "Outros";
