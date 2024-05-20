# Use the official Node.js 14 image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Expose the port the API will run on
EXPOSE 8000

# Run the API
CMD ["npx", "nodemon", "app/index.ts"]
