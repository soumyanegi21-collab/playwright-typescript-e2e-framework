FROM mcr.microsoft.com/playwright:v1.55.0-jammy

WORKDIR /app

COPY package*.json ./
RUN npm ci
RUN npx playwright install

COPY . .

CMD ["npx", "playwright", "test"]