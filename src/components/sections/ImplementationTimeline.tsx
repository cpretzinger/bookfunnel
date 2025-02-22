import React from 'react';
import { BulletPoint } from '../shared/CommonComponents';

type TimelinePhaseProps = {
  title: string;
  points: string[];
};

function TimelinePhase({ title, points }: TimelinePhaseProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-[#26361C] mb-4">{title}</h3>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <BulletPoint key={index}>{point}</BulletPoint>
        ))}
      </ul>
    </div>
  );
}

export function ImplementationTimeline() {
  return (
    <section className="mb-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#26361C] mb-8">
          Your 90-Day Implementation Timeline
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <TimelinePhase
              title="Days 1-30: Foundation"
              points={[
                "Complete the Agency Assessment Tool",
                "Implement the Daily Success Routine",
                "Set up your lead generation systems",
                "Master the core sales conversation"
              ]}
            />
            <TimelinePhase
              title="Days 31-60: Optimization"
              points={[
                "Refine your target market strategy",
                "Implement advanced closing techniques",
                "Start building your support team",
                "Create your referral generation system"
              ]}
            />
            <TimelinePhase
              title="Days 61-90: Scale"
              points={[
                "Launch your automated marketing campaigns",
                "Implement team training systems",
                "Create your agency growth dashboard",
                "Set up your retention automation"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
