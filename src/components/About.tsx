import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield,
  ArrowRight
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Atendimento estratégico",
      description: "Linguagem simples e sem enrolação. Ajudamos você a entender e aplicar tecnologia no seu negócio com comunicação direta e eficaz."
    },
    {
      icon: Target,
      title: "Foco em resultados práticos",
      description: "Cada automação ou estratégia aplicada tem um único objetivo: gerar impacto real na sua operação e nos seus números."
    },
    {
      icon: Clock,
      title: "Implementação rápida",
      description: "Colocamos suas automações no ar em dias, não meses. Tecnologia que funciona desde o primeiro momento."
    },
    {
      icon: Shield,
      title: "Segurança e confiabilidade",
      description: "Todas as soluções seguem as melhores práticas de segurança, garantindo proteção total dos seus dados."
    }
  ];

  const stats = [
    { number: "95%", label: "Redução de tarefas manuais" },
    { number: "3x", label: "Aumento de produtividade" },
    { number: "50+", label: "Empresas automatizadas" },
    { number: "24/7", label: "Suporte especializado" }
  ];

  return (
    <section className="py-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Sobre a NeuroScale
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tecnologia que Elimina{" "}
            <span className="text-gradient">Tarefas Manuais</span>{" "}
            e Acelera Resultados
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em automação, análise de dados e inteligência artificial 
            aplicada ao dia a dia empresarial. Criamos soluções personalizadas que reduzem 
            custos operacionais e aumentam sua performance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:border-primary/30 transition-smooth p-6 hover-glow group"
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-2xl mx-auto space-y-6">
            <TrendingUp className="w-16 h-16 text-primary mx-auto" />
            
            <h3 className="text-2xl md:text-3xl font-bold">
              Pronto para escalar seu negócio com IA?
            </h3>
            
            <p className="text-muted-foreground text-lg">
              Nosso compromisso é escalar com excelência e eficiência. 
              Transformamos processos engessados em sistemas que realmente funcionam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary hover-glow transition-spring group">
                Conhecer nossa abordagem
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;