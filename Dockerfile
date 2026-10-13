# ---------- Tahap 1: build aplikasi ----------
FROM node:20-alpine AS build
WORKDIR /app

# Salin file dependency dulu agar layer npm ci ter-cache
COPY package*.json ./
RUN npm ci

# Salin source code lalu build hasil produksi ke /app/dist
COPY . .
RUN npm run build

# ---------- Tahap 2: sajikan dengan Nginx ----------
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
