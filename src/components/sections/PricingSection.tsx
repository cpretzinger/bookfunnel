import { BuyButton, BulletPoint, BonusItem } from '../shared/CommonComponents';

export function PricingSection() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-6xl font-bold text-[#26361C] mb-8">
        Your $20 Ticket To Millions In Revenue
      </h2>
      <div className="bg-[#26361C] text-white p-8 rounded-xl max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Here's What You'll Learn:</h3>
        <ul className="text-left space-y-4 mb-8">
          <BulletPoint>The exact system we used to build multiple 7-figure agencies from scratch</BulletPoint>
          <BulletPoint>Our proven client acquisition framework that works in any economy</BulletPoint>
          <BulletPoint>How to escape the 80-hour workweek trap while growing your business</BulletPoint>
          <BulletPoint>The "Million Dollar Mindset" shifts you need to scale your agency</BulletPoint>
          <BulletPoint>Step-by-step hiring and training systems for building your dream team</BulletPoint>
          <BulletPoint>Advanced marketing strategies that keep your pipeline full of quality leads</BulletPoint>
        </ul>
        <div className="bg-white text-[#26361C] p-6 rounded-lg mb-8">
          <h4 className="text-xl font-bold mb-4">Limited Time Bonus Package:</h4>
          <div className="space-y-4">
            <BonusItem
              title="Insurance Leads Secrets Guide"
              value="$97"
              description="Our proven strategies for converting internet leads into profitable policies"
            />
            <BonusItem
              title="Agency Growth Calculator"
              value="$47"
              description="Custom spreadsheet to project your agency's growth potential"
            />
            <BonusItem
              title="Sales Script Templates"
              value="$147"
              description="Copy-and-paste scripts that consistently close deals"
            />
          </div>
          <div className="mt-6 p-4 bg-[#AB760F]/10 rounded-lg">
            <p className="font-bold text-lg">Total Bonus Value: $291</p>
            <p className="text-sm">Yours FREE with your copy of Million Dollar Agency</p>
          </div>
        </div>
        <BuyButton className="w-full text-xl py-4" />
        <p className="text-sm mt-4 mb-2">
          Regular Price: $97 | Today Only: $19.97
        </p>
        <p className="text-xs">
          *Limited time offer - Price will increase soon
        </p>
      </div>
    </section>
  );
}
