
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface QuestionnaireHeaderProps {
  step: number;
  totalSteps: number;
  onBack: () => void;
}

const QuestionnaireHeader: React.FC<QuestionnaireHeaderProps> = ({
  step,
  totalSteps,
  onBack
}) => {
  const progress = step / totalSteps * 100;

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <span className="text-sm text-[#AEAEB2] font-medium">
          {step} / {totalSteps}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="px-4 mb-8">
        <div className="w-full bg-[#2C2C2E] rounded-full h-1">
          <div
            className="bg-[#FF6F00] h-1 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default QuestionnaireHeader;
