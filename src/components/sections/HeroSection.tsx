import {
  Clock,
  AlertTriangle,
  Target,
  Star,
  Award,
  Heart
} from 'lucide-react';
import { BuyButton } from '../shared/CommonComponents';

export function HeroSection() {
  return (
    <header className="bg-[#26361C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            "I Was Getting To The Office Before Sunrise And Leaving After Dark..."
          </h1>
          {/* Video Placeholder */}
          <div className="bg-[#AB760F]/10 p-6 rounded-lg mb-8 aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-semibold mb-2">Video Coming Soon</p>
              <p className="text-lg text-[#AB760F]">Book Video - To Be Created</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Clock className="w-12 h-12 text-[#AB760F] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">80+ Hour Weeks</h3>
              <p>Trapped in the office from sunrise to sunset</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <AlertTriangle className="w-12 h-12 text-[#AB760F] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Leaking</h3>
              <p>Watching policies pour out like water from a leaky bucket</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Target className="w-12 h-12 text-[#AB760F] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Clear Path</h3>
              <p>Struggling to find a system that actually worked</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              But Then Everything Changed When We Discovered...
            </h2>
            <h3 className="text-2xl text-[#AB760F] font-bold mb-6">
              The Hidden Blueprint That's Helping P&C Agents Build Million-Dollar Agencies
            </h3>
            <div className="flex flex-wrap justify-center gap-4 items-center text-lg mb-8">
              <div className="flex items-center">
                <Star className="text-[#AB760F] w-5 h-5 mr-2" />
                <span>4.8/5 Rating on Amazon</span>
              </div>
              <div className="flex items-center">
                <Award className="text-[#AB760F] w-5 h-5 mr-2" />
                <span>Amazon Bestseller</span>
              </div>
              <div className="flex items-center">
                <Heart className="text-[#AB760F] w-5 h-5 mr-2" />
                <span>Trusted by 1000s of Agents</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <BuyButton className="mx-auto mb-8" />
            <div className="bg-[#AB760F]/10 p-4 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg italic">
                "Jason Feltman and Craig Pretzinger are pretty much giving away the key to insurance agency success in this short and entertaining read."
                <span className="block mt-2 text-sm">- Verified Amazon Review</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
