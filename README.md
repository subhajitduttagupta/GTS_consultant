# Globe Tek Solution Website

This is the official website for Globe Tek Solution, a leading provider of electrical engineering and instrumentation services. The website showcases our services, featured projects, client testimonials, and company information, built with a modern Next.js application.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Environment Variables](#environment-variables)
    -   [Running the Development Server](#running-the-development-server)
-   [Project Structure](#project-structure)
-   [Deployment](#deployment)
-   [Contact](#contact)

## Features

-   **Modern Hero Section**: Dynamic slider with engaging content and calls to action.
-   **Services Overview**: Detailed sections for various electrical engineering and instrumentation services.
-   **Featured Projects**: Showcase of key projects with detailed case studies.
-   **About Us**: Comprehensive company information, including mission, vision, values, and team.
-   **Client Testimonials**: Social proof from satisfied clients.
-   **Contact & Quote Forms**: Easy-to-use forms for inquiries and project quotes.
-   **Responsive Design**: Optimized for various devices and screen sizes.
-   **Animations & Transitions**: Smooth UI/UX with modern animations.
-   **Industry 4.0 Section**: Highlights expertise in smart automation and IoT.

## Technologies Used

-   [Next.js](https://nextjs.org/) (App Router)
-   [React](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [shadcn/ui](https://ui.shadcn.com/)
-   [Lucide React](https://lucide.dev/icons/) for icons
-   [Resend](https://resend.com/) for email sending (Contact & Quote forms)
-   [React Intersection Observer](https://react-intersection-observer.vercel.app/) for scroll animations
-   [Zod](https://zod.dev/) for form validation
-   [React Hook Form](https://react-hook-form.com/) for form management

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

-   Node.js (v20.x or later)
-   bun

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/globe-tek-solution.git
    cd globe-tek-solution
    ```

2.  Install dependencies:
    ```bash
    bun install
    ```

### Environment Variables

This project uses environment variables for the Resend API key. Create a `.env.local` file in the root of your project and add the following:

```
RESEND_API_KEY=your_resend_api_key_here
```

Replace `your_resend_api_key_here` with your actual Resend API key. You can obtain one from [Resend](https://resend.com/).

### Running the Development Server

To run the development server:

```bash
bun run dev
# or
bun run build
bun run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The website will automatically reload as you edit the files.

## Project Structure

```
.
├── app/
│   ├── api/             # API routes for contact and quote forms
│   ├── contact/         # Contact page
│   ├── projects/        # Projects page and dynamic project detail pages
│   ├── quote/           # Quote request page
│   ├── services/        # Services page
│   ├── layout.tsx       # Root layout for the application
│   └── page.tsx         # Home page
├── components/          # Reusable React components
│   ├── ui/              # shadcn/ui components
│   ├── actions/         # Server Actions for form submissions
│   ├── ...              # Other custom components (hero, services, projects, etc.)
├── public/              # Static assets (images, logos)
├── tailwind.config.ts   # Tailwind CSS configuration
├── globals.css          # Global CSS styles
└── tsconfig.json        # TypeScript configuration
```


Added CICD