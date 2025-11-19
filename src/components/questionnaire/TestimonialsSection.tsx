import React from 'react';
import { Star } from 'lucide-react';
import { realTestimonialImages } from '@/data/testimonials';

const TestimonialsSection: React.FC = () => {
  const getAvatarImage = (name: string) => {
    if (name === "Roberto S.") {
      return "/lovable-uploads/adf48501-c72b-4cb6-889e-887ed26c14de.png";
    }
    if (name === "Marcelo T.") {
      return "/lovable-uploads/5c73b7d5-2d30-4eb5-b05b-e3a8ef7e0ea4.png";
    }
    if (name === "Henrique L.") {
      return "/lovable-uploads/bfd35664-1c60-4142-8d33-af265e41ba43.png";
    }
    // Default avatar for other testimonials
    return "/lovable-uploads/b12ba5f7-65bf-44f9-92a3-89ea370a1fb8.png";
  };

  return (
    <div className="mb-8 space-y-6">
      {realTestimonialImages.map((testimonial, index) => (
        <div
          key={index}
          className="bg-[#2A2A2A] p-4 rounded-2xl border border-[#3A3A3A] shadow-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={getAvatarImage(testimonial.name)}
                  alt={`Avatar de ${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{testimonial.name}</h3>
                <div className="flex text-[#FF6F00] mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <span className="text-xs text-[#AEAEB2] bg-[#3A3A3A] px-2 py-1 rounded-full">
              há {testimonial.timeAgo}
            </span>
          </div>
          
          {/* Testimonial Conversation Screenshot */}
          <div className="mt-3">
            <img
              src={testimonial.imageUrl}
              alt={`Conversa com ${testimonial.name}`}
              className="w-full rounded-lg border border-[#3A3A3A] object-contain"
              onError={(e) => {
                // Fallback caso a imagem não carregue
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSection;
