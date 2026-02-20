FROM node:20-alpine AS builder
WORKDIR /app
ARG VITE_RSVP_URL
ENV VITE_RSVP_URL=${VITE_RSVP_URL}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime
COPY --from=builder /app/dist /usr/share/nginx/html
COPY infra/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
