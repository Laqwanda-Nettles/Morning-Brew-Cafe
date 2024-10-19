# Morning Brew Cafe

## Project Overview

This project is a three-page website created using Next.js. The website includes a **Splash Page**, an **About Page**, and a **Gallery Page**, styled using Bootstrap and Custom CSS for responsive design. Custom components such as `Card`, `HoverCard`, `Navbar`, and `Footer` were used to modularize the content and provide consistency across all pages. The site is themed around **Morning Brew**, a fictional coffee brand, and showcases various coffee-related images, information, and services.

## Pages

### Splash Page (`src/pages/index.js`)

The Splash Page is the landing page of the website, with a warm and inviting color scheme. It includes a hero section with a welcome message and a call-to-action button that links to the Gallery Page.

#### Features:

- Hero section with the message **"Welcome to Morning Brew!"**
- Call-to-action button linking to the Gallery Page.
- Usage of the `Navbar` and `Footer`components for navigation and footer content.

### About Page (`src/pages/about/index.js`)

The About Page contains information about **Morning Brew** and its philosophy. It also displays a set of products and services offered, such as **Signature Blends** and the **Morning Brew Café**. These are showcased using the **HoverCard** component.

#### Features:

- Detailed description of the company and its mission.
- Display of products and services using the `HoverCard` component.
- Consistent use of `Navbar` and `Footer` components.

### Gallery Page (`src/pages/gallery/index.js`)

The Gallery Page presents a grid of coffee-related images, such as coffee plants, brewing processes, and café items. The images are displayed using the `Card` component, and the page also includes an additional section with fun facts about coffee.

#### Features:

- Grid layout displaying six images.
- Fun facts about coffee.
- Reusable `Navbar` and `Footer` components.

## Components

### Card.jsx

The `Card` component is used on the Gallery Page to display images with their descriptions.

### Footer.jsx

The `Footer` component appears on all pages and provides consistent branding with a copyright message.

### HoverCard.jsx

The `HoverCard` component is used on the About Page to display products and services with an image, title, and description.

### Navbar.jsx

The `Navbar` component is used for site-wide navigation. It includes links to the **Home**, **About**, and **Gallery pages**, and is styled with Bootstrap for responsiveness.

## Project Details

- **Framework:** Next.js
- **Styling:** Bootstrap and custom CSS
- **Components:** Reusable components (`Card`, `HoverCard`, `Navbar`, and `Footer`) used across multiple pages for consistency and modularity.
- **Images:** Stored in the `public/` directory and displayed on the Gallery Page.

## Image Credits

Images used on this project came from the following sites: Freepik, Pexels, and Unsplash.

- **Freepik:**
  - Coffee To Go cup by juicy_fish
- **Pexels:**
  - Coffee Cafe by Lisa Fotios
- **Unsplash:**

  - Drip Coffee by Najib Kalil
  - Coffee sign by Don Ross III
  - Products by Rebeca Alvidrez
  - Thank you sign by Tim Mossholder

  ## Screenshots

  ### Splash Page

  ![alt text](<Screenshot 2024-10-18 235908.png>)

  ### About

  ![alt text](<Screenshot 2024-10-19 000000.png>)

  ### Gallery

  ![alt text](<Screenshot 2024-10-19 000139.png>)
  ![alt text](<Screenshot 2024-10-19 000219.png>)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
