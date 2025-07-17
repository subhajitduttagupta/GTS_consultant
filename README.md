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


# CI/CD Pipeline for Next.js Application

This repository contains a fully automated CI/CD pipeline that deploys a Next.js application with Bun runtime to a VPS using Docker and GitHub Actions.

## Pipeline Overview

The CI/CD pipeline follows this workflow:
```
Code Push → GitHub → GitHub Actions → Build Docker Image → Deploy to VPS
```

## Architecture

- **Source Control**: GitHub repository
- **CI/CD Platform**: GitHub Actions
- **Build Tool**: Bun
- **Containerization**: Docker
- **Deployment Target**: VPS (82.112.227.197)
- **Runtime**: Bun in Alpine Linux container

## Prerequisites

### VPS Setup
- Docker and Docker Compose installed
- SSH access configured
- Application directory: `/var/www/gts-consultant`

### GitHub Repository Secrets

Configure the following secrets in your GitHub repository (Settings → Secrets and variables → Actions):

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `VPS_HOST` | VPS IP address | `82.112.227.197` |
| `VPS_USERNAME` | SSH username | `root` or `ubuntu` |
| `VPS_SSH_KEY` | Private SSH key content | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `VPS_PORT` | SSH port | `22` |

## Pipeline Configuration

### GitHub Actions Workflow

The pipeline is defined in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
      #  cache: 'npm'
    
    - name: Install dependencies
      run: |
        # Install Bun
        curl -fsSL https://bun.sh/install | bash
        export PATH="$HOME/.bun/bin:$PATH"
        bun install --frozen-lockfile
    
    - name: Build application
      env:  
        RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}
        NEXT_PUBLIC_BASE_URL: https://gtsconsultant.in
      run: |
        export PATH="$HOME/.bun/bin:$PATH"
        bun run build
    
    - name: Deploy to VPS
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.VPS_HOST }}
        username: ${{ secrets.VPS_USERNAME }}
        key: ${{ secrets.VPS_SSH_KEY }}
        port: ${{ secrets.VPS_PORT || 22 }}
        script: |
          cd /var/www/gts-consultant
          git pull origin main
          export RESEND_API_KEY=${{ secrets.RESEND_API_KEY }}
          export NEXT_PUBLIC_BASE_URL=${{ secrets.NEXT_PUBLIC_BASE_URL }}
          docker-compose down
          docker-compose up -d --build
          docker system prune -f
```

### Docker Configuration

#### Dockerfile
Multi-stage build optimized for Bun:

```dockerfile
# Stage 1: Build and Fetching .env variables
FROM oven/bun:1.1.17-alpine AS builder
ARG RESEND_API_KEY
ARG NEXT_PUBLIC_BASE_URL
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Stage 2: Runtime
FROM oven/bun:1.1.17-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock
EXPOSE 3000
CMD ["bun", "run", "start"]
```

#### docker-compose.yml
```yaml
version: '3.8'

services:
  nextjs-app:
    build:
      context: .
      args:
        RESEND_API_KEY: ${RESEND_API_KEY}
        NEXT_PUBLIC_BASE_URL: ${NEXT_PUBLIC_BASE_URL}
    ports:
      - "3010:3000"  
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - RESEND_API_KEY=${RESEND_API_KEY}
      - NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
```

## Deployment Process

### Automatic Deployment

1. **Trigger**: Push to `main` branch
2. **Build**: GitHub Actions runner installs Bun and builds the application
3. **Deploy**: SSH into VPS and execute deployment commands
4. **Container Management**: Pull latest code, rebuild Docker image, restart containers

### Manual Deployment

You can also trigger deployment manually:

```bash
# SSH into VPS
ssh username@82.112.227.197

# Navigate to application directory
cd /var/www/gts-consultant

# Pull latest changes
git pull origin main

# Rebuild and restart containers
docker-compose down
docker-compose up -d --build
```

## Pipeline Features

### ✅ Automated Build Testing
- Installs dependencies with Bun
- Runs build process to catch build errors
- Validates application before deployment

### ✅ Zero-Downtime Deployment
- Uses Docker Compose for container orchestration
- Graceful container restart with `docker-compose down/up`

### ✅ Cleanup and Optimization
- Removes unused Docker images with `docker system prune -f`
- Keeps VPS storage optimized

### ✅ Security
- Uses SSH key authentication
- Secrets stored securely in GitHub
- No passwords in code

## Monitoring and Troubleshooting

### Check Pipeline Status
- GitHub repository → Actions tab
- View workflow runs and logs

### VPS Container Status
```bash
# Check running containers
docker ps

# View application logs
docker-compose logs -f nextjs-app

# Check container health
docker-compose ps
```

### Common Issues

| Issue | Solution |
|-------|----------|
| SSH connection failed | Verify SSH key in GitHub secrets |
| Port already in use | Change port mapping in docker-compose.yml |
| Build failed | Check dependencies and build scripts |
| Container won't start | Check logs with `docker-compose logs` |

## Access Points

- **Direct Access**: `http://82.112.227.197:3010`
- **Domain**: `https://gtsconsultant.in` (via Cloudflare)

## Development Workflow

1. **Make Changes**: Edit your code locally
2. **Commit & Push**: 
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. **Automatic Deployment**: GitHub Actions will handle the rest
4. **Verify**: Check your website at the access points above

## Performance Optimizations

- **Multi-stage Docker build** reduces image size
- **Bun runtime** for faster JavaScript execution
- **Frozen lockfile** ensures consistent dependencies
- **Docker layer caching** speeds up builds

## Security Best Practices

- SSH keys instead of passwords
- Environment variables for sensitive data
- Regular security updates for base images
- Minimal container surface area with Alpine Linux

---

**Note**: This pipeline is configured for the GTS Consultant website deployment. Modify the configuration files as needed for your specific application requirements.