import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface PelvicFloorScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

const PelvicFloorScreen: React.FC<PelvicFloorScreenProps> = ({ onContinue, onBack }) => {
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
            Suas ereções e sua capacidade de durar mais dependem dos músculos do assoalho pélvico
          </h1>

          {/* Visual Chart */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/326232e2-469b-457f-8c80-0c8f41bf8a06.png" 
              alt="Músculos do assoalho pélvico"
              className="w-full max-w-sm mx-auto"
            />
          </div>

          {/* Reinforcement Text */}
          <p className="text-lg mb-6 text-muted-foreground">
            Um assoalho pélvico forte é a chave para ter ereções firmes e durar na cama o tempo que você quiser.
          </p>

          {/* Source */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Shield className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Harvard Research</span>
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

export default PelvicFloorScreen;