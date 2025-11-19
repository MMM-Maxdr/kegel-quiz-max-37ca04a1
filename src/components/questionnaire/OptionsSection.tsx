
import React from 'react';
import { Check } from 'lucide-react';
import { Option } from '@/types/questionnaire';

interface OptionsSectionProps {
  options: Option[];
  selectedOptions: string[];
  multiSelect: boolean;
  hasTestimonials: boolean;
  onSelect: (optionId: string) => void;
}

const OptionsSection: React.FC<OptionsSectionProps> = ({
  options,
  selectedOptions,
  multiSelect,
  hasTestimonials,
  onSelect
}) => {
  return (
    <div className="space-y-3 mb-8">
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option.id);
        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center gap-3 ${
              hasTestimonials
                ? 'bg-[#FF6F00] text-white hover:bg-[#E55A00]'
                : isSelected
                ? 'bg-[#FF6F00] text-white'
                : 'bg-[#2C2C2E] text-white hover:bg-[#3C3C3E]'
            }`}
          >
            {option.emoji && <span className="text-2xl">{option.emoji}</span>}
            {option.icon && <span className="text-xl">{option.icon}</span>}
            <span className="flex-1 font-medium text-center">{option.text}</span>
            {multiSelect && isSelected && <Check className="w-5 h-5 text-white" />}
          </button>
        );
      })}
    </div>
  );
};

export default OptionsSection;
