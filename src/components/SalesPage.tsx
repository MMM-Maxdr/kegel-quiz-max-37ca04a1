import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Shield, Star, ChevronDown, ChevronUp } from 'lucide-react';

interface SalesPageProps {
  onPurchase: () => void;
}

const SalesPage: React.FC<SalesPageProps> = ({ onPurchase }) => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes
  const [selectedPlan, setSelectedPlan] = useState('vitalicio');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const plans = [
    {
      id: '4weeks',
      duration: '4 semanas',
      price: 'R$ 0,71',
      priceLabel: 'por dia',
      totalPrice: 'R$ 19,90',
      originalPrice: 'R$ 39,90',
      recommended: false,
      savings: '50%'
    },
    {
      id: '12weeks',
      duration: '12 semanas',
      price: 'R$ 0,30',
      priceLabel: 'por dia',
      totalPrice: 'R$ 24,90',
      originalPrice: 'R$ 49,90',
      recommended: false,
      savings: '50%'
    },
    {
      id: 'vitalicio',
      duration: 'Plano Completo Vitalício',
      price: 'R$ 0,08',
      priceLabel: 'por dia',
      totalPrice: 'R$ 29,90',
      originalPrice: 'R$ 99,90',
      recommended: true,
      savings: '70%'
    }
  ];

  const faqs = [
    {
      question: 'Como funciona o programa?',
      answer: 'Nosso programa combina exercícios específicos do assoalho pélvico com técnicas de mindfulness e controle respiratório.'
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'A maioria dos usuários relatam melhorias significativas nas primeiras 2-4 semanas de uso consistente.'
    },
    {
      question: 'É seguro?',
      answer: 'Sim, todos os exercícios são baseados em evidências científicas e aprovados por profissionais de saúde.'
    },
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento através do seu painel de usuário.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Fixed Header with Timer */}
      <div className="fixed top-0 left-0 right-0 bg-[#FF6F00] p-4 z-50">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <span className="font-semibold">O desconto expira em: {formatTime(timeLeft)}</span>
          <Button 
            onClick={onPurchase}
            className="bg-white text-[#FF6F00] hover:bg-gray-100 font-bold px-4 py-1 rounded"
          >
            OBTER -50%
          </Button>
        </div>
      </div>

      <div className="pt-20 px-6 pb-6">
        <div className="max-w-md mx-auto">
          {/* Comparison Section */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card className="bg-[#2C2C2E] border-none p-4 text-center">
              <div className="text-4xl mb-2">😩</div>
              <h3 className="font-semibold mb-2">Agora</h3>
              <ul className="text-sm text-[#AEAEB2] space-y-1">
                <li>Desempenho insatisfatório</li>
                <li>Baixa autoconfiança</li>
                <li>Ansiedade sexual</li>
              </ul>
            </Card>
            <Card className="bg-[#FF6F00] border-none p-4 text-center">
              <div className="text-4xl mb-2">💪</div>
              <h3 className="font-semibold mb-2">Meta</h3>
              <ul className="text-sm space-y-1">
                <li>Performance melhorada</li>
                <li>Confiança elevada</li>
                <li>Satisfação plena</li>
              </ul>
            </Card>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl font-bold text-center mb-6">
            Aqui está o seu Plano Pessoal para impulsionar seu desempenho sexual
          </h1>

          {/* Progress Chart */}
          <Card className="bg-[#2C2C2E] border-none p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Nível de vida íntima</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((week) => (
                <div key={week} className="flex items-center gap-3">
                  <span className="text-sm w-16">Semana {week}</span>
                  <div className="flex-1 bg-[#1E1E1E] rounded-full h-2">
                    <div 
                      className="bg-[#FF6F00] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${week * 25}%` }}
                    />
                  </div>
                  <span className="text-sm text-[#FF6F00]">{week * 25}%</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Plan Selection */}
          <div className="space-y-3 mb-6">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`border-2 p-4 cursor-pointer transition-all duration-200 ${
                  plan.recommended 
                    ? 'border-2 border-[#FFD700] bg-gradient-to-r from-[#FFD700] from-0% via-[#FF6F00] via-50% to-[#FFD700] to-100% bg-opacity-20 shadow-lg shadow-[#FFD700]/20'
                    : selectedPlan === plan.id
                    ? 'border-[#FF6F00] bg-[#FF6F00] bg-opacity-10'
                    : 'border-[#2C2C2E] bg-[#2C2C2E]'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{plan.duration}</h3>
                      {plan.recommended && (
                        <span className="bg-[#FFD700] text-[#1E1E1E] text-xs px-2 py-1 rounded-full font-bold">
                          RECOMENDADO
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-2xl font-bold ${plan.recommended ? 'text-[#1E1E1E]' : 'text-[#FF6F00]'}`}>
                          {plan.price}
                        </span>
                        <span className={`text-sm ${plan.recommended ? 'text-[#1E1E1E]' : 'text-[#AEAEB2]'}`}>
                          {plan.priceLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#AEAEB2]">Total: {plan.totalPrice}</span>
                        <span className="text-xs text-[#AEAEB2] line-through">{plan.originalPrice}</span>
                        <span className="text-xs text-green-400">-{plan.savings}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === plan.id ? 'border-[#FF6F00] bg-[#FF6F00]' : 'border-[#AEAEB2]'
                  }`}>
                    {selectedPlan === plan.id && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => window.open('https://payt.site/mNCD6Qo', '_blank')}
            className="w-full py-4 bg-[#FF6F00] hover:bg-[#E55A00] text-white font-bold text-lg rounded-xl mb-6"
          >
            OBTER MEU PLANO
          </Button>

          {/* Security & Payment */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-[#FF6F00]" />
              <span className="text-sm">Pagamento 100% Seguro</span>
            </div>
            <p className="text-xs text-[#AEAEB2]">
              Aceitamos todos os principais cartões de crédito e PIX
            </p>
          </div>

          {/* Social Proof */}
          <Card className="bg-[#2C2C2E] border-none p-4 mb-6 text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm">79.369 avaliações 5 estrelas</p>
          </Card>

          {/* FAQ */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Perguntas Frequentes</h3>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-[#2C2C2E] border-none">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-[#AEAEB2]">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Guarantee */}
          <Card className="bg-[#FF6F00] bg-opacity-10 border-[#FF6F00] p-4 text-center mb-6">
            <h3 className="font-semibold mb-2">Garantia de 30 Dias para Devolução do Dinheiro</h3>
            <p className="text-sm text-[#AEAEB2]">
              Se não estiver satisfeito, devolvemos 100% do seu dinheiro
            </p>
          </Card>

          {/* Legal Text */}
          <p className="text-xs text-[#AEAEB2] text-center leading-relaxed">
            Ao clicar em 'Obter Meu Plano', você concorda em se inscrever em um serviço de assinatura mensal. 
            Você pode cancelar a qualquer momento através das configurações da sua conta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
