import React from 'react';
import { 
  BookOpen, 
  DollarSign, 
  Shield, 
  Target, 
  Users, 
  CheckCircle2, 
  Clock, 
  Star, 
  Award, 
  Heart, 
  AlertTriangle, 
  Briefcase, 
  Calendar, 
  ShoppingCart 
} from 'lucide-react';

// Component Types
type BuyButtonProps = {
  className?: string;
};

type BenefitItemProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

type PainPointProps = {
  children: React.ReactNode;
};

type BulletPointProps = {
  children: React.ReactNode;
};

type TestimonialCardProps = {
  quote: string;
  author: string;
  achievement: string;
};

type FearCardProps = {
  icon: React.ReactNode;
  title: string;
  quote: string;
  author: string;
};

type SuccessMetricProps = {
  number: string;
  label: string;
};

type BonusItemProps = {
  title: string;
  value: string;
  description: string;
};

type AmazonReviewProps = {
  stars: number;
  title: string;
  quote: string;
};

type ChapterPreviewProps = {
  title: string;
  description: string;
  keyPoints: string[];
};

type CaseStudyProps = {
  name: string;
  agency: string;
  before: string;
  after: string;
  quote: string;
  image: string;
};

type FAQItemProps = {
  question: string;
  answer: string;
};

// Reusable Components
function BuyButton({ className = '' }: BuyButtonProps) {
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

function BenefitItem({ icon, children }: BenefitItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#AB760F]">{icon}</div>
      <p className="text-lg">{children}</p>
    </div>
  );
}

function PainPoint({ children }: PainPointProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
      <div className="text-[#AB760F] mt-1">
        <CheckCircle2 />
      </div>
      <p className="text-lg">{children}</p>
    </div>
  );
}

function BulletPoint({ children }: BulletPointProps) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle2 className="text-[#AB760F] flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function TestimonialCard({ quote, author, achievement }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-[#AB760F] mb-4">
        <Star className="w-8 h-8" />
      </div>
      <blockquote className="text-lg italic mb-4">{quote}</blockquote>
      <p className="font-bold text-[#26361C]">{author}</p>
      <p className="text-sm text-gray-600">{achievement}</p>
    </div>
  );
}

function FearCard({ icon, title, quote, author }: FearCardProps) {
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

function SuccessMetric({ number, label }: SuccessMetricProps) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-[#AB760F] mb-2">{number}</p>
      <p className="text-sm">{label}</p>
    </div>
  );
}

function BonusItem({ title, value, description }: BonusItemProps) {
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

function AmazonReview({ stars, title, quote }: AmazonReviewProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex mb-2">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-[#AB760F]" fill="#AB760F" />
        ))}
      </div>
      <h3 className="text-lg font-bold text-[#26361C] mb-2">{title}</h3>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
}

function ChapterPreview({ title, description, keyPoints }: ChapterPreviewProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-[#26361C] mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {keyPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 className="text-[#AB760F] w-5 h-5 flex-shrink-0 mt-1" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudy({ name, agency, before, after, quote, image }: CaseStudyProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img src={image} alt={name} className="rounded-lg w-full" />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-xl font-bold text-[#26361C] mb-2">{name}</h3>
          <p className="text-[#AB760F] font-semibold mb-4">{agency}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Before</p>
              <p className="font-semibold">{before}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">After</p>
              <p className="font-semibold text-[#AB760F]">{after}</p>
            </div>
          </div>
          <blockquote className="italic text-gray-700">"{quote}"</blockquote>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold text-[#26361C] mb-3">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#26361C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover The Hidden Blueprint That's Helping P&C Agents Build
            <span className="text-[#AB760F]"> Million-Dollar Agencies</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Even If You're Struggling To Get Clients And Feel Like You're Falling Behind In Today's Competitive Market
          </p>
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
          <BuyButton className="mx-auto mb-8" />
          <div className="bg-[#AB760F]/10 p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg italic">
              "Jason Feltman and Craig Pretzinger are pretty much giving away the key to insurance agency success in this short and entertaining read."
              <span className="block mt-2 text-sm">- Verified Amazon Review</span>
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Book Preview Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000"
              alt="Million Dollar Agency Book"
              className="rounded-lg shadow-2xl"
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

        {/* Fear Section 2 */}
        <section className="bg-[#26361C] text-white p-8 rounded-xl mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">It Felt Like Taking Lunch Would Cost Me Money, Let Alone A Day Off</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <FearCard
                icon={<Calendar />}
                title="Missing Life's Moments"
                quote="We missed birthdays, anniversaries, and recitals because we were 'running' our agencies when in reality, our agencies were running us."
                author="Jason F."
              />
              <FearCard
                icon={<AlertTriangle />}
                title="Market Instability"
                quote="I watched my premium pour out like water from a leaky bucket. The market was changing, and I felt powerless to stop it."
                author="Craig P."
              />
            </div>
            <div className="text-center">
              <BuyButton />
            </div>
          </div>
        </section>

        {/* Transformation Story */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#26361C] mb-8">
              But It Doesn't Have To Be This Way...
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <p className="text-lg mb-6">
                We refused to accept that fate. After years of trial and error, countless sleepless nights, and over
                100 million sales calls analyzed, we cracked the code. Today:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <SuccessMetric
                  number="80+"
                  label="Hour Work Weeks Eliminated"
                />
                <SuccessMetric
                  number="4x"
                  label="Average Revenue Growth"
                />
                <SuccessMetric
                  number="1000s"
                  label="Of Agents Helped"
                />
              </div>
              <BuyButton />
            </div>
          </div>
        </section>

        {/* Fear Section 1 */}
        <section className="bg-[#26361C] text-white p-8 rounded-xl mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Brutal Truth About Running An Agency Today</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <FearCard
                icon={<Clock />}
                title="Never-Ending Workdays"
                quote="I'd come into the office before sunrise and leave well after sunset. Many days, I wouldn't even make it outside, except to hit the restroom — even then I'd be on the phone half the time."
                author="Craig P."
              />
              <FearCard
                icon={<Briefcase />}
                title="Financial Disaster"
                quote="I was getting to the office before sunrise and leaving after dark; it wasn't sustainable. I'd spent months recruiting, interviewing, and training, and had spent a ton on leads. And just like that, they were all gone."
                author="Jason F."
              />
            </div>
          </div>
        </section>

        {/* Amazon Reviews Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center text-[#26361C] mb-8">
            What Amazon Readers Are Saying About "Million Dollar Agency"
          </h2>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#AB760F]" fill="#AB760F" />
                ))}
              </div>
              <span className="text-2xl font-bold text-[#26361C]">4.8/5</span>
            </div>
            <p className="text-gray-600">Based on all global ratings</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <AmazonReview
              stars={5}
              title="The Key to Agency Success!"
              quote="Jason Feltman and Craig Pretzinger are pretty much giving away the key to insurance agency success in this short and entertaining read. The story of the authors' journey and the breakdown of their system is very relatable and provides a clear roadmap to follow."
            />
            <AmazonReview
              stars={5}
              title="A Must Read!"
              quote="This book is for anyone wanting to learn how to develop a Million-Dollar Agency! The blueprint is crystal clear and the strategies are immediately actionable. One of the best investments I've made in my agency's future."
            />
          </div>
          <div className="text-center">
            <BuyButton />
          </div>
        </section>

        {/* Chapter Previews */}
        <section className="mb-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#26361C] mb-8">
              Inside The Million Dollar Agency Blueprint
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ChapterPreview
                title="The Million Dollar Mindset"
                description="Discover the psychological shifts that separate seven-figure agency owners from the rest."
                keyPoints={[
                  "Why most agents stay stuck in the six-figure trap",
                  "The 3 beliefs you must eliminate to scale",
                  "How to think like a CEO, not a salesperson"
                ]}
              />
              <ChapterPreview
                title="Your Perfect Client Profile"
                description="Learn how to identify and attract the most profitable clients for your agency."
                keyPoints={[
                  "The 'Golden Client' identification framework",
                  "How to position yourself as the only choice",
                  "Creating magnetic marketing messages"
                ]}
              />
              <ChapterPreview
                title="The High-Performance Sales System"
                description="Our proven process for converting leads into long-term clients."
                keyPoints={[
                  "The 7-step sales conversation blueprint",
                  "Handling objections with confidence",
                  "Creating clients for life"
                ]}
              />
              <ChapterPreview
                title="Building Your Dream Team"
                description="Scale your agency with the right people in the right roles."
                keyPoints={[
                  "The perfect hiring timeline",
                  "Training systems that work",
                  "Creating a culture of success"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-gray-50 p-8 rounded-xl mb-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#26361C] mb-8">
              Real Results From Real Agents
            </h2>
            <div className="space-y-8">
              <CaseStudy
                name="Michael Rodriguez"
                agency="Rodriguez Insurance Group"
                before="$42,000/month in premium"
                after="$168,000/month in premium"
                quote="The systems in this book helped me 4x my monthly premium in just 8 months. The best part? I'm working fewer hours than ever."
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
              />
              <CaseStudy
                name="Sarah Thompson"
                agency="Thompson Family Insurance"
                before="70-hour work weeks"
                after="35-hour work weeks"
                quote="I went from being chained to my desk to having real freedom. My agency runs like clockwork now, even when I'm not there."
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
              />
              <CaseStudy
                name="David Chen"
                agency="Pacific Coast Insurance"
                before="$890k annual revenue"
                after="$2.4M annual revenue"
                quote="The lead generation and conversion strategies alone are worth 100x the price of the book. This is the blueprint I wish I had when I started."
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
              />
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#26361C] mb-8">
              Your 90-Day Implementation Timeline
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#26361C] mb-4">Days 1-30: Foundation</h3>
                  <ul className="space-y-3">
                    <BulletPoint>Complete the Agency Assessment Tool</BulletPoint>
                    <BulletPoint>Implement the Daily Success Routine</BulletPoint>
                    <BulletPoint>Set up your lead generation systems</BulletPoint>
                    <BulletPoint>Master the core sales conversation</BulletPoint>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#26361C] mb-4">Days 31-60: Optimization</h3>
                  <ul className="space-y-3">
                    <BulletPoint>Refine your target market strategy</BulletPoint>
                    <BulletPoint>Implement advanced closing techniques</BulletPoint>
                    <BulletPoint>Start building your support team</BulletPoint>
                    <BulletPoint>Create your referral generation system</BulletPoint>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#26361C] mb-4">Days 61-90: Scale</h3>
                  <ul className="space-y-3">
                    <BulletPoint>Launch your automated marketing campaigns</BulletPoint>
                    <BulletPoint>Implement team training systems</BulletPoint>
                    <BulletPoint>Create your agency growth dashboard</BulletPoint>
                    <BulletPoint>Set up your retention automation</BulletPoint>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#26361C] mb-8">
            Get Your Copy Of "Million Dollar Agency" For Just $19.97
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

        {/* Final CTA */}
        <section className="bg-gray-50 p-8 rounded-xl mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#26361C] mb-6">
            Don't Let Another Day Go By...
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Every day you wait is another day stuck in the same frustrating cycle. Take the first step toward building 
            your million-dollar agency today.
          </p>
          <BuyButton className="mx-auto" />
        </section>

        {/* Chapter Cards Section */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                  Why Clients Choose Price Over You (And How to Fix It)
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  What if prospects stopped asking 'How much?' and started saying 'When can we start?' Former bartender Jason Feltman transformed his struggling agency by discovering three elements of an irresistible offer that prospects simply can't resist. If you're tired of losing to discount carriers, this chapter reveals the counterintuitive approach that positions your agency as the obvious choice—regardless of premium.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&q=80&w=800"
                  alt="One man band representing versatility in insurance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#26361C] text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} The Insurance Dudes. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;