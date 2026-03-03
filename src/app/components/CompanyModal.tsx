import { X, MapPin, Phone, Mail, Globe, Star, Building2, ShoppingBag } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProductCatalog } from "./ProductCatalog";
import type { Company } from "./CompanyCard";

interface CompanyModalProps {
  company: Company | null;
  open: boolean;
  onClose: () => void;
}

export function CompanyModal({ company, open, onClose }: CompanyModalProps) {
  if (!company) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogTitle className="sr-only">{company.name}</DialogTitle>
        
        {/* Banner */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={company.banner}
            alt={company.name}
            className="w-full h-full object-cover"
          />
          {company.featured && (
            <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
              <Star className="size-3 mr-1" />
              Empresa Destacada
            </Badge>
          )}
        </div>

        {/* Logo */}
        <div className="relative px-8">
          <div className="absolute -top-16 left-8">
            <div className="size-32 rounded-xl bg-white shadow-xl p-3 border-4 border-white">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-20">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{company.name}</h2>
              <Badge className="text-sm">{company.category}</Badge>
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg">
              <Star className="size-5 fill-yellow-500 text-yellow-500" />
              <span className="text-xl font-semibold text-gray-900">{company.rating}</span>
              <span className="text-sm text-gray-600">/5.0</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Acerca de la Empresa</h3>
            <p className="text-gray-600 leading-relaxed">{company.description}</p>
          </div>

          {/* Tabs for Services and Products */}
          <Tabs defaultValue="services" className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="services">Servicios</TabsTrigger>
              <TabsTrigger value="products">
                <ShoppingBag className="size-4 mr-2" />
                Catálogo ({company.products?.length || 0})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="services" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {company.services.map((service, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {service}
                  </Badge>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="mt-4">
              <ProductCatalog products={company.products || []} />
            </TabsContent>
          </Tabs>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Información de Contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="size-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Ubicación</p>
                  <p className="text-sm text-gray-600">{company.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Phone className="size-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Teléfono</p>
                  <p className="text-sm text-gray-600">{company.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Mail className="size-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">{company.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Globe className="size-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Sitio Web</p>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {company.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button className="flex-1" asChild>
              <a href={`tel:${company.phone}`}>
                <Phone className="size-4 mr-2" />
                Llamar Ahora
              </a>
            </Button>
            <Button className="flex-1" variant="outline" asChild>
              <a href={`mailto:${company.email}`}>
                <Mail className="size-4 mr-2" />
                Enviar Email
              </a>
            </Button>
            <Button className="flex-1" variant="outline" asChild>
              <a href={company.website} target="_blank" rel="noopener noreferrer">
                <Globe className="size-4 mr-2" />
                Visitar Web
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}