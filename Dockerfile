# Use a Node.js image

FROM node:20-alpine


# Set working directory

WORKDIR /app


# Copy package files and install dependencies

COPY package.json package-lock.json* ./

RUN npm install --production=false


# Copy the rest of the project

COPY . .


# Build Tailwind CSS (output.css)

RUN npm run build:css


# Expose Eleventy's dev server port

EXPOSE 8080


# Start Eleventy dev server (with live reload)

CMD ["npx", "@11ty/eleventy", "--serve", "--port=8080", "--host=0.0.0.0"]