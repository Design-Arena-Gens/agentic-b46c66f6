import styles from "./Services.module.css";

const services = [
  {
    title: "Sourcing Concierge",
    description: "Global search across verified dealer and collector networks to secure rare allocations.",
    metric: "420+ vehicles placed",
    accent: "Sourcing",
    icon: "🌍"
  },
  {
    title: "Certified Inspections",
    description: "200-point inspections, paint depth analysis, and on-road diagnostics for total transparency.",
    metric: "190 inspection reports",
    accent: "Inspection",
    icon: "🛡️"
  },
  {
    title: "Performance Financing",
    description: "Bespoke financing and leasing structures tailored for exotic and collector-grade vehicles.",
    metric: "2.9% avg APR",
    accent: "Finance",
    icon: "💠"
  }
];

export function Services() {
  return (
    <section className={styles.wrapper} id="services">
      <div className={styles.content}>
        <span className={styles.badge}>Experience</span>
        <h2 className={styles.title}>Full-stack buying expertise for high-performance ownership.</h2>
        <p className={styles.subtitle}>
          From sourcing to logistics, our specialists manage every touchpoint with white-glove precision.
        </p>
      </div>
      <div className={styles.cards}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <header>
              <span className={styles.accent}>{service.accent}</span>
              <h3>{service.title}</h3>
            </header>
            <p>{service.description}</p>
            <strong>{service.metric}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
