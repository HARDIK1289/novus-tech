import FAQItem from '@/components/ui/FAQItem';

export default function FAQSection({ faqs }) {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">Frequently Asked <span className="text-gradient">Questions</span></h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} />
        ))}
      </div>
    </section>
  );
}