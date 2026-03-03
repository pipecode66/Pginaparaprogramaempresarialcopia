import { ShoppingBag, DollarSign } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import type { Product } from "./CompanyCard";

interface ProductCatalogProps {
  products: Product[];
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <ShoppingBag className="size-12 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-500">Esta empresa aún no ha agregado productos a su catálogo</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-square relative overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
            <Badge variant="secondary" className="text-base font-semibold">
              <DollarSign className="size-4 mr-1" />
              {product.price}
            </Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
