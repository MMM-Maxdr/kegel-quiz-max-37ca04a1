
import React from 'react';

interface GifSectionProps {
  gifUrl: string;
}

const GifSection: React.FC<GifSectionProps> = ({
  gifUrl
}) => {
  return (
    <div className="mb-8">
      <img 
        src={gifUrl} 
        alt="Exercício Kegel" 
        className="w-full h-auto object-contain rounded-lg"
        style={{
          maxHeight: '250px'
        }}
        loading="lazy"
      />
    </div>
  );
};

export default GifSection;
