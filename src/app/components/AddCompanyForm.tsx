import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { X, Plus, Upload, Image as ImageIcon } from "lucide-react";
import type { Company, Product } from "./CompanyCard";

interface AddCompanyFormProps {
  open: boolean;
  onClose: () => void;
  onAddCompany: (company: Omit<Company, 'id'>) => void;
}

const categories = [
  "Tecnología",
  "Gastronomía",
  "Construcción",
  "Salud",
  "Moda",
  "Automotriz",
  "Finanzas",
  "Educación",
  "Agricultura",
  "Logística",
  "Imprenta",
  "Deportes",
];

export function AddCompanyForm({ open, onClose, onAddCompany }: AddCompanyFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    banner: "",
    category: "",
    description: "",
    location: "",
    phone: "",
    email: "",
    website: "",
    rating: 0,
    featured: false,
  });
  
  const [services, setServices] = useState<string[]>([]);
  const [serviceInput, setServiceInput] = useState("");
  const [products, setProducts] = useState<Omit<Product, 'id'>[]>([]);
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleAddService = () => {
    if (serviceInput.trim() && !services.includes(serviceInput.trim())) {
      setServices([...services, serviceInput.trim()]);
      setServiceInput("");
    }
  };

  const handleRemoveService = (service: string) => {
    setServices(services.filter(s => s !== service));
  };

  const handleAddProduct = () => {
    if (productForm.name && productForm.description && productForm.price) {
      setProducts([
        ...products,
        {
          ...productForm,
          image: productForm.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        },
      ]);
      setProductForm({
        name: "",
        description: "",
        price: "",
        image: "",
      });
    }
  };

  const handleRemoveProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.category || !formData.description) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    onAddCompany({
      ...formData,
      services,
      products,
      logo: formData.logo || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=3b82f6&color=fff&size=200`,
      banner: formData.banner || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1080",
    });

    // Reset form
    setFormData({
      name: "",
      logo: "",
      banner: "",
      category: "",
      description: "",
      location: "",
      phone: "",
      email: "",
      website: "",
      rating: 0,
      featured: false,
    });
    setServices([]);
    setProducts([]);
    setProductForm({
      name: "",
      description: "",
      price: "",
      image: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Agregar Nueva Empresa</DialogTitle>
          <DialogDescription>
            Completa la información de la empresa para añadirla al directorio
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Información Básica</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre de la Empresa *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej: TechVision Solutions"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Categoría *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Descripción *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe los servicios y especialidades de la empresa"
                rows={4}
                required
              />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Servicios y Productos</h3>
            
            <div className="flex gap-2">
              <Input
                value={serviceInput}
                onChange={(e) => setServiceInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddService())}
                placeholder="Ej: Desarrollo de Software"
              />
              <Button type="button" onClick={handleAddService}>
                <Plus className="size-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <Badge key={service} variant="secondary" className="pl-3 pr-1 py-1">
                  {service}
                  <button
                    type="button"
                    onClick={() => handleRemoveService(service)}
                    className="ml-2 hover:text-red-600"
                  >
                    <X className="size-3" />
                  </button>
                </Badge>
              ))}
            </div>

            {/* Products */}
            <div className="mt-6 border-t pt-4">
              <h4 className="font-semibold text-md mb-3 flex items-center gap-2">
                <ImageIcon className="size-5" />
                Catálogo de Productos
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div>
                  <Label htmlFor="productName">Nombre del Producto</Label>
                  <Input
                    id="productName"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    placeholder="Ej: Laptop HP"
                  />
                </div>

                <div>
                  <Label htmlFor="productPrice">Precio</Label>
                  <Input
                    id="productPrice"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    placeholder="Ej: $1,200"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="productDescription">Descripción</Label>
                  <Textarea
                    id="productDescription"
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    placeholder="Describe las características del producto"
                    rows={2}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="productImage">URL de Imagen (opcional)</Label>
                  <Input
                    id="productImage"
                    value={productForm.image}
                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </div>

              <Button 
                type="button" 
                onClick={handleAddProduct} 
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Plus className="size-4 mr-2" />
                Agregar Producto al Catálogo
              </Button>

              {products.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-gray-700">
                    Productos agregados: {products.length}
                  </p>
                  <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
                    {products.map((product, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-2 bg-gray-50 rounded border"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-gray-600">{product.price}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveProduct(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Información de Contacto</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Ubicación</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Ej: Av. Principal 123, Ciudad"
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ej: +1 (555) 123-4567"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contacto@empresa.com"
                />
              </div>

              <div>
                <Label htmlFor="website">Sitio Web</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://www.empresa.com"
                />
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Imágenes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="logo">URL del Logo (opcional)</Label>
                <Input
                  id="logo"
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  placeholder="https://..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Si no se proporciona, se generará automáticamente
                </p>
              </div>

              <div>
                <Label htmlFor="banner">URL del Banner (opcional)</Label>
                <Input
                  id="banner"
                  value={formData.banner}
                  onChange={(e) => setFormData({ ...formData, banner: e.target.value })}
                  placeholder="https://..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Imagen de portada de la empresa
                </p>
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Opciones Adicionales</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rating">Calificación (0-5)</Label>
                <Input
                  id="rating"
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) || 0 })}
                />
              </div>

              <div className="flex items-center gap-2 pt-8">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="size-4"
                />
                <Label htmlFor="featured" className="cursor-pointer">
                  Marcar como empresa destacada
                </Label>
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 justify-end pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              Agregar Empresa
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}