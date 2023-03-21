# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS base

# Hot reloading mod
FROM base AS dev
# Install pnpm
RUN npm install -g pnpm
# Set the working directory to /app
WORKDIR /app
# Copy package.json and pnpm-lock.yaml to /app
COPY package.json ./
COPY pnpm-lock.yaml ./
# Install dependencies
RUN pnpm install
# Copy the rest of the application code to /app
COPY . .
# Expose port 3000 for the application
EXPOSE 3000
EXPOSE 9229
# Start the application with nodemon
CMD ["pnpm", "run", "dev"]


FROM base AS builder
# Install pnpm
RUN npm install -g pnpm
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
# Copy app files
COPY . .
# Build the app
RUN pnpm build


FROM base as prod
# Install pnpm
RUN npm install -g pnpm
WORKDIR /server
# Copy built assets from builder
COPY --from=builder /app/build /server/build

# Expose port
EXPOSE 3000
# Start server
CMD ["node", "run", "index.js"]