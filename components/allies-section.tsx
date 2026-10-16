import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const allies = [
  {
    name: "NFC Connect Vzla",
    url: "https://nfcvzla.venecode.com/",
    logo: "/NfcConnets.png",
    description: "Tecnología NFC y soluciones digitales inteligentes conectando negocios en Venezuela.",
  },
]

export function AlliesSection() {
  return (
    <section id="aliados" className="py-20 md:py-32 bg-secondary/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            <Handshake className="w-4 h-4" />
            <span>Nuestros Aliados</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Empresas que Confían e Innovan con Nosotros
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Alianzas estratégicas que potencian el ecosistema tecnológico y digital.
          </p>
        </div>

        {/* Allies Cards */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {allies.map((ally) => (
            <Link
              key={ally.name}
              href={ally.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full sm:w-96 focus:outline-none"
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="relative w-48 h-24 mb-6 flex items-center justify-center p-2 rounded-lg bg-background/50 group-hover:bg-background transition-colors">
                    <Image
                      src={ally.logo}
                      alt={`Logo de ${ally.name}`}
                      width={180}
                      height={80}
                      className="object-contain max-h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    <span>{ally.name}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {ally.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
