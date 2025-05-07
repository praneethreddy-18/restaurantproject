# ---------- Stage 1: Install dependencies ----------
FROM node:18-alpine AS deps

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# ---------- Stage 2: Copy app and run ----------
FROM node:18-alpine

WORKDIR /app

# Copy only the built node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy rest of the application
COPY . .

# Set environment variable for production
ENV NODE_ENV=production

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
