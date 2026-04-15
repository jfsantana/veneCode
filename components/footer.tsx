import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicios: [
      { label: "Desarrollo Mobile", href: "#servicios" },
      { label: "Web de Alto Rendimiento", href: "#servicios" },
      { label: "Consultoría Cloud", href: "#servicios" },
      { label: "Staff Augmentation", href: "#servicios" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "#esencia" },
      { label: "Tech Stack", href: "#tech" },
      { label: "Contacto", href: "#contacto" },
    ],
    legal: [
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos de Servicio", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <footer id="contacto" className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="font-heading text-2xl font-bold text-foreground tracking-tight">Vene</span>
              <span className="font-heading text-2xl font-bold text-primary tracking-tight">Code</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Transformamos ideas en código. Ingeniería de software con ADN venezolano.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground uppercase tracking-widest">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground uppercase tracking-widest">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground uppercase tracking-widest">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hola@venecode.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hola@venecode.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Venezuela • Latinoamérica • Global
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} VeneCode. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
