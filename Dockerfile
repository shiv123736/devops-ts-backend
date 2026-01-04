# 1. Start with a lightweight Node.js base image (Linux)
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package files first (to cache dependencies)
COPY package*.json ./

# 4. Install dependencies inside the container
RUN npm install
 
# 5. Copy the rest of your source code
COPY . .

# 6. Expose the port your app runs on
EXPOSE 3000

# 7. Define the command to start the app
# We use 'npm run dev' to keep using nodemon/ts-node for now
CMD ["npm", "run", "dev"]