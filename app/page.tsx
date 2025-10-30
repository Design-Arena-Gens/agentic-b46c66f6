"use client";

import { useMemo, useState } from "react";
import { Header } from "../components/Header";
import { FilterBar, type Filters } from "../components/FilterBar";
import { CarCard } from "../components/CarCard";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { cars } from "../lib/cars";
import styles from "./page.module.css";

export default function Home() {
  const [filters, setFilters] = useState<Filters>({
    query: "",
    fuel: "All",
    transmission: "All",
    bodyStyle: "All",
    maxPrice: Math.max(...cars.map((car) => car.price))
  });

  const priceRange = useMemo(
    () => ({
      min: Math.min(...cars.map((car) => car.price)),
      max: Math.max(...cars.map((car) => car.price))
    }),
    []
  );

  const options = useMemo(
    () => ({
      fuels: Array.from(new Set(cars.map((car) => car.fuel))),
      transmissions: Array.from(new Set(cars.map((car) => car.transmission))),
      bodyStyles: Array.from(new Set(cars.map((car) => car.bodyStyle)))
    }),
    []
  );

  const visibleCars = useMemo(
    () =>
      cars.filter((car) => {
        if (car.price > filters.maxPrice) return false;
        if (filters.fuel !== "All" && car.fuel !== filters.fuel) return false;
        if (filters.transmission !== "All" && car.transmission !== filters.transmission) return false;
        if (filters.bodyStyle !== "All" && car.bodyStyle !== filters.bodyStyle) return false;
        if (!filters.query.trim()) return true;
        const query = filters.query.toLowerCase();
        return (
          `${car.make} ${car.model} ${car.features.join(" ")}`.toLowerCase().includes(query) ||
          car.location.toLowerCase().includes(query)
        );
      }),
    [filters]
  );

  return (
    <main className={styles.main}>
      <Header />
      <FilterBar filters={filters} onChange={setFilters} priceRange={priceRange} options={options} />
      <section className={styles.inventory}>
        <header className={styles.inventoryHeader}>
          <h2>Premier Inventory</h2>
          <span>{visibleCars.length} vehicles available</span>
        </header>
        <div className={styles.inventoryGrid}>
          {visibleCars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
        {visibleCars.length === 0 && (
          <div className={styles.emptyState}>
            <h3>No matches yet</h3>
            <p>Adjust your filters or request a custom allocation via our concierge team.</p>
          </div>
        )}
      </section>
      <Services />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
