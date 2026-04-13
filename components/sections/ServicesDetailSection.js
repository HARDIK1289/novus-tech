import ServiceDetailItem from '@/components/ui/ServiceDetailItem';

export default function ServicesDetailSection({ services }) {
  return (
    <section className="px-6 max-w-7xl mx-auto space-y-32 relative z-10">
      {services.map((service, i) => (
        <ServiceDetailItem key={service.id} service={service} index={i} />
      ))}
    </section>
  );
}
