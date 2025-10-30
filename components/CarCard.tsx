import Image from "next/image";
import Link from "next/link";
import type { Car } from "../lib/cars";
import styles from "./CarCard.module.css";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={car.image}
          alt={`${car.make} ${car.model}`}
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className={styles.image}
        />
        <span className={styles.badge}>{car.bodyStyle}</span>
      </div>
      <div className={styles.body}>
        <header className={styles.header}>
          <div>
            <h3 className={styles.name}>
              {car.year} {car.make} {car.model}
            </h3>
            <p className={styles.location}>{car.location}</p>
          </div>
          <div className={styles.price}>
            <span>Starting at</span>
            <strong>${car.price.toLocaleString()}</strong>
          </div>
        </header>
        <p className={styles.description}>{car.description}</p>
        <dl className={styles.specs}>
          <div>
            <dt>Mileage</dt>
            <dd>{car.mileage.toLocaleString()} mi</dd>
          </div>
          <div>
            <dt>Output</dt>
            <dd>{car.power} hp</dd>
          </div>
          <div>
            <dt>Fuel</dt>
            <dd>{car.fuel}</dd>
          </div>
          <div>
            <dt>Transmission</dt>
            <dd>{car.transmission}</dd>
          </div>
        </dl>
        <ul className={styles.features}>
          {car.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link href={`#contact?car=${car.id}`} className={styles.primaryAction}>
            Reserve Build
          </Link>
          <Link href={`#details-${car.id}`} className={styles.secondaryAction}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
