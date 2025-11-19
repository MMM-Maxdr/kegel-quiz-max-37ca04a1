
import React from 'react';
import { Check } from 'lucide-react';

interface QuestionHeaderProps {
  question: string;
  subtitle?: string;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ question, subtitle }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2 text-center">{question}</h1>
      {subtitle && (
        <p className="text-[#AEAEB2] text-center mb-8 flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-[#FF6F00]" />
          {subtitle}
        </p>
      )}
    </>
  );
};

export default QuestionHeader;
