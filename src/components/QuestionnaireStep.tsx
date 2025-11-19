
import React, { useEffect } from 'react';
import { QuestionnaireStepProps } from '@/types/questionnaire';
import QuestionnaireHeader from './questionnaire/QuestionnaireHeader';
import QuestionHeader from './questionnaire/QuestionHeader';
import GifSection from './questionnaire/GifSection';
import TestimonialsSection from './questionnaire/TestimonialsSection';
import OptionsSection from './questionnaire/OptionsSection';

const QuestionnaireStep: React.FC<QuestionnaireStepProps> = ({
  step,
  totalSteps,
  question,
  subtitle,
  options,
  selectedOptions,
  multiSelect = false,
  hasTestimonials = false,
  hasGif = false,
  gifUrl,
  onSelect,
  onNext,
  onBack
}) => {
  // Auto-advance for single select questions
  useEffect(() => {
    if (!multiSelect && selectedOptions.length > 0) {
      const timer = setTimeout(() => {
        onNext();
      }, 800); // 800ms delay for better UX

      return () => clearTimeout(timer);
    }
  }, [selectedOptions, multiSelect, onNext]);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white flex flex-col">
      <QuestionnaireHeader
        step={step}
        totalSteps={totalSteps}
        onBack={onBack}
      />

      {/* Content */}
      <div className="flex-1 px-6">
        <div className="max-w-md mx-auto">
          <QuestionHeader question={question} subtitle={subtitle} />

          {/* GIF Section */}
          {hasGif && gifUrl && <GifSection gifUrl={gifUrl} />}

          {/* Real Testimonials Section with Images */}
          {hasTestimonials && <TestimonialsSection />}

          {/* Options */}
          <OptionsSection
            options={options}
            selectedOptions={selectedOptions}
            multiSelect={multiSelect}
            hasTestimonials={hasTestimonials}
            onSelect={onSelect}
          />

          {/* Continue Button - Only show for multi-select questions */}
          {multiSelect && (
            <button
              onClick={onNext}
              disabled={selectedOptions.length === 0}
              className="w-full py-4 bg-[#FF6F00] hover:bg-[#E55A00] text-white font-semibold rounded-xl disabled:bg-[#2C2C2E] disabled:text-[#AEAEB2] transition-all duration-200"
            >
              Continuar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireStep;
