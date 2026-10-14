# Bluehaven Aquatics — Aquarium Storefront Concept

A responsive, interactive React + Vite ecommerce frontend prototype for a physical aquarium shop planning a Shopify launch.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Features
- Responsive homepage and category browsing
- Search by product name and category
- Product detail dialog with quantity and care information
- Functional demo cart with localStorage persistence
- Editable centralized demo data in `src/data.js`
- Contact/store information placeholders
- Clear demo-only checkout notice

## Shopify integration notes
Replace demo data with Storefront API queries or port the components to Shopify theme sections. Connect the checkout button to a real Shopify checkout flow; connect account UI to customer authentication. Add verified policies, physical-store contact details, actual images, stock and shipping restrictions before launch.

All product prices and availability are demonstration data. External Unsplash images are illustrative and require review for commercial use.
