import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SocialProofScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

const SocialProofScreen: React.FC<SocialProofScreenProps> = ({ onContinue, onBack }) => {
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
          <h1 className="text-3xl font-bold mb-2">
            150.000+ <span className="text-primary">PESSOAS</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg mb-8 text-muted-foreground">
            escolheram Kegel Max
          </p>

          {/* Progress Image */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/eba85b68-f16f-4542-8852-adeef430ac4a.png" 
              alt="Progresso dos dias"
              className="w-full max-w-sm mx-auto"
            />
          </div>

          {/* Footer Text */}
          <p className="text-sm text-muted-foreground mb-8">
            Ajudamos 150.000+ homens a melhorar seu desempenho sexual
          </p>

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

export default SocialProofScreen;