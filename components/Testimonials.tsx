import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "The sourcing team secured my GT3 allocation in under three weeks and coordinated delivery across states flawlessly.",
    name: "Elena Navarro",
    role: "Founder, Velocity Capital",
    vehicle: "2023 Porsche 911 GT3"
  },
  {
    quote:
      "Their inspection report surfaced a hidden repaint and saved me six figures. Absolute must-have for exotic purchases.",
    name: "Malik Shepherd",
    role: "Collector, Shepherd Motorsports",
    vehicle: "2021 Ferrari SF90 Stradale"
  },
  {
    quote:
      "From financing to enclosed transport, every detail was concierge handled. This is a new standard for luxury car buying.",
    name: "Priya Desai",
    role: "CTO, AxiomAI",
    vehicle: "2024 Lucid Air Grand Touring"
  }
];

export function Testimonials() {
  return (
    <section className={styles.wrapper} id="testimonials">
      <header className={styles.header}>
        <span className={styles.badge}>Testimonials</span>
        <h2 className={styles.title}>Trusted by performance enthusiasts and collectors.</h2>
        <p className={styles.subtitle}>
          We broker vehicles across the US with full transparency, verified provenance, and discreet logistics.
        </p>
      </header>
      <div className={styles.grid}>
        {testimonials.map((item) => (
          <blockquote key={item.name} className={styles.card}>
            <p>&ldquo;{item.quote}&rdquo;</p>
            <footer>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
              <span className={styles.vehicle}>{item.vehicle}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
