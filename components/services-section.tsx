import { Smartphone, Globe, Cloud, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Smartphone,
    title: "Desarrollo Mobile",
    description: "Aplicaciones nativas y multiplataforma con React Native, Flutter e iOS/Android nativo. Experiencias móviles fluidas y de alto rendimiento.",
  },
  {
    icon: Globe,
    title: "Web de Alto Rendimiento",
    description: "Aplicaciones web modernas con Next.js, React y tecnologías de vanguardia. Optimizadas para velocidad, SEO y escalabilidad.",
  },
  {
    icon: Cloud,
    title: "Consultoría Cloud",
    description: "Arquitecturas cloud-native en AWS, Azure y GCP. Migración, optimización de costos y diseño de infraestructura resiliente.",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Equipos de desarrollo especializados que se integran a tu organización. Talento técnico venezolano de primer nivel.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Soluciones tecnológicas integrales para impulsar la transformación digital de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-heading text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
