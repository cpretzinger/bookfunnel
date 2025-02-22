import { BuyButton, SuccessMetric } from '../shared/CommonComponents';

export function TransformationStory() {
  return (
    <section className="mb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#26361C] mb-8">
          But It Doesn't Have To Be This Way...
        </h2>
        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <p className="text-lg mb-6">
            "We refused to accept that fate. After years of trial and error, countless sleepless nights, and interviewing hundreds of successful agents, we discovered something incredible..."
          </p>
          <p className="text-lg mb-8">
            "We found a small group of agents who were quietly building million-dollar agencies while working LESS than everyone else. They had cracked the code. And after analyzing over 100 million sales calls and testing every strategy imaginable, we finally figured out their secret."
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
          <p className="text-lg font-semibold text-[#AB760F] mb-8">
            Today, we're sharing everything we learned in our new book. And the best part? You don't need special skills or connections - you just need to follow the blueprint.
          </p>
          <BuyButton />
        </div>
      </div>
    </section>
  );
}
