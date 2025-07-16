import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Linkedin, 
  Instagram,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Casos de Sucesso", href: "#cases" }
  ];

  const services = [
    "Automação para Clínicas",
    "Soluções para Advogados", 
    "IA para Imobiliárias",
    "Consultoria Personalizada"
  ];

  return (
    <footer className="bg-gradient-to-br from-background to-muted/20 border-t border-border/50">
      <div className="container mx-auto container-padding">
        {/* CTA Section */}
        <div className="py-16 text-center border-b border-border/30">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para automatizar seu{" "}
              <span className="text-gradient">negócio?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Converse com nossos especialistas e descubra como a IA pode 
              transformar sua empresa em poucos dias.
            </p>
            
            <Button size="lg" className="gradient-primary hover-glow transition-spring group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com WhatsApp
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">NeuroScale</span>
            </div>
            
            <p className="text-muted-foreground">
              Especialistas em automação e inteligência artificial para negócios. 
              Transformamos processos manuais em sistemas eficientes.
            </p>
            
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(86) 9 9447-9770</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">contato@neuroscale.com.br</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground">
                  Teresina, Piauí<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 NeuroScale. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;