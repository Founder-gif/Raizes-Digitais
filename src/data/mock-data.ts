
import { Artisan, Product, Event } from "../types";

// Extract unique categories from products to avoid duplication
export const categories = Array.from(
  new Set(products.map(product => product.category))
);

export const artisans: Artisan[] = [
  {
    id: "1",
    name: "Maria Santos",
    location: {
      city: "Parintins",
      state: "AM",
      coordinates: {
        lat: -2.6283,
        lng: -56.7358
      }
    },
    bio: "Maria Santos é uma artesã indígena da etnia Sateré-Mawé, especialista em cestaria tradicional e tecelagem com fibras naturais da Amazônia. Ela aprendeu as técnicas ancestrais com sua avó e hoje lidera um coletivo de mulheres artesãs em sua comunidade.",
    image: "/images/artisan-1.jpg",
    specialty: ["Cestaria", "Tecelagem"],
    rating: 4.8,
    products: []
  },
  {
    id: "2",
    name: "João Pereira",
    location: {
      city: "Manaus",
      state: "AM",
      coordinates: {
        lat: -3.1190,
        lng: -60.0217
      }
    },
    bio: "João é um talentoso escultor que trabalha com madeiras caídas da floresta amazônica, transformando-as em peças únicas que contam histórias da cultura ribeirinha. Seu trabalho já foi exposto em galerias nacionais.",
    image: "/images/artisan-2.jpg",
    specialty: ["Escultura", "Artesanato em Madeira"],
    rating: 4.9,
    products: []
  },
  {
    id: "3",
    name: "Ana Ferreira",
    location: {
      city: "Santarém",
      state: "PA",
      coordinates: {
        lat: -2.4426,
        lng: -54.7016
      }
    },
    bio: "Ana é ceramista da comunidade Tapajós, conhecida por suas peças que misturam técnicas ancestrais com designs contemporâneos. Suas cerâmicas são inspiradas na rica iconografia indígena da região amazônica.",
    image: "/images/artisan-3.jpg",
    specialty: ["Cerâmica", "Pintura"],
    rating: 4.7,
    products: []
  },
  {
    id: "4",
    name: "Carlos Tukano",
    location: {
      city: "São Gabriel da Cachoeira",
      state: "AM",
      coordinates: {
        lat: -0.1304,
        lng: -67.0879
      }
    },
    bio: "Carlos é artesão da etnia Tukano, especializado na confecção de instrumentos musicais tradicionais como flautas, tambores e maracás. Cada peça é feita manualmente usando materiais sustentáveis da floresta.",
    image: "/images/artisan-4.jpg",
    specialty: ["Instrumentos Musicais", "Artesanato em Madeira"],
    rating: 4.9,
    products: []
  },
  {
    id: "5",
    name: "Iara Mendes",
    location: {
      city: "Belém",
      state: "PA",
      coordinates: {
        lat: -1.4558,
        lng: -48.5044
      }
    },
    bio: "Iara é uma joalheira que trabalha com sementes amazônicas, fibras naturais e metais reciclados para criar peças únicas. Seu trabalho combina tradições indígenas com design contemporâneo, resultando em acessórios sustentáveis e elegantes.",
    image: "/images/artisan-5.jpg",
    specialty: ["Joalheria", "Acessórios"],
    rating: 4.8,
    products: []
  }
];

export const products: Product[] = [
  {
    id: "1",
    artisanId: "1",
    name: "Cesto Tradicional Sateré-Mawé",
    description: "Cesto artesanal feito com fibras de tucumã e arumã, trançado à mão usando técnicas ancestrais.",
    story: "Este cesto representa a conexão entre nosso povo e a floresta. Cada fibra é coletada de forma sustentável e o padrão trançado simboliza os caminhos dos rios amazônicos que conectam nossas comunidades.",
    price: 120,
    images: ["/images/product-1a.jpg", "/images/product-1b.jpg"],
    category: "Cestaria",
    tags: ["Indígena", "Sustentável", "Feito à mão"],
    featured: true
  },
  {
    id: "2",
    artisanId: "1",
    name: "Tapete de Fibra Natural",
    description: "Tapete feito com fibras de buriti, tingido com corantes naturais da floresta amazônica.",
    story: "As fibras deste tapete são colhidas apenas uma vez ao ano, durante a estação seca. O processo de tingimento utiliza apenas plantas da floresta, como urucum para o vermelho e jenipapo para o azul-escuro.",
    price: 280,
    images: ["/images/product-2a.jpg", "/images/product-2b.jpg"],
    category: "Tecelagem",
    tags: ["Casa", "Decoração", "Sustentável"]
  },
  {
    id: "3",
    artisanId: "2",
    name: "Escultura Boto Cor-de-Rosa",
    description: "Escultura em madeira de aninga representando o boto, figura lendária da mitologia amazônica.",
    story: "Esta escultura representa o lendário boto cor-de-rosa, que segundo nossas lendas, se transforma em um belo homem durante as festas ribeirinhas. Esculpi esta peça após ouvir histórias de meu avô, que jurava ter visto o boto em sua juventude.",
    price: 350,
    images: ["/images/product-3a.jpg", "/images/product-3b.jpg"],
    category: "Escultura",
    tags: ["Mitologia", "Arte", "Decoração"],
    featured: true
  },
  {
    id: "4",
    artisanId: "3",
    name: "Vaso Cerâmico Tapajônico",
    description: "Vaso de cerâmica inspirado nos antigos artefatos da civilização Tapajônica, com grafismos tradicionais.",
    story: "Este vaso é inspirado em peças arqueológicas encontradas na região do Tapajós. Os grafismos representam a conexão entre o mundo físico e espiritual, usando símbolos que nossos ancestrais usavam há mais de mil anos.",
    price: 220,
    images: ["/images/product-4a.jpg", "/images/product-4b.jpg"],
    category: "Cerâmica",
    tags: ["Casa", "Decoração", "Ancestral"],
    featured: true
  },
  {
    id: "5",
    artisanId: "3",
    name: "Conjunto de Pratos Decorativos",
    description: "Conjunto com três pratos decorativos em cerâmica pintados à mão com motivos da fauna amazônica.",
    story: "Cada prato deste conjunto representa um ecossistema amazônico diferente: rios, floresta e igapó. Os animais retratados são aqueles que considero guardiões desses ambientes e que precisam de nossa proteção.",
    price: 185,
    images: ["/images/product-5a.jpg", "/images/product-5b.jpg"],
    category: "Cerâmica",
    tags: ["Casa", "Decoração", "Pintado à mão"]
  },
  {
    id: "6",
    artisanId: "4",
    name: "Flauta Tukano Tradicional",
    description: "Flauta cerimonial feita de bambu amazônico, decorada com entalhes e fibras naturais.",
    story: "Esta flauta é usada em cerimônias importantes de nossa comunidade. O som que produz é considerado sagrado, capaz de conectar o mundo dos vivos com o mundo espiritual. Cada entalhe conta uma parte da história de nosso povo.",
    price: 150,
    images: ["/images/product-6a.jpg", "/images/product-6b.jpg"],
    category: "Instrumentos",
    tags: ["Música", "Cerimonial", "Cultural"],
    featured: true
  },
  {
    id: "7",
    artisanId: "4",
    name: "Conjunto de Maracás",
    description: "Par de maracás tradicionais feitos com cabaça, sementes e madeira entalhada.",
    story: "Os maracás são instrumentos centrais em nossas danças e rituais. O som das sementes representa a voz dos ancestrais nos guiando através dos ritmos. Cada instrumento leva cerca de duas semanas para ser completado.",
    price: 120,
    images: ["/images/product-7a.jpg", "/images/product-7b.jpg"],
    category: "Instrumentos",
    tags: ["Música", "Ritual", "Artesanal"]
  },
  {
    id: "8",
    artisanId: "5",
    name: "Colar de Sementes Amazônicas",
    description: "Colar artesanal feito com sementes de açaí, tucumã e paxiúba, com acabamentos em prata reciclada.",
    story: "Cada semente deste colar foi cuidadosamente selecionada durante minhas caminhadas pela floresta. As sementes de açaí representam abundância, as de tucumã simbolizam força e as de paxiúba trazem proteção. Junto, formam um amuleto de bem-estar.",
    price: 95,
    images: ["/images/product-8a.jpg", "/images/product-8b.jpg"],
    category: "Joalheria",
    tags: ["Acessórios", "Sustentável", "Moda"],
    featured: true
  },
  {
    id: "9",
    artisanId: "5",
    name: "Brincos de Fibra de Buriti",
    description: "Par de brincos leves feitos com fibra de buriti tingida naturalmente e detalhes em latão.",
    story: "Estes brincos são inspirados nas plumagens coloridas dos pássaros amazônicos. As fibras são colhidas de palmeiras de buriti por comunidades extrativistas que mantêm práticas sustentáveis há gerações.",
    price: 75,
    images: ["/images/product-9a.jpg", "/images/product-9b.jpg"],
    category: "Joalheria",
    tags: ["Acessórios", "Fibra Natural", "Colorido"]
  },
  {
    id: "10",
    artisanId: "2",
    name: "Miniatura de Canoa Tradicional",
    description: "Miniatura detalhada de uma canoa ribeirinha amazônica, esculpida em madeira de cedro.",
    story: "Esta miniatura representa as tradicionais canoas que são o principal meio de transporte nas comunidades ribeirinhas. Cada detalhe foi esculpido à mão, relembrando minha infância quando navegávamos pelos igarapés em busca de sustento.",
    price: 130,
    images: ["/images/product-10a.jpg", "/images/product-10b.jpg"],
    category: "Escultura",
    tags: ["Miniatura", "Ribeirinho", "Decoração"]
  }
];

export const events: Event[] = [
  {
    id: "1",
    title: "Feira de Artesanato Indígena",
    description: "Exposição e venda de produtos artesanais de diversas etnias indígenas da Amazônia, com demonstrações de técnicas tradicionais e apresentações culturais.",
    startDate: "2025-06-15",
    endDate: "2025-06-18",
    location: {
      name: "Centro Cultural Povos da Amazônia",
      city: "Manaus",
      state: "AM",
      coordinates: {
        lat: -3.0927,
        lng: -59.9833
      }
    },
    image: "/images/event-1.jpg",
    organizer: "Associação dos Artesãos Indígenas do Amazonas",
    artisanIds: ["1", "4"]
  },
  {
    id: "2",
    title: "Festival das Águas",
    description: "Evento que celebra a cultura ribeirinha com exposição de arte, gastronomia local e produtos artesanais, além de debates sobre preservação ambiental.",
    startDate: "2025-07-10",
    endDate: "2025-07-12",
    location: {
      name: "Orla do Porto",
      city: "Santarém",
      state: "PA",
      coordinates: {
        lat: -2.4254,
        lng: -54.7387
      }
    },
    image: "/images/event-2.jpg",
    organizer: "Secretaria de Cultura de Santarém",
    artisanIds: ["3"]
  },
  {
    id: "3",
    title: "Mostra Cultural Amazônica",
    description: "Exposição que reúne arte contemporânea inspirada nas tradições amazônicas, com foco em sustentabilidade e valorização cultural.",
    startDate: "2025-08-05",
    endDate: "2025-08-20",
    location: {
      name: "Museu de Arte Contemporânea",
      city: "Belém",
      state: "PA",
      coordinates: {
        lat: -1.4557,
        lng: -48.4902
      }
    },
    image: "/images/event-3.jpg",
    organizer: "Instituto Cultural da Amazônia",
    artisanIds: ["5", "2"]
  }
];

// Link products to artisans
artisans.forEach(artisan => {
  artisan.products = products.filter(product => product.artisanId === artisan.id);
});
