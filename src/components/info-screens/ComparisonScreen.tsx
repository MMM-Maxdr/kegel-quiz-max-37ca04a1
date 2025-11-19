import React from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';

interface ComparisonScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

const ComparisonScreen: React.FC<ComparisonScreenProps> = ({ onContinue, onBack }) => {
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
          <h1 className="text-2xl font-bold mb-4">
            O Programa da Kegel Max é melhor do que soluções rápidas
          </h1>

          {/* Subtitle */}
          <p className="text-lg mb-8 text-muted-foreground">
            Veja os benefícios a longo prazo de uma abordagem natural e holística
          </p>

          {/* Comparison Table */}
          <div className="bg-card rounded-xl p-4 mb-8">
            <div className="grid grid-cols-3 gap-2">
              {/* Header */}
              <div></div>
              <div className="text-sm font-semibold text-center p-2">Soluções rápidas</div>
              <div className="text-sm font-semibold text-center p-2">O Programa Kegel Max</div>
              
              {/* Rows */}
              <div className="text-sm text-left p-2">Durar mais na cama</div>
              <div className="text-center p-2">
                <Check className="w-5 h-5 text-green-500 mx-auto" />
              </div>
              <div className="text-center p-2">
                <Check className="w-5 h-5 text-green-500 mx-auto" />
              </div>

              <div className="text-sm text-left p-2">Melhorar a ereção</div>
              <div className="text-center p-2">
                <Check className="w-5 h-5 text-green-500 mx-auto" />
              </div>
              <div className="text-center p-2">
                <Check className="w-5 h-5 text-green-500 mx-auto" />
              </div>

              <div className="text-sm text-left p-2">Resultado a longo prazo</div>
              <div className="text-center p-2">
                <X className="w-5 h-5 text-red-500 mx-auto" />
              </div>
              <div className="text-center p-2">
                <Check className="w-5 h-5 text-green-500 mx-auto" />
              </div>

              <div className="text-sm text-left p-2">Sem efeitos negativos</div>
              <div className="text-center p-2">
                <X className="w-5 h-5 text-red-500 mx-auto" />
              </div>
              <div className="text-center p-2">
                <Check className="w-5 h-5 text-green-500 mx-auto" />
              </div>

              <div className="text-sm text-left p-2">Aumentar a autoconfiança</div>
              <div className="text-center p-2">
                <X className="w-5 h-5 text-red-500 mx-auto" />
              </div>
              <div className="text-center p-2">
                <Check className="w-5 h-5 text-green-500 mx-auto" />
              </div>
            </div>
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

export default ComparisonScreen;