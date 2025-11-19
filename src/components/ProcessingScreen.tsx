
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Check } from 'lucide-react';

interface ProcessingScreenProps {
  onComplete: () => void;
}

const ProcessingScreen: React.FC<ProcessingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Coletando suas respostas');
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [popup1Answered, setPopup1Answered] = useState(false);
  const [popup2Answered, setPopup2Answered] = useState(false);

  const testimonials = [
    '"Mudou minha vida completamente!" - João, 28',
    '"Finalmente encontrei uma solução que funciona" - Pedro, 35',
    '"Minha confiança voltou" - Marco, 31',
    '"Resultados incríveis em poucas semanas" - Lucas, 29'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }

        // Show first popup at 49%
        if (prev >= 49 && !showPopup1 && !popup1Answered) {
          setShowPopup1(true);
        }

        // Show second popup at 99%
        if (prev >= 99 && !showPopup2 && !popup2Answered) {
          setShowPopup2(true);
        }

        // Update text based on progress
        if (prev < 30) {
          setCurrentText('Coletando suas respostas');
        } else if (prev < 50) {
          setCurrentText('Analisando seus resultados');
        } else if (prev < 70) {
          setCurrentText('Priorizando Desafios');
        } else if (prev < 90) {
          setCurrentText('Definindo suas metas');
        } else {
          setCurrentText('Elaborando seu Plano Pessoal');
        }

        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete, showPopup1, showPopup2, popup1Answered, popup2Answered]);

  const handlePopup1Answer = (answer: boolean) => {
    setShowPopup1(false);
    setPopup1Answered(true);
  };

  const handlePopup2Answer = (answer: boolean) => {
    setShowPopup2(false);
    setPopup2Answered(true);
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white flex flex-col items-center justify-center p-6 relative">
      {/* Background testimonials */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="absolute text-sm animate-pulse"
            style={{
              top: `${20 + (index * 20)}%`,
              left: `${10 + (index * 15)}%`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            {testimonial}
          </div>
        ))}
      </div>

      {/* Progress Circle */}
      <div className="relative w-48 h-48 mb-8">
        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#2C2C2E"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#FF6F00"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-[#FF6F00]">{progress}%</span>
        </div>
      </div>

      {/* Status Text */}
      <p className="text-xl font-semibold text-center mb-4">{currentText}</p>
      <p className="text-[#AEAEB2] text-center max-w-sm">
        Analisando suas respostas para criar um plano personalizado...
      </p>

      {/* Popup 1 */}
      {showPopup1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#2C2C2E] rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Para avançar, especifique: Você tem inclinação para terminar o que começou?
            </h3>
            <div className="flex gap-3">
              <Button
                onClick={() => handlePopup1Answer(false)}
                variant="outline"
                className="flex-1 bg-transparent border-[#AEAEB2] text-white hover:bg-[#3C3C3E]"
              >
                <X className="w-4 h-4 mr-2" />
                Não
              </Button>
              <Button
                onClick={() => handlePopup1Answer(true)}
                className="flex-1 bg-[#FF6F00] hover:bg-[#E55A00] text-white"
              >
                <Check className="w-4 h-4 mr-2" />
                Sim
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Popup 2 */}
      {showPopup2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#2C2C2E] rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Você gostaria de aumentar sua autoconfiança?
            </h3>
            <div className="flex gap-3">
              <Button
                onClick={() => handlePopup2Answer(false)}
                variant="outline"
                className="flex-1 bg-transparent border-[#AEAEB2] text-white hover:bg-[#3C3C3E]"
              >
                <X className="w-4 h-4 mr-2" />
                Não
              </Button>
              <Button
                onClick={() => handlePopup2Answer(true)}
                className="flex-1 bg-[#FF6F00] hover:bg-[#E55A00] text-white"
              >
                <Check className="w-4 h-4 mr-2" />
                Sim
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingScreen;
