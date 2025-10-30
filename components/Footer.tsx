import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.brand}>
        <span>AutoSphere Motors</span>
        <p>Curated performance inventory &amp; acquisition concierge since 2012.</p>
      </div>
      <div className={styles.links}>
        <a href="#inventory">Inventory</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles.meta}>
        <span>&copy; {new Date().getFullYear()} AutoSphere Motors</span>
        <span>Luxury Dealer License #LD-90218</span>
      </div>
    </footer>
  );
}
