import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Venezuela Codeando
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Transformamos ideas en{" "}
            <span className="text-primary">código</span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl font-medium text-primary font-heading tracking-wide">
            Ingeniería de software con ADN venezolano
          </p>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
            Somos expertos en desarrollo de aplicaciones escalables. 
            Combinamos talento técnico de clase mundial con la resiliencia 
            y creatividad que nos caracteriza.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              <Link href="#servicios">
                Explorar Servicios
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
              <Link href="#contacto">
                Contáctanos
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "50+", label: "Proyectos" },
              { value: "15+", label: "Clientes" },
              { value: "8+", label: "Años de Experiencia" },
              { value: "100%", label: "Compromiso" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.value}</span>
                <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
