import React from 'react';
import { ArrowLeft, Shield, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StatisticsScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

const StatisticsScreen: React.FC<StatisticsScreenProps> = ({ onContinue, onBack }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-primary text-2xl font-bold">)(</div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 flex flex-col justify-center">
        <div className="max-w-md mx-auto text-center">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-8">
            9 em cada 10 homens melhoraram seu desempenho sexual com o programa Kegel Max
          </h1>

          {/* Infographic */}
          <Card className="bg-card p-6 mb-8">
            <div className="grid grid-cols-5 gap-3 mb-4">
              {/* First row - 5 filled icons */}
              {[...Array(5)].map((_, i) => (
                <User key={i} className="w-8 h-8 text-primary" />
              ))}
            </div>
            <div className="grid grid-cols-5 gap-3">
              {/* Second row - 4 filled, 1 empty */}
              {[...Array(4)].map((_, i) => (
                <User key={i} className="w-8 h-8 text-primary" />
              ))}
              <User className="w-8 h-8 text-muted" />
            </div>
          </Card>

          {/* Testimonial */}
          <div className="mb-6">
            <blockquote className="text-lg italic text-muted-foreground mb-2">
              "Senti os primeiros resultados significativos em apenas 3 semanas e agora não quero mais parar. Não me lembro de quando aproveitei tanto minha vida íntima!"
            </blockquote>
            <cite className="text-sm">- Chris C.</cite>
          </div>

          {/* Source */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Shield className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Estudo BJGP sobre exercícios de Kegel e disfunção erétil
            </span>
          </div>

          {/* Continue Button */}
          <button
            onClick={onContinue}
            className="w-full py-4 bg-primary hover:bg-primary/80 text-primary-foreground font-semibold rounded-xl transition-all duration-200"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsScreen;