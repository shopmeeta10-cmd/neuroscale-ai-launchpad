import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero hero-grid overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Especialistas em Automação IA
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Impulsione sua Empresa com{" "}
                <span className="text-gradient">Inteligência Artificial</span>{" "}
                de Verdade
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Automatizamos, analisamos e escalamos negócios que buscam mais eficiência, 
                produtividade e crescimento com tecnologia aplicada ao dia a dia empresarial.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Redução de Tarefas Manuais</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3x</div>
                <div className="text-sm text-muted-foreground">Aumento de Produtividade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Empresas Automatizadas</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary hover-glow transition-spring group">
                Automatizar Meu Negócio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 hover:bg-primary/10 transition-smooth"
                onClick={() => window.open('https://wa.me/5586994479770?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20queria%20conversar%20sobre%20IA%20para%20meu%20neg%C3%B3cio%21', '_blank')}
              >
                <Bot className="w-5 h-5 mr-2" />
                Vamos Conversar
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="NeuroScale AI Automation" 
                className="w-full h-auto rounded-2xl shadow-card animate-float"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-card border border-border animate-float" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">ROI +300%</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-card border border-border animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">100% Automatizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;