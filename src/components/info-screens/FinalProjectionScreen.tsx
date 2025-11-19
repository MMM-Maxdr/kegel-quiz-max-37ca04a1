import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
interface FinalProjectionScreenProps {
  onContinue: () => void;
  onBack: () => void;
}
const FinalProjectionScreen: React.FC<FinalProjectionScreenProps> = ({
  onContinue,
  onBack
}) => {
  return <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-primary text-2xl font-bold">)(</div>
        <span className="text-sm text-muted-foreground">25 / 25</span>
      </div>

      {/* Progress Bar */}
      <div className="px-4 mb-8">
        <div className="w-full bg-muted rounded-full h-1">
          <div className="bg-primary h-1 rounded-full w-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 flex flex-col justify-center">
        <div className="max-w-md mx-auto text-center">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-4">
            O último plano que você precisa para melhorar sua vida sexual
          </h1>

          {/* Subtitle */}
          <p className="text-lg mb-2 text-muted-foreground">
            Com base nas informações fornecidas, você atingirá seu desempenho máximo em
          </p>

          {/* Projected Date */}
          <p className="text-2xl font-bold text-primary underline mb-8">Setembro, 2025</p>

          {/* Projection Chart */}
          <Card className="bg-card p-6 mb-8 h-64">
            {/* Space for projection chart */}
            <div className="w-full h-full bg-muted/20 rounded-lg relative p-4">
              {/* Chart container with proper margins */}
              <div className="w-full h-full relative" style={{ paddingLeft: '40px', paddingBottom: '30px', paddingRight: '20px', paddingTop: '20px' }}>
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 text-xs text-muted-foreground">300%</div>
                <div className="absolute left-0 top-1/4 text-xs text-muted-foreground">200%</div>
                <div className="absolute left-0 top-1/2 text-xs text-muted-foreground">100%</div>
                <div className="absolute left-0 bottom-8 text-xs text-muted-foreground">0%</div>
                
                {/* X-axis labels */}
                <div className="absolute bottom-0 left-8 text-xs text-muted-foreground">Semana 1</div>
                <div className="absolute bottom-0 right-4 text-xs text-muted-foreground">Semana 4</div>
                
                {/* Growth line visualization */}
                <div className="absolute bottom-12 left-12 w-2 h-2 bg-white rounded-full z-10"></div>
                <div className="absolute bottom-16 left-8 text-xs text-white whitespace-nowrap">Hoje</div>
                
                <div className="absolute top-6 right-8 bg-primary text-primary-foreground px-3 py-1 rounded text-xs whitespace-nowrap z-10">
                  Após usar Kegel Max
                </div>
                
                {/* Exponential curve representation */}
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ left: '40px', bottom: '30px', width: 'calc(100% - 60px)', height: 'calc(100% - 50px)' }}>
                  <path d="M5,85 Q25,65 45,45 Q65,25 85,15" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>
          </Card>

          {/* Continue Button */}
          <button onClick={onContinue} className="w-full py-4 bg-primary hover:bg-primary/80 text-primary-foreground font-semibold rounded-xl transition-all duration-200">
            Continuar
          </button>
        </div>
      </div>
    </div>;
};
export default FinalProjectionScreen;