import { Building2, MapPin, Phone, Mail, Globe, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  banner: string;
  category: string;
  services: string[];
  description: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  rating: number;
  featured: boolean;
  products?: Product[];
}

interface CompanyCardProps {
  company: Company;
  onClick: () => void;
}

export function CompanyCard({ company, onClick }: CompanyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div onClick={onClick}>
        {/* Banner Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={company.banner}
            alt={company.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {company.featured && (
            <Badge className="absolute top-3 right-3 bg-yellow-500 text-white">
              <Star className="size-3 mr-1" />
              Destacado
            </Badge>
          )}
          <Badge className="absolute top-3 left-3 bg-white/90 text-gray-900">
            {company.category}
          </Badge>
        </div>

        {/* Logo */}
        <div className="relative px-6">
          <div className="absolute -top-10 left-6">
            <div className="size-20 rounded-lg bg-white shadow-lg p-2 border-4 border-white">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-12">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="size-4 fill-current" />
              <span className="text-sm font-medium text-gray-700">{company.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.description}</p>

          {/* Services */}
          <div className="flex flex-wrap gap-2 mb-4">
            {company.services.slice(0, 3).map((service, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {service}
              </Badge>
            ))}
            {company.services.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{company.services.length - 3} más
              </Badge>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="size-4" />
              <span className="truncate">{company.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="size-4" />
              <span>{company.phone}</span>
            </div>
          </div>

          <Button className="w-full" variant="outline">
            Ver Detalles
          </Button>
        </div>
      </div>
    </Card>
  );
}