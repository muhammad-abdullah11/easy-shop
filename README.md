# shopyee

A modern e-commerce and lifestyle application built with React, Vite, and React Router.

## Project Overview

shopyee is a comprehensive platform that combines a fashion e-commerce experience with curated travel guides. The application focuses on clean design, efficient data management, and a seamless user experience across different devices.

## Features

### E-Commerce
- Navigation: Browsing capabilities for Men, Women, and Juniors sections.
- Category Pages: Specialized landing pages for major categories with promotional banners.
- Product Collections: Organized grids for browsing products by specific types such as Denim, Footwear, and T-Shirts.
- Product Details: Thorough views including image galleries and size selection.

### Travel and Lifestyle
- Travel Mode: A discovery interface featuring hand-picked global destinations.
- Curated Guides: In-depth guides for various countries including recommendations for dining, visits, and accommodations.
- Dynamic Content: Travel data is fetched from local JSON structures to ensure fast loading and easy maintenance.

### General
- Responsive Design: Fully optimized for mobile, tablet, and desktop environments.
- Performance: Built with Vite for rapid development and optimized production builds.

## Tech Stack

- Frontend: React 18
- Build Tool: Vite
- Routing: React Router DOM
- Styling: Tailwind CSS
- Data Handling: Fetch API with local and external JSON data

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- src/Components/Pages: Primary page components including Travel Mode and Travel Guide.
- src/Components: Reusable UI components such as Header, Footer, and Product displays.
- src/assets: Legacy JSON data files for e-commerce products.
- public: Dynamic data assets including travel guide information.
