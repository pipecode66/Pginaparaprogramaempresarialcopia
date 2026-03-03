import { useState, useMemo, useEffect } from "react";
import { Search, Building2, Filter, Star, TrendingUp, Plus } from "lucide-react";
import { CompanyCard } from "./components/CompanyCard";
import { CompanyModal } from "./components/CompanyModal";
import { AddCompanyForm } from "./components/AddCompanyForm";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import type { Company } from "./components/CompanyCard";
import { projectId, publicAnonKey } from '/utils/supabase/info';

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch companies from server
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3522b49d/companies`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch companies: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Fetched companies:', data);
      
      // If no companies, seed the database
      if (!data.companies || data.companies.length === 0) {
        await seedDatabase();
        return;
      }
      
      setCompanies(data.companies);
    } catch (err) {
      console.error('Error fetching companies:', err);
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const seedDatabase = async () => {
    try {
      console.log('Seeding database...');
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3522b49d/seed`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to seed database: ${response.statusText}`);
      }

      // Fetch companies again after seeding
      await fetchCompanies();
    } catch (err) {
      console.error('Error seeding database:', err);
      setError(String(err));
    }
  };

  const handleAddCompany = async (newCompany: Omit<Company, 'id'>) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3522b49d/companies`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCompany),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to add company: ${response.statusText}`);
      }

      // Refresh companies list
      await fetchCompanies();
      setShowAddForm(false);
    } catch (err) {
      console.error('Error adding company:', err);
      alert('Error al agregar empresa: ' + String(err));
    }
  };

  const categories = useMemo(() => {
    return Array.from(new Set(companies.map(c => c.category))).sort();
  }, [companies]);

  const filteredCompanies = useMemo(() => {
    return companies.filter(company => {
      const matchesSearch = 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || company.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, companies]);

  const featuredCompanies = companies.filter(c => c.featured);
  const totalCompanies = companies.length;

  const handleCompanyClick = (company: Company) => {
    setSelectedCompany(company);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedCompany(null), 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="size-12" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Programa de Integración Empresarial
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Plataforma Digital de Conexión y Dinamización Comercial
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="flex items-center gap-2">
                  <Building2 className="size-5" />
                  <div>
                    <p className="text-3xl font-bold">{totalCompanies}+</p>
                    <p className="text-sm text-blue-100">Empresas Registradas</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="flex items-center gap-2">
                  <Star className="size-5" />
                  <div>
                    <p className="text-3xl font-bold">{featuredCompanies.length}</p>
                    <p className="text-sm text-blue-100">Empresas Destacadas</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="size-5" />
                  <div>
                    <p className="text-3xl font-bold">{categories.length}</p>
                    <p className="text-sm text-blue-100">Categorías</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar empresas, servicios, productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-64 h-12">
                    <Filter className="size-4 mr-2" />
                    <SelectValue placeholder="Todas las categorías" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Add Company Button */}
        <div className="mb-8 flex justify-end">
          <Button onClick={() => setShowAddForm(true)} size="lg">
            <Plus className="size-4 mr-2" />
            Agregar Empresa
          </Button>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "all" ? "Todas las Empresas" : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredCompanies.length} empresa{filteredCompanies.length !== 1 ? "s" : ""} encontrada{filteredCompanies.length !== 1 ? "s" : ""}
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="hidden lg:flex gap-2 flex-wrap justify-end max-w-2xl">
            <Badge
              variant={selectedCategory === "all" ? "default" : "outline"}
              className="cursor-pointer hover:bg-blue-100 transition-colors"
              onClick={() => setSelectedCategory("all")}
            >
              Todas
            </Badge>
            {categories.slice(0, 5).map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-blue-100 transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Companies Grid */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map(company => (
              <CompanyCard
                key={company.id}
                company={company}
                onClick={() => handleCompanyClick(company)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Building2 className="size-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No se encontraron empresas
            </h3>
            <p className="text-gray-500 mb-6">
              Intenta ajustar los filtros o realizar una búsqueda diferente
            </p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}>
              Limpiar Filtros
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="size-6" />
                <h3 className="font-bold text-lg">PIE</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Programa de Integración Empresarial - Conectando empresas, generando oportunidades.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categorías Populares</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {categories.slice(0, 5).map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => setSelectedCategory(category)}
                      className="hover:text-white transition-colors"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@pie-empresarial.com</li>
                <li>Teléfono: +1 (555) 000-0000</li>
                <li>Horario: Lun - Vie, 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Programa de Integración Empresarial. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Company Modal */}
      <CompanyModal
        company={selectedCompany}
        open={showModal}
        onClose={handleCloseModal}
      />

      {/* Add Company Form */}
      <AddCompanyForm
        open={showAddForm}
        onClose={() => setShowAddForm(false)}
        onAddCompany={handleAddCompany}
      />
    </div>
  );
}