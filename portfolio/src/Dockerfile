# Use the official lightweight Node.js 14 image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Run the Next.js development server
CMD ["npm", "run", "dev"]
