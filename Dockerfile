# Stage 1: Build the Next.js application with Bun
FROM oven/bun:1.1.17-alpine AS builder


ARG RESEND_API_KEY
ARG NEXT_PUBLIC_BASE_URL

ENV RESEND_API_KEY=$RESEND_API_KEY
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
# Set working directory
WORKDIR /app

# Copy package.json and bun.lock
COPY package.json bun.lock ./

# Install dependencies using Bun
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
# This command will generate the .next directory
RUN bun run build

# Stage 2: Run the Next.js application with Bun
FROM oven/bun:1.1.17-alpine AS runner

# Set working directory
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV production

# Copy necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "start"]
