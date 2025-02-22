import React from 'react';
import { PremiumROICalculator } from './components/PremiumROICalculator';
import { HeroSection } from './components/sections/HeroSection';
import { FearSections } from './components/sections/FearSections';
import { BookPreview } from './components/sections/BookPreview';
import { TransformationStory } from './components/sections/TransformationStory';
import { AmazonReviews } from './components/sections/AmazonReviews';
import { ChapterPreviews } from './components/sections/ChapterPreviews';
import { SalesPerformanceOptimizer } from './components/sections/SalesPerformanceOptimizer';
import { ImplementationTimeline } from './components/sections/ImplementationTimeline';
import { PricingSection } from './components/sections/PricingSection';
import { ChapterCards } from './components/sections/ChapterCards';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <main>
        <div className="container mx-auto px-4 py-12">
          <FearSections />
        </div>
        <ChapterCards />
        <div className="container mx-auto px-4 py-12">
          <BookPreview />
          <TransformationStory />
          <AmazonReviews />
          <ChapterPreviews />
          <SalesPerformanceOptimizer />
          <ImplementationTimeline />
          <PricingSection />
          <PremiumROICalculator />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
