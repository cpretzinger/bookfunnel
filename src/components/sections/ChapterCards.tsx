import {
  Package, Coins, Star, Target, BarChart3, Repeat,
  Clock, Redo2, FileText, UserCheck, ListChecks, Calendar,
  ShieldCheck, MessageSquareText, CheckCircle2, Users,
  LineChart, Trophy, Heart, Lock, ArrowRightLeft,
  UserCog, ClipboardCheck, TrendingUp, MessageCircle,
  PieChart, Zap, Sparkles, Workflow, PartyPopper
} from 'lucide-react';

type ChapterMiniCardProps = {
  icon: React.ReactNode;
  concept: string;
};

function ChapterMiniCard({ icon, concept }: ChapterMiniCardProps) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-r from-[#AB760F] to-[#26361C] text-white">
      <div className="text-[#FFD700] mb-2">
        {icon}
      </div>
      <p className="text-center text-sm font-medium">{concept}</p>
    </div>
  );
}

export function ChapterCards() {
  return (
    <section className="py-24 bg-gray-50 mt-8">
      <h2 className="text-6xl font-bold text-center text-[#26361C] mb-12">We'd Been Making So Many Small Mistakes</h2>
      <h2 className="text-3xl font-bold text-center text-[#26361C] mb-12">Our Agencies Were Toast  </h2>
      <div className="container mx-auto px-4 space-y-8 max-w-6xl">
        {/* Chapter 1 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="row-span-3">
              <img 
                src="/chapter1.webp"
                alt="Chapter 1 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 1</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                Why Clients Choose Price Over You (And How to Fix It)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                What if prospects stopped asking 'How much?' and started saying 'When can we start?' Former bartender Jason Feltman transformed his struggling agency by discovering three elements of an irresistible offer that prospects simply can't resist. If you're tired of losing to discount carriers, this chapter reveals the counterintuitive approach that positions your agency as the obvious choice—regardless of premium.
              </p>
            </div>
            <div className="col-span-3 col-start-2 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<Package className="w-5 h-5" />} concept="Value Proposition" />
              <ChapterMiniCard icon={<Coins className="w-5 h-5" />} concept="Price Positioning" />
              <ChapterMiniCard icon={<Star className="w-5 h-5" />} concept="Unique Benefits" />
            </div>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 2</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                How I Spent $70K on Direct Mail with Nothing to Show While Others Made $200K Months
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ever wonder why some agencies throw money at marketing with little return while others generate consistent 5-figure months? Former insurance agent David Walton wasted over $70,000 on unmeasurable campaigns before discovering the crucial 80/20 flip that transformed his business. If you're tired of ineffective networking events and advertising that drains your budget without filling your pipeline, this chapter reveals the exact measurement system that eliminates guesswork and turns your marketing into a predictable lead generation machine—finally putting you in control of your agency's growth.
              </p>
            </div>
            <div className="row-span-3">
              <img 
                src="/chapter2.webp"
                alt="Chapter 2 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<Target className="w-5 h-5" />} concept="Direct Approach" />
              <ChapterMiniCard icon={<BarChart3 className="w-5 h-5" />} concept="Measurable Results" />
              <ChapterMiniCard icon={<Repeat className="w-5 h-5" />} concept="Consistent Action" />
            </div>
          </div>
        </div>
        {/* Chapter 3 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="row-span-3">
              <img 
                src="/chapter3.webp"
                alt="Chapter 3 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 3</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                The Art of Lead Follow-Up War
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ever wonder how 20 dials became 100+ sales with a systematic approach? This chapter reveals the exact follow-up framework, automation tools, and conversion tactics that eliminate lead wastage and transform missed opportunities into consistent sales. If you're tired of leads slipping through the cracks, discover how timing optimization and persistence can revolutionize your follow-up game.
              </p>
            </div>
            <div className="col-span-3 col-start-2 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<Clock className="w-5 h-5" />} concept="Timing Strategy" />
              <ChapterMiniCard icon={<Redo2 className="w-5 h-5" />} concept="Persistence System" />
              <ChapterMiniCard icon={<FileText className="w-5 h-5" />} concept="Conversion Scripts" />
            </div>
          </div>
        </div>

        {/* Chapter 4 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 4</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                Your Frontline Callers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From 2 quotes to 20 quotes per day - discover how to transform your frontline calling team. This chapter addresses key challenges like caller turnover, inconsistent results, and training issues through a proven hiring framework, comprehensive training program, and performance optimization strategies. Learn how to build and maintain a high-performing team that consistently delivers results.
              </p>
            </div>
            <div className="row-span-3">
              <img 
                src="/chapter4.webp"
                alt="Chapter 4 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<UserCheck className="w-5 h-5" />} concept="First Impression" />
              <ChapterMiniCard icon={<ListChecks className="w-5 h-5" />} concept="Qualifying Questions" />
              <ChapterMiniCard icon={<Calendar className="w-5 h-5" />} concept="Appointment Setting" />
            </div>
          </div>
        </div>

        {/* Chapter 5 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="row-span-3">
              <img 
                src="/chapter5.webp"
                alt="Chapter 5 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 5</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                Your Script
              </h2>
              <p className="text-gray-700 leading-relaxed">
                One script change doubled our closing rate. This chapter tackles inconsistent messaging, lost opportunities, and poor conversion rates through a standardized approach that delivers measurable results. Learn the script framework, practice system, and continuous improvement methods that will transform your team's confidence and effectiveness.
              </p>
            </div>
            <div className="col-span-3 col-start-2 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<ShieldCheck className="w-5 h-5" />} concept="Objection Handlers" />
              <ChapterMiniCard icon={<MessageSquareText className="w-5 h-5" />} concept="Value Statements" />
              <ChapterMiniCard icon={<CheckCircle2 className="w-5 h-5" />} concept="Closing Techniques" />
            </div>
          </div>
        </div>

        {/* Chapter 6 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 6</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                Your Sales Agents
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From struggling to sell to $50K months - this chapter reveals how to overcome agent turnover, inconsistent performance, and motivation challenges. Discover the team culture, clear metrics, and support systems that create a thriving sales environment, along with proven hiring processes, training programs, and retention strategies.
              </p>
            </div>
            <div className="row-span-3">
              <img 
                src="/chapter6.webp"
                alt="Chapter 6 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<Users className="w-5 h-5" />} concept="Talent Selection" />
              <ChapterMiniCard icon={<LineChart className="w-5 h-5" />} concept="Performance Metrics" />
              <ChapterMiniCard icon={<Trophy className="w-5 h-5" />} concept="Incentive Structure" />
            </div>
          </div>
        </div>

        {/* Chapter 7 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="row-span-3">
              <img 
                src="/chapter7.webp"
                alt="Chapter 7 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 7</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                Service Agents
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Achieve 90% retention with half the effort. This chapter addresses service inconsistency, client churn, and workload management through process automation, service standards, and team efficiency. Learn the service framework, retention strategies, and quality metrics that will transform your service team into a client retention powerhouse.
              </p>
            </div>
            <div className="col-span-3 col-start-2 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<Heart className="w-5 h-5" />} concept="Client Experience" />
              <ChapterMiniCard icon={<Lock className="w-5 h-5" />} concept="Retention Tactics" />
              <ChapterMiniCard icon={<ArrowRightLeft className="w-5 h-5" />} concept="Cross-Selling" />
            </div>
          </div>
        </div>

        {/* Chapter 8 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 8</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                Management
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From operator to true owner in 90 days. This chapter tackles time management, team oversight, and growth barriers through leadership development, systems thinking, and delegation. Discover the management framework, team development strategies, and growth tactics that will transform you from working in your business to working on it.
              </p>
            </div>
            <div className="row-span-3">
              <img 
                src="/chapter8.webp"
                alt="Chapter 8 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<UserCog className="w-5 h-5" />} concept="Team Leadership" />
              <ChapterMiniCard icon={<ClipboardCheck className="w-5 h-5" />} concept="Accountability" />
              <ChapterMiniCard icon={<TrendingUp className="w-5 h-5" />} concept="Growth Planning" />
            </div>
          </div>
        </div>

        {/* Chapter 9 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="row-span-3">
              <img 
                src="/chapter9.webp"
                alt="Chapter 9 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 9</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                Daily Meetings
              </h2>
              <p className="text-gray-700 leading-relaxed">
                15 minutes that doubled our results. This chapter addresses meeting effectiveness, team engagement, and time waste through structured frameworks and proven strategies. Learn how to transform your daily huddles into powerful drivers of performance, accountability, and team alignment.
              </p>
            </div>
            <div className="col-span-3 col-start-2 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<MessageCircle className="w-5 h-5" />} concept="Huddle Format" />
              <ChapterMiniCard icon={<PieChart className="w-5 h-5" />} concept="KPI Review" />
              <ChapterMiniCard icon={<Zap className="w-5 h-5" />} concept="Energy Boosters" />
            </div>
          </div>
        </div>

        {/* Chapter 10 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-8 p-8">
            <div className="col-span-3">
              <p className="text-[#AB760F] font-['DS Sans'] text-sm mb-2">Chapter 10</p>
              <h2 className="text-2xl font-bold text-[#26361C] mb-4">
                Team Building
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From solo struggle to dream team. This chapter addresses hiring mistakes, training gaps, and culture issues through proven frameworks and systems. Learn how to build and maintain a high-performing team through effective hiring practices, comprehensive training systems, and strategic retention tactics.
              </p>
            </div>
            <div className="row-span-3">
              <img 
                src="/chapter10.webp"
                alt="Chapter 10 illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <ChapterMiniCard icon={<Sparkles className="w-5 h-5" />} concept="Culture Creation" />
              <ChapterMiniCard icon={<Workflow className="w-5 h-5" />} concept="Skill Development" />
              <ChapterMiniCard icon={<PartyPopper className="w-5 h-5" />} concept="Celebration Rituals" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
