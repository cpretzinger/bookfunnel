import React from 'react';
import { 
  ShoppingCart,
  CheckCircle2,
} from 'lucide-react';

// Component Types
export type BuyButtonProps = {
  className?: string;
};

export type BenefitItemProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

export type BulletPointProps = {
  children: React.ReactNode;
};

export type FearCardProps = {
  icon: React.ReactNode;
  title: string;
  quote: string;
  author: string;
};

export type SuccessMetricProps = {
  number: string;
  label: string;
};

export type BonusItemProps = {
  title: string;
  value: string;
  description: string;
};

// Reusable Components
export function BuyButton({ className = '' }: BuyButtonProps) {
  const handleBuyNow = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={handleBuyNow}
      className={`bg-[#AB760F] hover:bg-[#8B600D] text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-colors ${className}`}
    >
      <ShoppingCart className="w-5 h-5" />
      Buy The Book Now!
    </button>
  );
}

export function BenefitItem({ icon, children }: BenefitItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#AB760F]">{icon}</div>
      <p className="text-lg">{children}</p>
    </div>
  );
}

export function BulletPoint({ children }: BulletPointProps) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle2 className="text-[#AB760F] flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export function FearCard({ icon, title, quote, author }: FearCardProps) {
  return (
    <div className="bg-white/10 p-6 rounded-lg">
      <div className="text-[#AB760F] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <blockquote className="text-sm italic mb-3">"{quote}"</blockquote>
      <p className="text-sm text-[#AB760F]">- {author}</p>
    </div>
  );
}

export function SuccessMetric({ number, label }: SuccessMetricProps) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-[#AB760F] mb-2">{number}</p>
      <p className="text-sm">{label}</p>
    </div>
  );
}

export function BonusItem({ title, value, description }: BonusItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#AB760F]">
        <CheckCircle2 />
      </div>
      <div>
        <p className="font-bold">{title} <span className="text-[#AB760F]">({value} Value)</span></p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
