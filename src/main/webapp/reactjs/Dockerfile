FROM ubuntu:latest
LABEL authors="yassine"
# Step 1: Build the React app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy the rest of the application and build the production version
COPY ../../../.. .
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port for the React app
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
