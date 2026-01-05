// src/data/mockData.ts
import { eden, panipat, swarnav, sindhudurg, deepakSir, vikramRaidu, amitKumar, amitLohiya, kashishKholiwal, heenaWaliya, tanya } from "./images";

export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  price_unit: string;
  location: string;
  sizes: string;
  area_sqft: number;
  property_type: "commercial" | "residential";
  status: "available" | "sold";
  image_url: string;
  featured: boolean;
  created_at: string;
}


export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Eden Street",
    slug: "/eden-street",
    description:
      "Eden Street is envisioned as a modern shopping and business destination, designed to cater to the needs of today’s entrepreneurs and investors.",
    price_unit: "2 Acre",
    location: "Mohali, Punjab",
    sizes: "16'X66', 16'X70'",
    area_sqft: 2000,
    property_type: "commercial",
    status: "available",
    image_url: eden,
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Residential Plots in Sindhudurg",
    slug: "/sindhudurg-plots",
    description:
      "Premium residential plots surrounded by natural beauty and modern infrastructure. Ideal for peaceful living and investment.",
    price_unit: "8.5 Acre",
    location: "Sindhudurg, Maharashtra",
    sizes: "250, 300, 400",
    area_sqft: 3200,
    property_type: "residential",
    status: "available",
    image_url: sindhudurg,
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Bridal Commercial Showrooms",
    slug: "/bridal-shopping-commercial",
    description:
      "Bridal Square represents the perfect convergence of location, design, and opportunity. With 6 acres of thoughtfully planned commercial space, this development is set to become the region's premier bridal shopping destination.",
    price_unit: "6 Acre",
    location: "Mohali, Punjab",
    sizes: "16'X60', 16'X66'",
    area_sqft: 4500,
    property_type: "commercial",
    status: "available",
    image_url: swarnav,
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Residential Plots in Abohar",
    slug: "/abohar-plots",
    description:
      "Elegant residential project in Abohar featuring modern amenities, spacious plots, and excellent connectivity.",
    price_unit: "5 Acre",
    location: "Abohar, Punjab",
    sizes: "150, 250, 300",
    area_sqft: 15000,
    property_type: "residential",
    status: "available",
    image_url: panipat,
    featured: false,
    created_at: new Date().toISOString(),
  },

];

export const mockAgents = [
  {
    id: '1',
    name: 'Deepak Sindhu',
    role: 'Vice President',
    email: 'deepaksindhukbd@gmail.com',
    image: deepakSir,
    bio: 'As Vice President, Deepak Sindhu leads KBD Group with over 15 years of strategic experience in real estate. His focus on innovation, client satisfaction, and operational excellence drives the company’s vision forward.',
  },
  {
    id: '2',
    name: 'Vikram Reddu',
    role: 'Assistant Vice President',
    email: 'vikram.rkbd@gmail.com',
    image: vikramRaidu,
    bio: 'Vikram Raidu, Assistant Vice President, is known for his strong leadership, strategic planning, and deep understanding of the real estate market. He ensures smooth coordination across teams for high-value project delivery.',
  },
  {
    id: '3',
    name: 'Amit Kumar',
    role: 'Deputy General Manager',
    email: 'amit07.kbd@gmail.com',
    image: amitKumar,
    bio: 'Amit Kumar serves as Deputy General Manager, combining expert market insights with solid management skills. He leads large-scale property operations with precision and commitment to client success.',
  },
  {
    id: '4',
    name: 'Amit Lohia',
    role: 'Sales Manager',
    email: 'amitlohiakbd@gmail.com',
    image: amitLohiya,
    bio: 'Amit Lohiya is a highly motivated Sales Manager who brings strategic thinking and a results-oriented approach to client relations, ensuring seamless and transparent property transactions.',
  },
  {
    id: '5',
    name: 'Taniya Preet Kaur',
    role: 'Sales Manager',
    email: 'taniyapreetkbd@gmail.com',
    image: tanya,
    bio: 'As Sales Manager, Tanya Preet Kaur leads with integrity and passion. She specializes in residential sales, offering clients tailored property solutions through clear communication and trust.',
  },
  {
    id: '6',
    name: 'Kashish Kholiwal',
    role: 'Sales Executive',
    email: 'kashishbrickhills@gmail.com',
    image: kashishKholiwal,
    bio: 'Kashish Kholiwal is a proactive Sales Executive who focuses on understanding client needs and providing customized real estate solutions that ensure satisfaction and long-term relationships.',
  },
  {
    id: '7',
    name: 'Heena Waliya',
    role: 'Sales Executive',
    email: 'heenawaliyabrikhills@gmail.com',
    image: heenaWaliya,
    bio: 'Heena Waliya, as a dedicated Sales Executive, brings a client-first approach to every project. Her attention to detail and excellent communication skills make her a valued member of the sales team.',
  },
];
