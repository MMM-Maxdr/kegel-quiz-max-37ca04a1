
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

interface EmailCaptureProps {
  onSubmit: (email: string) => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      onSubmit(email);
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FF6F00] rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-4">
            Insira seu e-mail para acessar seu Plano Pessoal
          </h1>
          <div className="w-24 h-1 bg-[#FF6F00] mx-auto mb-6"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#AEAEB2]" />
            <Input
              type="email"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#2C2C2E] border-[#2C2C2E] text-white pl-12 py-4 rounded-xl focus:ring-[#FF6F00] focus:border-[#FF6F00]"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={!email.includes('@')}
            className="w-full py-4 bg-[#FF6F00] hover:bg-[#E55A00] text-white font-semibold rounded-xl disabled:bg-[#2C2C2E] disabled:text-[#AEAEB2] transition-all duration-200"
          >
            Continuar
          </Button>
        </form>

        <p className="text-[#AEAEB2] text-sm text-center mt-6 leading-relaxed">
          Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais.
        </p>
      </div>
    </div>
  );
};

export default EmailCapture;
