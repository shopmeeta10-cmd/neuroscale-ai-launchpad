import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Stethoscope, 
  Scale, 
  Building, 
  ArrowRight, 
  CheckCircle, 
  Zap,
  Bot,
  BarChart3
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Clínicas e Consultórios",
      description: "Automatize agendamentos, prontuários e atendimento ao paciente",
      features: [
        "Agendamento inteligente via WhatsApp",
        "Prontuário eletrônico automatizado",
        "Lembretes automáticos de consultas",
        "Análise de satisfação do paciente",
        "Gestão de estoque de medicamentos"
      ],
      gradient: "from-blue-600/20 to-cyan-600/20",
      accent: "text-blue-400"
    },
    {
      icon: Scale,
      title: "Escritórios de Advocacia",
      description: "Otimize processos jurídicos e atendimento ao cliente",
      features: [
        "Triagem automática de novos casos",
        "Análise de documentos com IA",
        "Acompanhamento de prazos processuais",
        "Geração automática de petições",
        "Dashboard de produtividade da equipe"
      ],
      gradient: "from-purple-600/20 to-violet-600/20",
      accent: "text-purple-400"
    },
    {
      icon: Building,
      title: "Imobiliárias",
      description: "Acelere vendas e locações com automação inteligente",
      features: [
        "Qualificação automática de leads",
        "Tours virtuais com IA",
        "Análise de mercado em tempo real",
        "Negociação assistida por chatbot",
        "Relatórios de performance automatizados"
      ],
      gradient: "from-green-600/20 to-emerald-600/20",
      accent: "text-green-400"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Bot className="w-4 h-4 mr-2" />
            Soluções Especializadas
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Automações IA para{" "}
            <span className="text-gradient">Cada Segmento</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos soluções personalizadas que se adaptam às necessidades específicas 
            do seu setor, gerando resultados mensuráveis desde o primeiro dia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:border-primary/30 transition-smooth group hover-glow"
            >
              <CardHeader className="space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-spring`}>
                  <service.icon className={`w-8 h-8 ${service.accent}`} />
                </div>
                
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:bg-primary/10 group"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <BarChart3 className="w-5 h-5" />
              Resultados Comprovados
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold">
              Não encontrou seu segmento? Temos soluções para qualquer área!
            </h3>
            
            <p className="text-muted-foreground">
              Nossa expertise em IA permite criar automações personalizadas para 
              qualquer tipo de negócio. Vamos conversar sobre suas necessidades específicas.
            </p>
            
            <Button 
              size="lg" 
              className="gradient-primary hover-glow transition-spring"
              onClick={() => window.open('https://wa.me/5586994479770?text=Quero%20conversar%20sobre%20solu%C3%A7%C3%A3o%20personalizada', '_blank')}
            >
              <Zap className="w-5 h-5 mr-2" />
              Criar Solução Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;