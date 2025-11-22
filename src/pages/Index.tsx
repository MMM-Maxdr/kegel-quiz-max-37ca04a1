import React, { useState } from 'react';
import QuestionnaireStep from '@/components/QuestionnaireStep';
import ProcessingScreen from '@/components/ProcessingScreen';
import EmailCapture from '@/components/EmailCapture';
import SalesPage from '@/components/SalesPage';
import SocialProofScreen from '@/components/info-screens/SocialProofScreen';
import PelvicFloorScreen from '@/components/info-screens/PelvicFloorScreen';
import DurationBenefitScreen from '@/components/info-screens/DurationBenefitScreen';
import StatisticsScreen from '@/components/info-screens/StatisticsScreen';
import ComparisonScreen from '@/components/info-screens/ComparisonScreen';
import ProfileSummaryScreen from '@/components/info-screens/ProfileSummaryScreen';
import FinalProjectionScreen from '@/components/info-screens/FinalProjectionScreen';
import { toast } from 'sonner';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [showProcessing, setShowProcessing] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showSalesPage, setShowSalesPage] = useState(false);
  
  // Info screen states
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [showPelvicFloor, setShowPelvicFloor] = useState(false);
  const [showDurationBenefit, setShowDurationBenefit] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showProfileSummary, setShowProfileSummary] = useState(false);
  const [showFinalProjection, setShowFinalProjection] = useState(false);

  const questionnaireData = [
    {
      step: 1,
      question: "Plano de exercícios Kegel de acordo com a sua idade",
      subtitle: "QUESTIONÁRIO DE 1 MINUTO",
      options: [
        { id: '18-30', text: '18-30', icon: '👨' },
        { id: '31-45', text: '31-45', icon: '👨‍💼' },
        { id: '46-55', text: '46-55', icon: '👨‍🦳' },
        { id: '56+', text: '56+', icon: '👴' }
      ]
    },
    {
      step: 2,
      question: "Escolha seu tipo de corpo",
      options: [
        { id: 'magro', text: 'Magro', icon: '🏃' },
        { id: 'medio', text: 'Médio', icon: '🚶' },
        { id: 'pesado', text: 'Pesado', icon: '🏋️' }
      ]
    },
    {
      step: 3,
      question: "Escolha seus objetivos",
      subtitle: "Selecione todos que se aplicam",
      multiSelect: true,
      options: [
        { id: 'durar-mais', text: 'Durar mais durante o sexo', icon: '⏱️' },
        { id: 'orgasmos-intensos', text: 'Ter orgasmos mais intensos', icon: '📈' },
        { id: 'erecoes-firmes', text: 'Ter ereções mais firmes', icon: '♂️' }
      ]
    },
    {
      step: 4,
      question: "Você já treinou seus músculos do assoalho pélvico?",
      options: [
        { id: 'sim-claro', text: 'Sim, claro', emoji: '😎' },
        { id: 'nao-ouvi-falar', text: 'Não, só ouvi falar deles', emoji: '😕' },
        { id: 'nao-treinei', text: 'Não, não treinei', emoji: '😟' },
        { id: 'o-que-sao', text: 'O que são os músculos do assoalho pélvico?', emoji: '🤔' }
      ]
    },
    {
      step: 5,
      question: "Como você avalia seu desempenho sexual?",
      options: [
        { id: 'muito-insatisfeito', text: 'Muito insatisfeito', emoji: '😩' },
        { id: 'insatisfeito', text: 'Insatisfeito', emoji: '😞' },
        { id: 'esta-ok', text: 'Está OK', emoji: '😐' },
        { id: 'satisfeito', text: 'Satisfeito', emoji: '😊' },
        { id: 'muito-satisfeito', text: 'Muito satisfeito', emoji: '😄' }
      ]
    },
    {
      step: 6,
      question: "Quanto tempo dura sua relação sexual em média?",
      options: [
        { id: 'menos-2min', text: 'Menos de 2 minutos' },
        { id: '2-7min', text: '2-7 minutos' },
        { id: '7-15min', text: '7-15 minutos' },
        { id: '15min-mais', text: '15 minutos ou mais' }
      ]
    },
    {
      step: 7,
      question: "Com que frequência você termina antes do que gostaria?",
      options: [
        { id: 'nunca', text: 'Nunca', emoji: '😎' },
        { id: 'as-vezes', text: 'Às vezes', emoji: '😕' },
        { id: 'maioria-vezes', text: 'Na maioria das vezes', emoji: '😟' },
        { id: 'nao-responder', text: 'Não quero responder', emoji: '😥' }
      ]
    },
    {
      step: 8,
      question: "Você tem uma ereção completa sempre que faz sexo?",
      options: [
        { id: 'sim-sem-problemas', text: 'Sim, sem problemas' },
        { id: 'sim-quero-mais-forte', text: 'Sim, mas quero mais forte' },
        { id: 'nem-sempre', text: 'Nem sempre' },
        { id: 'quase-nunca', text: 'Quase nunca' },
        { id: 'nao-responder', text: 'Não quero responder' }
      ]
    },
    {
      step: 9,
      question: "Como seu desempenho sexual faz você se sentir?",
      subtitle: "Selecione todos que se aplicam",
      multiSelect: true,
      options: [
        { id: 'sobrecarregado', text: 'Sobrecarregado', emoji: '😩' },
        { id: 'nervoso', text: 'Nervoso', emoji: '😥' },
        { id: 'humor-flutua', text: 'Meu humor flutua', icon: '📊' },
        { id: 'confianca-caiu', text: 'Minha confiança caiu', emoji: '😔' },
        { id: 'motivacao-baixa', text: 'Minha motivação e energia estão baixas', emoji: '😞' },
        { id: 'nenhuma-opcao', text: 'Nenhuma das opções acima', emoji: '🤷‍♂️' }
      ]
    },
    {
      step: 10,
      question: "Qual é o seu status de relacionamento?",
      options: [
        { id: 'casado', text: 'Casado' },
        { id: 'namorando', text: 'Namorando' },
        { id: 'solteiro', text: 'Solteiro' },
        { id: 'nao-responder', text: 'Não quero responder' }
      ]
    },
    {
      step: 11,
      question: "Você se preocupa que questões sexuais estejam afetando seu relacionamento?",
      options: [
        { id: 'sim-grande-preocupacao', text: 'Sim, é uma grande preocupação' },
        { id: 'um-pouco', text: 'Um pouco, está na minha mente' },
        { id: 'nao-tenho-certeza', text: 'Não tenho certeza' },
        { id: 'nao-de-forma-alguma', text: 'Não, de forma alguma' }
      ]
    },
    {
      step: 12,
      question: "Quantas vezes você pratica atividade sexual por mês, em média?",
      options: [
        { id: 'menos-3-vezes', text: 'Menos de 3 vezes por mês' },
        { id: '3-6-vezes', text: '3-6 vezes por mês' },
        { id: '7-15-vezes', text: '7-15 vezes por mês' },
        { id: 'mais-15-vezes', text: 'Mais de 15 vezes por mês' },
        { id: 'nao-responder', text: 'Não quero responder' }
      ]
    },
    {
      step: 13,
      question: "Eu evito sexo porque me preocupo com meu desempenho",
      subtitle: "Você se identifica com esta afirmação?",
      options: [
        { id: 'sim', text: 'Sim', emoji: '😊' },
        { id: 'um-pouco', text: 'Um pouco', emoji: '😕' },
        { id: 'nao', text: 'Não', emoji: '😟' },
        { id: 'nao-tenho-certeza', text: 'Não tenho certeza', emoji: '🤔' }
      ]
    },
    {
      step: 14,
      question: "Você notou uma diminuição no desejo sexual no último ano?",
      options: [
        { id: 'sim-drastica', text: 'Sim, diminuição drástica' },
        { id: 'talvez-nao-certeza', text: 'Talvez, não tenho certeza' },
        { id: 'nao-mas-quero-mais', text: 'Não, mas quero mais' },
        { id: 'nao-me-sinto-bem', text: 'Não, me sinto bem' }
      ]
    },
    {
      step: 15,
      question: "Você já tentou alguma solução de ação rápida para melhorar sua vida íntima?",
      options: [
        { id: 'sim-uso-regularmente', text: 'Sim, uso regularmente' },
        { id: 'sim-tentei-ocasionalmente', text: 'Sim, tentei ocasionalmente' },
        { id: 'nao-nao-tentei', text: 'Não, não tentei' },
        { id: 'nao-responder', text: 'Não quero responder' }
      ]
    },
    {
      step: 16,
      question: "Por favor, descreva seu dia típico",
      options: [
        { id: 'no-escritorio', text: 'No escritório', icon: '👨‍💼' },
        { id: 'caminhadas-diarias', text: 'Caminhadas diárias', icon: '🚶‍♂️' },
        { id: 'trabalho-fisico', text: 'Trabalho físico', icon: '💪' },
        { id: 'principalmente-casa', text: 'Principalmente em casa', icon: '🏠' }
      ]
    },
    {
      step: 17,
      question: "Você bebe álcool?",
      options: [
        { id: 'nao-bebo-alguma', text: 'Não bebo de forma alguma' },
        { id: 'bebo-raramente', text: 'Bebo raramente' },
        { id: 'menos-10-vezes', text: 'Menos de 10 vezes por mês' },
        { id: '10-20-vezes', text: '10-20 vezes por mês' },
        { id: 'mais-20-vezes', text: 'Mais de 20 vezes por mês' }
      ]
    },
    {
      step: 18,
      question: "Você fuma?",
      options: [
        { id: 'sim-fumo', text: 'Sim, eu fumo' },
        { id: 'nao-fumo', text: 'Não, eu não fumo' },
        { id: 'as-vezes', text: 'Às vezes' }
      ]
    },
    {
      step: 19,
      question: "Você segue alguma dieta?",
      options: [
        { id: 'sim-refeicoes-balanceadas', text: 'Sim, tento fazer refeições balanceadas' },
        { id: 'sim-mas-porcaria', text: 'Sim, mas às vezes como porcaria' },
        { id: 'nao-atencao-dieta', text: 'Não, não presto atenção à dieta' }
      ]
    },
    {
      step: 20,
      question: "Qual é o seu nível de atividade física?",
      options: [
        { id: 'todos-dias', text: 'Eu me exercito todos os dias' },
        { id: 'de-vez-quando', text: 'Eu me exercito de vez em quando' },
        { id: 'nao-muito-ativo', text: 'Não sou muito ativo' },
        { id: 'nao-exercito-alguma', text: 'Não me exercito de forma alguma' }
      ]
    },
    {
      step: 21,
      question: "Com que frequência você assiste pornografia?",
      options: [
        { id: 'pelo-menos-uma-vez-dia', text: 'Pelo menos uma vez por dia' },
        { id: '3-4-vezes-semana', text: '3-4 vezes por semana' },
        { id: '1-2-vezes-mes', text: '1-2 vezes por mês' },
        { id: 'nunca', text: 'Nunca' }
      ]
    },
    {
      step: 22,
      question: "Como você avaliaria seu humor recentemente?",
      options: [
        { id: 'terrivel-sobrecarregado', text: 'Terrível, me sentindo sobrecarregado' },
        { id: 'medio-poderia-melhor', text: 'Médio, poderia ser melhor' },
        { id: 'estou-bem', text: 'Estou bem' },
        { id: 'dificil-dizer', text: 'Difícil dizer' }
      ]
    },
    {
      step: 23,
      question: "Você tem algum pensamento crítico sobre si mesmo antes, durante ou depois do sexo?",
      subtitle: "ex.: 'Eu sei que não vou conseguir ter uma ereção hoje à noite'",
      options: [
        { id: 'sim', text: 'Sim', emoji: '😊' },
        { id: 'nao', text: 'Não', emoji: '😟' },
        { id: 'as-vezes', text: 'Às vezes', emoji: '😕' },
        { id: 'nao-tenho-certeza', text: 'Não tenho certeza', emoji: '🤔' }
      ]
    },
    {
      step: 24,
      question: "Você sente que seu(sua) parceiro(a) fica desapontado(a) após a intimidade?",
      options: [
        { id: 'sim-acho-que-sim', text: 'Sim, eu acho que sim' },
        { id: 'as-vezes', text: 'Às vezes' },
        { id: 'nao-tenho-certeza', text: 'Não tenho certeza' },
        { id: 'definitivamente-nao', text: 'Definitivamente não' }
      ]
    },
    {
      step: 25,
      question: "Junte-se a mais de 1.000.000 de pessoas",
      subtitle: "Torne-se parte de uma comunidade mundial em crescimento e alcance seus objetivos conosco!",
      hasTestimonials: true,
      options: [
        { id: 'continuar', text: 'Quero melhorar minha auto estima' }
      ]
    },
    {
      step: 26,
      question: "Quanto tempo você gostaria de durar para satisfazer plenamente seu(sua) parceiro(a) durante o sexo?",
      options: [
        { id: '5-10-minutos', text: '5-10 minutos' },
        { id: '10-15-minutos', text: '10-15 minutos' },
        { id: '15-20-minutos', text: '15-20 minutos' },
        { id: '20-30-minutos', text: '20-30 minutos' },
        { id: '30-mais-minutos', text: '30+ minutos' }
      ]
    },
    {
      step: 27,
      question: "Defina sua meta de tempo",
      subtitle: "Escolha quanto tempo você dedicará a cada dia para alcançar seu objetivo",
      options: [
        { id: '5-min-dia', text: '5 min/dia' },
        { id: '10-min-dia', text: '10 min/dia' },
        { id: '15-min-dia', text: '15 min/dia' },
        { id: '20-min-dia', text: '20+ min/dia' }
      ]
    },
    {
      step: 28,
      question: "O último plano que você precisará para melhorar sua vida sexual",
      subtitle: "Com base em suas respostas, esperamos que você atinja seu desempenho máximo até Julho 2025",
      hasTestimonials: true,
      hasGif: true,
      gifUrl: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmpqZjRxMmEzNTU5cnozbzVwamx5YXZpZzM1cHNkM3diaXIwZ3NyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jL0dCwSH132RiBD2FO/giphy.gif",
      options: [
        { id: 'continuar', text: 'Quero iniciar meu plano kegel' }
      ]
    }
  ];

  const handleOptionSelect = (stepNumber: number, optionId: string) => {
    const currentStepData = questionnaireData.find(q => q.step === stepNumber);
    const isMultiSelect = currentStepData?.multiSelect;

    setAnswers(prev => {
      const currentAnswers = prev[stepNumber] || [];
      
      if (isMultiSelect) {
        if (currentAnswers.includes(optionId)) {
          return {
            ...prev,
            [stepNumber]: currentAnswers.filter(id => id !== optionId)
          };
        } else {
          return {
            ...prev,
            [stepNumber]: [...currentAnswers, optionId]
          };
        }
      } else {
        return {
          ...prev,
          [stepNumber]: [optionId]
        };
      }
    });
  };

  const handleNext = () => {
    // Check for info screens at specific steps
    if (currentStep === 1) {
      setShowSocialProof(true);
    } else if (currentStep === 3) {
      setShowPelvicFloor(true);
    } else if (currentStep === 6) {
      setShowDurationBenefit(true);
    } else if (currentStep === 8) {
      setShowStatistics(true);
    } else if (currentStep === 14) {
      setShowComparison(true);
    } else if (currentStep === 21) {
      setShowProfileSummary(true);
    } else if (currentStep === 25) {
      setShowFinalProjection(true);
    } else if (currentStep === 28) {
      setShowProcessing(true);
    } else if (currentStep < questionnaireData.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowProcessing(true);
    }
  };

  // Info screen navigation handlers
  const handleSocialProofContinue = () => {
    setShowSocialProof(false);
    setCurrentStep(prev => prev + 1);
  };

  const handlePelvicFloorContinue = () => {
    setShowPelvicFloor(false);
    setCurrentStep(prev => prev + 1);
  };

  const handleDurationBenefitContinue = () => {
    setShowDurationBenefit(false);
    setCurrentStep(prev => prev + 1);
  };

  const handleStatisticsContinue = () => {
    setShowStatistics(false);
    setCurrentStep(prev => prev + 1);
  };

  const handleComparisonContinue = () => {
    setShowComparison(false);
    setCurrentStep(prev => prev + 1);
  };

  const handleProfileSummaryContinue = () => {
    setShowProfileSummary(false);
    setCurrentStep(prev => prev + 1);
  };

  const handleFinalProjectionContinue = () => {
    setShowFinalProjection(false);
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleProcessingComplete = () => {
    setShowProcessing(false);
    setShowEmailCapture(true);
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    toast.success('Email capturado com sucesso!');
    setShowEmailCapture(false);
    setShowSalesPage(true);
  };

  const handlePurchase = () => {
    toast.success('Redirecionando para o pagamento...');
    window.open('https://payt.site/mNCD6Qo', '_blank');
  };

  if (showSalesPage) {
    return <SalesPage onPurchase={handlePurchase} />;
  }

  if (showEmailCapture) {
    return <EmailCapture onSubmit={handleEmailSubmit} />;
  }

  if (showProcessing) {
    return <ProcessingScreen onComplete={handleProcessingComplete} />;
  }

  // Info screens
  if (showSocialProof) {
    return (
      <SocialProofScreen
        onContinue={handleSocialProofContinue}
        onBack={handleBack}
      />
    );
  }

  if (showPelvicFloor) {
    return (
      <PelvicFloorScreen
        onContinue={handlePelvicFloorContinue}
        onBack={handleBack}
      />
    );
  }

  if (showDurationBenefit) {
    return (
      <DurationBenefitScreen
        onContinue={handleDurationBenefitContinue}
        onBack={handleBack}
      />
    );
  }

  if (showStatistics) {
    return (
      <StatisticsScreen
        onContinue={handleStatisticsContinue}
        onBack={handleBack}
      />
    );
  }

  if (showComparison) {
    return (
      <ComparisonScreen
        onContinue={handleComparisonContinue}
        onBack={handleBack}
      />
    );
  }

  if (showProfileSummary) {
    return (
      <ProfileSummaryScreen
        onContinue={handleProfileSummaryContinue}
        onBack={handleBack}
      />
    );
  }

  if (showFinalProjection) {
    return (
      <FinalProjectionScreen
        onContinue={handleFinalProjectionContinue}
        onBack={handleBack}
      />
    );
  }

  const currentStepData = questionnaireData.find(q => q.step === currentStep);

  if (!currentStepData) {
    return <div>Erro: Etapa não encontrada</div>;
  }

  return (
    <QuestionnaireStep
      step={currentStep}
      totalSteps={questionnaireData.length}
      question={currentStepData.question}
      subtitle={currentStepData.subtitle}
      options={currentStepData.options}
      selectedOptions={answers[currentStep] || []}
      multiSelect={currentStepData.multiSelect}
      hasTestimonials={currentStepData.hasTestimonials}
      hasGif={currentStepData.hasGif}
      gifUrl={currentStepData.gifUrl}
      onSelect={(optionId) => handleOptionSelect(currentStep, optionId)}
      onNext={handleNext}
      onBack={handleBack}
    />
  );
};

export default Index;
