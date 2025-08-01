import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/e6b148a9-8e5a-4e2b-a433-41a59bc8819b.png" alt="NeuroScale" className="w-8 h-8" />
            <span className="text-xl font-bold">NeuroScale</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => window.open('https://wa.me/5586994479770?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20queria%20conversar%20sobre%20IA%20para%20meu%20neg%C3%B3cio%21', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Vamos Conversar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-smooth"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="gradient-primary mt-4"
                onClick={() => window.open('https://wa.me/5586994479770?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20queria%20conversar%20sobre%20IA%20para%20meu%20neg%C3%B3cio%21', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Vamos Conversar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;