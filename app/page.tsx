import { Header } from "@/components/navigation/header";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { Team } from "@/components/sections/team";
import { Footer } from "@/components/ui/footer";

const properties = [
  {
    title: "Modern Tokyo Apartment",
    location: "Minato-ku, Tokyo",
    price: "¥75,000,000",
    thumbnail: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Traditional Kyoto Machiya",
    location: "Gion, Kyoto",
    price: "¥120,000,000",
    thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Luxury Osaka Penthouse",
    location: "Chuo-ku, Osaka",
    price: "¥180,000,000",
    thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Beachfront Villa",
    location: "Okinawa",
    price: "¥250,000,000",
    thumbnail: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Mountain View Chalet",
    location: "Hakuba, Nagano",
    price: "¥95,000,000",
    thumbnail: "https://images.unsplash.com/photo-1575862924838-c166e3814df7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Historic Kanazawa Residence",
    location: "Kanazawa, Ishikawa",
    price: "¥85,000,000",
    thumbnail: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Sapporo Snow Resort Home",
    location: "Sapporo, Hokkaido",
    price: "¥110,000,000",
    thumbnail: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Yokohama Bay Condo",
    location: "Yokohama, Kanagawa",
    price: "¥65,000,000",
    thumbnail: "https://images.unsplash.com/photo-1536437075651-01d675529a6b?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Fukuoka City Apartment",
    location: "Fukuoka",
    price: "¥45,000,000",
    thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Kobe Harbor View",
    location: "Kobe, Hyogo",
    price: "¥92,000,000",
    thumbnail: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Nara Traditional Home",
    location: "Nara",
    price: "¥78,000,000",
    thumbnail: "https://images.unsplash.com/photo-1526604648377-1433c7c1f5b7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Sendai Modern House",
    location: "Sendai, Miyagi",
    price: "¥55,000,000",
    thumbnail: "https://images.unsplash.com/photo-1505069190533-da1c9af13346?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Kamakura Beach House",
    location: "Kamakura, Kanagawa",
    price: "¥145,000,000",
    thumbnail: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Nagoya City Penthouse",
    location: "Nagoya, Aichi",
    price: "¥135,000,000",
    thumbnail: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Hiroshima Bay View",
    location: "Hiroshima",
    price: "¥68,000,000",
    thumbnail: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=60",
  }
];

export default function Home() {
  return (
    <main>
      <Header />
      <HeroParallax properties={properties} />
      <Features />
      <Process />
      <Team />
      <Footer />
    </main>
  );
}