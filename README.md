# LANDAS - E-commerce Web App

Welcome to **LANDAS**, a performance-ready apparel brand that delivers high-quality clothing for work and beyond. This is a **React-based frontend** application that integrates various features like product listings, a user-friendly hero section, and a responsive layout.

## Project Overview

This project is a simple e-commerce web application that allows customers to browse and view products. It was built with **React**, **Tailwind CSS**, and **Vite** for fast development and deployment. The app includes features like:

* **Hero Section** with promotional text and images.
* **Product Grid** to display products dynamically.
* **Responsive Layout** to make sure the site works across mobile, tablet, and desktop.
* **Footer Section** containing company details, customer service, and social media links.

## Key Features

* **Responsive Design**: The app is mobile-first and looks great on any screen size.
* **Product Display**: Showcase products with images, descriptions, and prices.
* **Social Media Integration**: Direct links to our social media profiles (Facebook, Instagram, YouTube).
* **Customer Support**: Easily accessible contact information for customer inquiries.

## Tech Stack

* **React** (for building the user interface)
* **Tailwind CSS** (for styling and responsive design)
* **Vite** (for faster build and development)
* **Font Awesome** (for icons like social media links)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/landas.git
   ```

2. **Install dependencies**:
   After cloning the repo, navigate to the project folder and run:

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the development server**:
   Once the dependencies are installed, start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   This will start the app at `http://localhost:5173`.

4. **Build the project**:
   When you're ready to deploy, run:

   ```bash
   yarn build
   # or
   npm run build
   ```

   This will generate a production-ready build in the `/dist` folder.

## Deployment

You can easily deploy the app to platforms like **Netlify** or **Vercel**:

1. Push your code to GitHub.
2. Create a new project on **Netlify** or **Vercel**.
3. Connect your GitHub repository to the project and deploy.

For SPA routing on Netlify, don't forget to configure a **404 redirect** to `/index.html`.

## Project Structure

```
/src
  /assets               # Images and static files
  /features             # Business logic and feature-specific components
  /pages                # Page components for routing
  /stores               # State management (Zustand)
  /shared               # Reusable components and utilities
  /routes               # Application routes
  /styles               # Tailwind and custom styles
  main.tsx              # Entry point for the React app
/vite.config.ts         # Vite configuration for build and dev server
/package.json           # Project dependencies and scripts
/README.md             # This file
```