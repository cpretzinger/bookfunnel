import { CheckCircle2 } from 'lucide-react';

type ChapterPreviewProps = {
  title: string;
  description: string;
  keyPoints: string[];
};

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

export function ChapterPreviews() {
  return (
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
  );
}
