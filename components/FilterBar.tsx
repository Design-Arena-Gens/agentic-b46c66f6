import { useMemo } from "react";
import styles from "./FilterBar.module.css";
import type { BodyStyle, FuelType, Transmission } from "../lib/cars";

export interface Filters {
  query: string;
  fuel: FuelType | "All";
  transmission: Transmission | "All";
  bodyStyle: BodyStyle | "All";
  maxPrice: number;
}

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  priceRange: { min: number; max: number };
  options: {
    fuels: FuelType[];
    transmissions: Transmission[];
    bodyStyles: BodyStyle[];
  };
}

export function FilterBar({ filters, onChange, priceRange, options }: FilterBarProps) {
  const midpoint = useMemo(() => Math.round((priceRange.min + priceRange.max) / 2 / 1000) * 1000, [priceRange]);

  return (
    <section className={styles.wrapper} id="inventory">
      <h2 className={styles.title}>Find Your Next Drive</h2>
      <p className={styles.subtitle}>
        Search our curated inventory by lifestyle, performance, and budget parameters.
      </p>
      <div className={styles.grid}>
        <label className={styles.field}>
          <span className="sr-only">Search</span>
          <input
            type="search"
            placeholder="Search make, model, or features"
            value={filters.query}
            onChange={(event) => onChange({ ...filters, query: event.target.value })}
            className={styles.input}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Fuel</span>
          <select
            value={filters.fuel}
            onChange={(event) => onChange({ ...filters, fuel: event.target.value as Filters["fuel"] })}
            className={styles.select}
          >
            <option value="All">All</option>
            {options.fuels.map((fuel) => (
              <option value={fuel} key={fuel}>
                {fuel}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Transmission</span>
          <select
            value={filters.transmission}
            onChange={(event) =>
              onChange({ ...filters, transmission: event.target.value as Filters["transmission"] })
            }
            className={styles.select}
          >
            <option value="All">All</option>
            {options.transmissions.map((transmission) => (
              <option value={transmission} key={transmission}>
                {transmission}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Body Style</span>
          <select
            value={filters.bodyStyle}
            onChange={(event) => onChange({ ...filters, bodyStyle: event.target.value as Filters["bodyStyle"] })}
            className={styles.select}
          >
            <option value="All">All</option>
            {options.bodyStyles.map((style) => (
              <option value={style} key={style}>
                {style}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Max Price (${filters.maxPrice.toLocaleString()})</span>
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={5000}
            value={filters.maxPrice}
            onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })}
            className={styles.range}
          />
          <div className={styles.rangeTicks}>
            <span>${(priceRange.min / 1000).toFixed(0)}k</span>
            <span>${(midpoint / 1000).toFixed(0)}k</span>
            <span>${(priceRange.max / 1000).toFixed(0)}k</span>
          </div>
        </label>
      </div>
    </section>
  );
}
