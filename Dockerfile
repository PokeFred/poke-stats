FROM node:24-alpine AS builder
WORKDIR /app
COPY * /app
RUN npm install
RUN npm run build

FROM node:24-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
CMD ["npm", "start"]
