# Use Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose port (will be overridden by docker-compose)
EXPOSE 4001

# Start the service
CMD ["node", "src/index.js"]
