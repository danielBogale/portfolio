# Set the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy the application code
COPY . .

# Exclude the node_modules directory
COPY .dockerignore ./

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose a port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
