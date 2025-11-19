import React from 'react';
import { ArrowLeft, AlertTriangle, Clock, Activity, Dumbbell, Zap, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ProfileSummaryScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

const ProfileSummaryScreen: React.FC<ProfileSummaryScreenProps> = ({ onContinue, onBack }) => {
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
      <div className="flex-1 px-6">
        <div className="max-w-md mx-auto">
          {/* Title */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Resumo do seu perfil
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-center mb-6 text-muted-foreground">
            Nível de desempenho sexual
          </p>

          {/* Level Meter */}
          <div className="mb-6">
            <div className="relative">
              <div className="w-full bg-muted rounded-full h-4">
                <div className="bg-red-500 h-4 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="absolute -top-8 left-1/3 transform -translate-x-1/2">
                <span className="text-sm font-semibold">Você - 17,35</span>
              </div>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>Baixo</span>
              <span>Médio</span>
              <span>Alto</span>
            </div>
          </div>

          {/* Alert Box */}
          <Card className="bg-red-600 p-4 mb-6 flex items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-white" />
                <h3 className="font-semibold text-white">Nível baixo</h3>
              </div>
              <p className="text-sm text-white">
                Um baixo nível de desempenho sexual pode levar à diminuição da autoestima, relacionamentos prejudicados e bem-estar reduzido.
              </p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded flex-shrink-0">
              {/* Space for image */}
            </div>
          </Card>

          {/* Attributes List */}
          <div className="space-y-3 mb-8">
            <Card className="bg-card p-3 flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Tempo de duração</div>
                <div className="font-semibold">7-15 minutos</div>
              </div>
            </Card>

            <Card className="bg-card p-3 flex items-center gap-3">
              <Activity className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Função erétil</div>
                <div className="font-semibold">Reduzido</div>
              </div>
            </Card>

            <Card className="bg-card p-3 flex items-center gap-3">
              <Dumbbell className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Força dos músculos pélvicos</div>
                <div className="font-semibold">Precisa ser fortalecido</div>
              </div>
            </Card>

            <Card className="bg-card p-3 flex items-center gap-3">
              <Zap className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Gatilho</div>
                <div className="font-semibold">Problemas de desempenho</div>
              </div>
            </Card>

            <Card className="bg-card p-3 flex items-center gap-3">
              <User className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Estilo de vida</div>
                <div className="font-semibold">Caminhadas</div>
              </div>
            </Card>
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

export default ProfileSummaryScreen;