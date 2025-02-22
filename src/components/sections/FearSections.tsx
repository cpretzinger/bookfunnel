import {
  Clock,
  Briefcase,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { BuyButton, FearCard } from '../shared/CommonComponents';
import { StorySection } from './StorySection';

export function FearSections() {
  return (
    <>
      {/* Fear Section 1 */}
      <section className="bg-[#26361C] text-white p-8 rounded-xl mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">The Brutal Truth About Running An Agency Today</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FearCard
              icon={<Clock />}
              title="Never-Ending Workdays"
              quote="I'd come into the office before sunrise and leave well after sunset. Many days, I wouldn't even make it outside, except to hit the restroom — even then I'd be on the phone half the time."
              author="Co-Author, Craig Pretzinger"
            />
            <FearCard
              icon={<Briefcase />}
              title="Financial Disaster"
              quote="I was getting to the office before sunrise and leaving after dark; it wasn't sustainable. I'd spent months recruiting, interviewing, and training, and had spent a ton on leads. And just like that, they were all gone."
              author="Co-Author, Jason Feltman"
            />
          </div>
        </div>
      </section>

      <StorySection />

      {/* Fear Section 2 */}
      <section className="bg-[#26361C] text-white p-8 rounded-xl mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Ever Felt Like Taking Lunch Was Too Risky?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <FearCard
              icon={<Calendar />}
              title="Missing Life's Moments"
              quote="We missed birthdays, anniversaries, and recitals because we were 'running' our agencies when in reality, our agencies were running us."
              author="Co-Author, Jason Feltman"
            />
            <FearCard
              icon={<AlertTriangle />}
              title="Market Instability"
              quote="I watched my premium pour out like water from a leaky bucket. The market was changing, and I felt powerless to stop it."
              author="Co-Author, Craig Pretzinger"
            />
          </div>
          <div className="text-center">
            <BuyButton />
          </div>
        </div>
      </section>
    </>
  );
}
