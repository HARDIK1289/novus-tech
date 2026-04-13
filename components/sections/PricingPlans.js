import PlanCard from '@/components/ui/PlanCard';

export default function PricingPlans({ plans }) {
  return (
    <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-32">
      {plans.map((plan, i) => (
        <PlanCard key={plan.name} plan={plan} index={i} />
      ))}
    </section>
  );
}
