import { Star } from 'lucide-react';
import { BuyButton } from '../shared/CommonComponents';

type AmazonReviewProps = {
  stars: number;
  title: string;
  quote: string;
};

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

export function AmazonReviews() {
  return (
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
  );
}
