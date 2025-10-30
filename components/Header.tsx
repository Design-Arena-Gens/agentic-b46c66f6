import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logoArea}>
        <span className={styles.badge}>AutoSphere</span>
        <h1 className={styles.title}>Premium Car Marketplace</h1>
        <p className={styles.subtitle}>
          Curated performance vehicles, verified sellers, and concierge-level buying support.
        </p>
      </div>
      <nav className={styles.nav}>
        <Link href="#inventory" className={styles.navLink}>
          Inventory
        </Link>
        <Link href="#services" className={styles.navLink}>
          Services
        </Link>
        <Link href="#testimonials" className={styles.navLink}>
          Testimonials
        </Link>
        <Link href="#contact" className={styles.navLink}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
