import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface DurationBenefitScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

const DurationBenefitScreen: React.FC<DurationBenefitScreenProps> = ({ onContinue, onBack }) => {
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
            O programa Kegel Max ajuda a aumentar a duração média da relação sexual em até 7 vezes
          </h1>

          {/* Chart */}
          <Card className="bg-card p-6 mb-8 h-64 relative">
            <div className="w-full h-full bg-muted/20 rounded-lg relative p-4">
              {/* Chart container with axis labels */}
              <div className="w-full h-full relative">
                {/* Y-axis label */}
                <div className="absolute left-0 top-0 text-xs text-muted-foreground">Duração</div>
                {/* X-axis label */}
                <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">Idade</div>
                
                {/* Chart area */}
                <div className="absolute inset-4 overflow-hidden">
                  {/* SVG for clean lines */}
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Declining line (other methods) - thin white */}
                    <path d="M10,30 L90,70" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none" />
                    
                    {/* Rising line (Kegel Max) - thick orange */}
                    <path d="M10,70 Q30,50 50,35 Q70,20 90,15" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
                  </svg>
                  
                  {/* Enhanced label for Kegel Max */}
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
                    Com o Kegel Max ↗
                  </div>
                  
                  {/* Small label for other methods */}
                  <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                    Outros métodos
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Footer Text */}
          <p className="text-lg mb-8 text-muted-foreground">
            Este método ajuda os homens a levar sua vida íntima a um novo nível, mesmo quando envelhecem
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

export default DurationBenefitScreen;