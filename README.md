# AutoSphere – Premium Car Marketplace

AutoSphere is a modern, luxury-inspired car sales experience built with Next.js 14. Explore curated high-performance inventory, filter by lifestyle preferences, and connect with acquisition specialists through an integrated consultation workflow.

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/) 18+
- npm 9+ (bundled with Node)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000` to view the site.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                 # App Router pages and global styles
components/          # UI building blocks
lib/                 # Mock inventory data & types
public/              # Static assets (if needed)
```

## Features

- Interactive filters for fuel type, transmission, body style, and budget
- Rich vehicle cards with specs, features, and pricing cues
- Concierge services overview and client testimonials
- Contact form for consultations with direct sales touchpoints
- Responsive design with cinematic glassmorphism aesthetic

## Deployment

The project targets deployment on Vercel. Use:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-b46c66f6
```

Replace `$VERCEL_TOKEN` with your configured token if not already present in the environment.
