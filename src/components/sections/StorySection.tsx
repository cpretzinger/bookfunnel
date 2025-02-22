import React from 'react';

export function StorySection() {
  return (
    <section className="max-w-4xl mx-auto mb-16">
      <h2 className="text-4xl font-display text-green-700 text-center mb-8 drop-shadow-lg">
        "If I Hadn't Found This Book, I Was Doomed"
      </h2>
      <div className="flex gap-8 h-[500px] shadow-xl rounded-xl overflow-hidden">
        {/* Book Cover */}
        <div className="w-1/2 relative p-4">
          <div className="absolute inset-0 bg-amber-100/30 rounded-lg transform -rotate-3"></div>
          <img 
            src="/assetsforbuild/MDA Cover.jpeg" 
            alt="Million Dollar Agency Book Cover" 
            className="w-full h-full object-contain relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Story Text */}
        <div className="w-1/2 bg-[#93A389] bg-opacity-50 p-8 flex flex-col">
          <p className="text-sm text-[#AB760F] text-center mb-2">I Was Treading Water For So Long!</p>
          <h2 className="text-2xl font-bold text-center mb-6 text-[#26361C] font-['DM_Sans']">
            Never Believed $100k Was Possible In Tucson
          </h2>
          <div className="space-y-6 font-['DM_Mono'] text-[#26361C] text-sm leading-relaxed">
            <p>
              "Walking out of Merrill Lynch for the last time was bittersweet. Three years of financial advising had gone well, but it was time to pursue becoming my own boss. The opportunity to purchase my own insurance agency seemed like my ticket to freedom..."
            </p>
            <p>
              "But fairly quickly I realized that with the current setup, I was on a hamster wheel. My goal had been to unlock freedom, build up a sellable asset to become wealthy, and serve others at a high level..."
            </p>
            <p>
              "Instead, I became a jack of all trades - taking payments, saving clients from canceling policies, selling new policies, and being a punching bag for angry clients. I was working longer hours than ever before, with less to show for it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
