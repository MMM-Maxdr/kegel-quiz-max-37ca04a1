
export interface Option {
  id: string;
  text: string;
  icon?: string;
  emoji?: string;
}

export interface QuestionnaireStepProps {
  step: number;
  totalSteps: number;
  question: string;
  subtitle?: string;
  options: Option[];
  selectedOptions: string[];
  multiSelect?: boolean;
  hasTestimonials?: boolean;
  hasGif?: boolean;
  gifUrl?: string;
  onSelect: (optionId: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export interface Testimonial {
  name: string;
  timeAgo: string;
  imageUrl: string;
  rating: number;
}
