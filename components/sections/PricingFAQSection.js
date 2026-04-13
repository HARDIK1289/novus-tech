import { HelpCircle, Clock, Zap } from 'lucide-react';
import PricingFAQItem from '@/components/ui/PricingFAQItem';

export default function PricingFAQSection() {
  const faqs = [
    { icon: HelpCircle, question: 'Can I just buy a Logo?', answer: "Yes! You don't need to buy a website to use our design or marketing services. We are happy to work on standalone creative projects." },
    { icon: Clock, question: 'Do you run the ads for us?', answer: 'We handle the setup and strategy in our packages. If you need ongoing ad management (monthly optimization), we can create a custom retainer plan for you.' },
    { icon: Zap, question: 'Do I own the designs?', answer: '100%. Once payment is complete, you own all rights to your logo, brand assets, and website code.' }
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto relative z-10 border-t border-white/10">
      <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
      <div className="grid gap-6">
        {faqs.map((faq) => (
          <PricingFAQItem key={faq.question} icon={faq.icon} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
