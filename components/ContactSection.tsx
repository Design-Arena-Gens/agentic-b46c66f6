import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section className={styles.wrapper} id="contact">
      <div className={styles.content}>
        <span className={styles.badge}>Start Your Build</span>
        <h2>Book a consultation with our acquisition specialists.</h2>
        <p>
          Submit your wish list and we will craft an allocation strategy, inspection roadmap, and delivery timeline
          within 24 hours.
        </p>
        <div className={styles.contactGrid}>
          <div>
            <h3>Direct Line</h3>
            <a href="tel:+18885550190">+1 (888) 555-0190</a>
          </div>
          <div>
            <h3>Showrooms</h3>
            <span>Miami · Los Angeles · Austin</span>
          </div>
          <div>
            <h3>Email</h3>
            <a href="mailto:hello@autospheremotors.com">hello@autospheremotors.com</a>
          </div>
        </div>
      </div>
      <form className={styles.form}>
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your full name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="name@example.com" required />
        </label>
        <label>
          <span>Preferred Vehicle</span>
          <input type="text" name="vehicle" placeholder="Make, model, or allocation request" />
        </label>
        <label>
          <span>Budget</span>
          <select name="budget">
            <option value="75k-100k">$75k - $100k</option>
            <option value="100k-200k">$100k - $200k</option>
            <option value="200k-400k">$200k - $400k</option>
            <option value="400k+">$400k+</option>
          </select>
        </label>
        <label className={styles.wide}>
          <span>Build Notes</span>
          <textarea name="notes" placeholder="Tell us about your ideal build, timeline, or special requests." />
        </label>
        <button type="submit">Request Consultation</button>
      </form>
    </section>
  );
}
