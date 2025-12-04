import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, Shield, Star, ChevronDown, ChevronUp } from 'lucide-react'

const Mrr: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60)
  const [selectedPlan, setSelectedPlan] = useState<'cartao' | 'pix'>('cartao')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const checkoutHref = selectedPlan === 'cartao'
    ? 'https://payt.site/BvCGGJ2'
    : 'https://payt.site/dKCVVeN'

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
    },
    {
      question: 'O programa são apenas quatro semanas?',
      answer: 'Você pode manter sua assinatura e renovação ativa mensalmente para continuar seguindo seu planejamento de exercícios.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      <div className="fixed top-0 left-0 right-0 bg-[#FF6F00] p-4 z-50">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <span className="font-semibold">O desconto expira em: {formatTime(timeLeft)}</span>
          <Button asChild className="bg-white text-[#FF6F00] hover:bg-gray-100 font-bold px-4 py-1 rounded">
            <a href={checkoutHref} target="_blank" rel="noopener noreferrer">OBTER -50%</a>
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

          <div className="space-y-3 mb-6">
            <Card
              className={`border-2 p-4 cursor-pointer transition-all duration-200 ${selectedPlan === 'cartao' ? 'border-[#FFD700] bg-[#FF6F00] bg-opacity-10 ring-2 ring-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.6)]' : 'border-[#2C2C2E] bg-[#2C2C2E]'}`}
              onClick={() => setSelectedPlan('cartao')}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">Pagamento no cartão</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#FF6F00]">R$ 0,71</span>
                      <span className="text-sm text-[#AEAEB2]">por dia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#AEAEB2]">De: R$ 69,90</span>
                      <span className="text-sm text-white">Por: R$ 29,90</span>
                      <span className="text-xs text-green-400">-60%</span>
                    </div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'cartao' ? 'border-[#FF6F00] bg-[#FF6F00]' : 'border-[#AEAEB2]'}`}>
                  {selectedPlan === 'cartao' && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>
            </Card>

            <Card
              className={`border-2 p-4 cursor-pointer transition-all duration-200 ${selectedPlan === 'pix' ? 'border-[#FF6F00] bg-[#FF6F00] bg-opacity-10' : 'border-[#2C2C2E] bg-[#2C2C2E]'}`}
              onClick={() => setSelectedPlan('pix')}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">Pagamento no Pix</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#FF6F00]">R$ 0,99</span>
                      <span className="text-sm text-[#AEAEB2]">por dia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#AEAEB2]">De: R$ 89,90</span>
                      <span className="text-sm text-white">Por: R$ 39,90</span>
                      <span className="text-xs text-green-400">-40%</span>
                    </div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'pix' ? 'border-[#FF6F00] bg-[#FF6F00]' : 'border-[#AEAEB2]'}`}>
                  {selectedPlan === 'pix' && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>
            </Card>
          </div>

          <Button asChild className="w-full py-4 bg-[#FF6F00] hover:bg-[#E55A00] text-white font-bold text-lg rounded-xl mb-6">
            <a href={checkoutHref} target="_blank" rel="noopener noreferrer">OBTER MEU PLANO</a>
          </Button>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-[#FF6F00]" />
              <span className="text-sm">Pagamento 100% Seguro</span>
            </div>
            <p className="text-xs text-[#AEAEB2]">Aceitamos todos os principais cartões de crédito e PIX</p>
          </div>

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
  )
}

export default Mrr
