import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import * as kv from './kv_store.tsx'

const app = new Hono()

app.use('*', logger(console.log))
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

// Helper function to generate unique ID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// GET all companies
app.get('/make-server-3522b49d/companies', async (c) => {
  try {
    const companies = await kv.getByPrefix('company:');
    console.log('Retrieved companies:', companies);
    return c.json({ companies: companies || [] });
  } catch (error) {
    console.log('Error retrieving companies:', error);
    return c.json({ error: 'Failed to retrieve companies', details: String(error) }, 500);
  }
});

// GET single company by ID
app.get('/make-server-3522b49d/companies/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const company = await kv.get(`company:${id}`);
    
    if (!company) {
      return c.json({ error: 'Company not found' }, 404);
    }
    
    return c.json({ company });
  } catch (error) {
    console.log('Error retrieving company:', error);
    return c.json({ error: 'Failed to retrieve company', details: String(error) }, 500);
  }
});

// POST create new company
app.post('/make-server-3522b49d/companies', async (c) => {
  try {
    const body = await c.req.json();
    const id = generateId();
    
    // Add IDs to products if they exist
    const products = body.products?.map((product: any) => ({
      ...product,
      id: generateId(),
    })) || [];
    
    const company = {
      id,
      name: body.name,
      logo: body.logo,
      banner: body.banner,
      category: body.category,
      services: body.services || [],
      description: body.description,
      location: body.location,
      phone: body.phone,
      email: body.email,
      website: body.website,
      rating: body.rating || 0,
      featured: body.featured || false,
      products,
      createdAt: new Date().toISOString(),
    };
    
    await kv.set(`company:${id}`, company);
    console.log('Created new company:', company);
    
    return c.json({ company }, 201);
  } catch (error) {
    console.log('Error creating company:', error);
    return c.json({ error: 'Failed to create company', details: String(error) }, 500);
  }
});

// PUT update company
app.put('/make-server-3522b49d/companies/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    
    const existing = await kv.get(`company:${id}`);
    if (!existing) {
      return c.json({ error: 'Company not found' }, 404);
    }
    
    const updated = {
      ...existing,
      ...body,
      id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(`company:${id}`, updated);
    console.log('Updated company:', updated);
    
    return c.json({ company: updated });
  } catch (error) {
    console.log('Error updating company:', error);
    return c.json({ error: 'Failed to update company', details: String(error) }, 500);
  }
});

// DELETE company
app.delete('/make-server-3522b49d/companies/:id', async (c) => {
  try {
    const id = c.req.param('id');
    
    const existing = await kv.get(`company:${id}`);
    if (!existing) {
      return c.json({ error: 'Company not found' }, 404);
    }
    
    await kv.del(`company:${id}`);
    console.log('Deleted company:', id);
    
    return c.json({ message: 'Company deleted successfully' });
  } catch (error) {
    console.log('Error deleting company:', error);
    return c.json({ error: 'Failed to delete company', details: String(error) }, 500);
  }
});

// Seed initial companies
app.post('/make-server-3522b49d/seed', async (c) => {
  try {
    const initialCompanies = [
      {
        name: "TechVision Solutions",
        logo: "https://ui-avatars.com/api/?name=TechVision&background=3b82f6&color=fff&size=200",
        banner: "https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3NzE5MjY4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Tecnología",
        services: ["Desarrollo de Software", "Consultoría IT", "Cloud Computing", "Ciberseguridad", "IA y Machine Learning"],
        description: "Empresa líder en soluciones tecnológicas innovadoras. Ofrecemos desarrollo de software a medida, implementación de sistemas en la nube y consultoría especializada para transformación digital.",
        location: "Av. Tecnológica 1234, Ciudad Empresarial",
        phone: "+1 (555) 123-4567",
        email: "contacto@techvision.com",
        website: "https://www.techvision.com",
        rating: 4.8,
        featured: true,
        products: [
          {
            id: generateId(),
            name: "Laptop Empresarial Pro",
            description: "Computadora portátil de alto rendimiento para empresas con procesador Intel i7 y 16GB RAM",
            price: "$1,299",
            image: "https://images.unsplash.com/photo-1736616980443-537d3af09915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Smartphone Business Elite",
            description: "Teléfono inteligente con seguridad empresarial avanzada y batería de larga duración",
            price: "$899",
            image: "https://images.unsplash.com/photo-1676173646307-d050e097d181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Workstation Desktop Pro",
            description: "Estación de trabajo de alto rendimiento con procesador Intel Xeon y 32GB RAM para diseño y desarrollo",
            price: "$2,499",
            image: "https://images.unsplash.com/photo-1618339220157-daa2cd9ade56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Tablet Empresarial 12\"",
            description: "Tablet de 12 pulgadas con lápiz digital incluido, ideal para presentaciones y trabajo móvil",
            price: "$749",
            image: "https://images.unsplash.com/photo-1769603891182-0316b20ce2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Audífonos Inalámbricos Premium",
            description: "Audífonos con cancelación de ruido activa y micrófono de alta calidad para conferencias",
            price: "$299",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
        ],
      },
      {
        name: "Sabores del Valle",
        logo: "https://ui-avatars.com/api/?name=Sabores&background=ef4444&color=fff&size=200",
        banner: "https://images.unsplash.com/photo-1699671441371-568013519f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTk2NDQwNXww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Gastronomía",
        services: ["Restaurante", "Catering", "Eventos Corporativos", "Delivery", "Menús Ejecutivos"],
        description: "Restaurante con más de 15 años de experiencia en gastronomía internacional. Ofrecemos servicios de catering para eventos empresariales y menús ejecutivos personalizados.",
        location: "Calle Gourmet 567, Centro Comercial",
        phone: "+1 (555) 234-5678",
        email: "reservas@saboresvalle.com",
        website: "https://www.saboresvalle.com",
        rating: 4.9,
        featured: true,
        products: [
          {
            id: generateId(),
            name: "Plato Gourmet Especial",
            description: "Exquisito plato de la casa con ingredientes frescos y presentación de chef",
            price: "$45",
            image: "https://images.unsplash.com/photo-1676300185004-c31cf62d3bc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Pasta Artesanal Premium",
            description: "Pasta fresca hecha a mano con salsa de la casa y vegetales orgánicos",
            price: "$32",
            image: "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Hamburguesa Premium Gourmet",
            description: "Burger de carne angus con queso cheddar, vegetales frescos y salsa especial de la casa",
            price: "$28",
            image: "https://images.unsplash.com/photo-1632898657999-ae6920976661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Postre Torta Especial",
            description: "Deliciosa torta de chocolate con relleno de frutos rojos y decoración artesanal",
            price: "$18",
            image: "https://images.unsplash.com/photo-1759146233677-292a2f1a2236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Ensalada Fresca del Jardín",
            description: "Ensalada con verduras orgánicas, quinoa, aguacate y aderezo de la casa",
            price: "$22",
            image: "https://images.unsplash.com/photo-1654458804670-2f4f26ab3154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Café Specialty Cappuccino",
            description: "Cappuccino preparado con granos premium y arte latte personalizado",
            price: "$8",
            image: "https://images.unsplash.com/photo-1618263616142-7b8815503d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Pizza Artesanal Italiana",
            description: "Pizza napolitana con masa madre, salsa de tomate San Marzano y mozzarella di bufala",
            price: "$35",
            image: "https://images.unsplash.com/photo-1677030002034-e1d081abfb97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
        ],
      },
      {
        name: "Constructora Moderna",
        logo: "https://ui-avatars.com/api/?name=Constructora+Moderna&background=f59e0b&color=fff&size=200",
        banner: "https://images.unsplash.com/photo-1614366324821-cfa7713a5163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGNvbXBhbnl8ZW58MXx8fHwxNzcxOTEzNDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Construcción",
        services: ["Construcción Civil", "Remodelaciones", "Diseño Arquitectónico", "Gestión de Proyectos", "Mantenimiento"],
        description: "Empresa constructora con proyectos residenciales y comerciales. Especialistas en construcción sustentable y diseño arquitectónico innovador con certificaciones internacionales.",
        location: "Zona Industrial 890, Sector Norte",
        phone: "+1 (555) 345-6789",
        email: "proyectos@constructoramoderna.com",
        website: "https://www.constructoramoderna.com",
        rating: 4.7,
        featured: false,
        products: [
          {
            id: generateId(),
            name: "Kit Herramientas Profesional",
            description: "Set completo de herramientas de construcción de alta calidad con maletín incluido",
            price: "$450",
            image: "https://images.unsplash.com/photo-1756402664856-91a90f90b70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Taladro Profesional Inalámbrico",
            description: "Taladro de impacto con batería de litio, torque ajustable y maletín de accesorios",
            price: "$280",
            image: "https://images.unsplash.com/photo-1770763233593-74dfd0da7bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Casco de Seguridad Certificado",
            description: "Casco de protección industrial con certificación ANSI, ajustable y ventilado",
            price: "$45",
            image: "https://images.unsplash.com/photo-1760008866051-04e2cbbf6367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Cinta Métrica Profesional 10m",
            description: "Cinta métrica láser con medición digital, precisión de ±2mm y memoria de medidas",
            price: "$95",
            image: "https://images.unsplash.com/photo-1703756291638-b1774ae3c186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
        ],
      },
      {
        name: "Centro Médico Integral",
        logo: "https://ui-avatars.com/api/?name=Centro+Medico&background=10b981&color=fff&size=200",
        banner: "https://images.unsplash.com/photo-1766299892549-b56b257d1ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNsaW5pY3xlbnwxfHx8fDE3NzE5NDcxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Salud",
        services: ["Medicina General", "Odontología", "Laboratorio Clínico", "Medicina Ocupacional", "Urgencias 24/7"],
        description: "Centro de salud con atención médica integral y tecnología de última generación. Contamos con especialistas certificados y servicios de urgencias disponibles las 24 horas.",
        location: "Av. Salud 234, Torre Médica",
        phone: "+1 (555) 456-7890",
        email: "info@centromedicointegral.com",
        website: "https://www.centromedicointegral.com",
        rating: 4.9,
        featured: true,
        products: [
          {
            id: generateId(),
            name: "Paquete Chequeo Médico Completo",
            description: "Examen médico integral con análisis de sangre, rayos X y consulta especializada",
            price: "$180",
            image: "https://images.unsplash.com/photo-1599814516324-66aa0bf16425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Estetoscopio Profesional Cardiology",
            description: "Estetoscopio de alta precisión con membrana doble para diagnóstico cardiovascular",
            price: "$320",
            image: "https://images.unsplash.com/photo-1655913197756-fbcf99b273cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Kit Dental Básico",
            description: "Kit de limpieza dental profesional con cepillo eléctrico e irrigador bucal",
            price: "$150",
            image: "https://images.unsplash.com/photo-1769559893692-c6d0623bf8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
          {
            id: generateId(),
            name: "Monitor de Presión Arterial Digital",
            description: "Tensiómetro digital automático con memoria para 2 usuarios y detección de arritmias",
            price: "$85",
            image: "https://images.unsplash.com/photo-1649877510851-10effb9a59b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          },
        ],
      },
    ];

    for (const companyData of initialCompanies) {
      const id = generateId();
      const company = {
        id,
        ...companyData,
        createdAt: new Date().toISOString(),
      };
      await kv.set(`company:${id}`, company);
    }

    console.log('Seeded initial companies');
    return c.json({ message: 'Database seeded successfully', count: initialCompanies.length });
  } catch (error) {
    console.log('Error seeding database:', error);
    return c.json({ error: 'Failed to seed database', details: String(error) }, 500);
  }
});

Deno.serve(app.fetch)