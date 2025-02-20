# Use Bun's official base image
FROM --platform=linux/amd64 oven/bun:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and bun.lock first for caching dependencies
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy the rest of the application files
COPY . .

# Expose the port (if your app runs on port 3000)
EXPOSE 80

# Set the command to start the Bun app
CMD ["bun", "run", "start"]
