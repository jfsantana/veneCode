import { Code2, Heart, Zap } from "lucide-react"

export function EssenceSection() {
  return (
    <section id="esencia" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Quiénes somos
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
              Nuestra Esencia
            </h2>
            
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-foreground">VeneCode</span> nace de la fusión de dos palabras: 
                <span className="text-primary font-medium"> Venezuela</span> y 
                <span className="text-primary font-medium"> Codeando</span>.
              </p>
              <p>
                Somos una consultora de software fundada por profesionales venezolanos que creen 
                firmemente en el talento técnico de nuestra región. Cada línea de código que escribimos 
                lleva el sello de la resiliencia, creatividad e innovación que nos caracteriza.
              </p>
              <p>
                Nuestra misión es transformar ideas en soluciones tecnológicas de clase mundial, 
                demostrando que el talento latinoamericano puede competir y destacar en cualquier 
                escenario global.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Code2,
                title: "Excelencia Técnica",
                description: "Código limpio, arquitecturas robustas y las mejores prácticas de la industria en cada proyecto.",
              },
              {
                icon: Heart,
                title: "Pasión por el Detalle",
                description: "Cada pixel, cada interacción y cada función está diseñada pensando en la experiencia del usuario.",
              },
              {
                icon: Zap,
                title: "Agilidad y Adaptabilidad",
                description: "Metodologías ágiles que nos permiten responder rápidamente a los cambios y entregar valor constante.",
              },
            ].map((value) => (
              <div 
                key={value.title} 
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
