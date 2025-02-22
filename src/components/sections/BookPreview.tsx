import {
  Shield,
  Target,
  Users,
  DollarSign
} from 'lucide-react';
import { BuyButton, BenefitItem } from '../shared/CommonComponents';

export function BookPreview() {
  return (
    <div>
      <div className="relative mb-16">
        <h2 className="text-4xl font-display text-green-700 text-center mb-8 drop-shadow-lg">
          "The Brutal Truth About Running An Agency Today"
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-amber-100/30 rounded-lg transform -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000"
              alt="Million Dollar Agency Book"
              className="rounded-lg shadow-2xl relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#26361C] mb-6">
              Finally, A Proven System That Actually Works For P&C Agents
            </h2>
            <div className="space-y-4 mb-8">
              <BenefitItem icon={<Shield />}>
                Stop struggling with outdated sales techniques that don't work anymore
              </BenefitItem>
              <BenefitItem icon={<Target />}>
                Learn how to target and attract your ideal clients consistently
              </BenefitItem>
              <BenefitItem icon={<Users />}>
                Build a reliable referral system that brings steady business
              </BenefitItem>
              <BenefitItem icon={<DollarSign />}>
                Scale your agency to seven figures without burning out
              </BenefitItem>
            </div>
            <BuyButton />
          </div>
        </div>
      </div>
    </div>
  );
}
