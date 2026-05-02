# Use a Node.js image

FROM node:20-alpine


# Set working directory

WORKDIR /app


# Copy package files and install dependencies

COPY package.json package-lock.json* ./

RUN npm install


# Copy the rest of the project

COPY . .


# Build Tailwind CSS (output.css)

RUN npm run build:css